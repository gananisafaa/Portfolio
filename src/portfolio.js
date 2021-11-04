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
    " I am passionate about Machine Learning, Web and Mobile development 🚀 ." +
      " I was fortunate to be able to develop my skills within EMSI: Moroccan School of Engineering Sciences. " +
      "Being a student in the fifth year of this school, I want to become an AI programmer." +
      " Thanks to my various experiences I was able to develop during these years soft skills such as:" +
      " -A great capacity for learning; -A great capacity for adaptation; -Very good at team working. "

  ),
  resumeLink:
    "https://drive.google.com/file/d/1T9G2k5BLQ_YjviiLAuqybZzlZiv2ghOG/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/gananisafaa",
  linkedin: "https://www.linkedin.com/in/saf%C3%A2a-ganani-7a3535195/",
  gmail: "ganani.safaa.works@gmail.com",
  gitlab: "https://gitlab.com/gananisafaa",
  facebook: "https://www.facebook.com/safaa.gs.10/",
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
      "⚡ Use Machine Learning to train models and make machines more intelligent "
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [

    {
      skillName: "TensorFlow",
      logo: require("./assets/images/tensorflow.png"),
    },
    {
      skillName: "Python",
      logo: require("./assets/images/python.png"),
    },
    {
      skillName: "Java",
      logo: require("./assets/images/java.png"),
    },

    {
      skillName: "Kotlin",
      logo: require("./assets/images/kotlin.png"),
    },
    {
      skillName: "Dart",
      logo: require("./assets/images/dart.png"),
    },
    {
      skillName: "Android Native",
      logo: require("./assets/images/android.png"),
    },
    {
      skillName: "Flutter",
      logo: require("./assets/images/flutter.png"),
    },
    {
      skillName: "SpringBoot",
      logo: require("./assets/images/spring.png"),
    },
    {
      skillName: "Angular",
      logo: require("./assets/images/angular.png"),
    },
    {
      skillName: "MySQL",
      logo: require("./assets/images/mysql.png"),
    },
    {
      skillName: "MariaDB",
      logo: require("./assets/images/mariadb.png"),
    },
    {
      skillName: "Oracle",
      logo: require("./assets/images/oracle.png"),
    },
    {
      skillName: "Docker",
      logo: require("./assets/images/docker.png"),
    },
    {
      skillName: "Gitlab",
      logo: require("./assets/images/gitlab.png"),
    },
    {
      skillName: "Jira",
      logo: require("./assets/images/jira.png"),
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
      Stack: "Machine Learning", //Insert stack or technology you have experience in
      progressPercentage: "75%" //Insert relative proficiency in percentage
    },
    {
      Stack: "SpringBoot",
      progressPercentage: "80%"
    },
    {
      Stack: "Frontend",
      progressPercentage: "70%"
    },
    {
      Stack: "Scrum",
      progressPercentage: "80%"
    },

  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Mobile Developer Intern",
      company: "Firethunder",
      companylogo: require("./assets/images/firethunder.png"),
      date: "July 2020 – August 2020",
      desc:
        "Mobile Development using Flutter",
      descBullets: [
        "Mobile App that manages flows between doctors and nurses",

      ]
    },
    {
      role: "Backend Developer Intern",
      company: "World Audit",
      companylogo: require("./assets/images/waLogo.png"),
      date: "July 2021 – September 2021",
      desc:
        "Web Development using SpringBoot - Kotlin - KeyCloak ",
      descBullets: [
        "• Lead the team \n" +
        "• Creat the project design \n" +
        "• Develop the backend of the application based on: \n" +
        "     - Clean Architecture \n" +
        "     - Domain Driven Design \n" +
        "     - Micro services \n" +
        "• Deploy the application at the server level",

      ],
    },

  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Academic Projects",
  subtitle: "SOME PROJECTS THAT I HAVE DONE DURING MY STUDIES",
  projects: [

    {
      image: require("./assets/images/face.png"),
      projectName: "Face Recognition ",
      projectDesc: "Recognise Faces on a WebCam and detect their gender and age",
      footerLink: [

      ]
    },
    {
      image: require("./assets/images/staff.jpg"),
      projectName: "HospitalApp",
      projectDesc: "Mobile App that manages flows between doctors and nurses, using Flutter",
      footerLink: [

      ]
    },
    {
      image: require("./assets/images/digitalBanking.png"),
      projectName: "Digital Banking",
      projectDesc: "Mobile/Web App that Allows access to your Bank account information, transfer money and pay public bills",
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
      title: "Neural Network And  Deep Learning - Coursera",
      subtitle:
          "This course will make you familiar with the significant technological" +
          " trends driving the rise of deep learning; build, train," +
          " and apply fully connected deep neural networks; implement " +
          "efficient (vectorized) neural networks; identify key parameters" +
          " in a neural network’s architecture; " +
          "and apply deep learning to your own applications.",
      image: require("./assets/images/coursera.png"),
      footerLink: [
        {
          name: "View More",
          url:
            "https://certificate.bcdiploma.com/check/B6DB3723594EBE7F92DBD786051867AA602D515C5BCE0EA74D0E7A91F16B2BE7Y1hwNTl1YXpYZEwraCtoZ1BLd0RxRUl0Nk1SczBYZWMrMkVKc3RmTzdwOGoxd3h2"
        },

      ]
    },
    {
      title: "Social Skills - Honoris United Universities",
      subtitle:
          ". Improve your personal effectiveness\n" +
          ". Give a boost to your communication style\n" +
          ". Get your team working together",
      image: require("./assets/images/softSkills.png"),
      footerLink: [
        {
          name: "View More",
          url:
              "https://certificate.bcdiploma.com/check/B6DB3723594EBE7F92DBD786051867AA602D515C5BCE0EA74D0E7A91F16B2BE7Y1hwNTl1YXpYZEwraCtoZ1BLd0RxRUl0Nk1SczBYZWMrMkVKc3RmTzdwOGoxd3h2"
        },

      ]
    },
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
      "When it comes to working in a team, not everyone’s cut out for it. But the reality is, teamwork is one of " +
          "the most vital competencies in most forms of employment. "
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
  email_address: "ganani.safaa.works@gmail.com"
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
