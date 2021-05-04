/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Ganani Safâa",
  title: "Hello, I'm Safâa",
  subTitle: emoji(
    " I am passionate about artificial intelligence, big data and mobile development 🚀 ." +
      " I was fortunate to be able to develop my skills within EMSI: Moroccan School of Engineering Sciences. " +
      "Being a student in the fourth year of this school, I want to become an AI programmer." +
      " Thanks to my various experiences I was able to develop during these years soft skills such as:" +
      " -A great capacity for learning; -A great capacity for adaptation; -Very good at team working. "

  ),
  resumeLink:
    "https://drive.google.com/file/d/1xLIlGiXoKG94gtYRKve6x0JpeUQ_KlyZ/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/gananisafaa",
  linkedin: "https://www.linkedin.com/in/saf%C3%A2a-ganani-7a3535195/",
  gmail: "ganani.sg@gmail.com",
  gitlab: "",
  facebook: "https://www.facebook.com/safaa.gs.10/",
  stackoverflow: "https://stackoverflow.com/users/15827087/ganani-saf%c3%a2a?tab=profile",
  instagram: "https://www.instagram.com/imsafaags/",
  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji(
      "⚡ Integration of third party services such as Firebase"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [

    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "HTML-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "Flutter",
      fontAwesomeClassname: "fas fa-laptop-code"
    },
    {
      skillName: "Android",
      fontAwesomeClassname: "fab fa-android"
    },
    {
      skillName: "ReactNative",
      fontAwesomeClassname: "fab fa-react"
    },

    {
      skillName: "Oracle-Database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Sql-Database",
      fontAwesomeClassname: "fas fa-database"
    },

    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },


  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "EMSI: Moroccan School of Engineering Sciences ",
      logo: require("./assets/images/emsi.png"),
      subHeader: "Engineering degree in Computer Science",
      duration: "September 2019 - Jully 2022",
      desc:
          "Ranked top 3 in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
    },
    {
      schoolName: "EMSI: Moroccan School of Engineering Sciences ",
      logo: require("./assets/images/emsi.png"),
      subHeader: "Preparatory Classes",
      duration: "September 2017 - Jully 2019",
      desc:
          "Ranked top 3 in the program. Took courses about Maths, Software Engineering Basics, Automatism...",
    },
    {
      schoolName: "TAZI High School",
      logo: require("./assets/images/gst.jpg"),
      subHeader: "Baccalaureate in Physics",
      duration: "September 2016 - June 2017",
      desc:
        "Ranked top 5 in the program. Took courses about Maths, Physics, Science...",
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend", //Insert stack or technology you have experience in
      progressPercentage: "75%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Scrum",
      progressPercentage: "80%"
    },
    {
      Stack: "Big Data",
      progressPercentage: "50%"
    },
    {
      Stack: "Artificial Intelligence",
      progressPercentage: "50%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Mobile Developer",
      company: "Firethunder",
      companylogo: require("./assets/images/firethunder.png"),
      date: "July 2020 – August 2020",
      desc:
        "Mobile developement using Flutter",
      descBullets: [
        "Mobile App that manages flows between doctors and nurses",

      ]
    },

  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Academic Projects",
  subtitle: "SOME PROJECTS THAT I HAVE DONE DURING MY STUDIES",
  projects: [

    {
      image: require("./assets/images/staff.jpg"),
      projectName: "HospitalApp",
      projectDesc: "Mobile App that manages flows between doctors and nurses, using Flutter",
      footerLink: [

      ]
    },
    {
      image: require("./assets/images/tictactoe.jpg"),
      projectName: "TicTacToe",
      projectDesc: "TicTacToe Game using C# and WinForms",
      footerLink: [
        {
          name: "See Project",
          url: "https://github.com/gananisafaa/TicTacToe"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/quiz.png"),
      projectName: "QuizApp",
      projectDesc: "Quiz App Using Android Native and Firebase",
      footerLink: [
        {
          name: "See Project",
          url: "https://github.com/gananisafaa/QuizzApp"
        }
        //  you can add extra buttons here.
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements and Certifications that I have done !",

  achievementsCards: [
    {
      title: "Artificial Intelligence - IBM",
      subtitle:
        "Through self-paced learning, this badge earner has displayed an understanding of topics such as Artificial Intelligence," +
          " Augmented Intelligence, Machine Learning, and Natural Language Processing.",
      image: require("./assets/images/ai.png"),
      footerLink: [
        {
          name: "View More",
          url:
            "https://www.youracclaim.com/badges/532b50fd-8a51-464c-ab88-1c69022566c2/public_url"
        },

      ]
    },
    {
      title: "Data Science & Analytics - IBM",
      subtitle:
        "Through self-paced learning, this badge earner has displayed an understanding of topics such as Data science," +
          " analytics, gathering data, and predicting trends.",
      image: require("./assets/images/ds.png"),
      footerLink: [
        {
          name: "View More",
          url:
            "https://www.youracclaim.com/badges/0b1452ae-eef1-4536-9acd-4c73349ac2c4/public_url"
        }
      ]
    },

    {
      title: "DevOps - IBM",
      subtitle: "Through self-paced learning, this badge earner has completed the skill learning journey on topics such as what is DevOps, IBM Cloud Continuous Delivery, Git repos & issues tracking, " +
          "scale applications dynamically, monitor app performance, debugging applications, and IBM Cloud Garage Method.",
      image: require("./assets/images/devops.png"),
      footerLink: [

        {
          name: "View More",
          url: "https://www.youracclaim.com/badges/65d7b653-3db5-4d4a-89c6-0e7d9062f52f/public_url"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "SOFT SKILLS AND LANGUAGES",
  subtitle:
    "",

  blogs: [
    {
       title: "Creativity",
      description:
        "Creativity is one of the soft skills and is supposed to help develop innovative solutions to problems." +
          " It requires an openness to innovation and mental flexibility."
    },
    {
      title: "Patience",
      description:
      "Patience is the ability to take a moment to step back from a situation to assess. It is realising that " +
          "decision-making should be slow and thoughtful. "
    },
    {
      title: "Team-Work",
      description:
      "PWhen it comes to working in a team, not everyone’s cut out for it. But the reality is, teamwork is one of " +
          "the most vital competencies in most forms of employment. "
    },
    {
      title: "Arabic",
      description: "Mother Tongue",

    },
    {
      title: "English",
      description: "Codelab at GDG DevFest Karachi 2019",

    },
    {
      title: "French",
      description: "Codelab at GDG DevFest Karachi 2019",

    },


  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {

  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
     {
      title: "Arabic",
      subtitle: "Native",

    },
    {
      title: "English",
      subtitle: "Fluent",

    },
    {
      title: "French",
      subtitle: "Bilinqual",

    },

  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+212 770144467",
  email_address: "ganani.sg@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
