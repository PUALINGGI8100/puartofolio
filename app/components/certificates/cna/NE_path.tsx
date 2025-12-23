import React from "react";

import ic from "~/assets/certificates/cisco_NA.png";
import cert_net_basic from "~/assets/certificates/cna/ne_path/net-basic.png";
import Main_Skeleton from "~/components/ui/Main_Skeleton";

const NE_Path : React.FC = ()=>{
    return (
        <section className="slide-container">
                <header>
                    <img src={ic} alt="CNA Icon" className="h-logo" />
                    <h2>Network Technician Career Path</h2>
                </header>
                <div className="relative-wrapper">
                    <Main_Skeleton />
                    <div className="slide-content">
                        <a href="#" role="article">
                            <img src={cert_net_basic} alt="Network Basic" loading="lazy" />
                        </a>
                    </div>

                </div>
            </section>
    )
}

export default NE_Path;