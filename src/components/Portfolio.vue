<template>
    <b-row>
        <b-col md="6" lg="4" class="px-4 mb-5">
            <h4 class="font-weight-bold">RealEstate Concept</h4>
            <p><a href="https://realestate-concept.pages.dev" target="_blank">realestate-concept.pages.dev</a>
            <br><b-badge variant="warning">webapp</b-badge> <b-badge variant="success">on line</b-badge> <b-badge variant="danger">vuejs</b-badge></p>

            <div class="portfolio-link text-center text-muted small">
                <div class="card-preview">
                    <a href="https://realestate-concept.pages.dev" target="_blank">
                        <MyRepositoryImage src="portfolio/realestate-concept-app.jpg" class="card-width-image" />
                    </a>
                </div>
                Click/touch to browse
            </div>

            <p class="text-muted mt-3">Aplicação web conceito onde aplico VueX, Vue-Router, Bootstrap e Firebase (RealTime Database e Storage).</p>
        </b-col>

        <b-col md="6" lg="4" class="px-4 mb-5">
            <h4 class="font-weight-bold">Phbit</h4>
            <p><a href="https://www.phbit.com.br" target="_blank">www.phbit.com.br</a>
            <br><b-badge variant="primary">website</b-badge> <b-badge variant="success">on line</b-badge> <b-badge variant="danger">vuejs</b-badge></p>

            <div class="portfolio-link text-center text-muted small">
                <div class="card-preview">
                    <a href="https://www.phbit.com.br" target="_blank">
                        <MyRepositoryImage src="portfolio/phbit-website.jpg" class="card-width-image" />
                    </a>
                </div>
                Click/touch to browse
            </div>
        </b-col>

        <b-col md="6" lg="4" class="px-4 mb-5">
            <h4 class="font-weight-bold">Nexseg</h4>
            <p><a href="https://www.nexseg.com.br" target="_blank">www.nexseg.com.br</a>
            <br><b-badge variant="primary">website</b-badge> <b-badge variant="success">on line</b-badge> <b-badge variant="danger">vuejs</b-badge></p>

            <div class="portfolio-link text-center text-muted small">
                <div class="card-preview">
                    <a href="https://www.nexseg.com.br" target="_blank">
                        <MyRepositoryImage src="portfolio/nexseg-website.jpg" class="card-width-image" />
                    </a>
                </div>
                Click/touch to browse
            </div>
        </b-col>

        <b-col md="6" lg="4" class="px-4 mb-5">
            <h4 class="font-weight-bold">Nexseg</h4>
            <p><a href="https://app.nexseg.com.br">app.nexseg.com.br</a>
            <br><b-badge variant="warning">webapp</b-badge> <b-badge variant="success">on line</b-badge> <b-badge variant="danger">vuejs</b-badge></p>

            <div class="portfolio-link text-center text-muted small">
                <gallery :images="nexsegAppImages" class="card-gallery" />
                Click/touch to enlarge
            </div>

            <p class="text-muted mt-3">Aplicação web para corretores de seguros, com cotação online, gestão dos procedimentos de proposta e sinistro.</p>
        </b-col>

        <b-col md="6" lg="4" class="px-4 mb-5">
            <h4 class="font-weight-bold">Nexsin</h4>
            <p><a href="https://www.nexsin.com.br">www.nexsin.com.br</a>
            <br><b-badge variant="warning">webapp</b-badge> <b-badge variant="success">on line</b-badge> <b-badge variant="light">php</b-badge> <b-badge variant="light">html</b-badge> <b-badge variant="light">js</b-badge> <b-badge variant="light">css</b-badge></p>

            <div class="portfolio-link text-center text-muted small">
                <gallery :images="nexsinAppImages" class="card-gallery" />
                Click/touch to enlarge
            </div>

            <p class="text-muted mt-3">Aplicação web para reguladores e vistoriadores de seguros.</p>
        </b-col>

        <b-col md="6" lg="4" class="px-4 mb-5">
            <h4 class="font-weight-bold">Affiance Consórcios</h4>
            <p><a href="https://www.affianceconsorcios.com.br">www.affianceconsorcios.com.br</a>
            <br><b-badge variant="primary">website</b-badge> <b-badge variant="success">on line</b-badge> <b-badge variant="light">php</b-badge> <b-badge variant="light">html</b-badge> <b-badge variant="light">js</b-badge> <b-badge variant="light">css</b-badge></p>

            <div class="portfolio-link text-center text-muted small">
                <div class="card-preview">
                    <a href="https://www.affianceconsorcios.com.br">
                        <MyRepositoryImage src="portfolio/affiance-consorcios-website.jpg" class="card-width-image" />
                    </a>
                </div>
                Click/touch to browse
            </div>
        </b-col>

        <b-col md="6" lg="4" class="px-4 mb-5">
            <h4 class="font-weight-bold">Dataplain</h4>
            <p><a href="https://www.dataplain.com.br">www.dataplain.com.br</a>
            <br><b-badge variant="primary">website</b-badge> <b-badge variant="success">on line</b-badge> <b-badge variant="danger">vuejs</b-badge></p>

            <div class="portfolio-link text-center text-muted small">
                <div class="card-preview">
                    <a href="https://www.dataplain.com.br">
                        <MyRepositoryImage src="portfolio/dataplain-website.jpg" class="card-width-image" />
                    </a>
                </div>
                Click/touch to browse
            </div>
        </b-col>

        <b-col md="6" lg="4" class="px-4 mb-5">
            <h4 class="font-weight-bold">Balcão de Empregos</h4>
            <p><a href="https://web.chapeco.com.br/balcao">web.chapeco.com.br/balcao</a>
            <br><b-badge variant="warning">webapp</b-badge> <b-badge variant="success">on line</b-badge> <b-badge variant="light">php</b-badge> <b-badge variant="light">html</b-badge> <b-badge variant="light">js</b-badge> <b-badge variant="light">css</b-badge></p>

            <div class="portfolio-link text-center text-muted small">
                <gallery :images="balcaoEmpregosImages" class="card-gallery" />
                Click/touch to enlarge
            </div>
        </b-col>
    </b-row>
</template>

<script>
import Gallery from "@/components/Gallery";

export default {
    components: { Gallery },
    data() {
        return {
            nexsegAppImages: [
                {
                    src: process.env.VUE_APP_IMAGES + "/portfolio/nexseg-app-login.jpg",
                    thumb: process.env.VUE_APP_IMAGES + "/portfolio/nexseg-app-login.jpg"
                },
                {
                    src: process.env.VUE_APP_IMAGES + "/portfolio/nexseg-app-dashboard.jpg",
                    thumb: process.env.VUE_APP_IMAGES + "/portfolio/nexseg-app-dashboard.jpg"
                },
                {
                    src: process.env.VUE_APP_IMAGES + "/portfolio/nexseg-app-gerencial.jpg",
                    thumb: process.env.VUE_APP_IMAGES + "/portfolio/nexseg-app-gerencial.jpg"
                },
                {
                    src: process.env.VUE_APP_IMAGES + "/portfolio/nexseg-app-form.jpg",
                    thumb: process.env.VUE_APP_IMAGES + "/portfolio/nexseg-app-form.jpg"
                },
                {
                    src: process.env.VUE_APP_IMAGES + "/portfolio/nexseg-app-tarefas.jpg",
                    thumb: process.env.VUE_APP_IMAGES + "/portfolio/nexseg-app-tarefas.jpg"
                },
            ],
            nexsinAppImages: [
                {
                    src: process.env.VUE_APP_IMAGES + "/portfolio/fact-app-dashboard.jpg",
                    thumb: process.env.VUE_APP_IMAGES + "/portfolio/fact-app-dashboard.jpg"
                },
                {
                    src: process.env.VUE_APP_IMAGES + "/portfolio/fact-app-gerencial.jpg",
                    thumb: process.env.VUE_APP_IMAGES + "/portfolio/fact-app-gerencial.jpg"
                },
                {
                    src: process.env.VUE_APP_IMAGES + "/portfolio/fact-app-form.jpg",
                    thumb: process.env.VUE_APP_IMAGES + "/portfolio/fact-app-form.jpg"
                },
                {
                    src: process.env.VUE_APP_IMAGES + "/portfolio/fact-app-fotos.jpg",
                    thumb: process.env.VUE_APP_IMAGES + "/portfolio/fact-app-fotos.jpg"
                }
            ],
            balcaoEmpregosImages: [
                {
                    src: process.env.VUE_APP_IMAGES + "/portfolio/balcao-empregos-app-gerencial.jpg",
                    thumb: process.env.VUE_APP_IMAGES + "/portfolio/balcao-empregos-app-gerencial.jpg"
                },
                {
                    src: process.env.VUE_APP_IMAGES + "/portfolio/balcao-empregos-app-form.jpg",
                    thumb: process.env.VUE_APP_IMAGES + "/portfolio/balcao-empregos-app-form.jpg"
                }
            ]
        }
    }
}
</script>

<style>
.portfolio-link a {
    color: var(--light);
}
.card-preview {
    height: 240px;
    margin-bottom: 5px;
    overflow-y: auto;
}
.card-width-image {
    object-fit: contain;
    width: 100%;
}
.card-gallery {
    height: 240px;
    margin-bottom: 5px;
    overflow: hidden;
    /* object-fit: cover; */
}
</style>
