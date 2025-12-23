import React from "react";

import ic from "~/assets/certificates/cisco_NA.png";
import cert_html from "~/assets/certificates/cna/web_path/cert-html.png";
import cert_js from "~/assets/certificates/cna/web_path/cert-js.png";
import Main_Skeleton from "~/components/ui/Main_Skeleton";

const WEB_path : React.FC = ()=>{
    return (
        <section className="slide-container">
                <header>
                    <img src={ic} alt="CNA Icon" className="h-logo" />
                    <h2>Web Development Career Path</h2>
                </header>
                <div className="relative-wrapper">
                    <Main_Skeleton />
                    <div className="slide-content dts">
                        <a href="#" role="article">
                            <img src={cert_html} alt="HTML Essentials" loading="lazy" />
                        </a>
                        <a href="#" role="article">
                            <img src={cert_js} alt="JS Essentials 2" loading="lazy" />
                        </a>
                        <a href="#" role="article">
                            <img src={cert_html} alt="HTML Essentials" loading="lazy" />
                        </a>
                    </div>
                </div>
            </section>
    )
}

export default WEB_path;