'use client'
import useLightbox from "./useLightbox";
import slides from "./slides";

export default function Home() {
  const { openLightbox, renderLightbox } = useLightbox();

console.log(slides)

  return (
    <section className="flex flex-col items-center text-center p-6 gap-6">
      <h1 className="text-2xl font-bold">
        Yet Another React Lightbox | Next.js Dynamic
      </h1>

      <button
        type="button"
        className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        onClick={openLightbox}
      >
        Open Lightbox
      </button>
      {renderLightbox({ slides, index:0 })}
    </section>
  );
}
