<template>
    <div>
        <h2 class="font-weight-bold mb-4">Vue Components</h2>

        <b-row>
            <b-col md="6" lg="4">
                <p><span class="font-weight-bold">InputSearch</span>
                <br><a href="https://github.com/pauloklaus/psk-inputsearch">github.com/pauloklaus/psk-inputsearch</a></p>

                <p>Changes: {{ change }}
                <br>Button clicks: {{ iconClick }}
                <br>Error: {{ error }}</p>

                <p><label>Product:</label>
                <my-input-search :url="url" textField="title" :axios="$http" @error="errorResponse" v-model="value" @change="hasChanged" showActionButton @actionButtonClick="buttonClick" waitingText="Wait, searching..." placeholder="Find a product..." /></p>

                <p>Value: {{ value }}</p>

                <p>Searching for products in this API:
                <br><a :href="url">{{ url }}</a></p>
            </b-col>

            <b-col md="6" lg="4">
                <p><span class="font-weight-bold">CopyAndShare</span>
                <br><a href="https://github.com/pauloklaus/psk-copyandshare">github.com/pauloklaus/psk-copyandshare</a></p>

                <p><my-copy-and-share label="Copy:" :text="copyText" @copied="updateCopied" /></p>
                <p><my-copy-and-share label="Copy or browse to:" text="https://github.com" @copied="updateCopied" browseButton /></p>
                <p>{{ copied }}</p>
            </b-col>

            <b-col md="6" lg="4">
                <p><span class="font-weight-bold">Typewriter</span>
                <br><a href="https://github.com/pauloklaus/psk-typewriter">github.com/pauloklaus/psk-typewriter</a></p>

                <p><my-type-writer text="What do you want to do today?" /></p>
                <p><b-button @click="playExplore = true">Launch next...</b-button></p>
                <p><my-type-writer :text="explore" v-if="playExplore" @finished="playSlow = true" /></p>
                <p><my-type-writer text="And finally, slow motion text." v-if="playSlow" :timeout="200" /></p>
            </b-col>
        </b-row>
    </div>
</template>

<script>
export default {
    data() {
        return {
            url: "https://fakestoreapi.com/products",
            value: {},
            change: 0,
            error: null,
            iconClick: 0,
            copyText: "Copy the number " + Math.random().toString().substr(2,6),
            copied: "",
            explore: "How about exploring the world of programming?",
            playExplore: false,
            playSlow: false
        }
    },
    methods: {
        errorResponse(response) {
            this.error = response;
        },
        hasChanged() {
            this.change++;
        },
        buttonClick() {
            this.iconClick++;
        },
        updateCopied() {
            this.copied = "Text copied!";

            setTimeout(() => {
                this.copyText = "Now copy the number " + Math.random().toString().substr(2,6);
                this.copied = "";
            }, 2000);
        }
    }
}
</script>

<style>
</style>
