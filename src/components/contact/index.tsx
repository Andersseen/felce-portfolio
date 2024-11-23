import { motion } from "framer-motion";
import { LampContainer } from "./lamp";

export const Contact = () => {
  return (
    <LampContainer className="py-[72px] sm:py-24 relative overflow-clip">
      <div className="absolute h-[375px] w-[750px] sm:w-[1536px] sm:h-[768px] lg:w-[2400px] llg:h-[800px] rounded-[100%] left-1/2 -translate-x-1/2 bg-[radial-gradient(closest-side,#7450e9_82%,#F9F5E0)] top-[calc(100%-96px)] sm:top-[calc(200%-20px)]"></div>
      <div className="container relative">
        <div className="flex justify-center mt-8 ">
          <div className="inline-flex relative">
            <motion.h1
              className="text-7xl sm:text-9xl font-bold tracking-tightner text-center inline-flex text-secondary"
              initial={{ opacity: 0.5, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
            >
              Contactme
            </motion.h1>
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
              className="absolute left-[498px] top-[128px] hidden sm:inline"
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
      </div>
    </LampContainer>
  );
};
export default Contact;
