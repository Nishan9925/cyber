import {
  HeaderWrapper,
  LogoIcon,
  SearchInput,
} from "../assets/styles/HeaderStyles/header";
import Logo from "../assets/icons/Logo.svg";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";

function Header() {
  return (
    <HeaderWrapper>
      <Link to="/">
        <LogoIcon src={Logo} />
      </Link>
      <SearchInput type="text" placeholder="Search" />
      <NavBar />
    </HeaderWrapper>
  );
}

export default Header;
