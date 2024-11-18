import {
  NavBarWrapper,
  NavigationWrapper,
  NavigationRoute,
  IconRouters,
} from "../assets/styles/NavBarStyles/navBar.styles";
import FavoritesIcon from "../assets/icons/Favorites.svg";
import CartIcon from "../assets/icons/Cart.svg";
import ProfileIcon from "../assets/icons/Profile.svg";
import { Link } from "react-router-dom";

function NavBar() {
  const iconRouters = [
    { path: "/favorites", icon: FavoritesIcon },
    { path: "/cart", icon: CartIcon },
    { path: "/profile", icon: ProfileIcon },
  ];

  return (
    <NavBarWrapper>
      <NavigationWrapper>
        <NavigationRoute to="/">Home</NavigationRoute>
        <NavigationRoute to="/about">About</NavigationRoute>
        <NavigationRoute to="/contact">Contact Us</NavigationRoute>
        <NavigationRoute to="/blog">Blog</NavigationRoute>
      </NavigationWrapper>
      <IconRouters>
        {iconRouters.map((icon, i) => (
          <Link to={icon.path} key={i}>
            <img src={icon.icon} />
          </Link>
        ))}
      </IconRouters>
    </NavBarWrapper>
  );
}

export default NavBar;
