import React from "react";
import { Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import "./Experience.scss";

const Experience = () => {
  const experiences = [
    {
      company: "Mintways Technologies Private Limited",
      position: "Software Engineer",
      period: `May 2024 - Present`,
      description: [
        `Over the past few years, I’ve worked on some exciting projects across healthcare, education, and legal tech — turning complex ideas into intuitive web and mobile experiences. I led a team to build a platform that helps law firms manage patents and trademarks more efficiently. I also helped design smoother payment and renewal flows that saved users a lot of time.`,
        `In healthcare, I worked on a mobile app that lets doctors and patients manage appointments and profiles with ease. I’ve even helped streamline school systems by making them faster and more reliable. Across every project, my goal has been simple: build things that are fast, user-friendly, and actually make people’s lives easier.`,
      ],
    },
    {
      company: "Gyan Decoder",
      position: "Mobile App Developer",
      period: `July 2021 – Feb 2022`,
      description: [
        `I worked on a mobile app where I built key features like Sign In, Sign Up, and the User Dashboard using Java and Kotlin, following structured design patterns like MVC and MVVM. By integrating Firebase authentication, we made the onboarding process smoother and faster — improving user sign-up speed by 25%. I also focused heavily on testing and debugging during development, which helped catch critical issues early and led to a 30% drop in production bugs, making the app more stable and reliable for users.`,
      ],
    },
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        <motion.h2
          className="experience-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Experience
        </motion.h2>
        <div className="experience-grid">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="experience-card">
                <CardHeader>
                  <div className="experience-header">
                    <div className="experience-icon">
                      <Briefcase size={20} className="experience-icon-svg" />
                    </div>
                    <div>
                      <CardTitle className="experience-position">
                        {exp.position}
                      </CardTitle>
                      <CardDescription className="experience-meta">
                        {exp.company} • {exp.period}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="experience-content">
                  {exp.description.map((para, i) => (
                    <p key={i} className="experience-description">
                      {para}
                    </p>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
