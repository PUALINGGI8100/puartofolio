import React from "react";

import ic from "~/assets/certificates/dts.png";
import cert_fundamental from "~/assets/certificates/dts/net_adm/cert-fundamental.png";
import cert_intermediate from "~/assets/certificates/dts/net_adm/cert-intermediate.png";
import Main_Skeleton from "~/components/ui/Main_Skeleton";

const Net_adm : React.FC = ()=>{
    return (
        <section className="slide-container">
                <header>
                    <img src={ic} alt="CNA Icon" className="h-logo" />
                    <h2>Network Administration Learning Path</h2>
                </header>
                <div className="relative-wrapper">
                    <Main_Skeleton />
                    <div className="slide-content comp-2">
                        <a href="#" role="article">
                            <img src={cert_fundamental} alt="Fundamental Cert" loading="lazy" />
                        </a>
                        <a href="#" role="article">
                            <img src={cert_intermediate} alt="Intermediate Cert" loading="lazy" />
                        </a>
                        <a href="#" role="article">
                            <img src={cert_fundamental} alt="Fundamental Cert" loading="lazy" />
                        </a>
                    </div>
                </div>
            </section>
    )
}

export default Net_adm;