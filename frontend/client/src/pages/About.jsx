import React from "react";


const videos = [
  {
    id: 1,
    title: "Our Candle Making Process",
    category: "HANDMADE WITH LOVE",
    src: "/Videos/candle-meking.mp4",
  },
  {
    id: 2,
    title: "Our Signature Candles",
    category: "OUR COLLECTION",
    src: "/videos/candle-products.mp4",
  },
  {
    id: 3,
    title: "The Art of Candle Design",
    category: "CREATIVE PROCESS",
    src: "/videos/candle-design.mp4",
  },
  {
    id: 4,
    title: "Beautiful Details",
    category: "INSIDE OUR STUDIO",
    src: "/videos/candle-details.mp4",
  },
  {
    id: 5,
    title: "Candles for Every Moment",
    category: "LIFESTYLE",
    src: "/videos/candle-lifestyle.mp4",
  },
  {
    id: 6,
    title: "Discover Our World",
    category: "OUR STORY",
    src: "/videos/candle-story.mp4",
  },
];

function About() {
  return (
    <main className="min-h-screen bg-[#faf7f2] text-stone-800">

      {/* Hero */}
      <section className="px-6 py-20 text-center md:py-28">
        <p className="mb-4 text-xs tracking-[0.35em] text-amber-800">
          OUR STORY
        </p>

        <h1 className="mb-6 text-4xl font-light md:text-6xl">
          More than just candles.
        </h1>

        <p className="mx-auto max-w-2xl text-sm leading-7 text-stone-600 md:text-base">
          We create handmade candles that bring warmth, beauty,
          and beautiful fragrances into your everyday life.
          Every candle is made with care, passion, and attention to detail.
        </p>
      </section>

      {/* Brand Story */}
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-6 pb-20 md:grid-cols-2">
        <div>
          <p className="mb-3 text-xs tracking-[0.3em] text-amber-800">
            MADE WITH LOVE
          </p>

          <h2 className="mb-5 text-3xl font-light md:text-4xl">
            Small details, beautiful moments.
          </h2>

          <p className="mb-4 leading-7 text-stone-600">
            Our brand was born from a love of fragrance,
            elegant design, and handmade creations.
          </p>

          <p className="leading-7 text-stone-600">
            From cozy evenings at home to thoughtful gifts
            for someone special, our candles are designed
            to make every moment feel a little more special.
          </p>
        </div>

        <div className="flex min-h-80 items-center justify-center rounded-2xl bg-[#e9dfd0] p-8">
          <div className="text-center">
            <span className="text-6xl">🕯️</span>
            <p className="mt-5 text-xl font-light tracking-widest">
              YOUR BRAND
            </p>
            <p className="mt-2 text-sm text-stone-500">
              Handmade with love
            </p>
          </div>
        </div>
      </section>

      {/* Video Gallery */}
      <section className="bg-white px-6 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">

          <div className="mb-10 text-center">
            <p className="mb-3 text-xs tracking-[0.3em] text-amber-800">
              BEHIND THE SCENES
            </p>

            <h2 className="text-3xl font-light md:text-4xl">
              A little look into our world
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-stone-500">
              Discover our creative process, our favorite designs,
              and the little details that make each candle special.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">
            {videos.map((video) => (
              <article key={video.id} className="group">

                <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-stone-200">

                  <video
                    className="h-full w-full object-cover"
                    src={video.src}
                    controls
                    playsInline
                    preload="metadata"
                    aria-label={video.title}
                  />

                </div>

                <p className="mt-3 text-[10px] tracking-[0.2em] text-amber-800 md:text-xs">
                  {video.category}
                </p>

                <h3 className="mt-1 text-sm font-medium md:text-base">
                  {video.title}
                </h3>

              </article>
            ))}
          </div>

        </div>
      </section>

      {/* Closing Section */}
      <section className="px-6 py-20 text-center">
        <p className="mb-4 text-xs tracking-[0.3em] text-amber-800">
          LIGHT UP YOUR MOMENTS
        </p>

        <h2 className="mb-6 text-3xl font-light md:text-4xl">
          Find your favorite candle.
        </h2>

        <a
          href="/shop"
          className="inline-block bg-stone-900 px-8 py-3 text-sm text-white transition hover:bg-amber-800"
        >
          Explore Our Collection
        </a>
      </section>

    </main>
  );
}

export default About;