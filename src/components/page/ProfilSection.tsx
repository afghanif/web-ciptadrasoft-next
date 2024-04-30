import Image from "next/image";
import Link from "next/link";

export default function HeroSlider() {
   
  return (
    <>
        <section className="wrapper bg-light bg-aboutus">
            <div className="container py-14 py-md-10">

                {/* <!-- /.row --> */}
                <div className="row gx-lg-8 gx-xl-10 mb-lg-10 align-items-center">
                    <div className="col-lg-5">
                    <div className="row gx-md-5 gy-5">
                        <div className="col-md-6">
                        <figure className="rounded mt-md-10 position-relative"><Image src="/img/photos/g5.jpg"
                             alt="" width={100} height={100} /></figure>
                        </div>
                        {/* <!--/column --> */}
                        <div className="col-md-6">
                        <div className="row gx-md-5 gy-5">
                            <div className="col-md-12 order-md-2">
                            <figure className="rounded"><Image src="/img/photos/g6.jpg"
                                 alt="" width={100} height={100} /></figure>
                            </div>
                            {/* <!--/column --> */}
                            <div className="col-md-10">
                            <figure className="rounded"><Image src="/img/photos/g7.jpg"
                                 alt="" width={100} height={100} /></figure>
                            </div>
                            {/* <!--/column --> */}
                        </div>
                        {/* <!--/.row --> */}
                        </div>
                        {/* <!--/column --> */}
                    </div>
                    {/* <!--/.row --> */}
                    </div>
                    {/* <!-- /column --> */}
                    <div className="col-lg-7">
                    <h2 className="fs-15 text-uppercase text-muted mb-3">Tentang Kami</h2>
                    <h3 className="display-4 mb-5">Ciptadra Softindo</h3>
                    <p className="mb-8">Ciptadra Softindo adalah creative engineering company, perusahaan inovasi yang memiliki
                        ratusan pengalaman membangun solusi dengan beragam inovasi. Memiliki pengalaman dibanyak industri di
                        perusahaan terkemuka nasional maupun multinasional. Terus membangun kompetensi, berinovasi berkomitmen
                        tinggi untuk terus membangun manfaat dan berdampak untuk pelanggan.</p>
                    <div className="row align-items-center counter-wrapper gy-4">
                        <div className="col-6 col-lg-4 counter-item d-flex gap">
                        <div className="counter-item-4-icon">
                            <i className="uil uil-building"></i>
                        </div>
                        <div className="counter-info">
                            <h3 className="counter counter-lg text-green">25</h3>
                            <p>Tahun Pengalaman</p>
                        </div>

                        </div>
                        {/* <!--/column --> */}
                        <div className="col-6 col-lg-4 counter-item d-flex gap">
                        <div className="counter-item-4-icon">
                            <i className="uil uil-user-plus"></i>
                        </div>
                        <div className="counter-info">
                            <h3 className="counter counter-lg text-green">+80</h3>
                            <p>Karyawan</p>
                        </div>
                        </div>
                        <div className="col-6 col-lg-4 counter-item d-flex gap">
                        <div className="counter-item-4-icon">
                            <i className="uil uil-users-alt"></i>
                        </div>
                        <div className="counter-info">
                            <h3 className="counter counter-lg text-green">200</h3>
                            <p>Jumlah Klien</p>
                        </div>
                        </div>
                    </div>
                    <div className="animate__animated animate__slideInUp animate__delay-3s mt-5 text-end">
                        <a href="/profil" className="btn btn-primary btn-icon btn-icon-start rounded">
                        Lihat Detail <i className="uil uil-arrow-right"></i>
                        </a>
                    </div>
                    {/* <!-- /column --> */}
                    </div>
                    {/* <!-- /.row --> */}
                </div>
                {/* <!-- /.container --> */}
            </div>
        </section>

    </>
  )
}
