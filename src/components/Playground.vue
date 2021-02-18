<template>
    <div>
        <h2 class="font-weight-bold">Vue Components</h2>

        <b-row class="mb-4">
            <b-col md="6" lg="4" class="px-4 mt-4">
                <h4 class="font-weight-bold">InputSearch</h4>
                <p><a href="https://github.com/pauloklaus/psk-inputsearch">github.com/pauloklaus/psk-inputsearch</a></p>

                <p>Changes: {{ inputChange }}
                <br>Button clicks: {{ inputClick }}
                <br>Error: {{ inputError }}</p>

                <p><label>Product:</label>
                <my-input-search :url="inputUrl" textField="title" :axios="$http" @error="inputErrorResponse" v-model="inputValue" @change="inputSearchHasChanged" showActionButton @actionButtonClick="inputSearchButtonClick" waitingText="Wait, searching..." placeholder="Find a product..." /></p>

                <p>Value: {{ inputValue }}</p>

                <p>Searching for products in this API:
                <br><a :href="inputUrl">{{ inputUrl }}</a></p>
            </b-col>

            <b-col md="6" lg="4" class="px-4 mt-4">
                <h4 class="font-weight-bold">CopyAndShare</h4>
                <p><a href="https://github.com/pauloklaus/psk-copyandshare">github.com/pauloklaus/psk-copyandshare</a></p>

                <p><my-copy-and-share label="Copy:" :text="copyText" @copied="copyNotify" /></p>
                <p><my-copy-and-share label="Copy or browse to:" text="https://github.com" @copied="copyNotify" browseButton /></p>
                <p>{{ copyCopied }}</p>
            </b-col>

            <b-col md="6" lg="4" class="px-4 mt-4">
                <h4 class="font-weight-bold">LoadingBar</h4>
                <p><a href="https://github.com/pauloklaus/psk-loadingbar">github.com/pauloklaus/psk-loadingbar</a></p>

                <p>Custom foreground color:
                <my-loading-bar fgClass="bg-primary" /></p>

                <p>Custom background and foreground color:
                <my-loading-bar bgClass="bg-success" fgClass="bg-white" /></p>
            </b-col>

            <b-col md="6" lg="4" class="px-4 mt-4">
                <h4 class="font-weight-bold">TypeWriter</h4>
                <p><a href="https://github.com/pauloklaus/psk-typewriter">github.com/pauloklaus/psk-typewriter</a></p>

                <p><my-type-writer text="What do you want to do today?" /></p>
                <p><b-button @click="typeLaunchNext">Launch next...</b-button></p>
                <p><my-type-writer :text="typeExplore" v-if="typePlayExplore" @finished="typePlaySlow = true" /></p>
                <p><my-type-writer text="And finally, slow motion text." v-if="typePlaySlow" :timeout="200" /></p>
            </b-col>
        </b-row>
    </div>
</template>

<script>
export default {
    data() {
        return {
            inputUrl: "https://fakestoreapi.com/products",
            inputValue: {},
            inputChange: 0,
            inputError: null,
            inputClick: 0,

            copyText: "Copy the number " + Math.random().toString().substr(2,6),
            copyCopied: "",
            
            typeExplore: "How about exploring the world of programming?",
            typePlayExplore: false,
            typePlaySlow: false
        }
    },
    methods: {
        inputErrorResponse(response) {
            this.inputError = response;
        },
        inputSearchHasChanged() {
            this.inputChange++;
        },
        inputSearchButtonClick() {
            this.inputClick++;
        },

        copyNotify() {
            this.copyCopied = "Text copied!";

            setTimeout(() => {
                this.copyText = "Now copy the number " + Math.random().toString().substr(2,6);
                this.copyCopied = "";
            }, 2000);
        },

        typeLaunchNext() {
            this.typePlayExplore = false;
            this.typePlaySlow = false;

            setTimeout(() => {
                this.typePlayExplore = true;
            }, 500);
        }
    }
}
</script>

<style>
</style>
