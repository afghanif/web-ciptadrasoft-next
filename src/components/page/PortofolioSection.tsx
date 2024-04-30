import Image from "next/image";
import Link from "next/link";

export default function HeroSlider() {
   
  return (
    <>
       <section className="wrapper bg-light p-relative">
    <div className="portfolio-1-main-bg-shape">
      <Image src="/img/backgrounds/bg-portfolio.png" alt="" width={1000} height={500} />
    </div>
    <div className="container py-14 py-md-10">

      <div className="row gx-lg-8 gx-xl-10 mb-lg-10 align-items-center">
        <div className="col-lg-5">
          <div className="portfolio-1-wrapper">
            <div className="portfolio-1">
              <div className="row text-start mt-xl-12">
                <div className="col-md-10 col-lg-8">
                  <h2 className="fs-15 text-uppercase text-muted mb-3">Studi Kasus Kami</h2>
                  <h3 className="display-4 mb-9">Pekerjaan Kami</h3>
                </div>
                {/* <!-- /column --> */}
              </div>
            </div>
          </div>
          <div className="portfolio-tabs">
            <ul className="nav nav-tabs nav-tabs-basic d-block nav-custom">
                <li className="nav-item"> 
                <Link className="nav-link active" data-bs-toggle="tab" href="#tab3-1">Contact Center
                  Omnichannel
                </Link>
                  </li>
                <li className="nav-item"> 
                    <Link className="nav-link" data-bs-toggle="tab" href="#tab3-2">Smartcity Solutions </Link>
                </li>
                <li className="nav-item"> 
                    <Link className="nav-link" data-bs-toggle="tab" href="#tab3-3">Asuransi dan Finansial  </Link>
                </li>
              
            </ul>

            <div className="animate__animated animate__slideInUp animate__delay-3s mt-5 text-start">
              <Link className="btn btn-primary btn-icon btn-icon-start rounded" href={"/portofolio"}>
                Selengkapnya<i className="uil uil-arrow-right"></i>
              </Link>
            </div>

          </div>
        </div>
        {/* <!-- /column --> */}
        <div className="col-lg-7 portfolio-1">
          <div className="tab-content">
            <div className="tab-pane fade show active" id="tab3-1">
              <div className="swiper-container mb-10 nav-bottom" data-margin="30" data-nav="true" data-dots="true"
                data-items-xl="2" data-items-md="2" data-items-xs="1" style={{ position: 'relative', display: 'block'}}>
                <div className="swiper overflow-hidden">
                  <div className="swiper-wrapper overflow-visible">
                    <div className="swiper-slide">
                      <div className="home-page__thumb-wrap mb-40 text-center">
                        <Link href="#">
                          <div className="home-page__thumb" style={{backgroundImage: 'url(/img/demos/demo1.jpg)'}}>
                          </div>
                        </Link>
                        <div className="home-page__thumb-title">
                          <span>Business</span>
                          <h4>
                            <Link href="#">SEO Marketing</Link>
                          </h4>
                        </div>
                      </div>
                    </div>
                    {/* <!--/.swiper-slide --> */}
                    <div className="swiper-slide">
                      <div className="home-page__thumb-wrap mb-40 text-center">
                        <Link href="#">
                          <div className="home-page__thumb" style={{backgroundImage: 'url(/img/demos/demo1.jpg)'}}>
                          </div>
                        </Link>
                        <div className="home-page__thumb-title">
                          <span>Business</span>
                          <h4>
                            <Link href="#">SEO Marketing</Link>
                          </h4>
                        </div>
                      </div>
                    </div>
                    {/* <!--/.swiper-slide --> */}
                    <div className="swiper-slide">
                      <div className="home-page__thumb-wrap mb-40 text-center">
                        <Link href="#">
                          <div className="home-page__thumb" style={{backgroundImage: 'url(/img/demos/demo1.jpg)'}}>
                          </div>
                        </Link>
                        <div className="home-page__thumb-title">
                          <span>Business</span>
                          <h4>
                            <Link href="#">SEO Marketing</Link>
                          </h4>
                        </div>
                      </div>
                    </div>
                    {/* <!--/.swiper-slide --> */}
                    <div className="swiper-slide">
                      <div className="home-page__thumb-wrap mb-40 text-center">
                        <Link href="#">
                          <div className="home-page__thumb" style={{backgroundImage: 'url(/img/demos/demo1.jpg)'}}>
                          </div>
                        </Link>
                        <div className="home-page__thumb-title">
                          <span>Business</span>
                          <h4>
                            <Link href="#">SEO Marketing</Link>
                          </h4>
                        </div>
                      </div>
                    </div>
                    {/* <!--/.swiper-slide --> */}
                    <div className="swiper-slide">
                      <div className="home-page__thumb-wrap mb-40 text-center">
                        <Link href="#">
                          <div className="home-page__thumb" style={{backgroundImage: 'url(/img/demos/demo1.jpg)'}}>
                          </div>
                        </Link>
                        <div className="home-page__thumb-title">
                          <span>Business</span>
                          <h4>
                            <Link href="#">SEO Marketing</Link>
                          </h4>
                        </div>
                      </div>
                    </div>
                    {/* <!--/.swiper-slide --> */}
                  </div>
                  {/* <!--/.swiper-wrapper --> */}
                </div>
                {/* <!-- /.swiper --> */}
              </div>
            </div>
            {/* <!--/.tab-pane --> */}
            <div className="tab-pane fade" id="tab3-2">
              <div className="swiper-container mb-10 nav-bottom" data-margin="30" data-nav="true" data-dots="true"
                data-items-xl="2" data-items-md="2" data-items-xs="1" style={{ position: 'relative', display: 'block'}}>
                <div className="swiper overflow-hidden">
                  <div className="swiper-wrapper overflow-visible">
                    <div className="swiper-slide">
                      <div className="home-page__thumb-wrap mb-40 text-center">
                        <Link href="#">
                          <div className="home-page__thumb" style={{backgroundImage: 'url(/img/demos/demo1.jpg)'}}>
                          </div>
                        </Link>
                        <div className="home-page__thumb-title">
                          <span>Business</span>
                          <h4>
                            <Link href="#">SEO Marketing</Link>
                          </h4>
                        </div>
                      </div>
                    </div>
                    {/* <!--/.swiper-slide --> */}
                    <div className="swiper-slide">
                      <div className="home-page__thumb-wrap mb-40 text-center">
                        <Link href="#">
                          <div className="home-page__thumb" style={{backgroundImage: 'url(/img/demos/demo1.jpg)'}}>
                          </div>
                        </Link>
                        <div className="home-page__thumb-title">
                          <span>Business</span>
                          <h4>
                            <Link href="#">SEO Marketing</Link>
                          </h4>
                        </div>
                      </div>
                    </div>
                    {/* <!--/.swiper-slide --> */}
                    <div className="swiper-slide">
                      <div className="home-page__thumb-wrap mb-40 text-center">
                        <Link href="#">
                          <div className="home-page__thumb" style={{backgroundImage: 'url(/img/demos/demo1.jpg)'}}>
                          </div>
                        </Link>
                        <div className="home-page__thumb-title">
                          <span>Business</span>
                          <h4>
                            <Link href="#">SEO Marketing</Link>
                          </h4>
                        </div>
                      </div>
                    </div>
                    {/* <!--/.swiper-slide --> */}
                    <div className="swiper-slide">
                      <div className="home-page__thumb-wrap mb-40 text-center">
                        <Link href="#">
                          <div className="home-page__thumb" style={{backgroundImage: 'url(/img/demos/demo1.jpg)'}}>
                          </div>
                        </Link>
                        <div className="home-page__thumb-title">
                          <span>Business</span>
                          <h4>
                            <Link href="#">SEO Marketing</Link>
                          </h4>
                        </div>
                      </div>
                    </div>
                    {/* <!--/.swiper-slide --> */}
                    <div className="swiper-slide">
                      <div className="home-page__thumb-wrap mb-40 text-center">
                        <Link href="#">
                          <div className="home-page__thumb" style={{backgroundImage: 'url(/img/demos/demo1.jpg)'}}>
                          </div>
                        </Link>
                        <div className="home-page__thumb-title">
                          <span>Business</span>
                          <h4>
                            <Link href="#">SEO Marketing</Link>
                          </h4>
                        </div>
                      </div>
                    </div>
                    {/* <!--/.swiper-slide --> */}
                  </div>
                  {/* <!--/.swiper-wrapper --> */}
                </div>
                {/* <!-- /.swiper --> */}
              </div>
            </div>
            {/* <!--/.tab-pane --> */}
            <div className="tab-pane fade" id="tab3-3">
              <div className="swiper-container mb-10 nav-bottom" data-margin="30" data-nav="true" data-dots="true"
                data-items-xl="2" data-items-md="2" data-items-xs="1" style={{ position: 'relative', display: 'block'}}>
                <div className="swiper overflow-hidden">
                  <div className="swiper-wrapper overflow-visible">
                    <div className="swiper-slide">
                      <div className="home-page__thumb-wrap mb-40 text-center">
                        <Link href="#">
                          <div className="home-page__thumb"  style={{backgroundImage: 'url(/img/demos/demo1.jpg)'}}>
                          </div>
                        </Link>
                        <div className="home-page__thumb-title">
                          <span>Business</span>
                          <h4>
                            <Link href="#">SEO Marketing</Link>
                          </h4>
                        </div>
                      </div>
                    </div>
                    {/* <!--/.swiper-slide --> */}
                    <div className="swiper-slide">
                      <div className="home-page__thumb-wrap mb-40 text-center">
                        <Link href="#">
                          <div className="home-page__thumb" style={{backgroundImage: 'url(/img/demos/demo1.jpg)'}}>
                          </div>
                        </Link>
                        <div className="home-page__thumb-title">
                          <span>Business</span>
                          <h4>
                            <Link href="#">SEO Marketing</Link>
                          </h4>
                        </div>
                      </div>
                    </div>
                    {/* <!--/.swiper-slide --> */}
                    <div className="swiper-slide">
                      <div className="home-page__thumb-wrap mb-40 text-center">
                        <Link href="#">
                          <div className="home-page__thumb" style={{backgroundImage: 'url(/img/demos/demo1.jpg)'}}>
                          </div>
                        </Link>
                        <div className="home-page__thumb-title">
                          <span>Business</span>
                          <h4>
                            <Link href="#">SEO Marketing</Link>
                          </h4>
                        </div>
                      </div>
                    </div>
                    {/* <!--/.swiper-slide --> */}
                    <div className="swiper-slide">
                      <div className="home-page__thumb-wrap mb-40 text-center">
                        <Link href="#">
                          <div className="home-page__thumb" style={{backgroundImage: 'url(/img/demos/demo1.jpg)'}}>
                          </div>
                        </Link>
                        <div className="home-page__thumb-title">
                          <span>Business</span>
                          <h4>
                            <Link href="#">SEO Marketing</Link>
                          </h4>
                        </div>
                      </div>
                    </div>
                    {/* <!--/.swiper-slide --> */}
                    <div className="swiper-slide">
                      <div className="home-page__thumb-wrap mb-40 text-center">
                        <Link href="#">
                          <div className="home-page__thumb" style={{backgroundImage: 'url(/img/demos/demo1.jpg)'}}>
                          </div>
                        </Link>
                        <div className="home-page__thumb-title">
                          <span>Business</span>
                          <h4>
                            <Link href="#">SEO Marketing</Link>
                          </h4>
                        </div>
                      </div>
                    </div>
                    {/* <!--/.swiper-slide --> */}
                  </div>
                  {/* <!--/.swiper-wrapper --> */}
                </div>
                {/* <!-- /.swiper --> */}
              </div>
            </div>
            {/* <!--/.tab-pane --> */}
            <div className="tab-pane fade" id="tab3-4">
              <div className="swiper-container mb-10 nav-bottom" data-margin="30" data-nav="true" data-dots="true"
                data-items-xl="2" data-items-md="2" data-items-xs="1" style={{position: 'relative', display: 'block'}}>
                <div className="swiper overflow-hidden">
                  <div className="swiper-wrapper overflow-visible">
                    <div className="swiper-slide">
                      <div className="home-page__thumb-wrap mb-40 text-center">
                        <Link href="#">
                          <div className="home-page__thumb" style={{backgroundImage: 'url(/img/demos/demo1.jpg)'}}>
                          </div>
                        </Link>
                        <div className="home-page__thumb-title">
                          <span>Business</span>
                          <h4>
                            <Link href="#">SEO Marketing</Link>
                          </h4>
                        </div>
                      </div>
                    </div>
                    {/* <!--/.swiper-slide --> */}
                    <div className="swiper-slide">
                      <div className="home-page__thumb-wrap mb-40 text-center">
                        <Link href="#">
                          <div className="home-page__thumb" style={{backgroundImage: 'url(/img/demos/demo1.jpg)'}}>
                          </div>
                        </Link>
                        <div className="home-page__thumb-title">
                          <span>Business</span>
                          <h4>
                            <Link href="#">SEO Marketing</Link>
                          </h4>
                        </div>
                      </div>
                    </div>
                    {/* <!--/.swiper-slide --> */}
                    <div className="swiper-slide">
                      <div className="home-page__thumb-wrap mb-40 text-center">
                        <Link href="#">
                          <div className="home-page__thumb" style={{backgroundImage: 'url(/img/demos/demo1.jpg)'}}>
                          </div>
                        </Link>
                        <div className="home-page__thumb-title">
                          <span>Business</span>
                          <h4>
                            <Link href="#">SEO Marketing</Link>
                          </h4>
                        </div>
                      </div>
                    </div>
                    {/* <!--/.swiper-slide --> */}
                    <div className="swiper-slide">
                      <div className="home-page__thumb-wrap mb-40 text-center">
                        <Link href="#">
                          <div className="home-page__thumb" style={{backgroundImage: 'url(/img/demos/demo1.jpg)'}}>
                          </div>
                        </Link>
                        <div className="home-page__thumb-title">
                          <span>Business</span>
                          <h4>
                            <Link href="#">SEO Marketing</Link>
                          </h4>
                        </div>
                      </div>
                    </div>
                    {/* <!--/.swiper-slide --> */}
                    <div className="swiper-slide">
                      <div className="home-page__thumb-wrap mb-40 text-center">
                        <Link href="#">
                          <div className="home-page__thumb" style={{backgroundImage: 'url(/img/demos/demo1.jpg)'}}>
                          </div>
                        </Link>
                        <div className="home-page__thumb-title">
                          <span>Business</span>
                          <h4>
                            <Link href="#">SEO Marketing</Link>
                          </h4>
                        </div>
                      </div>
                    </div>
                    {/* <!--/.swiper-slide --> */}
                  </div>
                  {/* <!--/.swiper-wrapper --> */}
                </div>
                {/* <!-- /.swiper --> */}
              </div>
            </div>
            {/* <!--/.tab-pane --> */}
          </div>

          {/* <!-- /.swiper-container --> */}
        </div>
        {/* <!-- /column --> */}
      </div>
      {/* <!-- /.row --> */}
    </div>
    {/* <!-- /.container --> */}
  </section>

    </>
  )
}
