import React, { useState } from "react";
import Footer from "../SharedComponents/Footer";
import "./index.css";
import sheMentors from "../../img/projects/sheMentorsAfrica.png";
import todo from "../../img/projects/todoApp.png";
import pigGame from "../../img/projects/pigGame.png";
import chrisProject from "../../img/projects/chrisProject.jpeg";
import Jenkins from "../../img/projects/jenkins.png";
import weatherAndDisaters from "../../img/projects/weather&Disaster.png";
import weatherCenter from "../../img/projects/weatherCenter.png";
import SmartShoppingCart from "../../img/projects/smartShoppingApp.jpeg";
import { GrNext, GrPrevious } from "react-icons/gr";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Typography } from "@mui/material";

const Project = () => {
  const initialEndIndex = () => {
    if (window.innerWidth < 480) {
      return 0;
    } else if (window.innerWidth < 800) {
      return 1;
    } else {
      return 2;
    }
  };
  const [startOSIndex, setStartOSIndex] = useState(0);
  const [startGPIndex, setStartGPIndex] = useState(0);
  const [startPSIndex, setStartPSIndex] = useState(0);
  const [endOSIndex, setEndOSIndex] = useState(initialEndIndex());
  const [endGPIndex, setEndGPIndex] = useState(initialEndIndex());
  const [endPSIndex, setEndPSIndex] = useState(initialEndIndex());
  const [value, setValue] = React.useState(0);

  const PersonalProjects = [
    {
      imgSrc: sheMentors,
      title: "She Mentors Africa",
      description:
        "A web mentoring application to connect young African women to other women with experience to bridge the gender gap",
      technologies: [
        "React",
        "JavaScript",
        "AWS Amplify",
        "DynamoDb",
        "ExpressJs",
      ],
      url: "https://dev.d355u8qyf4162x.amplifyapp.com/",
      githubUrl: "https://github.com/ciradu2204/SheMentorsAfrica",
    },
    {
      imgSrc: todo,
      title: "To Do App",
      description:
        "A TO DO APP which allows you to add, delete, submit and edit items. To edit items, simply click the edit icon.",
      technologies: ["React", "JavaScript", "CSS"],
      url: "https://ciradu2204.github.io/React-todo-app/",
      githubUrl: "https://github.com/ciradu2204/React-todo-app",
    },
    {
      imgSrc: pigGame,
      title: "Pig Game",
      description: "A simple dice game",
      technologies: ["HTML", "CSS", "JavaScript"],
      url: "https://ciradu2204.github.io/Pig-game/",
      githubUrl: "https://github.com/ciradu2204/Pig-game",
    },
  ];

  const OpenSourceProjects = [
    {
      imgSrc: chrisProject,
      title: "ChRIS Project UI",
      description:
        "ChRIS is a general-purpose, open source, distributed data and computation platform that connects a community of researchers, developers, and clinicians together.",
      technologies: [
        "React",
        "PatternFly",
        "Redux",
        "SCSS",
        "TypeScript",
        "JavaScript",
      ],
      url: "https://nightly.chrisproject.org/",
      githubUrl: "https://github.com/ciradu2204/ChRIS_ui",
    },
    {
      imgSrc: Jenkins,
      title: "Jenkins.io",
      description: "A static site for the Jenkins automation serve",
      technologies: ["HTML", "Markdown"],
      url: "https://www.jenkins.io/",
      githubUrl: "https://github.com/jenkins-infra/jenkins.io",
    },
    {
      imgSrc: Jenkins,
      title: "Jenkins",
      description: "Jenkins automation server",
      technologies: ["HTML", "Java"],
      url: "https://www.jenkins.io/",
      githubUrl: "https://github.com/jenkinsci/jenkins",
    },
    {
      imgSrc: Jenkins,
      title: "Jenkins Infra",
      description:
        "Jenkins main control repo for R10k and our Puppet Enterprise managed infrastructure",
      technologies: ["HTML", "Java"],
      url: "https://www.jenkins.io/projects/infrastructure/",
      githubUrl: "https://github.com/jenkins-infra/jenkins-infra",
    },
  ];

  const GroupProjects = [
    {
      imgSrc: weatherAndDisaters,
      title: "Weather & Disaster",
      description:
        "a web application that provides weekly weather forecast and natural disaster news",
      technologies: ["React", "HTML", "CSS"],
      url: "https://unruffled-austin-162ed2.netlify.app/",
      githubUrl: "https://github.com/ciradu2204/Weather-Disasters-Tracker",
    },
    {
      imgSrc: weatherCenter,
      title: "Weather Center",
      description:
        "a web application that provides weekly/hourly forecast and suggests activities based on the weather",
      technologies: ["React", "HTML", "CSS", "API"],
      url: "https://mlh-prep-22-nov-prep-2-project.netlify.app/",
      githubUrl: "https://github.com/MLH-Fellowship/prep-project-22.NOV.PREP.2",
    },
    {
      imgSrc: SmartShoppingCart,
      title: "Smart Shopping List",
      description:
        "A “smart” shopping list app that learns your buying habits and helps remember what to buy next time",
      technologies: ["React", "HTML", "SCSS", "Firebase"],
      githubUrl: "https://github.com/the-collab-lab/tcl-25-smart-shopping-list",
    },
  ];
  const handleNext = (projects) => {
    if (projects === "OS") {
      if (endOSIndex < OpenSourceProjects.length - 1) {
        setEndOSIndex((prev) => prev + 1);
        setStartOSIndex((prev) => prev + 1);
      }
    } else if (projects === "GP") {
      if (endGPIndex < GroupProjects.length - 1) {
        setEndGPIndex((prev) => prev + 1);
        setStartGPIndex((prev) => prev + 1);
      }
    } else {
      if (endPSIndex < GroupProjects.length - 1) {
        setEndPSIndex((prev) => prev + 1);
        setStartPSIndex((prev) => prev + 1);
      }
    }
  };

  const handlePrev = (projects) => {
    if (projects === "OS") {
      if (startOSIndex > 0) {
        setStartOSIndex((prev) => prev - 1);
        setEndOSIndex((prev) => prev - 1);
      }
    } else if (projects === "GP") {
      if (startGPIndex > 0) {
        setStartGPIndex((prev) => prev - 1);
        setEndGPIndex((prev) => prev - 1);
      }
    } else {
      if (startPSIndex > 0) {
        setStartPSIndex((prev) => prev - 1);
        setEndPSIndex((prev) => prev - 1);
      }
    }
  };



  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            TabIndicatorProps={{
              style: {
                backgroundColor: "#C0A062"
              }
            }}
            centered
          >
            <Tab label={<span style={{ color: '#C0A062', fontWeight: "bold" }}>Personal Project</span>} {...a11yProps(0)} />
            <Tab label={<span style={{ color: '#C0A062', fontWeight: "bold" }}>Open Source Projects</span>} {...a11yProps(1)} />
            <Tab label={<span style={{ color: '#C0A062', fontWeight: "bold" }}>Group Projects</span>} {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <div className="projectsContainer">
            <div className="projectContainer">
              {startPSIndex > 0 &&<GrPrevious
                onClick={() => handlePrev("PS")}
                color="green"
                size={"35px"}
                className="prevIcon"
              />}
              {PersonalProjects.filter(
                (element, index) => index >= startPSIndex && index <= endPSIndex
              ).map((project, index) => (
                <ProjectTemplate project={project} key={index} />
              ))}
              {endPSIndex < PersonalProjects.length-1 &&<GrNext onClick={() => handleNext("PS")} className="nextIcon" />}
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <div className="projectsContainer">
            <div className="projectContainer">
             {startOSIndex > 0 &&<GrPrevious
                onClick={() => handlePrev("OS")}
                color="green"
                size={"35px"}
                className="prevIcon"
              />}
              {OpenSourceProjects.filter(
                (element, index) => index >= startOSIndex && index <= endOSIndex
              ).map((project, index) => (
                <ProjectTemplate project={project} key={index} />
              ))}
              {endOSIndex < OpenSourceProjects.length-1 &&<GrNext onClick={() => handleNext("OS")} className="nextIcon" />}
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <div className="projectsContainer">
            <div className="projectContainer">
            {startGPIndex > 0 &&<GrPrevious
                onClick={() => handlePrev("GP")}
                color="green"
                size={"35px"}
                className="prevIcon"
              />}
              {GroupProjects.filter(
                (element, index) => index >= startGPIndex && index <= endGPIndex
              ).map((project, index) => (
                <ProjectTemplate project={project} key={index} />
              ))}
              {endGPIndex < GroupProjects.length-1 &&<GrNext onClick={() => handleNext("GP")} className="nextIcon" />}
            </div>
          </div>{" "}
        </TabPanel>
      </div>
      <Footer />
    </>
  );
};

export const ProjectTemplate = ({ project }) => {
  return (
    <div className="project">
      <img src={project.imgSrc} alt={project.title} />
      <h3>{project.title}</h3>
      <p className="description">{project.description}</p>
      <div className="overlay">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="projectLanguages">
          {project.technologies.map((technology, index) => (
            <span index={index}>{technology}</span>
          ))}
        </div>
        <div className="button">
          {project.url && (
            <a target="_blank" href={project.url} rel="noreferrer">
              Visit App
            </a>
          )}
        </div>
       <div className="button">
          {project.githubUrl && (
            <a target="_blank" href={project.githubUrl} rel="noreferrer">
              GitHub Repo
            </a>
          )}
       </div>
      </div>
      <div id="square"></div>
    </div>
  );
};
export function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}


function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
export default Project;
