import React from "react";
import Card_Certificates from "~/components/certificates/Card_Certificates";
import Custom_TopBar from "~/components/ui/Custom_TopBar";

import "~/styles/certificates.css";

const Ibm_Page : React.FC = () => {
    return (
        <Card_Certificates>
            <Custom_TopBar header="IBM SkillsBuild" />
        </Card_Certificates>
    )
}

export default Ibm_Page;