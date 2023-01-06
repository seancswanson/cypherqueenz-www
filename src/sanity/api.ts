// @ts-ignore
import { useSanityClient } from 'astro-sanity';

export async function getAllMedia() {
    const client = useSanityClient();
    const query = "*[_type == 'galleryImages']";
    const media = await client.fetch(query);
    return media.sort((a: any, b: any) => {
        return a._createdAt > b._createdAt ? 1 : -1;
    });
}