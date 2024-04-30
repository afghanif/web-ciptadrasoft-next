import Image from 'next/image'
import Link from 'next/link'

export default async function Mitra() {
    return (
        <>

            <section className="section-frame mt-4">
                <div className="wrapper bg-gray rounded">
                    <div className="container py-13 py-md-12 text-center">
                        <div className="row">
                            <div className="col-lg-10 col-xxl-8 mx-auto">
                                <h2 className="fs-15 text-uppercase text-muted mb-3">App Features</h2>
                                <h3 className="display-4 px-xxl-11">Portofolio</h3>
                            </div>
                            {/* <!-- /column --> */}
                        </div>
                        {/* <!-- /.row --> */}
                    </div>
                    {/* <!-- /.container --> */}
                </div>
                {/* <!-- /.wrapper --> */}
            </section>
            <section className="wrapper bg-light">
                <div className="container py-14 py-md-10">
                    <div className="row text-center">
                    </div>
                    {/* <!-- /.row --> */}
                    <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
                        <div className="col-lg-12">
                            <ul className="nav nav-tabs nav-tabs-basic nav-custom2 mt-5 mb-7 justify-content-center">
                                <li className="nav-item"> <Link className="nav-link active" data-bs-toggle="tab" href="#tab3-1">Contact Center Omnichannel</Link> </li>
                                <li className="nav-item"> <Link className="nav-link" data-bs-toggle="tab" href="#tab3-2">Smartcity</Link> </li>
                                <li className="nav-item"> <Link className="nav-link" data-bs-toggle="tab" href="#tab3-3">Asuransi dan Fintech</Link> </li>
                            </ul>
                            {/* <!-- /.nav-tabs --> */}
                            <div className="tab-content mt-0 mt-md-5">
                                <div className="tab-pane fade show active" id="tab3-1">
                                    <div className="row gx-lg-8 gx-xl-12 gy-8" data-cues="slideInUp" data-group="services">
                                        <div className="col-xl-4 col-lg-6 col-md-6">
                                            <div className="home-page__thumb-wrap mb-40 text-center">
                                            <a href="#">
                                                <div className="home-page__thumb" style={{backgroundImage:'url(/img/demos/demo1.jpg)'}}>
                                                </div>
                                            </a>
                                            <div className="home-page__thumb-title">
                                                <span>Business</span>
                                                <h4 className="mb-0">
                                                <a href="#">SEO Marketing</a>
                                                </h4>
                                            </div>
                                            </div>
                                        </div>

                                        <div className="col-xl-4 col-lg-6 col-md-6">
                                            <div className="home-page__thumb-wrap mb-40 text-center">
                                            <a href="#">
                                                <div className="home-page__thumb" style={{backgroundImage:'url(/img/demos/demo1.jpg)'}}>
                                                </div>
                                            </a>
                                            <div className="home-page__thumb-title">
                                                <span>Business</span>
                                                <h4 className="mb-0">
                                                <a href="#">SEO Marketing</a>
                                                </h4>
                                            </div>
                                            </div>
                                        </div>

                                        <div className="col-xl-4 col-lg-6 col-md-6">
                                            <div className="home-page__thumb-wrap mb-40 text-center">
                                            <a href="#">
                                                <div className="home-page__thumb" style={{backgroundImage:'url(/img/demos/demo1.jpg)'}}>
                                                </div>
                                            </a>
                                            <div className="home-page__thumb-title">
                                                <span>Business</span>
                                                <h4 className="mb-0">
                                                <a href="#">SEO Marketing</a>
                                                </h4>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--/.tab-pane --> */}
                                <div className="tab-pane fade" id="tab3-2">
                                <div className="row gx-lg-8 gx-xl-12 gy-8" data-cues="slideInUp" data-group="services">
                                        <div className="col-xl-4 col-lg-6 col-md-6">
                                            <div className="home-page__thumb-wrap mb-40 text-center">
                                            <a href="#">
                                                <div className="home-page__thumb" style={{backgroundImage:'url(/img/demos/demo1.jpg)'}}>
                                                </div>
                                            </a>
                                            <div className="home-page__thumb-title">
                                                <span>Business</span>
                                                <h4 className="mb-0">
                                                <a href="#">SEO Marketing</a>
                                                </h4>
                                            </div>
                                            </div>
                                        </div>

                                        <div className="col-xl-4 col-lg-6 col-md-6">
                                            <div className="home-page__thumb-wrap mb-40 text-center">
                                            <a href="#">
                                                <div className="home-page__thumb" style={{backgroundImage:'url(/img/demos/demo1.jpg)'}}>
                                                </div>
                                            </a>
                                            <div className="home-page__thumb-title">
                                                <span>Business</span>
                                                <h4 className="mb-0">
                                                <a href="#">SEO Marketing</a>
                                                </h4>
                                            </div>
                                            </div>
                                        </div>

                                        <div className="col-xl-4 col-lg-6 col-md-6">
                                            <div className="home-page__thumb-wrap mb-40 text-center">
                                            <a href="#">
                                                <div className="home-page__thumb" style={{backgroundImage:'url(/img/demos/demo1.jpg)'}}>
                                                </div>
                                            </a>
                                            <div className="home-page__thumb-title">
                                                <span>Business</span>
                                                <h4 className="mb-0">
                                                <a href="#">SEO Marketing</a>
                                                </h4>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--/.tab-pane --> */}
                                <div className="tab-pane fade" id="tab3-3">
                                <div className="row gx-lg-8 gx-xl-12 gy-8" data-cues="slideInUp" data-group="services">
                                        <div className="col-xl-4 col-lg-6 col-md-6">
                                            <div className="home-page__thumb-wrap mb-40 text-center">
                                            <a href="#">
                                                <div className="home-page__thumb" style={{backgroundImage:'url(/img/demos/demo1.jpg)'}}>
                                                </div>
                                            </a>
                                            <div className="home-page__thumb-title">
                                                <span>Business</span>
                                                <h4 className="mb-0">
                                                <a href="#">SEO Marketing</a>
                                                </h4>
                                            </div>
                                            </div>
                                        </div>

                                        <div className="col-xl-4 col-lg-6 col-md-6">
                                            <div className="home-page__thumb-wrap mb-40 text-center">
                                            <a href="#">
                                                <div className="home-page__thumb" style={{backgroundImage:'url(/img/demos/demo1.jpg)'}}>
                                                </div>
                                            </a>
                                            <div className="home-page__thumb-title">
                                                <span>Business</span>
                                                <h4 className="mb-0">
                                                <a href="#">SEO Marketing</a>
                                                </h4>
                                            </div>
                                            </div>
                                        </div>

                                        <div className="col-xl-4 col-lg-6 col-md-6">
                                            <div className="home-page__thumb-wrap mb-40 text-center">
                                            <a href="#">
                                                <div className="home-page__thumb" style={{backgroundImage:'url(/img/demos/demo1.jpg)'}}>
                                                </div>
                                            </a>
                                            <div className="home-page__thumb-title">
                                                <span>Business</span>
                                                <h4 className="mb-0">
                                                <a href="#">SEO Marketing</a>
                                                </h4>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                             
                            </div>
                        </div>



                    </div>

                </div>
                {/* <!-- /.container --> */}
            </section>
            {/* <!-- /section --> */}
        </>



    )
}