import ProductGallery from "../components/products-gallery";
import Navbar from "../mollecules/navbar";

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Produk Kami</h1>
        <p className="text-lg mb-4">Kami menyediakan berbagai produk berkualitas tinggi untuk memenuhi kebutuhan Anda.</p>

        <ProductGallery />
      </div>
    </>
  );
}
