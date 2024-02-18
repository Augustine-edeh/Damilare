import { motion } from "framer-motion";

const HeroSection = () => {
  const profileImgLink = "https://i.ibb.co/x5DpzW3/Damilare-with-Mic.png";

  return (
    <>
      <div
        id="home"
        className="min-h-screen bg-gray-800 flex flex-col lg:flex-row justify-center gap-10 h-full pb-10 px-5 text-blue-100"
      >
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
              className="bg-gray-400 w-fit rounded-full p-2 shadow-lg"
            >
              <motion.img
                src={profileImgLink}
                alt="profile image"
                loading="lazy"
                initial={{ x: -1000, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  // repeat: Infinity,
                  // repeatType: "reverse",
                  duration: 2,
                  delay: 1.4,
                  ease: "easeInOut",
                }}
                className="h-64 rounded-full z-0 shadow-2xl"
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
    </>
  );
};

export default HeroSection;
