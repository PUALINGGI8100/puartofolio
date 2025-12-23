
import React from "react";
// icons
import DtsIcon from "~/assets/certificates/dts.png";
import CNAIcon from "~/assets/certificates/cisco_NA.png";
import IBMIcon from "~/assets/certificates/ibm.png";
import DicodingIcon from "~/assets/certificates/dicoding.png";
import DQLIcon from "~/assets/certificates/dqlab.png";
// 
import Card_Row from "./ui/card_row";
import Main_Skeleton from "../ui/Main_Skeleton";

interface Props {};

const Content_Certificates : React.FC<Props> = () => {
    return (
        <section className="content-container">
            {/* <Main_Skeleton /> */}
            <Card_Row imgSource={CNAIcon} altText="CNA" title="CNA"    desc="Cisco Network Academy" cropped={false} href="cna">
                <Main_Skeleton />
            </Card_Row>
            <Card_Row imgSource={IBMIcon} altText="IBM" title="IBM" desc="IBM Skillsbuild" cropped={false} href="ibm">
                <Main_Skeleton />
            </Card_Row>
            <Card_Row imgSource={DtsIcon} altText="Digitalent" title="DTS" desc="DigiTalent Scholarship" cropped={true}  href="dts">
                <Main_Skeleton />
            </Card_Row>
            <Card_Row imgSource={DicodingIcon} altText="Dicoding" title="G" desc="Dicoding" cropped={false} href="g">
                <Main_Skeleton />
            </Card_Row>
            <Card_Row imgSource={DQLIcon} altText="DQLab" title="DQL" desc="DQLab" cropped={false} href="dql">
                <Main_Skeleton />
            </Card_Row>
        </section>
    )
}

export default Content_Certificates;