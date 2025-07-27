import {
  Award,
  Trophy,
  Medal,
  Brain,
  ExternalLink,
  StarIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import "./Achievements.scss";

const Achievements = () => {
  const achievements = [
    {
      icon: <Trophy className="h-8 w-8 text-yellow-500" />,
      title: "Software Development Leadership",
      description:
        "Led the development of core features in enterprise applications, contributing to successful project deliveries.",
    },
    {
      icon: <Brain className="h-8 w-8 text-purple-500" />,
      title: "Data Structure And Algorithms",
      description:
        "Solved 300+ Data Structures and Algorithms problems on different coding platforms such as LeetCode, GFG, and Code360 by coding ninjas.",
      link: "https://leetcode.com/u/itstabrez/",
    },
    {
      icon: <Award className="h-8 w-8 text-blue-500" />,
      title: "Certifications",
      description:
        "C++ Programming Step By Step From Beginner To Ultimate Level (Udemy)",
      link: "https://www.udemy.com/certificate/UC-9c2c3526-3114-4ab8-9f74-26e60f032453/",
    },
    {
      icon: <Medal className="h-8 w-8 text-green-500" />,
      title: "Certification",
      description: "HackerRank SQL (Intermediate) Certification",
      link: "https://www.hackerrank.com/certificates/dc3bd5715335",
    },
    {
      icon: <StarIcon className="h-8 w-8 text-red-500" />,
      title: "Certification",
      description: "Build Zomato Clone using AI - Cuvette Workshop",
      link: "https://drive.google.com/file/d/1UDbWtr8pgdgSZ8HQJKQtKdBkCy8DJu4E/view?usp=sharing",
    },
  ];

  return (
    <section id="achievements" className="achievements-section">
      <div className="achievements-container">
        <motion.h2
          className="achievements-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Achievements
        </motion.h2>
        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="achievement-card">
                <CardHeader>
                  <div className="achievement-icon-wrapper">
                    {achievement.icon}
                  </div>
                  <CardTitle className="achievement-title">
                    {achievement.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="achievement-description">
                    {achievement.description}
                  </p>
                </CardContent>
                <CardFooter className="achievement-footer">
                  {achievement.link && index !== 0 && (
                    <a
                      href={achievement.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="achievement-link"
                    >
                      <ExternalLink
                        size={16}
                        className="achievement-link-icon"
                      />{" "}
                      Link
                    </a>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
