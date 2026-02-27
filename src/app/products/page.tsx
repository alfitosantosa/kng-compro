import ProductGallery from "../components/products-gallery";
import Navbar from "../mollecules/navbar";

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <ProductGallery />
      </div>
    </>
  );
}
