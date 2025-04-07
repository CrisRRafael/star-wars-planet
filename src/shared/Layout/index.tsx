import { Footer } from "../components/atoms/Footer";
import { WrapperContainerLayout } from "./styles";
import { ReactNode } from "react";

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <WrapperContainerLayout>
      {children}
      <Footer />
    </WrapperContainerLayout>
  );
};

export default AppLayout;
