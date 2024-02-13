import Card from "../Card";

const Contact = () => {
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div
      id="contact"
      className="bg-gray-200 min-h-screen py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Contact Me
        </h1>
        <h1 className="text-lg font-bold text-center text-gray-800 mb-8">
          (Drop me a line and I'll be sure to holla right back at you soon. 😉)
        </h1>
        <Card>
          <form onSubmit={submitHandler}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 text-lg mb-2"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                required
                className="w-full border text-black border-gray-300 rounded-md p-3 focus:bg-sky-100 focus:outline-none focus:border-blue-500 transition duration-300"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 text-lg mb-2"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                required
                className="w-full border text-black border-gray-300 rounded-md p-3 focus:bg-sky-100 focus:outline-none focus:border-blue-500 transition duration-300"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-gray-700 text-lg mb-2"
              >
                Your Message
              </label>
              <textarea
                id="message"
                rows="4"
                required
                className="w-full border text-black border-gray-300 rounded-md p-3 focus:bg-sky-100 focus:outline-none focus:border-blue-500 transition duration-300"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-gray-800 text-white py-2 px-4 rounded-md transition duration-300 transform hover:scale-105"
              >
                Send Message
              </button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Contact;
