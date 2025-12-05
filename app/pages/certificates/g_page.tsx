import React from "react";
import Card_Certificates from "~/components/certificates/Card_Certificates";
import Custom_TopBar from "~/components/ui/Custom_TopBar";

import Ds_path from "~/components/certificates/dicoding/ds_path";

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