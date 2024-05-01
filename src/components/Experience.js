import "../styles/globals.css";

function Experience(){
    return (
        <div className = "portfolio-container">
            <div className = "portfolio-title">PORTFOLIO</div>
                <div className = "portfolio-nav-links">
                    <div className = "nav-1">Data Analysis</div>
                    <div className = "nav-2">Web Develoments</div>
                    <div className = "nav-3">Other projects</div>
                </div>
                
            <div className = "projects">
                <div className = "project-1">
                    <div className = "project-1-image">
                        <div className = "project-image-1"></div>
                    </div>
                    <div className = "project-1-text">
                        <h1 className = "project1-title">Project 1</h1>
                        <h2 className = "project1-project-name">Mental Health Data Analysis Project</h2>
                        <p className = "project1-description">Utilizing advanced Python libraries such as Numpy, Pandas, Matplotlib, Seaborn, and GeoPandas, extensive datasets from 1990 to 2017 were analyzed. This endeavor refined data analysis skills and enhanced understanding of mental health trends over the years. </p>
                    </div>
                </div>

                <div className = "project-2">
                    <div className = "project-2-image">
                        <div className = "project-image-2"></div>
                    </div>

                    <div className = "project-2-text">
                    <h1 className = "project2-title">Project 2</h1>
                    <h2 className = "project2-project-name">Toyz Website Re-Development</h2>
                    <p className = "project2-description">Led the redesign of Toyz Electronics' web-based learning platform, focusing on enhancing user experience and engagement for disadvantaged students. Employing Figma and React, the UI/UX was thoroughly revamped, leading to a remarkable 25% increase in user engagement through performance optimization. </p>
                    </div>
                </div>

                <div className = "project-1">
                    <div className = "project-1-image">
                        <div className = "project-image-1"></div>
                    </div>

                    <div className = "project-1-text">
                    <h1 className = "project1-title">Project 3</h1>
                    <h2 className = "project1-project-name">Calendar App Design</h2>
                    <p className = "project1-description">. </p>
                    </div>
                </div>

                <div className = "project-2">
                    <div className = "project-2-image">
                        <div className = "project-image-2"></div>
                    </div>

                    <div className = "project-2-text">
                    <h1 className = "project2-title">Project 4</h1>
                    <h2 className = "project2-project-name">React Generator App Design</h2>
                    <p className = "project2-description">. </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience;
