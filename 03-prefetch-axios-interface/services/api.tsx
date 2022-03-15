import { mutate } from "swr"
import axios from "axios"
import useSWR from "swr"

const key = "https://jsonplaceholder.typicode.com/posts"

export function fetcher(path: string) {
    return axios
        .get(path)
        .then((result) => {
            return result.data;
        })
        .catch((error) => {
            console.error(error);
            return Promise.reject(error);
        });
}

export async function fetchAndCache(key: string) {
    console.log("Prefetching", key);
    const request = await fetcher(key);
    mutate(key, request, false);
    return request;
}

export function usePrefetching() {
    return useSWR(key, fetcher)
}

export function getPrefetching() {
    return fetchAndCache(key)
}