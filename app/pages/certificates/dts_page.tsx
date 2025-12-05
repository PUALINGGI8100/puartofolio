import React from "react";
import Card_Certificates from "~/components/certificates/Card_Certificates";
import Hcia_cert from "~/components/certificates/dts/Hcia_cert";
import Net_adm from "~/components/certificates/dts/Net_adm";
import Custom_TopBar from "~/components/ui/Custom_TopBar";

const Dts_Page : React.FC = () => {
    return (
        <Card_Certificates>
            <Custom_TopBar header="DigiTalent Scholarship" />
            <section className="content-container">
                <Net_adm />
                <Hcia_cert />
            </section>
        </Card_Certificates>
    )
}

export default Dts_Page;