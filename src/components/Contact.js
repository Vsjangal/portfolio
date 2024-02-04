import React from "react";

export default function Contact({ isDarkMode }) {
  // const [name, setName] = React.useState("");
  // const [email, setEmail] = React.useState("");
  // const [message, setMessage] = React.useState("");

  // function encode(data) {
  //   return Object.keys(data)
  //     .map(
  //       (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
  //     )
  //     .join("&");
  // }

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   fetch("/", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/x-www-form-urlencoded" },
  //     body: encode({ "form-name": "contact", name, email, message }),
  //   })
  //     .then(() => {
  //       alert("Message sent!");
  //     })
  //     .catch((error) => alert(error));
  // }

  return (
    <section className="relative">
      <div className="container px-5 py-10 mx-auto ">
        <div
          className={`${
            isDarkMode
              ? "lg:w-5/6 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mx-auto p-10 h-96 relative"
              : "lg:w-2/3 md:w-1/2 bg-gray-100 rounded-lg overflow-hidden sm:mx-auto p-10 h-96 relative"
          }`}
        >
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            // frameBorder={0}
            // marginHeight={0}
            // marginWidth={0}
            style={{ filter: "opacity(0.8)" }}
            src="https://www.google.com/maps/embed/v1/place?q=Molahera,+Rajasthan,+India&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          />
          <div
            className={`${
              isDarkMode
                ? "bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md"
                : "bg-white text-black relative flex flex-wrap py-6 rounded shadow-md"
            }`}
          >
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1">
                Molahera <br />
                Kotputli, Jaipur, 303108
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold tracking-widest text-xs">
                EMAIL
              </h2>
              <a
                href="mailto:jangalvijay36@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 leading-relaxed"
              >
                jangalvijay36@gmail.com
              </a>
              <h2 className="title-font font-semibold tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <a
                href="https://wa.me/7357165048"
                target="_blank"
                rel="noopener noreferrer"
                className="leading-relaxed"
              >
                +91-7357165048
              </a>
            </div>
          </div>
        </div>
        {/* <form
          netlify
          name="contact"
          onSubmit={handleSubmit}
          className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
        >
          <h2 className="sm:text-4xl text-3xl mb-1 font-medium title-font">
            Contact Me
          </h2>
          <p className="leading-relaxed mb-5">
            Reach out and let's chat about potential collaborations. Your next
            team member might just be a click away!
            <div>
              If you want to have a chat on whatsapp click on the number in left
              side.
            </div>
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className={`${
                isDarkMode
                  ? "w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  : "w-full bg-white rounded border border-gray-100 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              }`}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={`${
                isDarkMode
                  ? "w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  : "w-full bg-white rounded border border-gray-100 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              }`}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="message" className="leading-7 text-sm">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className={`${
                isDarkMode
                  ? "w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  : "w-full bg-white rounded border border-gray-100 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              }`}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
          >
            Submit
          </button>
        </form> */}
      </div>
    </section>
  );
}
