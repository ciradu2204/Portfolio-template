import { useEffect, useState } from "react"
import axios from 'axios';
import Prev from './prevIcon';
import Next from './nextIcon';
import Loader from '../../SharedComponents/Loader';
import { BrandImage, BrandsHeader, BrandsWrapper, BrandWrapper } from "./BrandsElements";
import { LineSvg } from "../Services/ServicesElements";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Brand = () => {
  const initializeNextId = () => {

    if (window.innerWidth <= 1000) {
      return 1;
    } else {
      return 3;
    }
  }
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(false);
  const [prevID, setPrevID] = useState(0);
  const [nextID, setNextID] = useState(initializeNextId());

  const getBrands = async () => {
    setLoading(true);
    await axios.get('http://35.212.233.193/wp-json/acf/v3/Brand?&filter[orderby]=date&order=asc')
      .then((response) => {
        setLoading(false);
        for (let data of response.data) {
          let brand = {
            "id": data.id,
            "title": data.acf.name,
            "image": data.acf.brandimage.url
          }
          setBrands(brands => [...brands, brand])
        }


      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      })


  }

  const previousBrand = () => {
    if (prevID > 0) {
      setPrevID((prevID) => prevID - 1)
      setNextID((nextID) => nextID - 1)
    }
  }

  const nextBrand = () => {
    if (nextID < brands.length) {
      setPrevID((prevID) => prevID + 1)
      setNextID((nextID) => nextID + 1)
    }
  }

  useEffect(() => {
    AOS.init({ duration: 1000 })
    getBrands();
    return () => {
      setBrands([]);
    };
  }, [])

  return (
    <>
      <BrandsHeader data-aos="fade-up">BRAND I’VE WORKED WITH</BrandsHeader>
      <LineSvg data-aos="fade-up" viewBox="0, 0, 50,50">
        <path
          d="
                 M -180 20
                 L -80 11
                 C -80 11 -50 6 -50 5
                 L -10 20
                 h 250
                 "/>
      </LineSvg>
      <BrandsWrapper>
        <Prev prev={previousBrand} />
        {loading ? <Loader /> : brands.filter((element, index) => index >= prevID && index < nextID).map((brand) => (
          <BrandWrapper data-aos="fade-up" key={brand.id}>
            <BrandImage alt={brand.title} src={brand.image} />
          </BrandWrapper>
        ))}
        <Next next={nextBrand} />
      </BrandsWrapper>
    </>
  )
}

export default Brand;