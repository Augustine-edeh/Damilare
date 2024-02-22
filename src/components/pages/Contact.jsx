import Card from "../ui/Card";
import "react-toastify/dist/ReactToastify.css";
import ContactForm from "../ui/contact form/ContactForm";

const Contact = () => {
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
