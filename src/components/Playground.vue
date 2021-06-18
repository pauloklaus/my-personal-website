<template>
    <div>
        <h2 class="font-weight-bold p-2">Vue Components</h2>

        <b-row class="mb-4">
            <b-col md="6" lg="4" class="px-4 mt-4">
                <h4 class="font-weight-bold">InputSearch</h4>
                <p><a href="https://github.com/pauloklaus/psk-inputsearch">github.com/pauloklaus/psk-inputsearch</a></p>
                <InputSearch />
            </b-col>

            <b-col md="6" lg="4" class="px-4 mt-4">
                <h4 class="font-weight-bold">CopyAndShare</h4>
                <p><a href="https://github.com/pauloklaus/psk-copyandshare">github.com/pauloklaus/psk-copyandshare</a></p>

                <CopyAndShare />
            </b-col>

            <b-col md="6" lg="4" class="px-4 mt-4">
                <h4 class="font-weight-bold">ButtonMenu</h4>
                <p><a href="https://github.com/pauloklaus/psk-buttonmenu">github.com/pauloklaus/psk-buttonmenu</a></p>

                <ButtonMenu />
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

                <TypeWriter />
            </b-col>
        </b-row>

        <h2 class="font-weight-bold p-2">On @dataplain organization</h2>

        <b-row class="mb-4">
            <b-col md="6" lg="4" class="px-4 mt-4">
                <h4 class="font-weight-bold">TimeoutMessage</h4>
                <p><a href="https://github.com/dataplain/timeoutmessage">github.com/dataplain/timeoutmessage</a></p>

                <my-timeout-message value="Message test" timeout="10" />
            </b-col>

            <b-col md="6" lg="4" class="px-4 mt-4">
                <h4 class="font-weight-bold">NotifyMessage</h4>
                <p><a href="https://github.com/dataplain/notifymessage">github.com/dataplain/notifymessage</a></p>

                <NotifyMessage />
            </b-col>

            <b-col md="6" lg="4" class="px-4 mt-4">
                <h4 class="font-weight-bold">RepositoryImage</h4>
                <p><a href="https://github.com/dataplain/repositoryimage">github.com/dataplain/repositoryimage</a></p>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import InputSearch from "@/components/Playground/InputSearch";
import CopyAndShare from "@/components/Playground/CopyAndShare";
import ButtonMenu from "@/components/Playground/ButtonMenu";
import TypeWriter from "@/components/Playground/TypeWriter";
import NotifyMessage from "@/components/Playground/NotifyMessage";

export default {
    components: { InputSearch, CopyAndShare, ButtonMenu, TypeWriter, NotifyMessage }
}
</script>

<style scoped>
h2 {
    background: linear-gradient(90deg, #9f9af0 0%, #343a40 60%);
}
</style>
