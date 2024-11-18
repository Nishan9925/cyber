import styled from "styled-components";
import Search from "../../icons/Search.svg";

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: row nowrap;
  background-color: aqua;
  background-color: var(--primary-white);
  /* padding: 1rem 10rem 1rem 10rem; */
  column-gap: 1rem;
  width: calc(100vw - 20rem);

  @media (max-width: 769px) {
    padding: 1rem 5rem 1rem 5rem;
    width: calc(100vw - 10rem);
  }
`;

export const LogoIcon = styled.img``;

export const SearchInput = styled.input`
  width: 23rem;
  /* height: 3.5rem; */
  /* min-width: 16rem; */
  /* min-width: 5rem; */
  /* min-height: 1.5rem; */
  background-color: rgba(237, 237, 237, 1);
  border-radius: 0.5rem;
  background-image: url(${Search});
  background-repeat: no-repeat;
  font-weight: var(--font-weight-medium);
  font-size: var(--font-size-sm);
  /* line-height: calc(var(--line-height-default) - 0.375rem); */
  padding: 1.25rem;
  border: none;
  color: rgba(101, 101, 101, 1);


    outline: none;
  

  @media (max-width: 510px) {
    display: none;
  }
`;
