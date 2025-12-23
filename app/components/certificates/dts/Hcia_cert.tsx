import React from "react";

import ic from "~/assets/certificates/dts.png";
import cert_fundamental from "~/assets/certificates/dts/hcia/cert-fundamental.png";
import cert_intermediate from "~/assets/certificates/dts/hcia/cert-intermediate.png";
import Main_Skeleton from "~/components/ui/Main_Skeleton";

const Hcia_cert : React.FC = ()=>{
    return (
        <section className="slide-container">
                <header>
                    <img src={ic} alt="CNA Icon" className="h-logo" />
                    <h2>HCIA (<em>DTS x HUAWEI</em>) Learning Path</h2>
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

export default Hcia_cert;