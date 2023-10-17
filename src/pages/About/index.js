import React from "react";
import TypeAnimation from "react-type-animation";
import { motion } from "framer-motion";
import "./About.css";
import "../../components/atoms/PrimaryBtn/PrimaryBtn.css";
import "../shared/Shared.css";
import { BottomLine, MySkill, Education } from "../../components";
import { FaDownload } from "react-icons/fa";

const About = () => {
  return (
    <div className="parent pt-16 my-16">
      <div className="">
        <motion.div
          className="mb-10"
          initial={{ y: -200, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { duration: 1, type: "spring" },
          }}
        >
          <h3 className="text-neutral text-center">Something About Myself</h3>
          <h1 className="text-4xl font-semibold drop-shadow-md text-center">
            About <span className="text-primary">Me</span>
          </h1>
          <BottomLine />
        </motion.div>

          <motion.div
            className=""
            initial={{ opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { duration: 1, delay: 1.25 },
            }}
          >
            <img
              src="https://i.ibb.co/q1TWjV3/non-background-picture1.png"
              alt=" Andrii Koshil"
              title=" Andrii Koshil"
              style={{width:'10%'}}
            />
            <h1 className="text-4xl font-semibold mb-4 text-center translate-y-[-380%] sm:translate-y-[-0%] sm:text-3xl sm:mb-2 md:text-left"> Andrii Koshil</h1>

            <div className="my-8">
              <TypeAnimation
                className="text-2xl text-primary font-bold text-center translate-y-[-500%] sm:translate-y-[-0%]  sm:text-2xl sm:mb-2 md:text-left"
                cursor={true}
                sequence={[
                  "A Mern-stack Developer",
                  2000,
                  "A Full-stack Developer",
                  2000,
                  "A Front-end Developer",
                  2000
                ]}
                wrapper="div"
                repeat={Infinity}
              />
            </div>
            <p className="text-neutral font-medium text-center translate-y-[-100%] sm:translate-y-[-0%] sm:mb-2 md:text-left">
              As a MERN stack developer, I am committed to building high-quality
              web applications that meet the needs of my clients. With years of
              experience in full-stack web development, I specialize in using
              React.js, Next js, Typescript, MongoDB, Express.js, and Node.js to
              create scalable and robust web applications.
              {/* Dedicated Front-end developer. Capable to solve working problems.
              Passionate about learning & development to reach the target. Eager
              to tackle more complex problems and continue to find ways to
              maximize user efficiency. */}
            </p>
            <br />
            <p className="text-neutral font-medium text-center translate-y-[-150%] sm:translate-y-[-0%] sm:mb-2 md:text-left">
              My passion for solving complex problems and creating innovative
              solutions drives me to stay up-to-date with the latest
              technologies and trends in the industry.
              {/* My next mission is how to become a Mern stack Developer. I would
              love to build some Giant Website which will shine myself. */}
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-4 mt-4 text-center translate-y-[-50%] sm:translate-y-[-0%] sm:mb-2 md:text-left ">
              <h2 className="font-medium">
                <span className="mr-2 text-primary">Name : </span> Andrii Koshil
              </h2>
              {/* <h2 className="font-medium">
                <span className="mr-2 text-primary">Phone : </span>+62 823 6148 4992
              </h2> */}
              <h2 className="font-medium">
                <span className="mr-2 text-primary">Email : </span>
                tonyroseman217@gmail.com
              </h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-4 mt-4 text-center translate-y-[-50%] sm:translate-y-[-0%] sm:mb-2 md:text-left ">
              <h2 className="font-medium">
                <span className="mr-2 text-primary">Address : </span> street Komunalna building 17
              </h2>
              {/* <h2 className="font-medium">
                <span className="mr-2 text-primary">Phone : </span>+62 823 6148 4992
              </h2> */}
              <h2 className="font-medium">
                <span className="mr-2 text-primary">City/Country : </span>
                Bakhmach, Ukraine
              </h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-4 mt-4 text-center translate-y-[-50%] sm:translate-y-[-0%] sm:mb-2 md:text-left ">
              <h2 className="font-medium">
                <span className="mr-2 text-primary">Postal/ZIP code : </span> 16500
              </h2>
              {/* <h2 className="font-medium">
                <span className="mr-2 text-primary">Phone : </span>+62 823 6148 4992
              </h2> */}
              <h2 className="font-medium">
                <span className="mr-2 text-primary">phone number : </span>
                +380 633587403

              </h2>
            </div>                        
          </motion.div>
      </div>

      {/* My Skill */}
      <MySkill />

      {/* Education */}
      {/* <Education /> */}
    </div>
  );
};

export default About;
