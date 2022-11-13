
import { useEffect, useState } from "react";
import { BtnIcon } from "./Button";

function ScrollToTop() {
    const [scrollToTop, setBackToTop] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 200) {
                setBackToTop(true)
            } else [
                setBackToTop(false)
            ]
        })
    }, [])
const scrollUp = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}
  return (
    <div>
        {scrollToTop && (
            <div className="btn-scroll"onClick={scrollUp}>
                <BtnIcon to="#" src="/icon/arrow-down.svg"/>
            </div>
            
        )}
    </div>
  )
}

export default ScrollToTop