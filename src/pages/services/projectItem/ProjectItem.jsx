import './ProjectItem.css'

function ProjectItem({ project, language }) {
    return (
        <div className="project-item">
            <div className="project-info">
                <img src={project.image[0].src} alt={project.image[0].alt} />
                <h4>{project.client}</h4>
                <p className="project-slogan">{project.slogan[language][0]}</p>
            </div>
        </div>
    )
}

export default ProjectItem;