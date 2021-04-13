<template>
    <b-row>
        <b-col md="6" lg="4" class="px-4 mb-5">
            <h4 class="font-weight-bold">Phbit</h4>
            <p><a href="https://www.phbit.com.br" target="_blank">www.phbit.com.br</a>
            <br><b-badge variant="primary">website</b-badge> <b-badge variant="success">on line</b-badge> <b-badge variant="danger">vuejs</b-badge></p>

            <div class="portfolio-link text-center text-muted small">
                <div class="card-preview">
                    <a href="https://www.phbit.com.br" target="_blank">
                        <cl-img src="portfolio/phbit-website.png" class="card-width-image" />
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
                        <cl-img src="portfolio/nexseg-website.jpg" class="card-width-image" />
                    </a>
                </div>
                Click/touch to browse
            </div>
        </b-col>

        <b-col md="6" lg="4" class="px-4 mb-5">
            <h4 class="font-weight-bold">Nexseg</h4>
            <p><a href="https://app.nexseg.com.br">app.nexseg.com.br</a>
            <br><b-badge variant="warning">app</b-badge> <b-badge variant="success">on line</b-badge> <b-badge variant="danger">vuejs</b-badge></p>

            <div class="portfolio-link text-center text-muted small">
                <gallery :images="nexsegAppImages" class="card-gallery" />
                Click/touch to enlarge
            </div>
        </b-col>

        <b-col md="6" lg="4" class="px-4 mb-5">
            <h4 class="font-weight-bold">Nexsin</h4>
            <p><a href="https://www.nexsin.com.br">www.nexsin.com.br</a>
            <br><b-badge variant="warning">app</b-badge> <b-badge variant="success">on line</b-badge> <b-badge variant="light">php</b-badge> <b-badge variant="light">html</b-badge> <b-badge variant="light">js</b-badge> <b-badge variant="light">css</b-badge></p>

            <div class="portfolio-link text-center text-muted small">
                <gallery :images="nexsinAppImages" class="card-gallery" />
                Click/touch to enlarge
            </div>
        </b-col>

        <b-col md="6" lg="4" class="px-4 mb-5">
            <h4 class="font-weight-bold">Affiance Consórcios</h4>
            <p><a href="https://www.affianceconsorcios.com.br">www.affianceconsorcios.com.br</a>
            <br><b-badge variant="primary">website</b-badge> <b-badge variant="success">on line</b-badge> <b-badge variant="light">php</b-badge> <b-badge variant="light">html</b-badge> <b-badge variant="light">js</b-badge> <b-badge variant="light">css</b-badge></p>

            <div class="portfolio-link text-center text-muted small">
                <div class="card-preview">
                    <a href="https://www.affianceconsorcios.com.br">
                        <cl-img src="portfolio/affiance-consorcios-website.png" class="card-width-image" />
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
                        <cl-img src="portfolio/dataplain-website.jpg" class="card-width-image" />
                    </a>
                </div>
                Click/touch to browse
            </div>
        </b-col>

        <b-col md="6" lg="4" class="px-4 mb-5">
            <h4 class="font-weight-bold">Balcão de Empregos</h4>
            <p><a href="https://www.chapeco.com.br">www.chapeco.com.br</a>
            <br><b-badge variant="warning">app</b-badge> <b-badge variant="success">on line</b-badge> <b-badge variant="light">php</b-badge> <b-badge variant="light">html</b-badge> <b-badge variant="light">js</b-badge> <b-badge variant="light">css</b-badge></p>

            <div class="portfolio-link text-center text-muted small">
                <gallery :images="balcaoEmpregosImages" class="card-gallery" />
                Click/touch to enlarge
            </div>
        </b-col>
    </b-row>
</template>

<script>
import CloudinaryImage from "@/components/CloudinaryImage";
import Gallery from "@/components/Gallery";

export default {
    components: { Gallery, clImg: CloudinaryImage },
    data() {
        return {
            nexsegAppImages: [
                {
                    src: process.env.VUE_APP_CLOUDINARY + "portfolio/nexseg-app-login.png",
                    thumb: process.env.VUE_APP_CLOUDINARY + "portfolio/nexseg-app-login.png"
                },
                {
                    src: process.env.VUE_APP_CLOUDINARY + "portfolio/nexseg-app-dashboard.png",
                    thumb: process.env.VUE_APP_CLOUDINARY + "portfolio/nexseg-app-dashboard.png"
                },
                {
                    src: process.env.VUE_APP_CLOUDINARY + "portfolio/nexseg-app-gerencial.png",
                    thumb: process.env.VUE_APP_CLOUDINARY + "portfolio/nexseg-app-gerencial.png"
                },
                {
                    src: process.env.VUE_APP_CLOUDINARY + "portfolio/nexseg-app-form.png",
                    thumb: process.env.VUE_APP_CLOUDINARY + "portfolio/nexseg-app-form.png"
                },
                {
                    src: process.env.VUE_APP_CLOUDINARY + "portfolio/nexseg-app-tarefas.png",
                    thumb: process.env.VUE_APP_CLOUDINARY + "portfolio/nexseg-app-tarefas.png"
                },
            ],
            nexsinAppImages: [
                {
                    src: process.env.VUE_APP_CLOUDINARY + "portfolio/fact-app-dashboard.png",
                    thumb: process.env.VUE_APP_CLOUDINARY + "portfolio/fact-app-dashboard.png"
                },
                {
                    src: process.env.VUE_APP_CLOUDINARY + "portfolio/fact-app-gerencial.png",
                    thumb: process.env.VUE_APP_CLOUDINARY + "portfolio/fact-app-gerencial.png"
                },
                {
                    src: process.env.VUE_APP_CLOUDINARY + "portfolio/fact-app-form.png",
                    thumb: process.env.VUE_APP_CLOUDINARY + "portfolio/fact-app-form.png"
                },
                {
                    src: process.env.VUE_APP_CLOUDINARY + "portfolio/fact-app-fotos.png",
                    thumb: process.env.VUE_APP_CLOUDINARY + "portfolio/fact-app-fotos.png"
                }
            ],
            balcaoEmpregosImages: [
                {
                    src: process.env.VUE_APP_CLOUDINARY + "portfolio/balcao-empregos-app-gerencial.png",
                    thumb: process.env.VUE_APP_CLOUDINARY + "portfolio/balcao-empregos-app-gerencial.png"
                },
                {
                    src: process.env.VUE_APP_CLOUDINARY + "portfolio/balcao-empregos-app-form.png",
                    thumb: process.env.VUE_APP_CLOUDINARY + "portfolio/balcao-empregos-app-form.png"
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
