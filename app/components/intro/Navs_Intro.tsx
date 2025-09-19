
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
                    <span role="definition">
                        <p className="hidden md:block">Projects</p>
                        <p className="block md:hidden">Projs</p>
                    </span>
                </Link>
                <Link to={"achievements"} className="nav-item" title="ACHIEVEMENTS">
                    <FaMedal  className="nav-icon" />
                    <span role="definition">
                        <p className="hidden md:block">Achievements</p>
                        <p className="block md:hidden">Achvs</p>
                    </span>
                </Link>
                <Link to={"certificates"} className="nav-item" title="Course & Certificates">
                    <LiaCertificateSolid  className="nav-icon" />
                    <span role="definition">
                        <p className="hidden md:block">Certificates</p>
                        <p className="block md:hidden">Certs</p>
                    </span>
                </Link>
            </span>
        </section>
    )
}

export default Nav_Intro;