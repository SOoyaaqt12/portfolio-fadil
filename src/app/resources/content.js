import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Fadil",
  lastName: "Atha Zharif",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Front End Web Developer",
  avatar: "/images/profil.jpeg",
  location: "Asia/Jakarta", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Bahasa"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/fadilzhar",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/fadil-zharif11/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:fadilathazharif@gmail.com",
  },
  {
    name: "Whatsapp",
    icon: "whatsapp",
    link: "https://wa.me/6281514567956/"
  }
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Website engineer and builder</>,
  subline: (
    <>
      I'm Zharif, <InlineCode>a Front End Web Developer</InlineCode> with 
      Back End<br/> and UI/UX Design skill. I create amazing and interactive Websites.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Zharif is a Front end Web Developer with passion for designing and making Simple but elegant websites. Raised in Jakarta and England, with Intermediate to Expert English Language, UI/UX Design skill and Public Speaking.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "SMP IT AL Bunyan Boarding School",
        timeframe: "January 2024",
        role: "Teacher",
        achievements: [
          <>
            I had the opportunity to be able to teach in my Alma meter, SMP IT Al Bunyan, and I asked some of my friends to accompany me to teach design and give a seminar about my experiences being in a organization such as the Student Council
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "KV Shah Alam Selangor - Malaysia",
        timeframe: "October 2024",
        role: "Teacher",
        achievements: [
          <>
            I had the opportunity to be able to attend a teaching program provided by my school, IDN Boarding School, to Malaysia, Selangor. In KV Shah Alam, I taught college students Web Development using TailwindCSS and Database using Laravel. I was with 4 of my friends from different branches of IDN Boarding School. We taught for 5 days and we taught 20 college students.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Markas Mobil - Jogjakarta ",
        timeframe: "November 2024",
        role: "Project, Front End Developer",
        achievements: [
          <>
            I had the opportunity to make a Web project for a company named Markas Mobil located in Yogyakarta, for a program called Business Survival offered by IDN Boarding School. The project was completed in total of 5 days and is now online in google with the domain .com available to search. I used Native HTML and CSS and a little JavaScript to complete this project.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "STMIK Tazkia - Bogor",
        timeframe: "September 2024",
        role: "Project, Front End Developer",
        achievements: [
          <>
            I had the opportunity to make a Web project for a school named STMIK Tazkia located in Kab. Bogor. Me and 4 of my friends were offered by STMIK Tazkia to make a Landing Page for their PKK Website and Kabupaten. We used CSS Framework: TailwindCSS and Flowbite to complete this project and it took us 4 days to complete.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Ark Charter Academy - Portsmouth, UK",
        description: <>Junior High School.</>,
      },
      {
        name: "SMP IT AL BUNYAN - Bogor, Indonesia",
        description: <>Junior High School</>,
      },
      {
        name: "SMK IDN Boarding School - Bogor, Indonesia",
        description: <>Senior High School</>,
      },
    ],
  },
    organization: {
    display: true, // set to false to hide this section
    title: "Organization",
    organization: [
      {
        name: "SMK IDN Boarding School",
        description: <>Student Council Leader of English Division</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "HTML",
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "CSS",
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "BootStrap",
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "TailwindCSS",
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Flowbite",
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};


const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // All projects will be listed on the /home and /work routes
};



export { person, social, newsletter, home, about, work, };
