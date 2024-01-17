import { motion } from "framer-motion";

function App() {
  const profileImgLink = "https://i.ibb.co/x5DpzW3/Damilare-with-Mic.png";
  return (
    <div className="h-screen  text-white px-4">
      <div className=" flex flex-col lg:flex-row justify-center gap-10 h-full pb-10 px-5">
        <section className="flex place-content-center ">
          <div className="w-fit h-fit rounded-full p-2 my-auto">
            <motion.div
              initial={{ x: -1000, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                // repeat: Infinity,
                // repeatType: "reverse",
                duration: 2,
                delay: 1.4,
                ease: "easeInOut",
              }}
              className="bg-gray-400 w-fit rounded-full p-2"
            >
              <motion.img
                src={profileImgLink}
                alt="profile image"
                initial={{ x: -1000, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  // repeat: Infinity,
                  // repeatType: "reverse",
                  duration: 2,
                  delay: 1.4,
                  ease: "easeInOut",
                }}
                className="h-64 rounded-full z-0"
              />
            </motion.div>
          </div>
        </section>

        <section className="z-10 grid place-content-center px-10">
          <motion.h2
            className="text-left text-2xl"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 1 }}
          >
            Hi there! 👋,
          </motion.h2>
          <p className="text-xl line leading-relaxed">I'm</p>
          <h1 className="text-[3rem] text-center">Oluwadamilare Adamolekun</h1>
          <motion.p
            initial={{ x: -1000, opacity: 0 }}
            animate={{ x: 0, y: 0, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 1.5, delay: 1 }}
            className="text-right mt-2"
          >
            ...Welcome to my portfolio webpage
          </motion.p>
        </section>
      </div>
      {/* <div className="bg-red-300 flex place-content-center mt-10 relative"> */}

      {/* </div> */}

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
