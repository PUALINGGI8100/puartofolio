
import React from "react";
import { Link } from "react-router";
import { FaQuestion } from "react-icons/fa";
import foto from "~/assets/images/profile.png";
import Main_Skeleton from "../ui/Main_Skeleton";

const Avatar_Intro : React.FC = ()=>{
    return (
        <div className="avatar-container">
            <div className="img-wrapper">
                <Main_Skeleton />
                <Link to={"#"} className="q-link" title="ABOUT ME">
                    <FaQuestion />
                </Link>
                <span className="img-container">
                    <img src={foto} alt="Avatar" />
                </span>
                <p>&#x1F44B; Hay ...</p>
            </div>
            <div className="descriptive-wrapper">
                <h2>I'm a Tech Enthusiast</h2>
                <span className="passion-wrapper">
                    <p>Full Stack Developer</p>
                    <p>Network Engineering</p>
                    <p>Data Scientist</p>
                </span>
            </div>
        </div>
    )
}

export default Avatar_Intro;