import {ssrExchange} from "@urql/vue";

export function createSsrExchange(isClient: boolean) {
    console.log(isClient);
    return ssrExchange({
        isClient,
        staleWhileRevalidate: false
    });
}