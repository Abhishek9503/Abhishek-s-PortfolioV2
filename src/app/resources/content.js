import { InlineCode } from "@/once-ui/components";
import Link from "next/link";

const person = {
  firstName: "Abhishek",
  lastName: "Yadav",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Software Developer Engineer Trainee",
  avatar: "/images/avatar.jpg",

  location: "India/Indore", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Hindi"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about technology, and share thoughts on the
      intersection of creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "X",
    icon: "x",
    link: "https://x.com/Abhishek9503_",
  },
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Abhishek9503",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/abhishek-yadav17/",
  },

  {
    name: "Email",
    icon: "email",
    link: "mailto:abhishek.pub9503@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Software Engineer</>,
  subline: (
    <>
      I'm Abhishek Yadav, software developer engineer
      {/* <InlineCode>
        <Link href="https://www.versa-networks.com" target="_blank" rel="noopener noreferrer">Incedo</Link>
      </InlineCode>
      , where I joined as Software Engineer Trainee . After hours, I
      build my own projects. */}
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: true,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/abhishek9503/15min",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Abhishek Yadav is a software engineer trainee at Incedo and a recent graduate in Computer
        Science and Engineering. With hands-on experience in end-to-end software
        development, she loves problem-solving and is passionate about
        building efficient and scalable web applications. Abhishek is continuously
        exploring innovative solutions to deliver optimal user experiences.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Techdome Solutions",
        timeframe: "May 2024 - Dec 2024",
        role: "Software Development Engineer 1 Intern",
        achievements: [
          <>
            Taking ownership of end-to-end features, from frontend design to
            backend implementation.
          </>,
          <>
            Delervered the requirement with each sprint following agile model , meeting all the deadline for the release
          </>,
          <>
            Created multiple section for the Sparrow App (Api Testing Platform) using Tech Stack such as Svelte , Scss , Nest.js , TypeScript , Nest.js , Bootstrap
          </>,
        ],
        images: [],
      },
      // {
      //   company: "Travander",
      //   timeframe: "June 2024 - Aug 2024",
      //   role: "Frontend Engineer",
      //   achievements: [
      //     <>
      //       Managed state for the traveler module with the Context API,
      //       overseeing data flows across 40+ components and integrating REST
      //       APIs for efficient data handling.
      //     </>,
      //     <>
      //       Implemented form validation with React Hook Form & Zod, optimized
      //       infinite scroll for trips and bookings (improving load times by
      //       25%), and integrated secure payment processing with Razorpay for
      //       100+ daily transactions.
      //     </>,
      //   ],
      //   images: [],
      // },
      // {
      //   company: "Tublian",
      //   timeframe: "March 2024 - May 2024",
      //   role: "Software Engineer Intern",
      //   achievements: [
      //     <>
      //       Built an AI ChatBot that provided personalized tutoring, answering
      //       over 10,000+ questions enhancing user learning experiences and
      //       increasing engagement by 40%.
      //     </>,
      //     <>
      //       Collaborated with the team to develop Tublian’s 8020 roadmap
      //       generator, boosting performance by 10%.
      //     </>,
      //   ],
      //   images: [],
      // },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Ips Academy Indore",
        description: <>Studied computer science and engineering.</>,
        timeframe: "June 2021 - June 2025",
        cgpa: "cgpa: 8.65",
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Primary",
        description: <>HTML, CSS, JavaScript, React , Next.js, Node.js</>,
        images: [],
      },
      {
        title: "Secondary",
        description: (
          <>Redux toolkit, Svelte, GraphQL, Git, TypeScript, MongoDB, SQL, Tailwind</>
        ),
        images: [],
      },
      {
        title: "Other",
        description: (
          <>
            Core Java (Java 8/9, Multithreading), CI/CD, Cloud (AWS/Azure/GCP),
            Microservices (REST API, SOAP, Event & Message-Based), Docker,
            Containerization, SOLID Principles, Caching (Redis), Monitoring
            (Grafana)
          </>
        ),
        images: [],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Coming Soon",
  description: "Exciting content is on its way! Stay tuned for tech insights and developer stories.",
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "vertical",
    },

  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
