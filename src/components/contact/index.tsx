import { motion } from "framer-motion";

export const Contact = () => {
  return (
    <div className="min-h-screen text-white bg-gradient-to-br from-[#7450e9] to-[#F9F5E0] py-[72px] sm:py-24 relative overflow-clip">
      <div className="absolute h-[375px] w-[750px] sm:w-[1536px] sm:h-[768px] lg:w-[2400px] llg:h-[800px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border border-[#B48CDE] bg-[radial-gradient(closest-side,#000_82%,#9560EB)] top-[calc(100%-96px)] sm:top-[calc(100%-120px)]"></div>
      <div className="container relative">
        <div className="flex justify-center mt-8 ">
          <div className="inline-flex relative">
            <h1 className="text-7xl sm:text-9xl font-bold tracking-tightner text-center inline-flex">
              Contactme
            </h1>
            <motion.div
              className="absolute right-[478px] top-[108px] hidden sm:inline"
              drag
              dragSnapToOrigin
            >
              <img
                src="/cursor.png"
                alt="cursor"
                height={200}
                width={200}
                className="max-w-none"
                draggable="false"
              />
            </motion.div>
            <motion.div
              className="absolute left-[498px] top-[56px] hidden sm:inline"
              drag
              dragSnapToOrigin
            >
              <img
                src="/message.png"
                alt="cursor"
                height={200}
                width={200}
                className="max-w-none"
                draggable="false"
              />
            </motion.div>
          </div>
        </div>
        <div className="flex justify-center">
          <p className="text-xl text-center mt-8 max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit quod
            dicta, nisi autem dignissimos consequatur? Unde saepe eius nam.
            Minima at quaerat non quae qui consequatur hic nam neque earum.
          </p>
        </div>
        <div className="flex justify-center mt-8"></div>
      </div>
    </div>
  );
};
export default Contact;
