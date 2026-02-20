import React, {Component} from "react";
import Zmage from "react-zmage";
import Fade from "react-awesome-reveal";

class Portfolio extends Component {
    render() {
        if (!this.props.data) return null;

        // use index from map to generate keys instead of a shared counter
        const projects = this.props.data.projects.map((project, index) => {
            const projectImage = "images/portfolio/" + project.image;

            return (
                <div
                    key={index}
                    className="portfolio-item"
                    onClick={() => window.open(project.url, "_blank")}
                    style={{ cursor: "pointer" }}
                >
                    <div className="item-wrap">
                        <Zmage alt={project.title} src={projectImage} />
                        <div style={{ textAlign: "center" }}>{project.title}</div>
                    </div>
                </div>
            );
        });

        return (
            <section id="portfolio">
                <Fade left duration={1000} distance="40px">
                    <div className="row">
                        <div className="twelve columns collapsed">
                            <h1>Check out some of my works</h1>
                            <div
                                id="portfolio-wrapper"
                                className="bgrid-quarters s-bgrid-thirds cf"
                                style={{
                                    display: "grid",
                                    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                                    gap: "20px",
                                }}
                            >
                                {projects}
                            </div>
                        </div>
                    </div>
                </Fade>
            </section>
        );
    }
}

export default Portfolio;