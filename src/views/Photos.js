import React from 'react';
import Card from 'react-bootstrap/Card';


const slideImages = [
  {
    href: 'https://lh3.google.com/u/1/d/14e8mJR9ZqoYu9GJB6jKwGnm3mQ78Zxsg=w1920-h949-iv1',
    name: 'coffee'
  }
];

const Slideshow = () => {
  return (
    <section className="photos">
      <div className="p-list">
          {slideImages.map((el, id) => (
            // <a target="_blank" rel="noopener noreferrer" className="proj" key={index}>
                <Card key={id}>
                    <Card.Img src={el.href} />
                    <Card.Body>
                        <Card.Title>{el.name}</Card.Title>
                        <div className="line"></div>
                        {/* <Card.Text>
                            {el.description}
                        </Card.Text> */}
                    </Card.Body>
                </Card>
            // </a>
          ))}
      </div>
    </section>
  )
}

export default Slideshow;