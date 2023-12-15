const ProjectCard = ({ name, image, technologies, link }) => {
    return (
        <div className="project-card" onClick={() => window.open(link, '_blank')}>
            <div className="project-image" style={{ backgroundImage: `url(${image})` }}>
                <div className="project-info">
                    <h3>{name}</h3>
                    <p className="technologies">{technologies}</p>
                </div>
            </div>
            <h3 className="project-title">{name}</h3>
        </div>
    );
};

export default ProjectCard;

