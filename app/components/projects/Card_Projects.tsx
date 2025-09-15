import React from "react"

interface Props {}

const Card_Projects : React.FC<React.PropsWithChildren<Props>> = ({children}) => {
    return (
        <section className="card-projects card-container">
            {children}           
        </section>
    )
}

export default Card_Projects;