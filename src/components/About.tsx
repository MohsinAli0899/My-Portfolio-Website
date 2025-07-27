import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import manImg from "../assets/man.png";
import "./About.scss";

const About = () => {
  const skills = [
    "React.js",
    "React Native",
    "Flutter",
    "JavaScript",
    "TypeScript",
    "Java",
    "Kotlin",
    "SQL",
    "Postgres",
    "RESTFul APIs",
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="about-motion"
        >
          <h2 className="about-title">About Me</h2>
          <Card className="about-card">
            <CardContent className="about-card-content">
              <div className="about-avatar-wrapper">
                <img src={manImg} alt="Avatar" className="about-avatar-img" />
              </div>
              <div className="about-description-wrapper">
                <p className="about-description">
                  I am a passionate software developer with a strong background
                  in building web and mobile applications. My journey in tech
                  started with curiosity and has grown into a career focused on
                  delivering impactful solutions.
                </p>
                <div className="about-skills">
                  {skills.map((skill) => (
                    <span key={skill} className="about-skill">
                      {skill}
                    </span>
                  ))}
                </div>
                <p className="about-description">
                  My expertise lies in creating reusable UI components,
                  integrating RESTful APIs, and managing complex application
                  state using Redux, Redux Toolkit, and React Query. I’m
                  well-versed in modern React practices, including hooks,
                  context API, and component lifecycle methods. I also bring
                  strong experience with React Navigation for structuring
                  intuitive app flows in mobile applications.
                </p>
                <p className="about-description">
                  Through thoughtful architecture and efficient workflows, I’ve
                  helped reduce development time by 40% and improved user
                  engagement by 35% in past projects. While my core stack is
                  React-based, I’m also familiar with Flutter, which I use for
                  rapid prototyping and building multi-platform experiences when
                  needed. My goal is to build scalable front-end solutions that
                  are both functional and delightful to use.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
