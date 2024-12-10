import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import ProjectCard from './ProjectCard';

export default function Projects() {
  const { t, i18n } = useTranslation(); 
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await fetch(`/local/${i18n.language}/Card.json`);
      if (response.ok) {
        const data = await response.json();
        setProjects(data);
      } else {
        console.error('Card.json yüklenemedi.');
      }
    };

    fetchProjects();
  }, [i18n.language]);

  return (
    <div className="bg-[#D6E9B3] py-16">
      <div className="ProjectsMain flex flex-col items-center gap-12">
   
        <h1 id="projects" className="font-bold text-[48px] text-[#160f44]">
          {t('projects.title')}
        </h1>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}
