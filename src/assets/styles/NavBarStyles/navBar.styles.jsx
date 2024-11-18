import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const NavBarWrapper = styled.nav`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  width: 35rem;
  column-gap: 1rem;
  /* background-color: red; */
`;

export const NavigationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  column-gap: 1rem;
  width: calc(35rem - 56px - 144px);
  /* background-color: aquamarine; */
`;

export const NavigationRoute = styled(NavLink)`
  color: rgba(101, 101, 101, 1);
  font-weight: var(--font-weight-medium);
  font-size: var(--font-size-base);
  line-height: 1.25rem;
  text-decoration: none;
  text-align: center;
  padding: 0.5rem 0 0.5rem 0;

  &.active {
    color: var(--primary-black);
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const IconRouters = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: calc(35rem - 56px - 369px);

  @media (max-width: 1024px) {
    display: none;
  }
`;
