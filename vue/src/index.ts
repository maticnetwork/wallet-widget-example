import { Widget } from "@maticnetwork/wallet-widget";
import Vue from "vue";
import Root from "./components/root.vue";
import "flexstyle";

const widget = new Widget({
    target: '#btnOpenWidget',
    appName: "test",
    position: "bottom-right",
    network: "testnet",
    // style: {
    //     color: 'blue'
    // }
});

const vue = new Vue({
    render: h => h(Root),
    el: '#app',
    mounted() {
        widget.create()
    }
})
