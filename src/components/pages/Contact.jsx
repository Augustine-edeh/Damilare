import emailjs from "@emailjs/browser";
import { Spinner } from "flowbite-react";
import { useState, useRef } from "react";
import Card from "../ui/Card";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [isSending, SetIsSending] = useState(false);

  const IsSendingButtonUI = () => (
    <button
      type="button"
      className="flex gap-x-3 bg-gray-800 text-white py-2 px-4 rounded-md opacity-80"
    >
      <Spinner size="md" className="animate-spin fill-blue-100" />
      <span className="">Sending...</span>
    </button>
  );

  const SendBottonUI = () => (
    <button
      type="submit"
      id="submit-btn"
      className="bg-gray-800 text-white py-2 px-4 rounded-md transition duration-300 transform hover:scale-105"
    >
      <span className="pl-3">Send Message</span>
    </button>
  );

  // form inputs refs
  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const messageInputRef = useRef(null);

  const [formInputsValues, setFormInputsValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const changeHandler = () => {
    // Update formInputsValues using refs
    setFormInputsValues({
      name: nameInputRef.current.value,
      email: emailInputRef.current.value,
      message: messageInputRef.current.value,
    });
  };

  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   // Here you can do whatever you want with the form inputs, like sending them to an API
  //   console.log("Form submitted with values:", formInputsValues);

  //   // Reset form input values to blank
  //   setFormInputsValues({
  //     name: "",
  //     email: "",
  //     message: "",
  //   });
  // };

  // return (
  //   <form onSubmit={submitHandler}>
  //     <input
  //       type="text"
  //       name="name"
  //       value={formInputsValues.name}
  //       onChange={changeHandler}
  //       placeholder="Name"
  //     />
  //     <br />
  //     <input
  //       type="email"
  //       name="email"
  //       value={formInputsValues.email}
  //       onChange={changeHandler}
  //       placeholder="Email"
  //     />
  //     <br />
  //     <textarea
  //       name="message"
  //       value={formInputsValues.message}
  //       onChange={changeHandler}
  //       placeholder="Message"
  //     ></textarea>
  //     <br />
  //     <button type="submit">Submit</button>
  //   </form>
  // );
  // };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    SetIsSending(true);
    emailjs
      .sendForm("service_ktalycl", "template_dfxjcmr", form.current, {
        publicKey: "e1F5G0lLl-sSmRvXt",
      })
      .then(
        () => {
          SetIsSending(false);
          // setFormInputsValues({ name: "", email: "", message: "" });

          // Reset form input values to blank
          setFormInputsValues({
            name: "",
            email: "",
            message: "",
          });
          toast("Message sent succcessfully!");
          console.log("MESSAGE SENT!");
        },
        (error) => {
          SetIsSending(false);
          console.log("FAILED TO SEND MESSAGE...", error.text);
        }
      );
  };

  const submitHandler = (e) => {
    sendEmail(e);
  };

  return (
    <div
      id="contact"
      className="bg-gray-200 min-h-screen py-44 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Contact Me
        </h1>
        <h1 className="text-lg font-bold text-center text-gray-800 mb-8">
          (Drop me a line and I'll be sure to holla right back at you soon. 😉)
        </h1>
        <Card>
          <form ref={form} onSubmit={submitHandler}>
            <ToastContainer />
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 text-lg mb-2"
              >
                Your Name
              </label>
              <input
                type="text"
                id="user_name"
                name="user_name"
                value={formInputsValues.name}
                ref={nameInputRef}
                onChange={changeHandler}
                required
                className="w-full border text-black border-gray-300 rounded-md p-3 focus:bg-indigo-50 focus:outline-none focus:border-blue-500 transition duration-300"
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
                id="user_email"
                name="user_email"
                value={formInputsValues.email}
                ref={emailInputRef}
                onChange={changeHandler}
                required
                className="w-full border text-black border-gray-300 rounded-md p-3 focus:bg-indigo-50 focus:outline-none focus:border-blue-500 transition duration-300"
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
                name="message"
                value={formInputsValues.message}
                ref={messageInputRef}
                onChange={changeHandler}
                rows="4"
                required
                className="w-full border text-black border-gray-300 rounded-md p-3 focus:bg-indigo-50 focus:outline-none focus:border-blue-500 transition duration-300"
              ></textarea>
            </div>
            <div className="flex justify-center">
              {isSending ? <IsSendingButtonUI /> : <SendBottonUI />}
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Contact;
