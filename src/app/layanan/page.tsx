import React from 'react'
import Image from "next/image";

export default function Layanan() {
  return (
    <>
        <section className="section-frame mt-4">
            <div className="wrapper bg-gray rounded">
                <div className="container py-13 py-md-12 text-center">
                    <div className="row">
                        <div className="col-lg-10 col-xxl-8 mx-auto">
                        <h2 className="fs-15 text-uppercase text-muted mb-3">App Features</h2>
                        <h3 className="display-4 mb-9 px-xxl-11">Berbagai Layanan Tersedia</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="wrapper bg-light">
            <div className="container py-14 py-md-10">
                <div className="row gx-lg-8 gx-xl-12 gy-8 mb-lg-10" data-cues="slideInUp" data-group="services">
                    <div className="tp-feature__main d-flex flex-wrap justify-content-center">
                        <div className="tp-feature__wrap mb-3">
                            <div className="tp-feature__item d-flex align-items-center gap ">
                            <span><Image src="/img/icons/solid/icon-roadmap.png" alt="" className="icon-img-md" width={100} height={40} /></span>
                            <span>Innovation Roadmap</span>
                            </div>
                        </div>

                        <div className="tp-feature__wrap mb-3">
                            <div className="tp-feature__item d-flex align-items-center gap">
                            <span><Image src="/img/icons/solid/icon-web.png" alt="" className="icon-img-md" width={100} height={40} /></span>
                            <span>Website Development</span>
                            </div>
                        </div>

                        <div className="tp-feature__wrap mb-3">
                            <div className="tp-feature__item d-flex align-items-center gap">
                            <span><Image src="/img/icons/solid/icon-mobile.png" alt="" className="icon-img-md" width={100} height={40} /></span>
                            <span>Mobile Apps Development</span>
                            </div>
                        </div>

                        <div className="tp-feature__wrap mb-3">
                            <div className="tp-feature__item d-flex align-items-center gap">
                            <span><Image src="/img/icons/solid/icon-custom.png" alt="" className="icon-img-md" width={100} height={40} /></span>
                            <span>Custom Development</span>
                            </div>
                        </div>

                        <div className="tp-feature__wrap mb-3">
                            <div className="tp-feature__item d-flex align-items-center gap">
                            <span><Image src="/img/icons/solid/icon-data.png" alt="" className="icon-img-md" width={100} height={40} /></span>
                            <span>Data Center Development</span>
                            </div>
                        </div>

                        <div className="tp-feature__wrap mb-3">
                            <div className="tp-feature__item d-flex align-items-center gap">
                            <span><Image src="/img/icons/solid/icon-api.png" alt="" className="icon-img-md" width={100} height={40} /></span>
                            <span>API Omnichannel</span>
                            </div>
                        </div>
                    </div>
                    {/* <!--/.row --> */}

                    {/* <!-- /.row --> */}
                </div>
            </div>
            {/* <!-- /.container --> */}
        </section>
    </>
  )
}
