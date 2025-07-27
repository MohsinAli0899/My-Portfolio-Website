import React from "react";
import { Menu, X, Download } from "lucide-react";
import { ThemeToggle } from "./theme/ThemeToggle";
import { Button } from "./ui/button";
import "./Navbar.scss";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const handleDownload = () => {
    const fileUrl =
      "https://drive.google.com/file/d/1R4vqooKyfX-YpoFmqLqMYYq2fJPGhwZy/view?usp=drive_link";
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "resume.pdf";
    link.target = "_blank";
    link.click();
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-row">
          <div className="navbar-logo">
            <span className="navbar-title">Portfolio</span>
          </div>

          <div className="navbar-links">
            <a href="#home" className="navbar-link">
              Home
            </a>
            <a href="#about" className="navbar-link">
              About
            </a>
            <a href="#experience" className="navbar-link">
              Experience
            </a>
            <a href="#projects" className="navbar-link">
              Projects
            </a>
            {/* <a href="#achievements" className="navbar-link">Achievements</a> */}
            <div
              style={{ gap: "1.5rem", display: "flex", flexDirection: "row" }}
            >
              <ThemeToggle />
              <Button className="navbar-resume-btn" onClick={handleDownload}>
                <Download size={16} /> Resume
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
