
import React from "react";
import { FaGithub } from "react-icons/fa";

import "~/styles/ui/git_card.css";

interface Props {
    src: string
}

const Git_Card : React.FC<Props> = ({ src }) => {
    return (
        <div className="component git-container">
            <a href={src} target="_blank" className="icon-wrapper">
                <FaGithub className="ic" />
            </a>
            <span className="text-wrapper">
                <a href={src} target="_blank">{src}</a>
            </span>
        </div>
    )
}

export default Git_Card;