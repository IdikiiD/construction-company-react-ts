import {useEffect, useState} from "react";

type UseMobileProps = {
    (breakpoint?: number): boolean;
}
export const useMobile: UseMobileProps = (breakpoint: number = 1300):boolean => {
    const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= breakpoint);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1300);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [breakpoint]);
    return isMobile;
}

