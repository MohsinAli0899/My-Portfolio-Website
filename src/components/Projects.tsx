import React from "react";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import "./Projects.scss";

import annuityImg from "../assets/annuity.jpg";

const Projects = () => {
  const projects = [
    {
      title: "KA Global IP",
      description:
        "A comprehensive and scalable digital platform designed to manage and streamline IP renewals for patents, trademarks, designs, and utility models. Built for global law firms and clients, this system allows customers to track and renew their intellectual property assets with ease. Key features include automated renewal workflows, payment management, and role-based dashboards for clients, firms, and admins. The platform also provides graphical insights and reports for tracking upcoming renewals, jurisdiction-wise status, and financial overviews. Admins can handle bulk renewals, track client activity, and process payments securely, while clients benefit from real-time visibility and proactive notifications. Designed with a clean UI and integrated with robust APIs, KA Global IP ensures operational efficiency and data accuracy across the IP lifecycle.",
      image: annuityImg,
      technologies: [
        "React.js",
        ".Net",
        "Microsoft SQL",
        "Web Scrapping",
        "Stripe Payment Gateway",
      ],
      github: "",
      // details:
      //   "Features include user role management, Real Time Notification and payment gateway integration.",
    },
    {
      title: "VitalSync - Health App",
      description:
        "VitalSync is a cross-platform healthcare app designed to streamline patient care and clinic operations. Users can manage their profiles, book doctor appointments, and track upcoming visits with ease. On the other side, doctors handle their schedules and transactions, while admins oversee doctors, manage leads, and maintain system data—all from a unified dashboard. The app was developed as a collaborative project at Mintways Technologies, and is now live on both the Google Play Store and Apple App Store, delivering a complete healthcare management experience for both users and providers.",
      image:
        "https://img.freepik.com/free-vector/medical-booking-app-concept_23-2148562986.jpg?t=st=1746959391~exp=1746962991~hmac=752354a4f372fe221fa0b5f4e41735ad59408098272290141f731b34d427b058&w=2000",
      technologies: [
        "React Native",
        ".Net",
        "Redux Toolkit",
        "Microsoft SQL",
        "Microservice using Node.js",
        "Firebase Cloud Messaging",
      ],
      github: "",
      live: "https://play.google.com/store/apps/details?id=com.doctorproject",
      // details:
      //   "Features include user role management, Real Time Notification and payment gateway integration.",
    },
    {
      title: "Gurukul Saarthi - School Management Application",
      description:
        "A robust, full-featured school management system designed to simplify and digitize everyday operations for educational institutions. This mobile application provides a unified platform for administrators, teachers, students, and parents to interact seamlessly. Built using Flutter with BLoC for state management, and integrated with Firebase and custom REST APIs, the app delivers real-time updates, secure authentication, and scalable data handling.",
      image:
        "https://img.freepik.com/free-vector/flat-university-concept_23-2148174524.jpg?t=st=1746959494~exp=1746963094~hmac=47107acaa75255648b6d4d878f28cae2b94c27bf8bb47c370f59ac44fae4d932&w=1380",
      technologies: [
        "Flutter",
        ".Net",
        "BLoC State Management",
        "Microsoft SQL",
        "Firebase Cloud Messaging",
      ],
      github: "",
      live: "https://play.google.com/store/apps/details?id=com.app.gurukul_sarathi&hl=en",
      // details:
      //   "Features include user role management, Real Time Notification and payment gateway integration.",
    },
    {
      title: "TT Global - Asset Tracker App",
      description:
        "A lightweight and intuitive mobile application built to track shipments and manage assets in real-time. This app enables users to monitor the status of assets, upload images as proof of delivery or condition, and accept or reject shipments with remarks. Designed with a user-friendly interface, it supports efficient logistics management by offering features like live status updates, image documentation, and action-based workflows (accept/reject). Built with Flutter and integrated with backend APIs, the app ensures smooth performance and reliable data syncing, even in low-connectivity environments.",
      image:
        "https://img.freepik.com/free-vector/warehouse-management-system-concept-illustration_114360-100.jpg?t=st=1746959660~exp=1746963260~hmac=3d7ea522fa8dcfc926c22f498a5130c779cbfa2ee3ff37519731f032056bb790&w=2000",
      technologies: ["Flutter", ".Net", "GetX", "Firebase Crashlytics"],
      github: "",
      live: "https://play.google.com/store/apps/details?id=com.app.ttgphotosstorage&pcampaignid=web_share",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <motion.h2
          className="projects-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="project-card">
                <CardHeader>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                  />
                </CardHeader>
                <CardContent>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription className="project-description">
                    {project.description}
                  </CardDescription>
                  <div className="project-technologies">
                    {project.technologies.map((tech) => (
                      <HoverCard key={tech}>
                        <HoverCardTrigger>
                          <span className="project-tech-badge">{tech}</span>
                        </HoverCardTrigger>
                        {/* <HoverCardContent>{project.details}</HoverCardContent> */}
                      </HoverCard>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="project-footer">
                  {
                    <>
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-footer-link"
                        >
                          <Github size={16} className="mr-1" /> Code
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-footer-link"
                        >
                          <ExternalLink size={16} className="mr-1" /> Live On
                          Play Store
                        </a>
                      )}
                    </>
                  }
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
