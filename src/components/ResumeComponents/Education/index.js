import axios from "axios";
import { nanoid } from "nanoid";
import React, { useEffect, useState } from "react";
import Loader from "../../SharedComponents/Loader";
import {
  EducationHeader,
  EducationMainWrapper,
  EducationWrapper,
  Logo,
  EducationDetails,
  SchoolName,
  Major,
  DateC,
  NextEducation,
  Wrapper,
} from "./EducationElement";
import AOS from "aos";
import "aos/dist/aos.css";
import { dateInPast } from "../../SharedComponents/dateInPast";

const Education = () => {
  const initializeEndId = () => {
    if (window.innerWidth > 1000) {
      return 2;
    } else {
      return 0;
    }
  };
  const [loading, setLoading] = useState(false);
  const [education, setEducation] = useState([]);
  const [numberOfItems] = useState(initializeEndId());
  const [endId] = useState(initializeEndId());

 
  const getEducationDetails = async () => {
    setLoading(true);
    await axios
      .get(
        "http://35.212.233.193/wp-json/wp/v2/Education?_embed&filter[orderby]=date&order=desc"
      )
      .then((response) => {
        setLoading(false);

        for (let data of response.data) {
          let education = {
            title: data.acf.name,
            logo: data.acf.logo.url,
            major: data.acf.major,
            startDate: data.acf.start_date,
            endDate: data.acf.end_date,
          };
          setEducation((prev) => [...prev, education]);
        }
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };

  const handleNextItem = () => {
    let firstElement = education.shift();
    education.push(firstElement);
    setEducation([...education]);
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
    getEducationDetails();
    return () => {
      setEducation([]);
    };
  }, []);

  return (
    <Wrapper>
      <EducationHeader data-aos="fade-up">EDUCATION</EducationHeader>

      <EducationMainWrapper>
        {loading ? (
          <Loader />
        ) : (
          education
            .filter(
              (elements, index) =>
                index >= endId - numberOfItems && index <= endId
            )
            .map((elements, index) => (
              <EducationWrapper key={nanoid()} data-aos="fade-up">
                <Logo src={elements.logo} />
                <EducationDetails>
                  <SchoolName>{elements.title.toUpperCase()}</SchoolName>
                  <Major>{elements.major}</Major>
                  <DateC>
                    {elements.startDate}-
                    {dateInPast(elements.endDate)
                      ? elements.endDate
                      : "Present" }
                  </DateC>
                </EducationDetails>
              </EducationWrapper>
            ))
        )}

        {loading ? null : (
          <NextEducation onClick={handleNextItem} data-aos="fade-up" />
        )}
      </EducationMainWrapper>
    </Wrapper>
  );
};

export default Education;
