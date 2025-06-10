import { useState } from "react";
import { cn } from "@/lib/utils";
import { Code, Database, Wrench } from "lucide-react"; // Optional icons

const skills = [
  // Frontend
  { name: "HTML/CSS", category: "frontend" },
  { name: "JavaScript", category: "frontend" },
  { name: "React", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },

  // Backend
  { name: "Node.js", category: "backend" },
  { name: "Express", category: "backend" },
  { name: "MongoDB", category: "backend" },
  { name: "PostgreSQL", category: "backend" },

  // Tools
  { name: "Git/GitHub", category: "tools" },
  { name: "Postman", category: "tools" },
  { name: "VS Code", category: "tools" },
  { name: "Notion", category: "tools" },
];

const categories = [
  { key: "all", label: "All", icon: <Wrench size={16} /> },
  { key: "frontend", label: "Frontend", icon: <Code size={16} /> },
  { key: "backend", label: "Backend", icon: <Database size={16} /> },
  { key: "tools", label: "Tools", icon: <Wrench size={16} /> },
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map(({ key, label, icon }) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={cn(
                "flex items-center space-x-2 px-5 py-2 rounded-full transition-all duration-300 capitalize border",
                activeCategory === key
                  ? "bg-primary text-primary-foreground border-transparent"
                  : "bg-card hover:bg-muted text-foreground border-muted"
              )}
            >
              {icon}
              <span>{label}</span>
            </button>
          ))}
        </div>

        {/* Skill Tags */}
        <div className="flex flex-wrap justify-center gap-4">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="px-5 py-2 text-sm font-medium rounded-full bg-muted text-foreground border border-border hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              {skill.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
