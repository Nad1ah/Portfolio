import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-dark text-light">
      <Header />
      <main className="flex-grow pt-24">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
