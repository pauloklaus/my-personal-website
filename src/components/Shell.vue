<template>
    <div>
        <div @keydown.esc="commandClearScreen" @click.stop="commandClick">
            <div id="shell-screen" v-for="(item, index) in screen" :key="index" v-html="item.html" :class="item.style" />
            <div class="d-flex" v-if="loaded">
                <div id="shell-prompt">$</div>
                <input id="shell-command" ref="command" v-model="command" @keyup.prevent.enter="evalCommand" @keyup.prevent.up="historyBack" @keyup.prevent.down="historyNext" @keydown.prevent.tab="autoCompleteCommand" autofocus />
            </div>
            <span class="text-dark" ref="focus">_</span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            ignoreCommands: [ "if", "while", "repeat", "var", "const", "case", "switch", "true", "false", "function", "class" ],
            commands: [
                { command: "clear", action: this.commandClearScreen, description: "clear screen (or just press esc key)." },
                { command: "goto", action: this.commandGoto, description: "go to one of my links: github, linkedin, twitter" },
                { command: "help", action: this.commandHelp, description: "list available commands." },
                { command: "history", action: this.commandHistory, description: "display history command list." },
                { command: "ip", action: this.commandIpAddress, description: "display ip address." },
                { command: "ls", action: this.commandLs, description: "list files." },
                { command: "man", action: this.commandHelp, description: "list available commands (same as help)." },
                { command: "now", action: this.commandNow, description: "display current date and time." },
                { command: "reboot", action: this.commandReboot, description: "system reboot." },
                { command: "uptime", action: this.commandUptime, description: "elapsed time since your access." },
            ],
            startTime: new Date,
            command: "",
            history: {
                commands: [],
                index: 0,
                browsing: false
            },
            screen: [],
            loaded: false,
            files: [ "linux-references.md" ],
        }
    },
    computed: {
        appName() {
            return process.env.VUE_APP_NAME;
        },
        urlCheckIpAddress() {
            return process.env.VUE_APP_GETIPADDRESS;
        }
    },
    created() {
        this.boot();
    },
    methods: {
        scrollToEnd() {
            setTimeout(() => {
                if (this.$refs.focus)
                    this.$refs.focus.scrollIntoView();
            }, 200);
        },
        print(html, style = "") {
            this.command = "";

            if (typeof html === "object" && html.length)
                html.forEach(item => this.screen.push({
                    html: item,
                    style: style
                }));
            else
                this.screen.push({
                    html: html,
                    style: style
                });

            this.scrollToEnd();
        },
        lineBreak() {
            this.print("<br>");
        },
        printLn(html, style = "") {
            this.print(html, style);
            this.lineBreak();
        },
        printColumn(items) {
            this.printLn('<div class="shell-columns"><div>' + items.join("</div><div>") + "</div></div>");
        },
        printItems(items = [], style = "") {
            items.forEach(item => this.print("<li>" + item + "</li>", style));
        },
        printCommand(command, style = "") {
            this.print("$ " + command, style);
        },
        focusOnCommand() {
            setTimeout(() => {
                if (this.loaded && this.$refs.command)
                    this.$refs.command.focus();
            }, 500);
        },
        delayCommand(commands = []) {
            const command = commands.shift();

            setTimeout(() => {
                command.action();

                if (commands.length)
                    this.delayCommand(commands);
            }, command.timeout);
        },
        boot() {
            this.print("loading... please wait.");
            this.loaded = false;

            this.delayCommand([
                {
                    timeout: 500,
                    action: () => {
                        this.print(this.appName);
                    }
                },
                {
                    timeout: 1000,
                    action: () => {
                        this.printLn("boot complete.");
                    }
                },
                {
                    timeout: 500,
                    action: () => {
                        this.commandNow();
                    }
                },
                {
                    timeout: 500,
                    action: () => {
                        this.print("Welcome!", "text-primary");
                        this.commandHelp();
                    }
                },
                {
                    timeout: 500,
                    action: () => {
                        this.loaded = true;
                        this.focusOnCommand();
                    }
                }
            ]);

            setTimeout(() => {
                if (!this.command && this.history.commands.length < 1) {
                    this.print("ok, I'll help you with an example... try this command (just hit enter):");
                    this.command = "uptime";
                }
            }, 30000);
        },
        historyAppend(command) {
            this.history.browsing = false;
            if (command == this.history.commands[this.history.commands.length - 1])
                return;

            this.history.commands.push(command);
            this.history.index = this.history.commands.length - 1;
        },
        historyBack() {
            if (!this.history.browsing)
                this.history.browsing = true;
            else if (this.history.index > 0)
                this.history.index--;

            this.command = this.history.commands[this.history.index];
        },
        historyNext() {
            if (!this.history.browsing)
                this.history.browsing = true;
            else
            if (this.history.index < this.history.commands.length - 1)
                this.history.index++;

            this.command = this.history.commands[this.history.index];
        },
        historyClear() {
            this.history = {
                commands: [],
                index: 0,
                browsing: false
            };
        },
        autoCompleteCommand() {
            const command = this.command.toLowerCase();

            if (command.indexOf(" ") > -1)
                return;

            const available = this.commands.filter(item =>
                item.command.substring(0, this.command.length) == command
            );

            if (available.length == 1) {
                this.command = available[0].command;
                return;
            }

            if (available.length)
                this.print("available commands: " + this.commandSpan(available));
            else
                this.print("command not found.", "text-warning");

            this.command = command;
        },
        commandSpan(commands) {
            return commands.map(item => "<span>" + item.command + "</span>").join(", ");
        },
        validCommand(command) {
            return this.commands.some(item => item.command == command);
        },
        ignoreCommand(command) {
            return this.ignoreCommands.some(item => item == command);
        },
        evalCommand() {
            if (this.command == "") {
                this.print("$");
                return;
            }

            this.command = this.command.toLowerCase();

            const commandLine = this.command;
            const params = commandLine.split(" ");
            const command = params.shift();

            this.historyAppend(this.command);
            this.command = "";

            if (this.validCommand(command)) {
                this.printCommand(commandLine, "font-weight-bold");
                this.commands.find(item => item.command == command).action(params);
            }
            else if (this.ignoreCommand(command)) {
                this.printCommand(commandLine, "text-danger");
                this.printLn("hey, this is not allowed here! ;-)", "text-danger");
            }
            else {
                this.printCommand(commandLine, "text-warning");
                this.printLn("sorry, unknown command.", "text-warning");
            }
        },
        commandClick(event) {
            const command = event.target.textContent;
            const test = command.split(" ")[0];

            if (this.validCommand(test)) {
                this.command = command;
                this.evalCommand();
            }

            this.focusOnCommand();
            this.scrollToEnd();
        },
        commandClearScreen() {
            this.screen = [];
        },
        commandGoto(params = []) {
            const allowedParams = ["github", "linkedin", "twitter"];

            if (params.length && allowedParams.some(item => item == params[0]))
                switch (params[0]) {
                    case "github":
                        window.location = "https://github.com/pauloklaus";
                        break;
                    case "linkedin":
                        window.location = "https://linkedin.com/in/pauloklaus";
                        break;
                    case "twitter":
                        window.location = "https://twitter.com/pauloklaus";
                        break;
                }
            else
                this.commandHelp(["goto"]);
        },
        commandHelp(params = []) {
            if (params.length && this.commands.some(item => item.command == params[0]))
                this.printLn(
                    this.commands.filter(item => item.command == params[0]).map(item => item.description)
                );
            else
                this.printLn([
                    "valid commands: " + this.commandSpan(this.commands),
                    "or type <strong>help [command]</strong>"
                ]);
        },
        commandHistory() {
            this.printItems(this.history.commands);
            this.lineBreak();
        },
        async commandIpAddress() {
            this.print("wait a moment...");
            try {
                const response = await this.$http.get(this.urlCheckIpAddress);
                this.printLn("ok, your ip address is " + response.data);
            } catch (error) {
                this.printLn("error: " + error.message);
            }
        },
        commandLs() {
            this.printColumn(this.files);
        },
        commandNow() {
            this.printLn(new Date());
        },
        commandReboot() {
            this.commandClearScreen();
            this.historyClear();
            this.startTime = new Date;
            this.boot();
        },
        commandUptime() {
            const oneSec = 1000;
            const oneMinute = 60 * oneSec;
            const oneHour = 60 * oneMinute;
            const oneDay = 24 * oneHour;

            const diff = new Date - this.startTime;
            const days = diff < oneDay ? 0 : parseInt(diff / oneDay);
            const hours = diff < oneHour ? 0 : parseInt((diff - (days * oneDay)) / oneHour);
            const minutes = diff < oneMinute ? 0 : parseInt((diff - (days * oneDay) - (hours * oneHour)) / oneMinute);
            const seconds = parseInt((diff - (days * oneDay) - (hours * oneHour) - (minutes * oneMinute)) / oneSec);

            this.printLn(
                (days    ? days    + " day"    + ( days > 1 ? "s" : "")    + (hours || minutes || seconds ? ", " : "") : "") +
                (hours   ? hours   + " hour"   + ( hours > 1 ? "s" : "")   + (minutes || seconds ? ", " : "") : "") +
                (minutes ? minutes + " minute" + ( minutes > 1 ? "s" : "") + (seconds ? ", " : "") : "") +
                (seconds ? seconds + " second" + ( seconds > 1 ? "s" : "") : "")
            );
        }
    }
}
</script>

<style>
#shell-prompt {
    padding-right: 8px;
}
#shell-command {
    color: var(--text-light);
    background: var(--bg-dark);
    border: 1px solid var(--bg-dark);
    width: 100%;
}
#shell-command:focus {
    outline: 1px solid var(--bg-dark);
}
#shell-focus {
    color: var(--bg-dark);
}
#shell-screen span {
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;
}
#shell-screen strong {
    color: var(--info);
}
#shell-screen li {
    margin-left: 15px;
}

.shell-columns {
    display: flex;
}
.shell-columns div {
    min-width: 150px;
    padding-right: 50px;
}
</style>
