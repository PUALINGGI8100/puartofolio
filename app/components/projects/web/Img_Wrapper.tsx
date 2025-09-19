
import React from "react";

interface IProps {
    imgs: string[]
}

export default function Img_Wrapper ({ imgs } : IProps) {
    return (
        <div className="img-wrapper">
            {imgs.map(img=> {
                return (
                    <span className="img-cover">
                        <img src={img} alt="#" />
                    </span>
                )
            })}
        </div>
    )
}