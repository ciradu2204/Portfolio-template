import { useEffect} from "react";
import { HeaderElement } from "./HeaderElements";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = () => {


    useEffect(() => {
        AOS.init({ duration: 1000 })
      }, [])

    return (
        <>
        {<HeaderElement data-aos="fade-up">Cynthia Iradukunda</HeaderElement>}
        </>
    )

}

export default Header