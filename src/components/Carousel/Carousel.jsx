import React, { useState } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
// import { IconContext } from "react-icons";
import { data, sliderSettings } from "../../data/CarouselData";
import { Row, Heading, Section, TextWrapper } from "../../globalStyles";
import {
  ButtonContainer,
  ReviewSlider,
  ImageWrapper,
  CarouselImage,
  CardButton,
} from "./CarouselStyles";

const Carousel = () => {
  const [sliderRef, setSliderRef] = useState(null);
  return (
    <Section>
      <Row>
        <Heading>Find more about us</Heading>
        <ButtonContainer>
          {/* <IconContext.Provider> */}
          <FaArrowCircleLeft
            size="3rem"
            color="#1d609c"
            onClick={
              sliderRef != null ? sliderRef.slickPrev : console.log("not found")
            }
          />
          <FaArrowCircleRight
            size="3rem"
            color="#1d609c"
            onClick={
              sliderRef != null ? sliderRef.slickNext : console.log(sliderRef)
            }
          />
          {/* </IconContext.Provider> */}
        </ButtonContainer>
      </Row>
      <ReviewSlider {...sliderSettings} ref={setSliderRef}>
        {data.map((el, index) => (
          <ImageWrapper>
            <CarouselImage src={el.image} />
            <TextWrapper size="1.1rem" margin="0.4rem 0 0" weight="bold">
              {el.title}
            </TextWrapper>
            <TextWrapper size="0.9rem" margin="0.7rem 0 0" color="#4f4f4f">
              {el.title}
            </TextWrapper>
            <CardButton>Learn More</CardButton>
          </ImageWrapper>
        ))}
      </ReviewSlider>
    </Section>
  );
};

export default Carousel;
