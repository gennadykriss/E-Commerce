import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CatalogGrid from "../components/CatalogGrid";

export const HomePage = () => {
  return (
    <div className="relative">
      <Navbar/>
      {/* Main Content */}
      <main>
        <CatalogGrid />
      </main>

      <Footer />

    </div>
  );
};