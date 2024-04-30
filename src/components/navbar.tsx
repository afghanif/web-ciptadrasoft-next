import Link from "next/link";
import Image from "next/image";
import Script from 'next/script';


export default async function Navbar() {

    return (
        <>
      <header className="wrapper bg-light border-bottom">
      <nav className="navbar navbar-expand-lg center-nav transparent navbar-light ">
        <div className="container flex-lg-row flex-nowrap align-items-center">
          <div className="navbar-brand w-100">
            <a href="/">
              <Image className="logo-dark w-75" src="/img/logo/logo-ciptadra.png" alt="" width={1000} height={50}/>
                  <Image className="logo-light w-75" src="/img/logo/logo-ciptadra.png" alt=""  width={100} height={50}/>
            </a>
          </div>
          
         


          <div className="navbar-collapse offcanvas offcanvas-nav offcanvas-start">
            <div className="offcanvas-header d-lg-none">
              <a href="/"><Image src="/img/logo/logo-ciptadra.png"
                  alt=""  width={100} height={100}/></a>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas"
                aria-label="Close"></button>
            </div>
            <div className="offcanvas-body ms-lg-auto d-flex flex-column h-100">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="profil">Tentang Kami</a>
                </li>

                <li className="nav-item dropdown dropdown-mega">
                  <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Produk</a>
                  <ul className="dropdown-menu mega-menu">
                    <li className="mega-menu-content">
                      <div className="row gx-0 gx-lg-3">
                        <div className="col-lg-4">
                          <Link href={'/produk-onebox'}>
                            <h6 className="dropdown-header"><i className="uil uil-headphones"></i>Contact Center Omnichannel</h6>
                            <div className="row dropdown-content">
                              <div className="col-lg-4 align-self-center">
                                <Image src="/img/logo/logo-onebox.png" className="icon-nav w-100" alt=""  width={100} height={100}/>
                              </div>
                              <div className="col-lg-8">
                                <p className="mb-0">Satu Solusi Untuk Bekerja Lebih Cepat Dan Mudah Dari Semua Channel Layanan
                                </p>
                              </div>
                            </div>
                          </Link>
                        </div>
                        {/* <!--/column --> */}
                        <div className="col-lg-4">
                          <Link href={'/produk-smartcity'}>
                          <h6 className="dropdown-header"><i className="uil uil-building"></i>Solusi Kota Digital</h6>
                          <div className="row dropdown-content">
                            <div className="col-lg-4 align-self-center">
                              <Image src="/img/logo/logo-smartcity.png" className="icon-nav w-100" alt=""  width={100} height={100}/>
                            </div>
                            <div className="col-lg-8">
                              <p className="mb-0">Membantu Pemerintah dan Institusi untuk membangun pusat data informasi</p>
                            </div>
                          </div>
                          </Link>
                        </div>
                        {/* <!--/column --> */}
                        <div className="col-lg-4">
                          <Link href={'/produk-orbeets'}>
                          <h6 className="dropdown-header"><i className="uil uil-shield-check"></i>Asuransi dan Perbankan</h6>
                          <div className="row dropdown-content">
                            <div className="col-lg-4 align-self-center">
                              <Image src="/img/logo/logo-orbeets.png" className="icon-nav w-100" alt=""  width={100} height={100}/>
                            </div>
                            <div className="col-lg-8">
                              <p className="mb-0">Satu Solusi Untuk Bekerja Lebih Cepat Dan Mudah Dari Semua Channel Layanan
                              </p>
                            </div>
                          </div>
                          </Link>
                        </div>
                      </div>
                      <hr className="mt-1 mb-1"/>
                      <div className="text-end">
                         <a href="#" className="more hover link-green mt-2">Lihat Semua Produk Ciptadra</a>
                      </div>
                     
                      {/* <!--/.row --> */}
                    </li>
                    {/* <!--/.mega-menu-content--> */}
                  </ul>
                  {/* <!--/.dropdown-menu --> */}
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="/layanan">Layanan</a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="/mitra">Mitra</a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="/portofolio">Portofolio</a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="/artikel">Artikel</a>
                </li>
              </ul>
              {/* <!-- /.navbar-nav --> */}
              <div className="offcanvas-footer d-lg-none">
                <div>
                  <a href="mailto:first.last@email.com" className="link-inverse">info@email.com</a>
                  <br /> 00 (123) 456 78 90 <br />
                  <nav className="nav social social-white mt-4">
                    <a href="#"><i className="uil uil-twitter"></i></a>
                    <a href="#"><i className="uil uil-facebook-f"></i></a>
                    <a href="#"><i className="uil uil-dribbble"></i></a>
                    <a href="#"><i className="uil uil-instagram"></i></a>
                    <a href="#"><i className="uil uil-youtube"></i></a>
                  </nav>
                  {/* <!-- /.social --> */}
                </div>
              </div>
              {/* <!-- /.offcanvas-footer --> */}
            </div>
            {/* <!-- /.offcanvas-body --> */}
          </div>
          {/* <!-- /.navbar-collapse --> */}
          <div className="navbar-other w-100 d-flex ms-auto">
            <ul className="navbar-nav flex-row align-items-center ms-auto">
              
              <li className="nav-item d-none d-md-block">
                <a href="./contact.html" className="btn btn-sm btn-primary rounded-pill">Hubungi Kami</a>
              </li>
              <li className="nav-item d-lg-none">
                <button className="hamburger offcanvas-nav-btn"><span></span></button>
              </li>
            </ul>
            {/* <!-- /.navbar-nav --> */}
          </div>
          {/* <!-- /.navbar-other --> */}
        </div>
        {/* <!-- /.container --> */}
      </nav>
      {/* <!-- /.navbar --> */}
    </header>
    {/* <!-- /header --> */}
    </>
    )
}