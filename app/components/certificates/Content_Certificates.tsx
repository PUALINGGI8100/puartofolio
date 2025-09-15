
import React from "react";
// icons
import DtsIcon from "~/assets/certificates/dts.png";
import CNAIcon from "~/assets/certificates/cisco_NA.png";
import IDNIcon from "~/assets/certificates/idn.png";
// cert dts
import FNAFundamental from "~/assets/certificates/dts/cert-fundamental.png";
import FNAIntermediate from "~/assets/certificates/dts/cert-intermediate.png";
// cert CNA
import CNAHtml from "~/assets/certificates/cna/cert-html.png";
// cert IDN
import IDNJaringanDasar from "~/assets/certificates/idn/cert-jkd.png";
import IDNCSDasar from "~/assets/certificates/idn/cert-csd.png";

interface Props {};

const Content_Certificates : React.FC<Props> = () => {
    return (
        <section className="content-container">

            <section className="slide-container">
                <header>
                    <img src={DtsIcon} alt="DTS Icon" className="h-logo" />
                    <h2>Digital Talent Scolarship (<em>DIGITALENT</em>)</h2>
                </header>
                <div className="slide-content dts">
                    <a href="#" role="article">
                        <img src={FNAFundamental} alt="Fundamental Network Administration" loading="lazy" />
                    </a>
                    <a href="#" role="article">
                        <img src={FNAIntermediate} alt="Intermediate Network Administration" loading="lazy" />
                    </a>
                    <a href="#" role="article">
                        <img src={FNAFundamental} alt="Fundamental Network Administration" loading="lazy" />
                    </a>
                </div>
            </section>
            <section className="slide-container cna">
                <header>
                    <img src={CNAIcon} alt="CNA Icon" className="h-logo" />
                    <h2>Cisco Networking Academy (<em>CNA</em>)</h2>
                </header>
                <div className="slide-content">
                    <a href="#" role="article">
                        <img src={CNAHtml} alt="HTML Essentials" loading="lazy" />
                    </a>
                </div>
            </section>
            <section className="slide-container idn">
                <header>
                    <img src={IDNIcon} alt="IDN Icon" className="h-logo" />
                    <h2>ID Networkings (<em>ID-N</em>)</h2>
                </header>
                <div className="slide-content dts">
                    <a href="#" role="article">
                        <img src={IDNJaringanDasar} alt="Jaringan Dasar" loading="lazy" />
                    </a>
                    <a href="#" role="article">
                        <img src={IDNCSDasar} alt="CyberSecurity Dasar" loading="lazy" />
                    </a>
                    <a href="#" role="article">
                        <img src={IDNJaringanDasar} alt="Jaringan Dasar" loading="lazy" />
                    </a>
                </div>
            </section>

        </section>
    )
}

export default Content_Certificates;