
import React from "react";
import { Link } from "react-router";
import { FaMedal, FaProjectDiagram } from "react-icons/fa";
import { LiaCertificateSolid } from "react-icons/lia";

const Nav_Intro : React.FC = () => {
    return (
        <section className="nav-container">
            <span className="nav-wrapper">
                <Link to={"projects"} className="nav-item" title="PROJECTS">
                    <FaProjectDiagram  className="nav-icon" />
                    <span>Projects</span>
                </Link>
                <Link to={"achievements"} className="nav-item" title="ACHIEVEMENTS">
                    <FaMedal  className="nav-icon" />
                    <span>Achievements</span>
                </Link>
                <Link to={"certificates"} className="nav-item" title="Course & Certificates">
                    <LiaCertificateSolid  className="nav-icon" />
                    <span> Certificate</span>
                </Link>
            </span>
        </section>
    )
}

export default Nav_Intro;