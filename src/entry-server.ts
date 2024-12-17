import {renderToString} from 'vue/server-renderer'
import {createApp} from './main'
import {createSsrExchange} from "./create-ssr-exchange.ts";

export async function render() {
    // The `ssrExchange` must be initialized with `isClient` and `initialState`

    const ssr = createSsrExchange(false)
    const {app} = createApp(ssr)

    // passing SSR context object which will be available via useSSRContext()
    // @vitejs/plugin-vue injects code into a component's setup() that registers
    // itself on ctx.modules. After the render, ctx.modules would contain all the
    // components that have been instantiated during this render call.
    const ctx = {}
    const html = await renderToString(app, ctx)

    const ssrData = ssr.extractData()
    return {html, ssrData}
}