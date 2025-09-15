
import React from "react";
import { FaGlobe } from "react-icons/fa";
import { MdScience } from "react-icons/md";
import { Link } from "react-router";

const Index_Projects : React.FC = ()=> {
    return (
        <section className="content-container">
            <Link to={"web"} className="content-card content-link">
                <FaGlobe className="link-icon" />
                <div className="link-texts-wrapper">
                    <h2>WEB DEVELOPMENT</h2>
                    <p>Software developmnet based on WEB technology.</p>
                </div>
            </Link>
            <Link to={"#"} className="content-card content-link">
                <MdScience className="link-icon" />
                <div className="link-texts-wrapper">
                    <h2>DATA ANALYSTS</h2>
                    <p>Data Analysts end to end projects.</p>
                </div>
            </Link>
        </section>
    )
}

export default Index_Projects;