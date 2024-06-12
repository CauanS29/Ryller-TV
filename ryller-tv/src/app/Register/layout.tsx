import { LayoutProps } from "../../types/types";
import NavBar from "@/components/ui/navBar";
import Footer from "@/components/ui/footer";

const RegisterLayout = ({ children }: LayoutProps) => {
  return (
    <>
    <NavBar></NavBar>
      {children}
      <Footer />
    </>
  );
};

export default RegisterLayout;