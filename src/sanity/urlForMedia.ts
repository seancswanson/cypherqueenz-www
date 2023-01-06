// @ts-ignore
import { createImageBuilder, useSanityClient } from 'astro-sanity';

export const imageBuilder = createImageBuilder(useSanityClient());

export function urlForMedia(source: any) {
    return imageBuilder.image(source);
}