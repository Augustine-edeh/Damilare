const SendMessageButton = () => {
  return (
    <button
      type="submit"
      id="submit-btn"
      className="bg-gray-800 text-white py-2 px-4 rounded-md transition duration-300 transform hover:scale-105 focus:bg-gray-700 focus:scale-105 hover:bg-gray-700"
    >
      <span>Send Message</span>
    </button>
  );
};

export default SendMessageButton;
