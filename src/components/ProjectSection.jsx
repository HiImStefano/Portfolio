import React from 'react'
import { Github, ArrowRight, ExternalLink } from "lucide-react";
import pangeaImage from "@/assets/Pangea.JPG";
import shoeLagoonImage from "@/assets/ShoeLagoonLogo.PNG";

const projects = [
    {
        title: "Pangea",
        description: "A Full Stack E-Commerce Site created using React, Node.Js, Firebase DB.",
        image: pangeaImage,
        tags: ["React.js", "Node.js", "Firebase"],
        link: "https://github.com/HiImStefano/Pangea-Ecommerce-Store"
    },
    {
        title: "Shoe Lagoon",
        description: "A Mobile Application for E-Commerce created using React-Native, Node.js, and Firebase.",
        image: shoeLagoonImage,
        tags: ["React-Native", "Node.js", "JavaScript"],
        link: "https://github.com/HiImStefano/ShoeLagoon"
    }
]

export const ProjectSection = () => {
    return <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                {" "}
                Feature <span className="text-primary">Projects</span>
            </h2>

            <p className="text-center text-muted-foregound mb-12 max-w-2xl mx-auto">
                Heare are some of the projects that I have worked on in the past. Each Project showcase my skills in different technologies and frameworks.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project,key) => (
                    <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                        <div className="h-48 overflow-hidden">
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        </div>
                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag) => (
                                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                                        {tag}
                                    </span>
                                ))}                        
                            </div>    
                        
                        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                        <p className="text-muted-foreground mb-4">{project.description}</p>
                        <div className="flex justify-between items-center">
                            <div className="flex space-x-3">
                                <a href={project.link} target="_blank" className='text-foreground/80 hover:text-primary transition-colors duration-300' rel="noopener noreferrer">
                                    <Github size={20}/>
                                </a>
                            </div>
                        </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-center mt-12">
                <a href="https://github.com/HiImStefano" target="_blank" className="galaxy-button w-fit flex items-center mx-auto gap-2">
                    View More Projects <ArrowRight size={16} />
                </a>
            </div>
        </div>
    </section>
}