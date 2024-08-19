import { Image } from "astro:assets";
import type { PortableTextBlock } from "@portabletext/types";

import { portableTextToHtml } from "astro-sanity";
import { urlForMedia } from "./urlForMedia";

const checkBlockForMarks = (
  marksToCheckFor: string[],
  blockMarksArray: string[]
) => {
  for (const mark of marksToCheckFor) {
    if (!blockMarksArray.includes(mark)) {
      return false;
    }
  }
  return true;
};

const customComponents = {
  types: {
    image: ({ value }: any) => {
      return `
            <div class="w-3/4 mx-auto mb-6">
            <Image src="${urlForMedia(
              value
            ).url()}" width="400" height="400" alt="blog photo" class="object-cover object-center w-full h-full rounded shadow" />
            </div>`;
    },
  },
  block: {
    h1: ({ value }: any) => {
      return `<h2 class="mb-6 text-3xl">${value.children[0].text}</h2>`;
    },
    h2: ({ value }: any) =>
      `<h3 class="mb-6 text-xl">${value.children[0].text}</h3>`,
    h3: ({ value }: any) =>
      `<h4 class="mb-6 text-lg">${value.children[0].text}</h4>`,
    blockquote: ({ value }: any) =>
      `<blockquote class="pl-2 mb-6 text-xl italic font-semibold text-gray-900 border-l-2 border-gray-300 ">${value.children[0].text}</blockquote>`,
    normal: ({ value }: any) => {
      // switch case for different types of blocks
      return `<p class="self-start ${
        checkBlockForMarks(["strong"], value.children[0].marks)
          ? "font-extrabold "
          : ""
      } ${
        checkBlockForMarks(["italic"], value.children[0].marks) ? "italic " : ""
      } ${
        checkBlockForMarks(["underline"], value.children[0].marks)
          ? "border-b border-slate-700 "
          : ""
      } ${
        checkBlockForMarks(["strike-through"], value.children[0].marks)
          ? "line-through"
          : ""
      } mb-6">${value.children[0].text}</p>`;
    },
  },
  marks: {
    em: ({ value }: any) => `<em>${value}</em>`,
  },
};

export function sanityPortableText(portabletext: PortableTextBlock) {
  return portableTextToHtml(portabletext, customComponents);
}
