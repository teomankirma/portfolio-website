import { calculateAge } from "@/utils";

const age = calculateAge();

export const CONSTANTS = {
  common: {
    age: age,
    emailLabel: "Email:",
    emailAddress: "teomankirma@gmail.com",
    location: "Los Angeles, CA",
  },
  ENGLISH: {
    // General
    fullName: "Teoman Kirma",
    nameLabel: "Name:",
    ageLabel: "Age:",
    fromLabel: "From:",
    downloadResumeLabel: "Download Resume",

    // Headings
    home: "Home",
    knowMeMore: "Know Me More",
    whatIDo: "What I Do",
    resume: "Resume",
    clientSpeak: "Client Speak",
    getInTouch: "Get In Touch",

    // Home
    welcome: "Welcome",
    typewriter: [
      "I'm Teoman Kirma.",
      "I'm a Software Engineer.",
      "I'm a Frontend Developer.",
    ],
    basedIn: `based in Los Angeles, CA.`,
    hireMe: "Hire Me",

    // Know Me More
    knowMeMoreA: "I'm Teoman Kirma, a Frontend Developer.",
    knowMeMoreB: `Hello, my name is Teoman. I'm ${age} years old and a recent graduate of Software Engineering from Nisantasi University. I currently live in Los Angeles and work as a Frontend Developer. In the future, I aim to specialize in Artificial Intelligence. In my free time, I enjoy playing basketball, playing the guitar, and diving into video games.`,
    knowMeMoreC:
      "I have hands-on experience with modern frontend technologies such as React, TypeScript, and Tailwind CSS. Additionally, my academic background has given me a solid foundation in programming languages like Java, C#, and Dart.",
    experienceA: "5+",
    experienceB: "Years Experience",
    projectsA: "40+",
    projectsB: "Projects Done",
  },
  TURKISH: {
    // General
    fullName: "Teoman Kırma",
    nameLabel: "İsim:",
    ageLabel: "Yaş:",
    fromLabel: "Konum:",
    downloadResumeLabel: "CV'mi İndirin",

    // Headings
    home: "Anasayfa",
    knowMeMore: "Hakkımda",
    whatIDo: "Neler Yapıyorum",
    resume: "Özgeçmiş",
    clientSpeak: "Müşteri Yorumları",
    getInTouch: "İletişime Geç",

    // Home
    welcome: "Hoş Geldiniz",
    typewriter: [
      "Ben Teoman Kırma.",
      "Yazılım Mühendisiyim.",
      "Frontend Developerım.",
    ],
    basedIn: "Los Angeles, CA'da yaşıyorum.",
    hireMe: "Beni İşe Alın",

    // Know Me More
    knowMeMoreA: "Ben Teoman Kırma, bir Frontend Geliştiricisiyim.",
    knowMeMoreB: `Merhaba, benim adım Teoman. ${age} yaşındayım ve Nişantaşı Üniversitesi Yazılım Mühendisliği bölümünden yeni mezun oldum. Şu anda Los Angeles'ta yaşıyorum ve Frontend Geliştirici olarak çalışıyorum. Gelecekte yapay zeka alanında uzmanlaşmayı hedefliyorum. Boş zamanlarımda basketbol oynamayı, gitar çalmayı ve video oyunlarıyla vakit geçirmeyi seviyorum.`,
    knowMeMoreC:
      "React, TypeScript ve Tailwind CSS gibi modern frontend teknolojileri konusunda pratik deneyime sahibim. Ayrıca, üniversite eğitimim sayesinde Java, C# ve Dart gibi programlama dillerinde de sağlam bir altyapıya sahibim.",
    experienceA: "5+",
    experienceB: "Yıl Deneyim",
    projectsA: "40+",
    projectsB: "Tamamlanan Projeler",
  },
};
