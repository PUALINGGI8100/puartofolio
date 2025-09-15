
import React from "react";
import Card_Intro from "~/components/intro/Card_Intro";
import Avatar_Intro from "~/components/intro/Avatar_Intro";
import Social_Intro from "~/components/intro/Social_Intro";
import Nav_Intro from "~/components/intro/Navs_Intro";
import "~/styles/intro.css";

const Intro_Page : React.FC = () => {
    return (
        <Card_Intro>
            <Avatar_Intro />
            <Nav_Intro />
            <Social_Intro />
        </Card_Intro>
    )
}

export default Intro_Page;