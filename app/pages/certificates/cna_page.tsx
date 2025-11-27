import React from "react";
import Card_Certificates from "~/components/certificates/Card_Certificates";
import Custom_TopBar from "~/components/ui/Custom_TopBar";

import "~/styles/certificates.css";

const Cna_Page : React.FC = () => {
    return (
        <Card_Certificates>
            <Custom_TopBar header="Cisco Network Academy" />
        </Card_Certificates>
    )
}

export default Cna_Page;