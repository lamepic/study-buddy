import Navbar from "../Navbar";
import Footer from "../Footer";

function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen flex flex-col justify-between">
      <div className="container mx-auto h-full">
        <Navbar />
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default PageLayout;
