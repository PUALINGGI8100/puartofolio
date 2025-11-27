import React from "react";
import Card_Certificates from "~/components/certificates/Card_Certificates";
import Custom_TopBar from "~/components/ui/Custom_TopBar";

import "~/styles/certificates.css";

const G_Page : React.FC = () => {
    return (
        <Card_Certificates>
            <Custom_TopBar header="Dicoding" />
        </Card_Certificates>
    )
}

export default G_Page;