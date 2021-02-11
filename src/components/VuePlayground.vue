<template>
    <b-row>
        <b-col md="6" lg="4">
            <p>
                <span class="font-weight-bold">InputSearch Test</span>
                <br><a href="https://github.com/pauloklaus/psk-inputsearch">github.com/pauloklaus/psk-inputsearch</a>
            </p>

            <p>Changes: {{ change }}
            <br>Button clicks: {{ iconClick }}
            <br>Error: {{ error }}</p>

            <p><my-input-search :url="url" textField="title" :axios="$http" @error="errorResponse" v-model="value" @change="hasChanged" showActionButton @actionButtonClick="buttonClick" placeholder="Find a product..." /></p>

            <p>Value: {{ value }}</p>

            <p>Searching for products in this API:
            <br><a :href="url">{{ url }}</a></p>
        </b-col>
    </b-row>
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
        }
    }
}
</script>

<style>
</style>
