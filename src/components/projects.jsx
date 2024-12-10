import { Component } from 'react';
import ProjectCard from './ProjectCard';
import projectsData from '../../public/Card.json';

export default class Projects extends Component {
  render() {
    return (
      <div className='bg-[#D6E9B3] py-16'>
        <div className='ProjectsMain flex flex-col items-center gap-12'>
          <h1 id='projects' className='font-bold text-[48px] text-[#160f44] '>PROJECTS</h1>
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    );
  }
}
