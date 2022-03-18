import { Contacts } from "./Contacts";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const Layout: React.FC = ({ children }) => (
  <>
    <Header />
    {children}
    <Contacts />
    <Footer />
  </>
);
