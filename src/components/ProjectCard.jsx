import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
const ProjectCard = ({ project }) => {
  const { t } = useTranslation(); 
  return (
    <div className="Projects1 flex flex-col md:flex-row items-center w-full md:w-[960px] h-auto md:h-[360px] shadow-2xl bg-[#FFFFFF] rounded-xl">
      <img
        className="ProjectImg w-full md:w-[360px] h-full md:h-[360px] rounded-xl object-contain"
        src={project.images[0].src}
        alt={project.images[0].alt}
      />
      <div className="ProjectsText flex flex-col p-4 md:pl-12">
        <h1 className="font-bold text-[32px] text-[#160f44]">{project.title}</h1>
        <p>{project.description}</p>
        <div className="TechStack flex flex-wrap gap-2 lg:gap-4 mt-4">
          {project.techStack.map((tech, index) => (
            <button
              key={index}
              className="ProjectsBtn w-[68px] h-[31px] px-5 py-2 bg-[#160f44] rounded-[23px] flex items-center justify-center text-[#FFFFFF]"
            >
              {tech}
            </button>
          ))}
        </div>
        <span className="Details flex flex-col md:flex-row gap-8 pt-4">

          <button className="ProjectsBtn w-auto h-[31px] px-5 py-2 bg-inherit border border-[#120B39] flex items-center justify-center text-[#160F44]">
            <a
              className="no-underline flex items-center justify-center w-full h-full"
              href={project.siteLink}
              target="blank"
              rel="noopener noreferrer"
            >
              <p className="font-medium text-base text-center">{t('projects.view')}</p>
            </a>
          </button>
  
          <button className="ProjectsBtn w-auto h-[31px] px-5 py-2 bg-inherit border border-[#160f44] flex items-center justify-center text-[#160f44]">
            <a
              className="no-underline flex items-center justify-center w-full h-full"
              href={project.githubLink}
              target="blank"
              rel="noopener noreferrer"
            >
              <p className="font-medium text-base text-center">Github</p>
            </a>
          </button>
        </span>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    images: PropTypes.arrayOf(
      PropTypes.shape({
        src: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
      })
    ).isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    techStack: PropTypes.arrayOf(PropTypes.string).isRequired,
    siteLink: PropTypes.string,
    githubLink: PropTypes.string,
  }).isRequired,
};

export default ProjectCard;
