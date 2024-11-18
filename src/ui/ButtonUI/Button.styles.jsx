import styled from "styled-components";
import "../../assets/styles/variables.css";

export const ButtonShop = styled.button`
  background-color: transparent;

  color: ${(props) =>
    props.variant === "shopDark"
      ? "var(--primary-black)"
      : "var(--primary-white)"};

  border: 1px solid
    ${(props) =>
      props.variant === "shopDark"
        ? "var(--primary-black)"
        : "var(--primary-white)"};

  border-radius: 6px;
  width: 11.875rem;
  height: 3.5rem;
  font-weight: var(--font-weight-medium);
  font-size: var(--font-size-base);
  line-height: var(--line-height-default);
`;

// export const ButtonShopDark = styled.button`
//     background-color: ${(props) =>
//         props.variant === ("shopdark" || "shop") && "transparent"
//     };
//     padding: ${(props) => {
//         if (props.variant === "shopdark") {
//             return "1rem 3.5rem";
//         }
//         return "0.75rem 4rem";
//     }};
// `;
