import Navbar from "../components/Navbar";
import CatalogGrid from "../components/CatalogGrid";

export const HomePage = () => {
  return (
    <div className="relative">
      <Navbar/>
      {/* Main Content */}
      <main>
        <CatalogGrid />
      </main>

    </div>
  );
};