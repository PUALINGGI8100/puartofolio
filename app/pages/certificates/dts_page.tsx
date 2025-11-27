import React from "react";
import Card_Certificates from "~/components/certificates/Card_Certificates";
import Custom_TopBar from "~/components/ui/Custom_TopBar";

import "~/styles/certificates.css";

const Dts_Page : React.FC = () => {
    return (
        <Card_Certificates>
            <Custom_TopBar header="DigiTalent Scholarship" />
        </Card_Certificates>
    )
}

export default Dts_Page;