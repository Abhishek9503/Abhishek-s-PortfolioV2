import { InlineCode } from "@/once-ui/components";
import Link from "next/link";

const createI18nContent = (t) => {
  const person = {
    firstName: "Abhishek",
    lastName: "Yadav",
    get name() {
      return `${this.firstName} ${this.lastName}`;
    },
    role: t("person.role"),
    avatar: "/images/avatar.jpg",
    location: "India/Indore", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: ["English", "Hindi"], // optional: Leave the array empty if you don't want to display languages
  };

  const newsletter = {
    display: true,
    title: <>{t("newsletter.title", { firstName: person.firstName })}</>,
    description: <>{t("newsletter.description")}</>,
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
    label: t("home.label"),
    title: t("home.title", { name: person.name }),
    description: t("home.description", { role: person.role }),
    headline: <>{t("home.headline")}</>,
    subline: <>{t("home.subline")}</>,
  };
  const about = {
    label: t("about.label"),
    title: t("about.label"),
    description: t("about.description", {
      name: person.name,
      role: person.role,
      location: person.location,
    }),
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
      title: t("about.intro.title"),
      description: <>{t("about.intro.description")}</>,
    }, work: {
      display: true, // set to false to hide this section
      title: t("about.work.title"), experiences: [
        {
          company: "Techdome Solutions",
          timeframe: t("about.work.experiences.Techdome.timeframe"),
          role: t("about.work.experiences.Techdome.role"),
          achievements: t(
            "about.work.experiences.Techdome.achievements"
          ).split(";"),
          images: [
            // {
            //   src: "/images/projects/project-01/cover-01.jpg",
            //   alt: "Techdome Project",
            //   width: 16,
            //   height: 9,
            // }
          ],
        },
      ],
    }, studies: {
      display: true, // set to false to hide this section
      title: "Studies",
      institutions: [
        {
          name: "Ips Academy Indore",
          description: (
            <>
              {t(
                `about.studies.institutions.Ips Academy Indore.description`
              )}
            </>
          ),
          timeframe: <>{t(`about.studies.institutions.Ips Academy Indore.timeframe`)}</>,
          cgpa: <>{t(`about.studies.institutions.Ips Academy Indore.cgpa`)}</>,
        },
      ],
    }, technical: {
      display: true, // set to false to hide this section
      title: t("about.technical.title"),
      skills: [
        {
          title: "Primary",
          description: <>{t("about.technical.skills.Primary.description")}</>,
          images: [],
        },
        {
          title: "Secondary",
          description: <>{t("about.technical.skills.Secondary.description")}</>,
          images: [],
        },
        {
          title: "Other",
          description: <>{t("about.technical.skills.Other.description")}</>,
          images: [],
        },
      ],
    },
  };

  const blog = {
    label: t("blog.label"),
    title: t("blog.title"),
    description: t("blog.description", { name: person.name }),
  };

  const work = {
    label: t("work.label"),
    title: t("work.title"),
    description: t("work.description", { name: person.name }),
  };
  const gallery = {
    label: t("gallery.label"),
    title: t("gallery.title"),
    description: t("gallery.description", { name: person.name }),
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
  return {
    person,
    social,
    newsletter,
    home,
    about,
    blog,
    work,
    gallery,
  };
};

export { createI18nContent };
