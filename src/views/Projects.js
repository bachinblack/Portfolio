import React from 'react';
import Card from 'react-bootstrap/Card';
import CPP from '../images/languages/c++.png';
import CS from '../images/languages/csharp.png';
import JAVA from '../images/languages/java.png';
import JS from '../images/languages/javascript.png';
import PYTHON from '../images/languages/python.png';
import DEFAULT from '../images/languages/default.png';


const baseImageUrl = "https://raw.githubusercontent.com/bachinblack/";
const imagePath = "/master/site/picture.png";
const defaultImages = {
    "C++": CPP,
    "C": CPP,
    "C#": CS,
    "Java": JAVA,
    "JavaScript": JS,
    "CSS": JS,
    "Python": PYTHON,
    "default": DEFAULT,
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
            const projects = res
                .filter((el) => (!el.fork))
                .sort((a, b) => Date.parse(b.created_at) - Date.parse(a.created_at))
                .map((el) => {
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
        target.src = defaultImages[language];
    }

    render() {

        return (
            <section id="projects">
                <div className="explanation">
                    <h2 className="lit">Projects</h2><br/>
                    <p className="lit">Here are my personnal projects along with some school projects</p><br/>
                    <p className="lit">These are directly fetched from <a href="https://github.io/bachinblack">Github</a></p><br/>
                    <p className="lit">Some of them are very old so please, note that my beauty standards have improved</p><br/>
                </div>
                {/* <p className="lit">Kinda shows everything I tried since I started studying computing</p><br/> */}
                <div className="p-list">
                    {this.state.projects.map((arr, id) => (
                        <div className="row flex-nowrap" key={id}>
                            {arr.map((el, index) => (
                                <a target="_blank" rel="noopener noreferrer" href={el.html_url} className="proj" key={el.id}>
                                    <Card>
                                        <Card.Img onError={(e) => this.defaultImg(e.target, el.language)} src={el.image} />
                                        <Card.Body>
                                            <Card.Title>{el.name}</Card.Title>
                                            <div className="line"></div>
                                            <Card.Text>
                                                {el.description}
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </a>
                            ))}
                        </div>
                    ))}
                </div>
            </section >
        );
    }

}

export default Projects;