import { Spinner } from "flowbite-react";

const SpinnerLoader = () => {
  return (
    <button
      type="button"
      className="flex gap-x-3 bg-gray-800 text-white py-2 px-4 rounded-md opacity-60"
    >
      <Spinner size="md" className="text-black fill-indigo-50 animate-spin" />
      <span>Sending...</span>
    </button>
  );
};

export default SpinnerLoader;
