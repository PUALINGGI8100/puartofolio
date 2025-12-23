import React from "react";
import { Outlet } from "react-router";
import Card_Certificates from "~/components/certificates/Card_Certificates";

import "~/styles/certificates.css";

const Certificates_Layout : React.FC = () => {
    return (
        <Outlet />
        // <Card_Certificates>
        // </Card_Certificates>
    )
}

export default Certificates_Layout;