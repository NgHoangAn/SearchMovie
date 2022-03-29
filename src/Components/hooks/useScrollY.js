import { useEffect, useState } from "react";


export function useScrollY() {
    const [scrollY, setScollY] = useState(0);
    const handleScollY = () => {
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        setScollY(scrollY);
    }
    useEffect(() =>{
        handleScollY();
        window.addEventListener('scroll', handleScollY);
        return () => {
            window.removeEventListener('scroll', handleScollY);
        }
    },[])
  return (
    [scrollY]
  )
}
