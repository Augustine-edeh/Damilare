import emailjs from "@emailjs/browser";
import { useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SendMessageBotton from "./SendMessageButton";
import SpinnerLoader from "./SpinnerLoader";

const ContactForm = () => {
  const [isSending, SetIsSending] = useState(false);

  //   form ref
  const form = useRef();

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

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_ktalycl", "template_dfxjcmr", form.current, {
        publicKey: "e1F5G0lLl-sSmRvXt",
      })
      .then(
        () => {
          SetIsSending(false);

          // Reset form input values to blank
          setFormInputsValues({
            name: "",
            email: "",
            message: "",
          });

          // trigger toast notification
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
    SetIsSending(true);
    sendEmail(e);
  };
  return (
    <form ref={form} onSubmit={submitHandler}>
      <ToastContainer />
      <div className="mb-4">
        <label
          htmlFor="user_name"
          className="inline-block text-gray-700 font-semibold text-lg mb-2"
        >
          Name
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
          placeholder="Enter your name"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="user_email"
          className="inline-block text-gray-700 font-semibold text-lg mb-2"
        >
          Email
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
          placeholder="Enter your email"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="message"
          className="inline-block text-gray-700 font-semibold text-lg mb-2"
        >
          Message
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
          placeholder="Enter your message"
        ></textarea>
      </div>
      <div className="flex justify-center">
        {isSending ? <SpinnerLoader /> : <SendMessageBotton />}
      </div>
    </form>
  );
};

export default ContactForm;
