import React from "react";

import ic from "~/assets/certificates/dqlab.png";
import cert_py_basic from "~/assets/certificates/dql/py_challange/py_dasar.png";
import cert_py_chlng from "~/assets/certificates/dql/py_challange/py_chlng.png";
import Main_Skeleton from "~/components/ui/Main_Skeleton";

const Py_Chlng : React.FC = ()=>{
    return (
        <section className="slide-container">
                <header>
                    <img src={ic} alt="CNA Icon" className="h-logo" />
                    <h2>Hackathon : Python Challange</h2>
                </header>
                <div className="relative-wrapper ">
                    <Main_Skeleton />
                    <div className="slide-content comp-2">
                        <a href="#" role="article">
                            <img src={cert_py_basic} alt="Python Fundamental For Data Science" loading="lazy" />
                        </a>
                        <a href="#" role="article">
                            <img src={cert_py_chlng} alt="Hackathon : Python Challange" loading="lazy" />
                        </a>
                        <a href="#" role="article">
                            <img src={cert_py_basic} alt="Python Fundamental For Data Science" loading="lazy" />
                        </a>
                    </div>
                </div>
        </section>
    )
}

export default Py_Chlng;