function Projects() {
    return <>
        <div id="projects">
            <div id="projects_selected">
                <div data-project="1" className="project">
                    <div className="project-holder"></div>
                    <h2 className="project-name">Project Name 1</h2>
                </div>
                <div data-project="2" className="project">
                    <div className="project-holder"></div>
                    <h2 className="project-name">Project Name 2</h2>
                </div>

            </div>
            <a href="#" id="projects_button">...see more</a>
        </div>
    </>;
}

export default Projects;