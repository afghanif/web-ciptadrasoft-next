import Image from "next/image";
import Link from "next/link";

export default function HeroSlider() {
   
  return (
    <>
        <section className="wrapper bg-dark">
      <div className="swiper-container swiper-hero dots-over" data-margin="0" data-autoplay="false" data-autoplaytime="7000"
        data-nav="true" data-dots="true" data-items="1">
        <div className="swiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide bg-overlay bg-overlay-400 bg-dark bg-image"
              data-image-src="/img/photos/bg7.jpg">
              <div className="container h-100">
                <div className="row h-100">
                  <div
                    className="col-md-10 offset-md-1 col-lg-8 offset-lg-0 col-xl-6 col-xxl-8 text-center text-lg-start justify-content-center align-self-center align-items-start">
                    <h2
                      className="display-1 fs-56 mb-4 text-white">
                      Contact Center Omnichannel</h2>
                    <p
                      className="lead fs-17 lh-sm mb-7 text-white">
                      Solusi untuk menangani Layanan pelanggan berupa informasi dan pengaduan dari semua channel (Telepon, Whatsapp, Social Media, Play Store, Google Review dan channel lainnya) dalam satu layar platform yang terintegrasi. </p>
                    <div className=""> 
                      <a href="/produk-onebox" className="btn btn-primary btn-icon btn-icon-start rounded">
                       Lihat Detail <i className="uil uil-arrow-right"></i>
                     </a>
                    </div>
                  </div>
                  {/* <!--/column --> */}
                </div>
                {/* <!--/.row --> */}
              </div>
              {/* <!--/.container --> */}
            </div>
            {/* <!--/.swiper-slide --> */}
            <div className="swiper-slide bg-overlay bg-overlay-400 bg-dark bg-image"
              data-image-src="/img/backgrounds/bg-slider2.jpg">
              <div className="container h-100">
                <div className="row h-100">
                  <div
                    className="col-md-10 offset-md-1 col-lg-8 offset-lg-0 col-xl-6 col-xxl-8 text-center text-lg-start justify-content-center align-self-center align-items-start">
                    <h2
                      className="display-1 fs-56 mb-4 text-white">
                      Smartcity Solutions</h2>
                    <p
                      className="lead fs-17 lh-sm mb-7 text-white">
                      Memiliki pengalaman dalam memahami data dan urusan pemerintah daerah, memiliki portfolio
                      ratusan inovasi dengan pemerintahan, terus belajar dan membangun inovasi untuk
                      membantu pemerintah daerah, kementrian dan lembaga.</p>
                    <div className="">
                      <a href="/produk-smartcity" className="btn btn-primary btn-icon btn-icon-start rounded">
                        <i className="uil uil-arrow-right"></i> Lihat Detail
                       </a>
                      </div>
                  </div>
                  {/* <!--/column --> */}
                </div>
                {/* <!--/.row --> */}
              </div>
              {/* <!--/.container --> */}
            </div>
            {/* <!--/.swiper-slide --> */}
            <div className="swiper-slide bg-overlay bg-overlay-400 bg-dark bg-image"
              data-image-src="/img/photos/bg9.jpg">
              <div className="container h-100">
                <div className="row h-100">
                  <div
                    className="col-md-10 offset-md-1 col-lg-8 offset-lg-0 col-xl-6 col-xxl-8 text-center text-lg-start justify-content-center align-self-center align-items-start">
                    <h2
                      className="display-1 fs-56 mb-4 text-white">
                      Asuransi dan Financial</h2>
                    <p
                      className="lead fs-17 lh-sm mb-7 text-white">
                      Solusi untuk menangani Layanan pelanggan berupa informasi dan pengaduan dari semua channel (Telepon, Whatsapp, Social Media, Play Store, Google Review dan channel lainnya) dalam satu layar platform yang terintegrasi. </p>
                    <div className=""><a href="/produk-orbeets"
                        className="btn btn-lg btn-outline-white rounded-pill">Lihat Detail</a></div>
                  </div>
                  {/* <!--/column --> */}
                </div>
                {/* <!--/.row --> */}
              </div>
              {/* <!--/.container --> */}
            </div>
            {/* <!--/.swiper-slide --> */}
          </div>
          {/* <!--/.swiper-wrapper --> */}
        </div>
        {/* <!-- /.swiper --> */}
      </div>
      {/* <!-- /.swiper-container --> */}
    </section>

    </>
  )
}
