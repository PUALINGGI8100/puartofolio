
import React from "react";
import foto from "~/assets/images/profile.png";

const Avatar_Intro : React.FC = ()=>{
    return (
        <div className="avatar-container">
            <div className="img-wrapper">
                <img src={foto} alt="Avatar" />
                <p>&#x1F44B; Hay ...</p>
            </div>
            <div className="descriptive-wrapper">
                <h2>I'm a Tech Enthusiast</h2>
                <span className="passion-wrapper">
                    <p>Full Stack Developer</p>
                    <p>Network Engineering</p>
                    <p>Data Science</p>
                </span>
            </div>
        </div>
    )
}

export default Avatar_Intro;