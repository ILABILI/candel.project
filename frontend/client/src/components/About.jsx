function About() {
  return (
    <section
      id="about"
      className="bg-[#f3f0eb] px-6 py-20 md:px-12 md:py-32"
    >
      <div className="mx-auto grid max-w-[1500px] items-center gap-12 md:grid-cols-2 md:gap-20">

        {/* Image */}
        <div className="overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=1400&q=85"
            alt="Our candle collection"
            className="h-[500px] w-full object-cover transition-transform duration-700 hover:scale-105 md:h-[700px]"
          />
        </div>

        {/* Content */}
        <div className="max-w-xl">

          <p className="mb-5 text-xs uppercase tracking-[0.3em] text-gray-500">
            Our Story
          </p>

          <h2 className="text-4xl font-light leading-tight md:text-6xl">
            Made with care.
            <br />
            Made to be felt.
          </h2>

          <div className="mt-8 space-y-5 text-sm leading-7 text-gray-600 md:text-base">
            <p>
              We create handmade candles designed to bring warmth,
              beautiful scents and a special atmosphere into your home.
            </p>

            <p>
              Every candle is carefully crafted with attention to
              fragrance, shape and detail, making each piece unique.
            </p>

            <p>
              From quiet evenings at home to special occasions,
              our candles are made to become part of your moments.
            </p>
          </div>

          <a
            href="#about"
            className="mt-10 inline-block border-b border-black pb-2 text-xs tracking-[0.25em] transition-opacity hover:opacity-50"
          >
            LEARN MORE
          </a>

        </div>

      </div>
    </section>
  );
}

export default About;