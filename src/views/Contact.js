import React from 'react';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import {
    faLinkedin,
    faGithub,
    faStackOverflow,
} from '@fortawesome/free-brands-svg-icons';


function fallbackCopyTextToClipboard(text) {
    var textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";  //avoid scrolling to bottom
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
        document.execCommand('copy');
        NotificationManager.success('Copied on your clipboard !');
    } catch (err) {
        NotificationManager.error('Failed to copy on your clipboard !');
    }

    document.body.removeChild(textArea);
}

function cpyText(text) {
    if (!navigator.clipboard) {
        fallbackCopyTextToClipboard(text);
        return;
    }
    navigator.clipboard.writeText(text).then(function() {
        NotificationManager.success('Copied on your clipboard !');
      }, function(err) {
        NotificationManager.error('Failed to copy on your clipboard !');
      });
}


export default function Contact() {
    const links = [
        {
            name: "linkedin",
            icon: faLinkedin,
            link: "https://www.linkedin.com/in/philippe-bouttereux/",
        },
        {
            name: "github",
            icon: faGithub,
            link: "https://www.github.io/bachinblack/",
        },
        {
            name: "stack overflow",
            icon: faStackOverflow,
            link: "https://stackoverflow.com/users/7105919/bachinblack",
        },
    ];

    return (
        <div>
            <p>
                {links.map((el, id) => (
                    <a target="_blank" rel="noopener noreferrer" className="link" href={el.link} key={id}>
                        <FontAwesomeIcon icon={el.icon} size="2x" />
                    </a>
                ))}
            </p>
            <p>
                <a className="link" href="#" onClick={() => cpyText("+33675186213")}>
                    <FontAwesomeIcon icon={faPhone} size="2x" />
                </a>
                <a className="link" href="#" onClick={() => cpyText("philippe.bouttereux@gmail.com")}>
                    <FontAwesomeIcon icon={faEnvelope} size="2x" />
                </a>
            </p>
            <NotificationContainer />
        </div>
    );
}