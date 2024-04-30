import Image from "next/image";
import Link from "next/link";

export default function LayananSection() {
   
  return (
    <>
        <section className="wrapper bg-light">
            <div className="container py-14 py-md-10">
                <div className="row text-center mt-xl-10">
                    <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                        <h2 className="fs-15 text-uppercase text-muted mb-3">App Features</h2>
                        <h3 className="display-4 mb-9 px-xxl-11">Berbagai Layanan Tersedia</h3>
                    </div>
                </div>
                    {/* <!-- /column --> */}
        
            {/* <!-- /.row --> */}
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
