import { LayoutProps } from "../../types/types";
import Footer from "../shared/components/Footer/Footer";
import NavBar from "../shared/components/NavBar/NavBar";


const HomeLayout = ({ children }: LayoutProps) => {
  return (
    <>
    <NavBar />
      {children}
    <Footer />
    </>
   
  );
};

export default HomeLayout;