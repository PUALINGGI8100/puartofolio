import React from "react";
import { Outlet } from "react-router";
import Card_Projects from "~/components/projects/Card_Projects";
import Custom_TopBar from "~/components/ui/Custom_TopBar";

import "~/styles/projects.css";

const About_Layout : React.FC = () => {
    return (
        <Card_Projects>
            <Custom_TopBar header="About" />
            <Outlet />
        </Card_Projects>
    )
}

export default About_Layout;