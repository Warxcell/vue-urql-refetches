import './style.css'
import {createApp} from './main'
import {createSsrExchange} from "./create-ssr-exchange.ts";

const ssr = createSsrExchange(true);

const ssrData = window.__URQL_DATA__;

console.log(ssrData)
ssr.restoreData(ssrData);


const {app} = createApp(ssr)

app.mount('#app')