import gsap from "gsap";
import React, { useState } from "react";
import "./scss/contact.scss";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import BookIcon from "@mui/icons-material/Book";
import { IconButton } from "@mui/material";

function Contact() {
  const [isOpen, setIsOpen] = useState(false);

  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleClose = () => {
    gsap.fromTo(
      ".contact",
      { x: "-19vw", duration: 0.2 },
      { x: 0, duration: 0.6 }
    );
    setIsOpen(false);
  };

  const handleOpen = () => {
    gsap.fromTo(
      ".contact",
      { x: 0, duration: 0.2 },
      { x: "-19vw", duration: 1.0, ease: "elastic.out(0.8, 0.5)" }
    );
    setIsOpen(true);
  };

  return (
    <div
      className="contact"
      onMouseEnter={() => {
        if (!isOpen) {
          handleOpen();
        }
      }}
      onMouseLeave={() => {
        if (isOpen) {
          handleClose();
        }
      }}
    >
      <div className="contact-open-button">
        <PersonAddIcon className="contact-icon" style={{ color: "#FFFFFF" }} />
      </div>
      <div className="contact-area">
        <IconButton
          aria-describedby="email"
          size="small"
          onClick={() => {
            navigator.clipboard.writeText("schlee9703@gmail.com").then(() => {
              alert("Email Address Copied!");
            });
          }}
        >
          <EmailIcon className="contact-icon" style={{ color: "#FFFFFF" }} />
        </IconButton>
        <IconButton
          size="small"
          onClick={() => {
            openInNewTab("https://github.com/FREEZ2385");
          }}
        >
          <GitHubIcon className="contact-icon" style={{ color: "#FFFFFF" }} />
        </IconButton>
        <IconButton
          size="small"
          onClick={() => {
            openInNewTab("https://www.linkedin.com/in/sangcheol-lee/");
          }}
        >
          <LinkedInIcon className="contact-icon" style={{ color: "#FFFFFF" }} />
        </IconButton>
        <IconButton
          size="small"
          onClick={() => {
            openInNewTab("https://freez2385.github.io/");
          }}
        >
          <BookIcon className="contact-icon" style={{ color: "#FFFFFF" }} />
        </IconButton>
      </div>
    </div>
  );
}

export default Contact;
