import { LayoutProps } from "../../types/types";
import Footer from "@/components/ui/footer";
import NavBar from "@/components/ui/navBar";

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