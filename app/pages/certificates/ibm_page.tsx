import React from "react";
import Card_Certificates from "~/components/certificates/Card_Certificates";
import Ai_cert from "~/components/certificates/ibm/Ai_cert";
import Dcds from "~/components/certificates/ibm/Dcds";
import Web_cert from "~/components/certificates/ibm/Web_cert";
import Custom_TopBar from "~/components/ui/Custom_TopBar";

const Ibm_Page : React.FC = () => {
    return (
        <Card_Certificates>
            <Custom_TopBar header="IBM SkillsBuild" />
            <section className="content-container">
                <Dcds />
                <Ai_cert />
                <Web_cert />
            </section>
        </Card_Certificates>
    )
}

export default Ibm_Page;