import React from "react";

function Contact() {
  return (
    <section className="min-h-screen bg-stone-50 px-6 py-16">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-amber-700">
            We'd love to hear from you
          </p>

          <h1 className="mb-4 text-4xl font-semibold text-stone-800 md:text-5xl">
            Contact Us
          </h1>

          <p className="mx-auto max-w-xl text-stone-500">
            Have a question about our candles or need help with your order?
            We're here for you.
          </p>
        </div>

        {/* Contact Content */}
        <div className="grid gap-10 md:grid-cols-2">

          {/* Contact Information */}
          <div className="rounded-2xl bg-stone-900 p-8 text-white md:p-10">
            <h2 className="mb-4 text-2xl font-medium">
              Get in Touch
            </h2>

            <p className="mb-10 leading-7 text-stone-300">
              We'd be happy to help you discover your favorite scents
              and find the perfect candle for your home or a special gift.
            </p>

            <div className="space-y-7">
              <div>
                <h3 className="mb-1 font-medium text-amber-400">
                  Email
                </h3>
                <p className="text-stone-300">
                  HILINBILIN4@gmail.com
                </p>
              </div>

              <div>
                <h3 className="mb-1 font-medium text-amber-400">
                  Phone
                </h3>
                <p className="text-stone-300">
                  +212 603590648
                </p>
              </div>

              <div>
                <h3 className="mb-1 font-medium text-amber-400">
                  Location
                </h3>
                <p className="text-stone-300">
                  Casablanca, Morocco
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you! Your message has been prepared.");
            }}
            className="rounded-2xl border border-stone-200 bg-white p-8 shadow-sm md:p-10"
          >
            <div className="mb-6">
              <label className="mb-2 block text-sm font-medium text-stone-700">
                Your Name
              </label>

              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                required
                className="w-full rounded-lg border border-stone-300 px-4 py-3 outline-none transition focus:border-amber-600 focus:ring-1 focus:ring-amber-600"
              />
            </div>

            <div className="mb-6">
              <label className="mb-2 block text-sm font-medium text-stone-700">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                className="w-full rounded-lg border border-stone-300 px-4 py-3 outline-none transition focus:border-amber-600 focus:ring-1 focus:ring-amber-600"
              />
            </div>

            <div className="mb-6">
              <label className="mb-2 block text-sm font-medium text-stone-700">
                Subject
              </label>

              <input
                type="text"
                name="subject"
                placeholder="How can we help?"
                required
                className="w-full rounded-lg border border-stone-300 px-4 py-3 outline-none transition focus:border-amber-600 focus:ring-1 focus:ring-amber-600"
              />
            </div>

            <div className="mb-6">
              <label className="mb-2 block text-sm font-medium text-stone-700">
                Your Message
              </label>

              <textarea
                name="message"
                rows="5"
                placeholder="Write your message here..."
                required
                className="w-full resize-none rounded-lg border border-stone-300 px-4 py-3 outline-none transition focus:border-amber-600 focus:ring-1 focus:ring-amber-600"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-stone-900 px-6 py-3 font-medium text-white transition hover:bg-amber-700"
            >
              Send Message
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}

export default Contact;