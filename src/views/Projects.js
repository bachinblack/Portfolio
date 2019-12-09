import './Projects.css'

import React from 'react';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons'


const baseImageUrl = "https://raw.githubusercontent.com/bachinblack/";
const imagePath = "/master/res/board.png";


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
                    image: baseImageUrl + el.name + imagePath
                };
            })
            this.setState({projects}, () => {
                // this.state.projects.forEach((el) => {
                //     var test = new XMLHttpRequest();
                //     const img = baseImageUrl + el.name + imagePath;

                //     test.open('HEAD', img, false);
                //     test.send();

                //     if (test.status == 200) {
                //         el.image = img;
                //     }
                // });
                // this.forceUpdate();
            });
        });
    }

    defaultImg(evt) {
        evt.target.src = './bg.jpg'
    }

    render() {

        return (
            <section id="projects">
                <h2 className="title">Here are my projects</h2>
                <p>These are directly fetched from github so they are up to date :)</p>
                <div className="row flex-nowrap p-list">
                    {this.state.projects.map((el) => (
                        <div className="proj" key={el.id}>
                            <Card style={{ width: '21rem' }}>
                                <Card.Img onError={this.defaultImg.bind(this)} src={el.image} />
                                <Card.Body>
                                    <Card.Title>{el.name}</Card.Title>
                                    <Card.Text>
                                        {el.description}
                                    </Card.Text>
                                    <Card.Link href={el.html_url} title="See on github">
                                        See on github !
                                    {/* <FontAwesomeIcon icon={faLocationArrow} size="2x" /> */}
                                    </Card.Link>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </div>
            </section>
        );
    }

}

export default Projects;