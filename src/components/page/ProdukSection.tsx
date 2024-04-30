import Image from "next/image";
import Link from "next/link";

export default function HeroSlider() {
   
  return (
    <>
        <section className="wrapper grey-bg-overlay rounded-5">
            <div className="container py-14 py-md-10">
                <div className="row text-center mt-xl-12">
                <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2" data-cues="slideInDown"
                    data-group="page-title-buttons" data-delay="600">
                    <h2 className="fs-15 text-uppercase text-muted mb-3">Produk Inovasi</h2>
                    <h3 className="display-4 mb-10 px-xxl-11">Simplify your Works <br/>With our <span
                        className="underline-3 style-3 green">Solutions</span></h3>

                </div>
                {/* <!-- /column --> */}
                </div>

                <div className="row text-center mt-xl-0">
                <div className="col-md-11 offset-md-1 col-lg-10 offset-lg-1" data-cues="slideInDown"
                    data-group="page-title-buttons" data-delay="600">
                    <ul className="icon-list bullet-bg bullet-soft-green poin-vertikal text-start">
                        <li><i className="uil uil-check"></i><span>Melayani Warga menjadi lebih baik</span></li>
                        <li><i className="uil uil-check"></i><span>Memudahkan bekerja </span></li>
                        <li><i className="uil uil-check"></i><span>Membuat PAD semakin meningkat </span></li>
                        <li><i className="uil uil-check"></i><span>Situasi lebih terpantau </span></li>
                    </ul>
                </div>
                {/* <!-- /column --> */}
                </div>
                {/* <!-- /.row --> */}
                <div className="row gx-lg-8 gx-xl-12 gy-8 mt-2" data-cues="slideInUp" data-group="services">
                <div className="col-lg-5 col-md-6 col-sm-10 align-self-center">
                    <div className="bg-light px-5 py-10 rounded-4">
                        <a href="/produk-onebox">
                            <Image src="/img/logo/logo-onebox.png" className="icon-logo me-4" alt="" width={100} height={100}/>
                        </a>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-10 offset-lg-1" data-cues="slideInRight" data-delay="900"
                    data-group="features-1">
                    <div className="row align-items-end">
                    <div className="col-lg-12">
                        <h4 className="mb-2 title-product"><span>01. </span>Contact Center Omnichannel</h4>
                    </div>
                    <p className="mb-0 desc">Tingkatkan kepuasan pelanggan, penjualan, produktivitas, reputasi, dan efisiensi
                        dengan
                        mengintegrasikan semua saluran komunikasi, seperti telepon, WhatsApp, email, media sosial, dan platform
                        lainnya dalam satu platform</p>
                    <div className="mb-0">
                    <ul className="icon-list bullet-bg bullet-soft-primary mb-0 cc-2 px-3 mt-2">
                        <li><i className="uil uil-suitcase"></i>Manajemen Prospek</li>
                        <li><i className="uil uil-comments-alt"></i>Customer Feedback</li>
                        <li><i className="uil uil-gold"></i>Sistem Antrian</li>
                        <li><i className="uil uil-monitor"></i>Media Monitoring</li>
                        <li><i className="uil uil-phone"></i>Telemarketing</li>
                    </ul>

                    <a href="/produk-onebox" className="more hover link-green mt-4">Selengkapnya</a>
                    </div>
                    </div>
                </div>
                </div>

                <hr className="mb-12 mt-12"/>

                <div className="row gx-lg-8 gx-xl-12 gy-8" data-cues="slideInUp" data-group="services">
                <div className="col-lg-5 col-md-6 col-sm-10 align-self-center">
                    <div className="bg-light px-5 py-10 rounded-4">
                        <a href="/produk-smartcity">
                            <Image src="/img/logo/logo-smartcity.png" className="icon-logo me-4" alt="" width={100} height={100}/>
                        </a>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-10 offset-lg-1" data-cues="slideInRight" data-delay="1200"
                    data-group="features-1">
                    <div className="row align-items-end">
                    <div className="col-lg-12">
                        <h4 className="mb-2 title-product"><span>02. </span>Solusi Kota Digital</h4>
                    </div>
                    <p className="mb-0 desc">Mengembangkan inovasi dalam bisnis proses dan digitalisasi untuk mendukung pemerintah
                        daerah, kementerian, dan lembaga dalam meningkatkan kecepatan, kemudahan, dan efisiensi layanan publik
                    </p>
                    <div className="mb-0">
                    <ul className="icon-list bullet-bg bullet-soft-primary mb-0 cc-2 px-3 mt-2">
                        <li><i className="uil uil-map"></i>Roadmap Inovasi</li>
                        <li><i className="uil uil-cloud-database-tree"></i>Pusat Data Kota</li>
                        <li><i className="uil uil-database"></i>Pusat Informasi dan Layanan Kota</li>
                        <li><i className="uil uil-mobile-android"></i>Super Apps Kota</li>
                        <li><i className="uil uil-headphones"></i>Layanan informasi dan pengaduan public omnichannel</li>
                    </ul>
                    <a href="/produk-smartcity" className="more hover link-green mt-4">Selengkapnya</a>
                    </div>
                    </div>
                </div>
                </div>

                <hr className="mb-12 mt-12"/>

                <div className="row gx-lg-8 gx-xl-12 gy-8" data-cues="slideInUp" data-group="services">
                <div className="col-lg-5 col-md-6 col-sm-10 align-self-center">
                    <div className="bg-light px-5 py-10 rounded-4">
                        <a href="/produk-orbeets">
                            <Image src="/img/logo/logo-orbeets.png" className="icon-logo me-4" alt="" width={100} height={100}/>
                        </a>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-10 offset-lg-1" data-cues="slideInRight" data-delay="1600"
                    data-group="features-1">
                    <div className="row align-items-end">
                    <div className="col-lg-12">
                        <h4 className="mb-2 title-product"><span>03. </span>Asuransi dan Financial</h4>
                    </div>
                    <p className="mb-0 desc">bisnis asuransi yang terintegrasi antar unit bisnis asuransi dan easy access untuk
                        membantu meningkatkan penjualan asuransi serta produktivitas. Orbeets
                        pun menyediakan layanan support demi mengedepankan dan meningkatkan kepuasan customer terhadap sistem
                        yang dibangun</p>
                    <div className="mb-0">
                    <ul className="icon-list bullet-bg bullet-soft-primary mb-0 cc-2 px-3 mt-2">
                        <li><i className="uil uil-check"></i>Roadmap Inovasi</li>
                        <li><i className="uil uil-check"></i>Pusat Data Kota</li>
                        <li><i className="uil uil-check"></i>Pusat Informasi dan Layanan Kota</li>
                        <li><i className="uil uil-check"></i>Super Apps Kota</li>
                        <li><i className="uil uil-check"></i>Layanan informasi dan pengaduan public omnichannel</li>
                    </ul>
                    <a href="/produk-orbeets" className="more hover link-green mt-4">Selengkapnya</a>
                    </div>
                    </div>
                </div>
                </div>

            </div>
        </section>

    </>
  )
}
