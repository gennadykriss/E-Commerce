import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CatalogGrid from "../components/CatalogGrid";

export const HomePage = () => {
  return (
    <div className="flex min-h-screen flex-col justify-between">
      <Navbar/>
      {/* Main Content */}
      <main>
        <CatalogGrid />
      </main>
      <Footer />
    </div>
  );
};