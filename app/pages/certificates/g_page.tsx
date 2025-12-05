import React from "react";
import Card_Certificates from "~/components/certificates/Card_Certificates";
import Ds_path from "~/components/certificates/g/ds_path";
import Custom_TopBar from "~/components/ui/Custom_TopBar";

const G_Page : React.FC = () => {
    return (
        <Card_Certificates>
            <Custom_TopBar header="Dicoding" />
            <section className="content-container">
                <Ds_path />
            </section>
        </Card_Certificates>
    )
}

export default G_Page;