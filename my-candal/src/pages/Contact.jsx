function Contact() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20">

      <h1 className="text-5xl font-bold mb-10">
        Contact Us
      </h1>

      <form className="space-y-6">

        <input
          type="text"
          placeholder="Your Name"
          className="w-full border rounded-xl p-4"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full border rounded-xl p-4"
        />

        <textarea
          rows="6"
          placeholder="Your Message"
          className="w-full border rounded-xl p-4"
        ></textarea>

        <button
          className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-4 rounded-full"
        >
          Send Message
        </button>

      </form>

    </section>
  );
}

export default Contact;