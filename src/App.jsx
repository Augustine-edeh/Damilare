import { motion } from "framer-motion";

function App() {
  return (
    <div className="h-screen grid place-content-center text-white px-4">
      <motion.h2
        className="text-left text-2xl"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 1 }}
      >
        Hi there 👋,
      </motion.h2>
      <p className="text-xl line leading-relaxed">I'm</p>
      <h1 className="text-[3rem] text-center">Oluwadamilare Adamolekun</h1>
      <motion.p
        initial={{ x: -1000, opacity: 0 }}
        animate={{ x: 0, y: 20, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 1.5, delay: 1 }}
        className="text-right"
      >
        ...Welcome to my portfolio webpage
      </motion.p>

      <motion.div
        className=""
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          // repeat: Infinity,
          // repeatType: "reverse",
          duration: 2,
          delay: 1.7,
          ease: "easeInOut",
        }}
      >
        <motion.div
          className="fixed bottom-0 right-0 left-0 mb-5 text-center text-green-500"
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
    </div>
  );
}

export default App;
