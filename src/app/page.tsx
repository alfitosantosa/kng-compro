import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Phone, Mail, Heart, Users, Award, Shield, DollarSign, UserCheck } from "lucide-react";
import ProductGallery from "@/app/components/products-gallery";
import Image from "next/image";
import Navbar from "./mollecules/navbar";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Header */}

      <Navbar />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center space-y-8">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            Langkah Pasti Menuju
            <br />
            <span className="text-primary-foreground/80">
              Kualitas Hidup yang Lebih Baik
            </span>
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto">
            PT Kreasi Nurwidhi Group merupakan perusahaan terkemuka di Indonesia yang berkomitmen untuk meningkatkan kualitas hidup individu dengan disabilitas melalui penyediaan solusi orthosis, protesis, dan rehabilitasi yang inovatif dan
            berkualitas tinggi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="font-semibold"
            >
              <a href="https://wa.me/628121892599?text=Aku mau konsultasi">Konsultasi Gratis</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-black hover:bg-black hover:text-white"
            >
              <Link href="/products">Lihat Produk</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold tracking-tight mb-6">Tentang Kami</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Dengan pengalaman bertahun-tahun, kami telah membantu ribuan pasien untuk kembali aktif dan mandiri. Kami mengutamakan kualitas dan inovasi dengan menggunakan bahan-bahan terbaik yang ringan, fleksibel, dan nyaman dipakai
                sepanjang hari.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Semua produk kami dirancang dengan perhatian terhadap detail, memastikan fungsi optimal sekaligus estetika yang modern.
              </p>
              <div className="flex items-center space-x-4">
                <Users className="h-12 w-12 text-primary" />
                <div>
                  <p className="font-semibold">Ribuan Pasien Terbantu</p>
                  <p className="text-muted-foreground">Pengalaman bertahun-tahun melayani</p>
                </div>
              </div>
            </div>
            <Card className="bg-secondary/40 border-border/60">
              <CardContent className="p-8">
                <div className="mb-8">
                  <h4 className="text-2xl font-bold mb-4 text-foreground">VISI</h4>
                  <p className="text-muted-foreground">
                    Menjadi pemimpin dalam industri orthosis, protesis, dan rehabilitasi di Indonesia serta memberikan kontribusi nyata bagi peningkatan
                    kesejahteraan masyarakat.
                  </p>
                </div>
                <Separator className="my-6" />
                <div>
                  <h4 className="text-2xl font-bold mb-4 text-foreground">MISI</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Menyediakan produk dan layanan orthosis, protesis, dan rehabilitasi terbaik dengan teknologi terkini</li>
                    <li>• Memberikan pelayanan yang prima dan personal kepada setiap pasien</li>
                    <li>• Membangun kerjasama yang kuat dengan para profesional kesehatan</li>
                    <li>• Meningkatkan kesadaran masyarakat tentang pentingnya rehabilitasi</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-muted/40">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold tracking-tight mb-4">Layanan Kami</h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Kami menyediakan berbagai layanan komprehensif untuk membantu meningkatkan kualitas hidup Anda
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow border-border/60">
              <CardHeader>
                <Heart className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Pembuatan Orthosis dan Protesis</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  Kami menawarkan pembuatan berbagai jenis orthosis dan protesis yang disesuaikan dengan kebutuhan individu, mulai dari kaki buatan, tangan buatan, hingga alat bantu jalan.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow border-border/60">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Rehabilitasi</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  Tim ahli kami akan memberikan program rehabilitasi yang komprehensif untuk membantu pasien mencapai kemandirian dan meningkatkan kualitas
                  hidup.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow border-border/60">
              <CardHeader>
                <UserCheck className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Konsultasi</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  Kami menyediakan layanan konsultasi gratis untuk membantu Anda memilih solusi yang tepat sesuai dengan kebutuhan dan kondisi Anda.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold tracking-tight mb-4">Mengapa Memilih Kami?</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow border-border/60">
              <CardHeader>
                <Shield className="h-16 w-16 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">Kualitas Terjamin</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  Produk dan layanan kami telah teruji kualitasnya dengan standar internasional.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow border-border/60">
              <CardHeader>
                <DollarSign className="h-16 w-16 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">Harga Terjangkau</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  Kami menawarkan harga yang kompetitif tanpa mengorbankan kualitas.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow border-border/60">
              <CardHeader>
                <Award className="h-16 w-16 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">Pelayanan Profesional</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  Tim kami siap membantu Anda dengan ramah dan profesional.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold mb-4">Hubungi Kami</h3>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              Siap membantu Anda dengan konsultasi gratis dan pelayanan terbaik
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-2xl font-semibold mb-6">Informasi Kontak</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-primary-foreground/80" />
                  <div>
                    <p className="font-semibold">Telepon</p>
                    <p className="text-primary-foreground/80">021-84991523</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-primary-foreground/80" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-primary-foreground/80">kreasinurwidhigroup@gmail.com</p>
                  </div>
                </div>
              </div>
              <Separator className="my-8 bg-primary-foreground/40" />
              <div>
                <h5 className="text-lg font-semibold mb-4">Legalitas</h5>
                <div className="space-y-2 text-primary-foreground/80">
                  <p>• Nomor Induk Berusaha</p>
                  <p>• Legalitas Perpajakan</p>
                  <p>• Izin Distributor Alat Kesehatan</p>
                </div>
              </div>
            </div>
            <Card className="bg-blue-800 border-blue-700">
              <CardHeader>
                <CardTitle className="text-primary-foreground">Konsultasi Gratis</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-primary-foreground/80">
                    Nama Lengkap
                  </Label>
                  <Input
                    id="name"
                    placeholder="Masukkan nama lengkap"
                    className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/60"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-primary-foreground/80">
                    Nomor Telepon
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Masukkan nomor telepon"
                    className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/60"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-primary-foreground/80">
                    Pesan
                  </Label>
                  <Textarea
                    id="message"
                    rows={4}
                    placeholder="Ceritakan kebutuhan Anda"
                    className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/60"
                  />
                </div>
                <Button className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                  Kirim Pesan
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Image src="/logo.png" alt="Logo" width={50} height={50} className="rounded-md" />
            <span className="text-lg font-semibold">PT KREASI NURWIDHI GRUP</span>
          </div>
          <p className="text-sm">© 2024 PT Kreasi Nurwidhi Group. Semua hak dilindungi undang-undang.</p>
          <p className="text-sm mt-2">Langkah Pasti Menuju Kualitas Hidup yang Lebih Baik</p>
        </div>
      </footer>
    </div>
  );
}
