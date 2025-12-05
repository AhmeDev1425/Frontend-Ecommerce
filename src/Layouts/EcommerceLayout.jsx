import Header from "../Components/Ecommerce/Header";
import { Outlet } from "react-router-dom"

import '../assets/css/style.css'
import '../assets/css/responsive.css'

export default function EcommerceLayout() {
  return (
    <>
        <Header />
        <Outlet />

    </>
  );
}
