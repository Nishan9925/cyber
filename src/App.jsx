import { RouterProvider } from "react-router-dom";
import "./assets/styles/reset.css";
import "./assets/styles/variables.css";
import router from "./Router.jsx";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
