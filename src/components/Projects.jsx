import ProjectsCard from "./ProjectsCard";
import { projects } from "../data";
import SectionTitle from "./SectionTitle";

const Projects = () => {
  return (
    <section id="projects" className="align-element py-12 md:py-16">
      <SectionTitle text="web creations" />
      <div className="py-14 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project) => {
          return <ProjectsCard key={project.id} {...project} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
