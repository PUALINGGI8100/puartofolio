
import React, { ReactNode } from "react";
import { Link } from "react-router";

interface Props {
    imgSource?: string,
    altText: string,
    title: string,
    desc: string,
    cropped: boolean,
    href: string,
    children?: ReactNode // Tambahkan tipe data ReactNode
}
const Card_Row : React.FC<Props> = ({ imgSource, altText, title, desc, cropped, href, children })=>{
    return (
        <Link to={href} role="button" className="card-row-container">
            {children}
            <img src={imgSource} alt={altText} className={`card-row-img ${cropped?"crop":"no-crop"}`} />
            <div className="flex flex-col gap-2">
                <h2>{title}</h2>
                <h5>{desc}</h5>
            </div>
        </Link>
    )
}

export default Card_Row;