import HeroSlider from '@/components/page/HeroSlider';
import MitraSection from '@/components/page/MitraSection';
import ProdukSection from '@/components/page/ProdukSection';
import LayananSection from '@/components/page/LayananSection';
import ProfilSection from '@/components/page/ProfilSection';
import PortofolioSection from '@/components/page/PortofolioSection';
import ArtikelSection from '@/components/page/ArtikelSection';
import CtaSection from '@/components/page/CtaSection';

export default function Home() {
  return (
    <>
      {/* Slider */}
      <HeroSlider />
      {/* ..Slider */}

       {/* Mitra */}
       <MitraSection />
      {/*  Mitra */}

      {/* ProdukSection */}
      <ProdukSection />
      {/* ProdukSection */}

      {/* LayananSection */}
       <LayananSection />
      {/* LayananSection */}

{/* LayananSection */}
       <ProfilSection />
{/* LayananSection */}

       <PortofolioSection />

       <ArtikelSection />

       <CtaSection />
    </>

  )
}