"use client";

import type React from "react";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Eye, Star } from "lucide-react";
import productsData from "../data/products.json";

interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  image: string;
  features: string[];
}

interface ProductModalProps {
  product: Product;
  children: React.ReactNode;
}

function ProductModal({ product, children }: ProductModalProps) {
  const whatsappMessage = `Halo, saya ingin bertanya tentang produk berikut:

Nama Produk: ${product.name}
Kategori: ${product.category}

Fitur Unggulan:
${product.features.map((feature, index) => `${index + 1}. ${feature}`).join("\n")}
`;

  const whatsappLink = `https://wa.me/628121892599?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-left">{product.name}</DialogTitle>
        </DialogHeader>
        <ScrollArea className="max-h-[70vh]">
          <div className="space-y-4">
            <img src={product.image || "/placeholder.svg"} alt={product.name} className="w-full h-64 object-cover rounded-lg" />
            <Badge variant="secondary">{product.category}</Badge>
            <p className="text-sm text-muted-foreground">{product.description}</p>
            <Separator />
            <div className="space-y-2">
              <h4 className="font-semibold">Fitur Unggulan:</h4>
              <ul className="space-y-1">
                {product.features.map((feature, index) => (
                  <li key={index} className="text-sm text-muted-foreground flex items-center">
                    <Star className="w-3 h-3 mr-2 fill-primary text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="block">
              <Button className="w-full">Konsultasi Produk via WhatsApp</Button>
            </a>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}

export default function ProductGallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  // Combine all products from different categories
  const allProducts: Product[] = [...productsData.orthosis_protesis, ...productsData.mobility_aids, ...productsData.rehabilitation_equipment];

  // Filter products based on selected category
  const filteredProducts =
    selectedCategory === "all"
      ? allProducts
      : allProducts.filter((product) => {
          if (selectedCategory === "orthosis") return productsData.orthosis_protesis.includes(product as any);
          if (selectedCategory === "mobility") return productsData.mobility_aids.includes(product as any);
          if (selectedCategory === "rehabilitation") return productsData.rehabilitation_equipment.includes(product as any);
          return false;
        });

  const categories = [
    { id: "all", name: "Semua Produk", count: allProducts.length },
    { id: "orthosis", name: "Orthosis & Protesis", count: productsData.orthosis_protesis.length },
    { id: "mobility", name: "Alat Bantu Mobilitas", count: productsData.mobility_aids.length },
    { id: "rehabilitation", name: "Peralatan Rehabilitasi", count: productsData.rehabilitation_equipment.length },
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-8 md:mb-16">
        <h3 className="text-2xl md:text-3xl font-bold mb-4">Galeri Produk Kami</h3>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">Jelajahi koleksi lengkap produk berkualitas tinggi untuk mendukung mobilitas dan rehabilitasi</p>
      </div>

      {/* Category Filter */}
      <div className="mb-8">
        <ScrollArea className="w-full whitespace-nowrap">
          <div className="flex w-max space-x-2 p-1">
            {categories.map((category) => (
              <Button key={category.id} variant={selectedCategory === category.id ? "default" : "outline"} size="sm" onClick={() => setSelectedCategory(category.id)} className="flex-shrink-0">
                {category.name}
                <Badge variant="secondary" className="ml-2">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>
        </ScrollArea>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
        {filteredProducts.map((product) => (
          <ProductModal key={product.id} product={product}>
            <Card className="cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1 border-blue-400  hover:border-blue-700">
              <div className="relative overflow-hidden rounded-t-lg">
                <img src={product.image || "/placeholder.svg"} alt={product.name} className="w-full h-48 sm:h-56 object-cover transition-transform hover:scale-105" />
                <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-all flex items-center justify-center">
                  <Eye className="text-white opacity-0 hover:opacity-100 transition-opacity" size={24} />
                </div>
                <Badge className="absolute top-2 right-2">{product.category}</Badge>
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm md:text-base line-clamp-2">{product.name}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="text-xs md:text-sm line-clamp-2 mb-3">{product.description}</CardDescription>
                <div className="flex flex-wrap gap-1 mb-3">
                  {product.features.slice(0, 2).map((feature, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                  {product.features.length > 2 && (
                    <Badge variant="outline" className="text-xs">
                      +{product.features.length - 2}
                    </Badge>
                  )}
                </div>
                <a href="" className="text-xs md:text-sm text-primary hover:underline">
                  <Button size="sm" className="w-full text-xs md:text-sm bg-blue-900">
                    Lihat Detail
                  </Button>
                </a>
              </CardContent>
            </Card>
          </ProductModal>
        ))}
      </div>

      {/* Empty State */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground text-lg">Tidak ada produk ditemukan untuk kategori ini.</p>
        </div>
      )}

      {/* Product Count */}
      <div className="text-center mt-8">
        <p className="text-muted-foreground">
          Menampilkan {filteredProducts.length} dari {allProducts.length} produk
        </p>
      </div>
    </div>
  );
}
