import { Person, WithContext } from "schema-dts";

const StructuredData = () => {
  const structuredData: WithContext<Person> = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Dayan Sauqy",
    url: "https://www.iamdayy.my.id",
    sameAs: [
      "https://github.com/iamdayy",
      "https://linkedin.com/in/dayan-sauqy",
      "https://twitter.com/yourusername",
    ],
    jobTitle: "Fullstack Developer",
    worksFor: {
      "@type": "Organization",
      name: "Your Company or Freelance",
    },
    image: "https://www.iamdayy.my.id/img/me.png",
    description:
      "Fullstack developer specializing in React, Node.js, and modern web technologies.",
    email: "mailto:iamdayy14@gmail.com.com",
    telephone: "+6285326940952",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Pekalongan",
      addressRegion: "Central Java",
      addressCountry: "Indonesia",
    },
    knowsAbout: [
      "Web Development",
      "React",
      "Node.js",
      "JavaScript",
      "TypeScript",
      "MongoDB",
      "Tailwind CSS",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

export default StructuredData;
