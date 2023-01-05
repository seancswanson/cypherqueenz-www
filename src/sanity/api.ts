// @ts-ignore
import { useSanityClient } from 'astro-sanity';

export async function getAllMedia() {
    const client = useSanityClient();
    const query = "*[_type == 'media']";
    const media = await client.fetch(query);
    return media;
}