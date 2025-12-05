import React from "react";
import Card_Certificates from "~/components/certificates/Card_Certificates";
import NE_Path from "~/components/certificates/cna/NE_path";
import WEB_path from "~/components/certificates/cna/WEB_path";
import Custom_TopBar from "~/components/ui/Custom_TopBar";

const Cna_Page : React.FC = () => {
    return (
        <Card_Certificates>
            <Custom_TopBar header="Cisco Network Academy" />
            <section className="content-container">
                <NE_Path />
                <WEB_path />
            </section>
        </Card_Certificates>
    )
}

export default Cna_Page;