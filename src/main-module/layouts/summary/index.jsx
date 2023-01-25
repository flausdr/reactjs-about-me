import Profile from './profile';
import Project from './project';

import JsonProjects from './info-projects/projects.json';

import './style.scss';

const Summary = () => {
    const arr = JsonProjects.map(project => {
        return <Project {...project} key={project.className}/>
    })
    return (
        <>
            <Profile />
            { arr }
        </>
    )
};

export default Summary;