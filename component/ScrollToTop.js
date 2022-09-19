
import { useEffect, useState } from "react";

function ScrollToTop() {
    const [scrollToTop, setBackToTop] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100) {
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
            <a className="btn-link" onClick={scrollUp}>Back to top</a>
        )}
    </div>
  )
}

export default ScrollToTop