import { LayoutProps } from "../../../src/types/types";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";

const LoginLayout = ({ children }: LayoutProps) => {
  return (
    <>
    <NavBar></NavBar>
      {children}
      <Footer />
    </>
  );
};

export default LoginLayout;