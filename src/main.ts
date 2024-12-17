import {createSSRApp} from 'vue'
import App from './App.vue'
import {SSRExchange} from "@urql/core";
import {Client, fetchExchange, install} from "@urql/vue";

// SSR requires a fresh app instance per request, therefore we export a function
// that creates a fresh app instance. If using Vuex, we'd also be creating a
// fresh store here.
export function createApp(ssr: SSRExchange) {
    const app = createSSRApp(App)

    const client = new Client({
        url: 'https://graphql.anilist.co/',
        exchanges: [
            ssr,
            fetchExchange
        ],
    });

    install(app, client);

    return {app}
}