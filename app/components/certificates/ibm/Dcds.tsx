import React from "react";

import ic from "~/assets/certificates/ibm.png";
import dcds_lvl1_1 from "~/assets/certificates/ibm/dcds/lvl1-1.png";
import dcds_lvl1_2 from "~/assets/certificates/ibm/dcds/lvl1-2.png";
import dcds_lvl2 from "~/assets/certificates/ibm/dcds/lvl2.png";
import dcds_final from "~/assets/certificates/ibm/dcds/final.png";
import Main_Skeleton from "~/components/ui/Main_Skeleton";

const Dcds : React.FC = () => {
    return (
        <section className="slide-container">
                <header>
                    <img src={ic} alt="IBM Icon" className="h-logo" />
                    <h2>Data Classification and Summarization</h2>
                </header>
                <div className="relative-wrapper">
                    <Main_Skeleton />
                    <div className="slide-content ibm comp-4">
                        <a href="#" role="article">
                            <img src={dcds_final} alt="DCDS Final" loading="lazy" />
                        </a>
                        <a href="#" role="article">
                            <img src={dcds_lvl1_1} alt="DCDS LVL 1-1" loading="lazy" />
                        </a>
                        <a href="#" role="article">
                            <img src={dcds_lvl1_2} alt="DCDS LVL 1-2" loading="lazy" />
                        </a>
                        <a href="#" role="article">
                            <img src={dcds_lvl2} alt="DCDS LVL 2" loading="lazy" />
                        </a>
                        <a href="#" role="article">
                            <img src={dcds_final} alt="DCDS Final" loading="lazy" />
                        </a>
                    </div>
                </div>
        </section>
    )
}

export default Dcds;