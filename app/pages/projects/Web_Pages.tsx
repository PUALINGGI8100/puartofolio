
import React from "react";
import Content_Container_Projects from "~/components/projects/Content_Container_Projects";
// Icons
import ICHtml from "~/assets/projects/web/html5.png";
import ICCss from "~/assets/projects/web/css.png";
import ICPhp from "~/assets/projects/web/php.png";
import ICJs from "~/assets/projects/web/js.png";
import ICLaravel from "~/assets/projects/web/laravel.png";
import ICMySql from "~/assets/projects/web/mysql.png";
import ICBootstrap from "~/assets/projects/web/bootstrap.png";
// 
import GP1_1 from "~/assets/projects/web/p1/login.png";
import GP1_2 from "~/assets/projects/web/p1/register.png";
// 
import GP2_1 from "~/assets/projects/web/p2/home_page.png";
import GP2_2 from "~/assets/projects/web/p2/home_p_2.png";
import GP2_3 from "~/assets/projects/web/p2/about_p.png";
import GP2_4 from "~/assets/projects/web/p2/contact_p.png";
// components
import Img_Wrapper from "~/components/projects/web/Img_Wrapper";
import Git_Card from "~/components/ui/Git_Card";

interface props {};

const Web_Pages : React.FC<props> = () => {
    return (
        <Content_Container_Projects extraClassName="web">
            <article className="content-card p-1">
                <Img_Wrapper imgs={[GP1_1, GP1_2, GP1_1]} />
                <div className="card-body">
                    <header>
                        <h3>SISTEM PAKAR PENGENALAN HAMA DAN PENYAKIT JAGUNG BERBASIS <em>CERTAINTY FACTOR</em></h3>
                    </header>
                    <div className="card-main">
                        <span className="card-text">
                            <p>Merupakan salah satu syarat untuk menyelesaikan program sarjana di Universitas Al Asyariah Mandar. Sistem dikembangkan Menggunakan <strong>ESDLC</strong> (Durkin, 1994, hlm. 217), Data diolah secara kuantitatif dengan memanfaatkan pendekatan <strong>certainty factor</strong> (Durkin, 1994, hlm. 344-353).</p>
                        </span>
                        <span className="ic-wrapper">
                            <img src={ICLaravel} alt="" />
                            <img src={ICBootstrap} alt="" />
                            <img src={ICPhp} alt="" />
                            <img src={ICMySql} alt="" />
                            <img src={ICHtml} alt="" />
                            <img src={ICCss} alt="" />
                            <img src={ICJs} alt="" />
                        </span>
                    </div>
                </div>
                <Git_Card src="https://github.com/PUALINGGI8100/ES_hama-penyakit-jagung.git" />
            </article>
            <article className="content-card p-2">
                <Img_Wrapper imgs={[GP2_1, GP2_2, GP2_3, GP2_4, GP2_1]} />
                <div className="card-body">
                    <header>
                        <h3>REDESIGN BOOMAR SITE</h3>
                    </header>
                    <div className="card-main">
                        <span className="card-text">
                            <p>Merupakan salah satu syarat untuk menyelesaikan fundamental course <strong>ReVoU</strong>.</p>
                        </span>
                        <span className="ic-wrapper">
                            <img src={ICHtml} alt="" />
                            <img src={ICCss} alt="" />
                            <img src={ICJs} alt="" />
                        </span>
                    </div>
                </div>
                <Git_Card src="https://github.com/revou-fundamental-course/07-apr-25-PUALINGGI8100.git" />
            </article>
        </Content_Container_Projects>
    )
}

export default Web_Pages;