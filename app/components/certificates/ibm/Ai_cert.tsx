import React from "react";

import ic from "~/assets/certificates/ibm.png";
import cert from "~/assets/certificates/ibm/ai/lvl1.png";
import Main_Skeleton from "~/components/ui/Main_Skeleton";

const Ai_cert : React.FC = () => {
    return (
        <section className="slide-container">
                <header>
                    <img src={ic} alt="IBM Icon" className="h-logo" />
                    <h2>Artificial Intelligence Fundamentals</h2>
                </header>
                <div className="relative-wrapper">
                    <Main_Skeleton />
                    <div className="slide-content">
                        <a href="#" role="article">
                            <img src={cert} alt="Lvl1 cert" loading="lazy" />
                        </a>
                    </div>
                </div>
        </section>
    )
}

export default Ai_cert;