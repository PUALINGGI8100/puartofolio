
import React from "react";

interface Props {
    extraClassName?: string
};

const Content_Container_Projects : React.FC<React.PropsWithChildren<Props>> = ({ children, extraClassName }) => {
    return (
        <section className={`content-container ${extraClassName}`}>
            {children}
        </section>
    )
}

export default Content_Container_Projects;