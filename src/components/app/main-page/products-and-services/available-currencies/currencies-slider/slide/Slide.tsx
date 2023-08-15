import styled from "styled-components";
import { sizeVariable } from "@/assets/styles/commonStyles.ts";
import { FC } from "react";

//Types
type Props = {
  slide: {
    id: string;
    image: {
      src: string;
      alt: string;
    };
  };
};

//Styles
const StyledSlideContainer = styled.div`
  margin-right: 1vw;
  width: calc(76vw / 14.4);
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  height: 100%;

  @media (max-width: ${sizeVariable}) {
    width: calc(76vw / 5.08);
    margin-right: 5vw;
  }
`;

const StyledImage = styled.img`
  height: calc(74vw / 14.4);
  width: calc(74vw / 14.4);
  object-fit: contain;

  @media (max-width: ${sizeVariable}) {
    height: calc(74vw / 5.08);
    width: calc(74vw / 5.08);
  }
`;

export const Slide: FC<Props> = ({ slide }) => {
  return (
    <StyledSlideContainer>
      <StyledImage src={slide.image.src} alt={slide.image.alt} />
    </StyledSlideContainer>
  );
};
