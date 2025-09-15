
import React from "react";
import Content_Container_Projects from "~/components/projects/Content_Container_Projects";
// 
import G1 from "~/assets/projects/web/p1/login.png";
import G2 from "~/assets/projects/web/p1/register.png";
// 
import GB1 from "~/assets/projects/web/p2/home_page.png";
import GB2 from "~/assets/projects/web/p2/home_p_2.png";
import GB3 from "~/assets/projects/web/p2/about_p.png";
import GB4 from "~/assets/projects/web/p2/contact_p.png";
import Git_Card from "~/components/ui/Git_Card";

interface props {};

const Web_Pages : React.FC<props> = () => {
    return (
        <Content_Container_Projects extraClassName="web">
            <article className="content-card p-1">
                <div className="img-wrapper">
                    <span className="img-cover">
                        <img src={G1} alt="Login" />
                    </span>
                    <span className="img-cover">
                        <img src={G2} alt="Register" />
                    </span>
                    <span className="img-cover">
                        <img src={G1} alt="Login" />
                    </span>
                </div>
                <div className="card-body">
                    <header>
                        <h3>SISTEM PAKAR PENGENALAN HAMA DAN PENYAKIT JAGUNG BERBASIS <em>CERTAINTY FACTOR</em></h3>
                    </header>
                    <div className="card-main">
                        <span className="card-text">
                            <p>Merupakan salah satu syarat untuk menyelesaikan program sarjana di Universitas Al Asyariah Mandar. Sistem dikembangkan Menggunakan <strong>ESDLC</strong> (John Durkin, 1994), Data diolah secara kuantitatif dengan memanfaatkan pendekatan <strong>certainty factor</strong> (John Durkin, 1994).</p>
                        </span>
                    </div>
                    <Git_Card src="https://github.com/PUALINGGI8100/ES_hama-penyakit-jagung.git" />
                </div>
            </article>
            <article className="content-card p-2">
                <div className="img-wrapper">
                    <span className="img-cover">
                        <img src={GB1} alt="Login" />
                    </span>
                    <span className="img-cover">
                        <img src={GB2} alt="Register" />
                    </span>
                    <span className="img-cover">
                        <img src={GB3} alt="Register" />
                    </span>
                    <span className="img-cover">
                        <img src={GB4} alt="Register" />
                    </span>
                    <span className="img-cover">
                        <img src={GB1} alt="Login" />
                    </span>
                </div>
                <div className="card-body">
                    <header>
                        <h3>REDESIGN BOOMAR SITE</h3>
                    </header>
                    <div className="card-main">

                    </div>
                    <Git_Card src="https://github.com/revou-fundamental-course/07-apr-25-PUALINGGI8100.git" />
                </div>
            </article>
        </Content_Container_Projects>
    )
}

export default Web_Pages;