import { motion, useInView } from "motion/react";
import { useRef } from "react";

export default function Skills() {
  const skillsSectionRef = useRef(null);
  const isSkillsInView = useInView(skillsSectionRef, { once: false });
  return (
    <section className="section-container overflow-hidden">
      <section
        id="skills"
        className="skills py-20 h-screen justify-center "
        ref={skillsSectionRef}
      >
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-center ">Skills</h2>

          <div className="flex justify-center gap-10 mt-0">
            <div className="grid grid-cols-4 grid-rows-4">
              {skills.map((skill, index) => (
                <motion.div
                  initial={{ x: 0, y: 0 }}
                  animate={
                    isSkillsInView
                      ? {
                          x: [Math.random() * 500 - 250, 0],
                          y: [Math.random() * 500 - 250, 0],
                        }
                      : {}
                  }
                  transition={{
                    type: "spring",
                    duration: 1,
                    ease: "easeOut",
                    delay: index * 0.3,
                  }}
                  key={index}
                  className="flex w-24 h-24 shadow-lg rounded-lg justify-center items-center m-5 hover:shadow-lg transition bg-primaryBg dark:bg-darkPrimaryBg text-primaryText dark:text-darkPrimaryText shadow-slate-500 dark:shadow-slate-900 hover:bg-secondaryBg dark:hover:bg-darkSecondaryBg"
                  whileHover={{
                    scale: [null, 1.1, 1.2],
                    transition: {
                      duration: 0.7,
                      delay: 0,
                      times: [0, 0.3, 0.7],
                      ease: ["easeIn", "easeOut"],
                    },
                  }}
                >
                  <div>{skill}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

const skills = [
  "Python",
  "C++",
  "Java",
  "JavaScript",
  "TypeScript",
  "HTML",
  "CSS",
  "PHP",
  "React Native",
  "MySQL",
  "Firebase Firestore",
  "Git",
  "GitHub",
  "Windows",
  "Linux-Ubuntu",
  "AI/ML",
];
