import React from 'react';
import Card from 'react-bootstrap/Card';


const baseImageUrl = "https://raw.githubusercontent.com/bachinblack/";
const imagePath = "/master/site/picture.png";
const defaultImages = {
    "C++": "c++.png",
    "C": "c++.png",
    "C#": "csharp.png",
    "Java": "java.png",
    "JavaScript": "javascript.png",
    "CSS": "javascript.png",
    "Python": "python.png",
    "default": "default.png",
};


class Projects extends React.Component {
    constructor() {
        super();
        this.state = {
            projects: [],
        };
    }

    componentDidMount() {
        fetch('https://api.github.com/users/bachinblack/repos')
            .then((raw) => raw.json())
            .then((res) => {
                console.log(res);
                const projects = res.filter((el) => (!el.fork)).map((el) => {
                    return {
                        id: el.id,
                        name: el.name,
                        description: el.description,
                        html_url: el.html_url,
                        language: el.language || "default",
                        image: baseImageUrl + el.name + imagePath
                    };
                });
                const rows = [
                    projects.filter((_, id) => !(id % 2)),
                    projects.filter((_, id) => !!(id % 2)),
                ];
                this.setState({ projects: rows });
            });
    }

    defaultImg(target, language) {
        target.src = "/languages/" + defaultImages[language] || "./bg.jpg";
    }

    // mouseIn(el) { el.hover = true; this.forceUpdate(); }

    // mouseOut(el) { el.hover = false; this.forceUpdate();}

    render() {

        return (
            <section id="projects">
                {/* <h2 className="title">Here are my projects</h2>
                <p>These are directly fetched from github so they are up to date :)</p> */}
                {/* <div style={{height: "100%"}}> */}
                <div className="p-list">
                    {this.state.projects.map((arr, id) => (
                        <div className="row flex-nowrap" key={id}>
                            {arr.map((el, index) => (
                                <a target="_blank" rel="noopener noreferrer" href={el.html_url} className="proj" key={el.id}>
                                    <Card style={{ width: '21rem' }}>
                                        <Card.Img onError={(e) => this.defaultImg(e.target, el.language)} src={el.image} />
                                        <Card.Body>
                                            <Card.Title>{el.name}</Card.Title>
                                            <Card.Text>
                                                {el.description}
                                            </Card.Text>
                                            {/* <Card.Link href={el.html_url} title="See on github">
                                                See on github ! */}
                                            {/* <FontAwesomeIcon icon={faLocationArrow} size="2x" /> */}
                                            {/* </Card.Link> */}
                                        </Card.Body>
                                    </Card>
                                </a>
                            ))}
                        </div>
                    ))}
                {/* </div> */}
                </div>
            </section >
        );
    }

}

export default Projects;