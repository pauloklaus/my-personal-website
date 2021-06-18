import Vue from "vue";
import RepositoryImage from "@dataplain/repositoryimage";

Vue.use(RepositoryImage, { RepositoryImageName: "MyRepositoryImage", Path: process.env.VUE_APP_IMAGES });
