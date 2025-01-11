"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "HIMATIKA Website",
    description:
      "A website for the informatics student association of my university. It features a blog, events, a gallery, and a dashboard for member.",
    image: "/img/himatika.png",
    technology: "Nuxt.js, Tailwind CSS, MongoDB",
    link: "https://himatika-itsnupekalongan.com",
  },
  {
    title: "PDF QR Code Signature",
    description: "A web app to sign PDF files using QR code.",
    image: "/img/signatures.jpeg",
    technology: "Next.js, Tailwind CSS, pdf.js, jsQR",
    link: "https://signatures.himatika-itsnupekalongan.com",
  },
  // {
  //   title: "Project 3",
  //   description: "A brief description of Project 3 and its key features.",
  //   image: "/placeholder.svg?height=200&width=300",
  //   link: "https://project3.example.com",
  // },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src={project.image}
                alt={project.title}
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  View Project
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
