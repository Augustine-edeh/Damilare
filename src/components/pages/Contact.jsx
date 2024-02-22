import emailjs from "@emailjs/browser";
import { Spinner } from "flowbite-react";
import { useState, useRef } from "react";
import Card from "../ui/Card";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ContactForm from "../ui/contact form/ContactForm";

const Contact = () => {
  // const [isSending, SetIsSending] = useState(false);

  // const IsSendingMessageUI = () => (
  //   <button
  //     type="button"
  //     className="flex gap-x-3 bg-gray-800 text-white py-2 px-4 rounded-md opacity-80"
  //   >
  //     <Spinner size="md" className="animate-spin fill-blue-100" />
  //     <span className="">Sending...</span>
  //   </button>
  // );

  // const SendMessageBotton = () => (
  //   <button
  //     type="submit"
  //     id="submit-btn"
  //     className="bg-gray-800 text-white py-2 px-4 rounded-md transition duration-300 transform hover:scale-105"
  //   >
  //     <span className="pl-3">Send Message</span>
  //   </button>
  // );

  // form inputs refs
  // const nameInputRef = useRef(null);
  // const emailInputRef = useRef(null);
  // const messageInputRef = useRef(null);

  // const [formInputsValues, setFormInputsValues] = useState({
  //   name: "",
  //   email: "",
  //   message: "",
  // });

  // const changeHandler = () => {
  //   // Update formInputsValues using refs
  //   setFormInputsValues({
  //     name: nameInputRef.current.value,
  //     email: emailInputRef.current.value,
  //     message: messageInputRef.current.value,
  //   });
  // };

  // const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();
  //   SetIsSending(true);
  //   emailjs
  //     .sendForm("service_ktalycl", "template_dfxjcmr", form.current, {
  //       publicKey: "e1F5G0lLl-sSmRvXt",
  //     })
  //     .then(
  //       () => {
  //         SetIsSending(false);

  //         // Reset form input values to blank
  //         setFormInputsValues({
  //           name: "",
  //           email: "",
  //           message: "",
  //         });

  //         // trigger toast notification
  //         toast("Message sent succcessfully!");
  //         console.log("MESSAGE SENT!");
  //       },
  //       (error) => {
  //         SetIsSending(false);
  //         console.log("FAILED TO SEND MESSAGE...", error.text);
  //       }
  //     );
  // };

  // const submitHandler = (e) => {
  //   sendEmail(e);
  // };

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
          <ContactForm />
        </Card>
      </div>
    </div>
  );
};

export default Contact;
