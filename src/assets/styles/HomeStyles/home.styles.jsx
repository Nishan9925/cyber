import styled from "styled-components";
import "../../styles/variables.css";
import IphoneImage from "../../images/IphoneImage.png";

export const HomeWrapper = styled.section`
  background-color: rgba(33, 28, 36, 1);
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const HomeBeyond = styled.section`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  /* padding: 5.5rem 1rem 0; */
  /* gap:3rem; */

  /* width: 80vw; */
  /* row-gap: 3rem; */
  /* min-height: calc(100vh - 39rem); */

  @media (max-width: 1287px) {
    justify-content: center;
    height: 48rem;
    overflow: hidden;
    /* gap:3rem; */
    /* padding: 5.5rem 1rem 0 ; */

  }

  @media (max-width: 801px) {
    /* height: 48rem; */
  }

  @media (max-width: 375px) {
  }
`;

export const HomeBeyondLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  row-gap: 1.5rem;
  /* padding-top: clamp(88px, 4vh, 188px); */
  /* padding-bottom: clamp(88px, 80vh, 188px); */

  h2 {
    color: var(--primary-white);
    font-size: var(--font-size-5xl);
    text-align: center;
    line-height: 4.5rem;
  }

  span {
    font-weight: var(--font-weight-semibold);
  }

  @media (max-width: 1280px) {
    margin-top: 5.5rem;
  }

  @media (max-width: 376px) {
    h2 {
      font-size: 4.5rem;
      font-weight: 100;
    }
  }
`;

export const HomeBeyondTexts = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;

export const HomeBeyondParagraph = styled.p`
  color: rgba(144, 144, 144, 1);

  font-size: ${(props) =>
    props.variant === "bigger" ? "var(--font-size-xl)" : "var(--font-size-lg)"};
`;

export const HomeBeyondRight = styled.div`
  display: flex;
  /* flex-direction: column;
  justify-content: center;
  align-items: center;
  /* overflow: hidden; */
  width: 25.3rem;
  height: 100%;

  @media (max-width: 1279px) {
    margin-top: 3rem;
    /* width: 21.4rem;
    height: 18rem; */
    background-size: cover;
    background-position: top;
  }

  @media (max-width: 376px) {
    /* transform: scale(1); */
    /* object-fit: cover; */
    width: 20rem;
    height: 18rem;
    background-size: cover;
  }
`;

export const HomeBeyoundImg = styled.img`
  background-size: cover;
  background-image: url(${IphoneImage});
  object-fit: cover;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center 60px;

  @media (max-width: 1279px) {
    background-position: top;
  }
`;
