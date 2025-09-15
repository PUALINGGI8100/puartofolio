import React from "react";
import { Outlet } from "react-router";
import Card_Projects from "~/components/projects/Card_Projects";
import Custom_TopBar from "~/components/ui/Custom_TopBar";

import "~/styles/projects.css";

const Projects_Layout : React.FC = () => {
    return (
        <Card_Projects>
            <Custom_TopBar header="Projects" />
            <Outlet />
        </Card_Projects>
    )
}

export default Projects_Layout;