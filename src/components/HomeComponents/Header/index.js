import {useState, useEffect} from "react";
import axios from "axios";
import { HeaderElement } from "./HeaderElements";
import {API} from '../../../constants/index'
import Loader from '../../SharedComponents/Loader';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = () => {

    const [loading, setLoading] = useState(false)
    const [header, setHeader ] = useState("")

    const fetchHeader = async() => {
        setLoading(true)
      await  axios.get(`${API}/wp-json/wp/v2/homeintro?&filter[orderby]=date&order=asc`)
             .then((response) => {
              setLoading(false)
              for(let i= 0; i<1; i++){
                 setHeader(response.data[i].acf.Header)
              }
             })
             .catch((error) => {
                setLoading(false);
                console.log(error);
             })
    }

    useEffect(() => {
        AOS.init({ duration: 1000 })
        fetchHeader();
        return () => {
          setHeader("");
        };
      }, [])

    return (
        <>
        {loading? <Loader/> : <HeaderElement data-aos="fade-up">{header}</HeaderElement>}
        </>
    )

}

export default Header