import React from "react";

import ic from "~/assets/certificates/ibm.png";
import cert from "~/assets/certificates/ibm/web/lvl1.png";

const Web_cert : React.FC = () => {
    return (
        <section className="slide-container">
                <header>
                    <img src={ic} alt="IBM Icon" className="h-logo" />
                    <h2>Web Development Fundamentals</h2>
                </header>
                <div className="slide-content">
                    <a href="#" role="article">
                        <img src={cert} alt="lvl1 cert" loading="lazy" />
                    </a>
                </div>
        </section>
    )
}

export default Web_cert;