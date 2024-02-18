import { motion } from "framer-motion";

const ConstructionNote = () => {
  return (
    <motion.div
      className="flex place-content-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 2,
        delay: 1.7,
        ease: "easeInOut",
      }}
    >
      <motion.div
        className="fixed bottom-0 mb-5 text-center text-green-500 bg-gray-800 p-1.5 rounded-lg"
        initial={{ y: -10 }}
        animate={{ y: 10 }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 2,
          delay: 1.7,
          ease: "easeInOut",
        }}
      >
        🚧 Project under development. 🛠️
      </motion.div>
    </motion.div>
  );
};

export default ConstructionNote;
