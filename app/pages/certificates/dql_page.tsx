import React from "react";
import Card_Certificates from "~/components/certificates/Card_Certificates";
import Custom_TopBar from "~/components/ui/Custom_TopBar";

import "~/styles/certificates.css";

const Dql_Page : React.FC = () => {
    return (
        <Card_Certificates>
            <Custom_TopBar header="DQLab" />
        </Card_Certificates>
    )
}

export default Dql_Page;