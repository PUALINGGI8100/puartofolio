import React from "react";
import { Outlet } from "react-router";

import "~/styles/certificates.css";

const Certificates_Layout : React.FC = () => {
    return (
        <Outlet />
    )
}

export default Certificates_Layout;