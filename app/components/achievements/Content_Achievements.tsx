import React from "react";

import RLogo from "~/assets/achievements/rakamin.webp";

import Cert from "~/assets/achievements/BI_PBL_XIV/cert.webp";

import Sql from "~/assets/achievements/BI_PBL_XIV/sql.webp";
import GBQuery from "~/assets/achievements/BI_PBL_XIV/big_query.webp";
import LStudio from "~/assets/achievements/BI_PBL_XIV/looker_studio.webp";

interface Props {};

const Content_Achievemnts : React.FC<Props> = ()=>{

    return (
        <section className="content-container">
            <div className="card-container">
                <header>
                    <span className="img-wrapper">
                        <img src={RLogo} alt="" />
                    </span>
                    <h2><strong>PBI - XVI Business intellegence Analyst</strong></h2>
                </header>
                <div className="card-body">
                    <div className="content-wrapper">
                        <div className="cert-wrapper">
                            <img src={Cert} alt="" />
                        </div>
                        <div className="content-body">
                            <h3 className="content-header">
                                <strong><em>Digital User churn Dashboard</em></strong>
                            </h3>
                            <div className="content-main">
                                <span className="content-paragraph">
                                    <p>Dalam program Business Intelligence Analyst Project-Based Learning ini, saya berhasil lulus dengan capaian nilai akhir sebesar <strong>88.13</strong>. Berdasarkan standarisasi penilaian program, hasil ini menempatkan saya pada kategori <strong>Excellence Score</strong>, sehingga saya berhak menerima <strong>Certificate of Achievement</strong>.</p>
                                </span>
                                <span className="content-imgs">
                                    <img src={Sql} alt="" />
                                    <img src={GBQuery} alt="" />
                                    <img src={LStudio} alt="" />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default Content_Achievemnts;