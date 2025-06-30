import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, Heart, Users, Award, Shield, DollarSign, UserCheck } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-blue-900 text-white py-4 sticky top-0 z-50">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-blue-300" />
            <div>
              <h1 className="text-xl font-bold">PT KREASI NURWIDHI GROUP</h1>
              <p className="text-sm text-blue-200">Langkah Pasti Menuju Kualitas Hidup yang Lebih Baik</p>
            </div>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#about" className="hover:text-blue-300 transition-colors">
              Tentang
            </a>
            <a href="#services" className="hover:text-blue-300 transition-colors">
              Layanan
            </a>
            <a href="#products" className="hover:text-blue-300 transition-colors">
              Produk
            </a>
            <a href="#contact" className="hover:text-blue-300 transition-colors">
              Kontak
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-blue-900 mb-6">
            Langkah Pasti Menuju
            <br />
            <span className="text-blue-600">Kualitas Hidup yang Lebih Baik</span>
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            PT Kreasi Nurwidhi Group merupakan perusahaan terkemuka di Indonesia yang berkomitmen untuk meningkatkan kualitas hidup individu dengan disabilitas melalui penyediaan solusi orthosis, protesis, dan rehabilitasi yang inovatif dan
            berkualitas tinggi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Konsultasi Gratis
            </Button>
            <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent">
              Lihat Produk
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Tentang Kami</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Dengan pengalaman bertahun-tahun, kami telah membantu ribuan pasien untuk kembali aktif dan mandiri. Kami mengutamakan kualitas dan inovasi dengan menggunakan bahan-bahan terbaik yang ringan, fleksibel, dan nyaman dipakai
                sepanjang hari.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">Semua produk kami dirancang dengan perhatian terhadap detail, memastikan fungsi optimal sekaligus estetika yang modern.</p>
              <div className="flex items-center space-x-4">
                <Users className="h-12 w-12 text-blue-600" />
                <div>
                  <p className="font-semibold text-gray-900">Ribuan Pasien Terbantu</p>
                  <p className="text-gray-600">Pengalaman bertahun-tahun melayani</p>
                </div>
              </div>
            </div>
            <div className="bg-blue-50 p-8 rounded-lg">
              <div className="mb-8">
                <h4 className="text-2xl font-bold text-blue-900 mb-4">VISI</h4>
                <p className="text-gray-700">Menjadi pemimpin dalam industri orthosis, protesis, dan rehabilitasi di Indonesia serta memberikan kontribusi nyata bagi peningkatan kesejahteraan masyarakat.</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-blue-900 mb-4">MISI</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Menyediakan produk dan layanan orthosis, protesis, dan rehabilitasi terbaik dengan teknologi terkini</li>
                  <li>• Memberikan pelayanan yang prima dan personal kepada setiap pasien</li>
                  <li>• Membangun kerjasama yang kuat dengan para profesional kesehatan</li>
                  <li>• Meningkatkan kesadaran masyarakat tentang pentingnya rehabilitasi</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Layanan Kami</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Kami menyediakan berbagai layanan komprehensif untuk membantu meningkatkan kualitas hidup Anda</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Heart className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Pembuatan Orthosis dan Protesis</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Kami menawarkan pembuatan berbagai jenis orthosis dan protesis yang disesuaikan dengan kebutuhan individu, mulai dari kaki buatan, tangan buatan, hingga alat bantu jalan.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Rehabilitasi</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">Tim ahli kami akan memberikan program rehabilitasi yang komprehensif untuk membantu pasien mencapai kemandirian dan meningkatkan kualitas hidup.</CardDescription>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <UserCheck className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Konsultasi</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">Kami menyediakan layanan konsultasi gratis untuk membantu Anda memilih solusi yang tepat sesuai dengan kebutuhan dan kondisi Anda.</CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Produk Kami</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Berbagai produk berkualitas tinggi untuk mendukung mobilitas dan rehabilitasi</p>
          </div>

          {/* Product Categories */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Orthosis & Protesis</h4>
              <div className="space-y-2">
                <Badge variant="outline">CORSET LSO JAA</Badge>
                <Badge variant="outline">TLSO BRACE JAA</Badge>
                <Badge variant="outline">WRIST SPLINT</Badge>
                <Badge variant="outline">NECK COLLAR</Badge>
                <Badge variant="outline">AFO & COCK UP SPLINT</Badge>
              </div>
            </div>
            <div className="text-center">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Alat Bantu Mobilitas</h4>
              <div className="space-y-2">
                <Badge variant="outline">Wheel Chair</Badge>
                <Badge variant="outline">CRUTCH</Badge>
                <Badge variant="outline">Orthopedic Shoes</Badge>
              </div>
            </div>
            <div className="text-center">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Peralatan Rehabilitasi</h4>
              <div className="space-y-2">
                <Badge variant="outline">GYM BALL</Badge>
                <Badge variant="outline">SEPEDA STATIS</Badge>
                <Badge variant="outline">PARALEL BAR</Badge>
                <Badge variant="outline">BED TRACTION</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Mengapa Memilih Kami?</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Shield className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-xl">Kualitas Terjamin</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Produk dan layanan kami telah teruji kualitasnya dengan standar internasional.</CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <DollarSign className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-xl">Harga Terjangkau</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Kami menawarkan harga yang kompetitif tanpa mengorbankan kualitas.</CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Award className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-xl">Pelayanan Profesional</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Tim kami siap membantu Anda dengan ramah dan profesional.</CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold mb-4">Hubungi Kami</h3>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">Siap membantu Anda dengan konsultasi gratis dan pelayanan terbaik</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-2xl font-semibold mb-6">Informasi Kontak</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-blue-400" />
                  <div>
                    <p className="font-semibold">Telepon</p>
                    <p className="text-gray-300">021-84991523</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-blue-400" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-gray-300">kreasinurwidhigroup@gmail.com</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <h5 className="text-lg font-semibold mb-4">Legalitas</h5>
                <div className="space-y-2 text-gray-300">
                  <p>• Nomor Induk Berusaha</p>
                  <p>• Legalitas Perpajakan</p>
                  <p>• Izin Distributor Alat Kesehatan</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg">
              <h4 className="text-2xl font-semibold mb-6">Konsultasi Gratis</h4>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Nama Lengkap</label>
                  <input type="text" className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Masukkan nama lengkap" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Nomor Telepon</label>
                  <input type="tel" className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Masukkan nomor telepon" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Pesan</label>
                  <textarea rows={4} className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Ceritakan kebutuhan Anda"></textarea>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Kirim Pesan</Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Heart className="h-6 w-6 text-blue-400" />
            <span className="text-lg font-semibold">PT KREASI NURWIDHI GROUP</span>
          </div>
          <p className="text-sm">© 2024 PT Kreasi Nurwidhi Group. Semua hak dilindungi undang-undang.</p>
          <p className="text-sm mt-2">Langkah Pasti Menuju Kualitas Hidup yang Lebih Baik</p>
        </div>
      </footer>
    </div>
  );
}
