import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "myCryptoTracker",
    description:
      "A Cryptocurrency Tracking App include Top 10 cryptocurrencies, Trending coins, and a customizable Watchlist.",
    image: "/projects/project1.PNG",
    tags: ["React", "TailwindCSS", "Redux Toolkit"],
    demoUrl: "https://mycryptotrackerr.netlify.app/",
    githubUrl: "https://github.com/AkshatSrivastava08/myCryptoTracker",
  },
  {
    id: 2,
    title: "HomeScout",
    description:
      "A real estate web app for discovering and listing properties with map integration and real-time chat system.",
    image: "/projects/project2.PNG",
    tags: ["React", "Leaflet.js", "socket.io", "SCSS"],
    demoUrl: "https://github.com/AkshatSrivastava08/Real_estate_webapp",
    githubUrl: "https://github.com/AkshatSrivastava08/Real_estate_webapp",
  },
  {
    id: 3,
    title: "DevCraftr",
    description:
      "Code Editor for HTML, CSS, and JavaScript with live preview functionality for real-time editing and rendering.",
    image: "/projects/project3.PNG",
    tags: ["React", "CSS", "codemirror library"],
    demoUrl: "https://devcraftr.netlify.app/",
    githubUrl: "https://github.com/AkshatSrivastava08/DevCraftr",
  },
  {
    id: 4,
    title: "The Book Burrow",
    description:
      "A Web platform to search for various books using google books api.",
    image: "/projects/project4.PNG",
    tags: ["React", "CSS", "google books api"],
    demoUrl: "https://thebookburrow.netlify.app/",
    githubUrl: "https://github.com/AkshatSrivastava08/Book_Library_app",
  },
  {
    id: 5,
    title: "Gourmet Gems",
    description:
      "A Web Application to search for various Food Recipes using TheMealDB api.",
    image: "/projects/project5.PNG",
    tags: ["React", "Node.js", "TheMealDB api"],
    demoUrl: "https://gourmetgems.netlify.app/",
    githubUrl: "https://github.com/AkshatSrivastava08/Recipe_app",
  },
  {
    id: 6,
    title: "Pomodor app",
    description:
      "A pomodoro web app with 25 mins work timer and 5 mins break timer to increase focus.",
    image: "/projects/project6.PNG",
    tags: ["React", "Node.js"],
    demoUrl: "https://pomodorotimerwebapp.netlify.app/",
    githubUrl: "https://github.com/AkshatSrivastava08/POMODORO_app",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/AkshatSrivastava08"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
