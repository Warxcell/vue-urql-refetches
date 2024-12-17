import {ssrExchange} from "@urql/vue";

export function createSsrExchange(isClient: boolean) {
    return ssrExchange({
        isClient,
        staleWhileRevalidate: false
    });
}