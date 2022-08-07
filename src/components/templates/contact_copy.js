import React from "react";
import "./scss/contact.scss";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import BookIcon from "@mui/icons-material/Book";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";

function ContactCopy() {
  // const [isOpen, setIsOpen] = useState(false);

  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const actions = [
    {
      icon: <EmailIcon />,
      name: "Email",
      onClick: () => {
        navigator.clipboard.writeText("schlee9703@gmail.com").then(() => {
          alert("Email Address Copied!");
        });
      },
    },
    {
      icon: <GitHubIcon />,
      name: "Github",
      onClick: () => {
        openInNewTab("https://github.com/FREEZ2385");
      },
    },
    {
      icon: <LinkedInIcon />,
      name: "LinkedIn",
      onClick: () => {
        openInNewTab("https://linkedin.com/in/sangcheol-lee/");
      },
    },
    {
      icon: <BookIcon />,
      name: "Blog",
      onClick: () => {
        openInNewTab("https://freez2385.github.io/");
      },
    },
  ];

  return (
    <SpeedDial
      ariaLabel="SpeedDial openIcon example"
      sx={{ position: "fixed", bottom: "3vh", right: "2vw" }}
      icon={
        <SpeedDialIcon
          icon={<LocalPhoneIcon style={{ color: "#FFFFFF" }} />}
          openIcon={<PersonAddIcon style={{ color: "#FFFFFF" }} />}
        />
      }
    >
      {actions.map((action) => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
          onClick={action.onClick}
        />
      ))}
    </SpeedDial>
  );
}

export default ContactCopy;
