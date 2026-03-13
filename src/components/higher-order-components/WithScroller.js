import { useEffect, useState } from "react";

const WithScroller = (WrappedComponent) => {
    const WrappedComponentWithScroller =  (props) => {
        const [clientX, setClientX] = useState(0);
        const [clientY, setClientY] = useState(0);
        
        const mouseMoveHandler = (e) => {
            setClientX(e.clientX);
            setClientY(e.clientY);
        }

        useEffect(() => {
            window.addEventListener("mousemove", mouseMoveHandler);
            
            // cleanp
            return () => window.removeEventListener("mousemove", mouseMoveHandler);
        });
        return (
            <WrappedComponent coordinates={{x: clientX, y: clientY}} />
        );
    };

    return WrappedComponentWithScroller;
}

export default WithScroller;