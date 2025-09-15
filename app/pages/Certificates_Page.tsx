
import React from "react";
import Card_Certificates from "~/components/certificates/Card_Certificates";
import Content_Certificates from "~/components/certificates/Content_Certificates";
import Custom_TopBar from "~/components/ui/Custom_TopBar";

import "~/styles/certificates.css";

const Certificates_Page : React.FC = () => {
    return (
        <Card_Certificates>
            <Custom_TopBar header="Certificates" />
            <Content_Certificates />
        </Card_Certificates>
    )
}

export default Certificates_Page;