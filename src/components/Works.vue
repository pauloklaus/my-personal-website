<template>
    <b-row>
        <b-col md="6" lg="4" class="px-4 mb-5">
            <h4 class="font-weight-bold">Phbit</h4>
            <p><a href="https://www.phbit.com.br" target="_blank">www.phbit.com.br</a>
            <br><b-badge variant="primary">website</b-badge> <b-badge variant="success">no ar</b-badge> <b-badge variant="danger">vuejs</b-badge></p>

            <div class="card-vertical">
                <a href="https://www.phbit.com.br" target="_blank"><b-img src="images/works/phbit-website.png" class="card-vertical-image" /></a>
            </div>
        </b-col>

        <b-col md="6" lg="4" class="px-4 mb-5">
            <h4 class="font-weight-bold">Nexseg</h4>
            <p><a href="https://www.nexseg.com.br" target="_blank">www.nexseg.com.br</a>
            <br><b-badge variant="primary">website</b-badge> <b-badge variant="success">no ar</b-badge> <b-badge variant="danger">vuejs</b-badge></p>

            <div class="card-vertical">
                <a href="https://www.nexseg.com.br" target="_blank"><b-img src="images/works/nexseg-website.jpg" class="card-vertical-image" /></a>
            </div>
        </b-col>

        <b-col md="6" lg="4" class="px-4 mb-5">
            <h4 class="font-weight-bold">Nexseg</h4>
            <p><a href="https://app.nexseg.com.br">app.phbit.com.br</a>
            <br><b-badge variant="warning">app</b-badge> <b-badge variant="success">no ar</b-badge> <b-badge variant="danger">vuejs</b-badge></p>

            <div class="card-vertical">
                <b-carousel :interval="4000" controls indicators>
                    <b-carousel-slide img-src="images/works/nexseg-app-login.png" />
                    <b-carousel-slide img-src="images/works/nexseg-app-dashboard.png" />
                    <b-carousel-slide img-src="images/works/nexseg-app-gerencial.png" />
                    <b-carousel-slide img-src="images/works/nexseg-app-form.png" />
                    <b-carousel-slide img-src="images/works/nexseg-app-tarefas.png" />
                </b-carousel>
            </div>
        </b-col>

        <b-col md="6" lg="4" class="px-4 mb-5">
            <h4 class="font-weight-bold">Nexsin</h4>
            <p><a href="https://www.nexsin.com.br">www.nexsin.com.br</a>
            <br><b-badge variant="warning">app</b-badge> <b-badge variant="success">no ar</b-badge> <b-badge variant="light">php</b-badge></p>

            <div class="card-vertical">
                <b-carousel :interval="4000" controls indicators>
                    <b-carousel-slide img-src="images/works/fact-app-dashboard.png" />
                    <b-carousel-slide img-src="images/works/fact-app-gerencial.png" />
                    <b-carousel-slide img-src="images/works/fact-app-form.png" />
                    <b-carousel-slide img-src="images/works/fact-app-fotos.png" />
                </b-carousel>
            </div>
        </b-col>

        <b-col md="6" lg="4" class="px-4 mb-5">
            <h4 class="font-weight-bold">Affiance Consórcios</h4>
            <p><a href="https://www.affianceconsorcios.com.br">www.affianceconsorcios.com.br</a>
            <br><b-badge variant="primary">website</b-badge> <b-badge variant="success">no ar</b-badge> <b-badge variant="light">php</b-badge></p>

            <div class="card-vertical">
                <a href="https://www.affianceconsorcios.com.br"><b-img src="images/works/affiance-consorcios-website.png" class="card-vertical-image" /></a>
            </div>
        </b-col>

        <b-col md="6" lg="4" class="px-4 mb-5">
            <h4 class="font-weight-bold">Dataplain</h4>
            <p><a href="https://www.dataplain.com.br">www.dataplain.com.br</a>
            <br><b-badge variant="primary">website</b-badge> <b-badge variant="success">no ar</b-badge> <b-badge variant="danger">vuejs</b-badge></p>

            <div class="card-vertical">
                <a href="https://www.dataplain.com.br"><b-img src="images/works/dataplain-website.jpg" class="card-vertical-image" /></a>
            </div>
        </b-col>

        <b-col md="6" lg="4" class="px-4 mb-5">
            <h4 class="font-weight-bold">Balcão de Empregos</h4>
            <p><a href="https://www.chapeco.com.br">www.chapeco.com.br</a>
            <br><b-badge variant="warning">app</b-badge> <b-badge variant="success">no ar</b-badge> <b-badge variant="light">php</b-badge></p>

            <div class="card-vertical">
                <b-carousel :interval="4000" controls indicators>
                    <b-carousel-slide img-src="images/works/balcao-empregos-app-form.png" />
                    <b-carousel-slide img-src="images/works/balcao-empregos-app-gerencial.png" />
                </b-carousel>
            </div>
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
.card-vertical {
    height: 230px;
    overflow-y: auto;
}
.card-vertical-image {
    object-fit: contain;
    width: 100%;
}
</style>
