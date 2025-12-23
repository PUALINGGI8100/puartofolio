import React from "react";

import ic from "~/assets/certificates/dicoding.png";

import ai_dasar from "~/assets/certificates/g/ds_learning_path/ai_dasar.png";
import py_dasar from "~/assets/certificates/g/ds_learning_path/py_dasar.png";
import sql_dasar from "~/assets/certificates/g/ds_learning_path/sql_dasar.png";
import ds_dasar from "~/assets/certificates/g/ds_learning_path/ds_dasar.png";
// 
import Main_Skeleton from "~/components/ui/Main_Skeleton";

const Ds_path : React.FC = ()=>{
    return (
        <section className="slide-container">
                <header>
                    <img src={ic} alt="CNA Icon" className="h-logo" />
                    <h2>Data Scientist Learning Path (IDCamp 2025 <em>Dicoding x Indosat</em>)</h2>
                </header>
                <div className="relative-wrapper">
                    <Main_Skeleton />
                    <div className="slide-content comp-4">
                        <a href="#" role="article">
                            <img src={ai_dasar} alt="Ai Cert" loading="lazy" />
                        </a>
                        <a href="#" role="article">
                            <img src={py_dasar} alt="Python For DS Cert" loading="lazy" />
                        </a>
                        <a href="#" role="article">
                            <img src={sql_dasar} alt="SQL Basic Cert" loading="lazy" />
                        </a>
                        <a href="#" role="article">
                            <img src={ds_dasar} alt="Data Science Introduction Cert" loading="lazy" />
                        </a>
                        <a href="#" role="article">
                            <img src={ai_dasar} alt="Ai Cert" loading="lazy" />
                        </a>
                    </div>
                </div>
            </section>
    )
}

export default Ds_path;