import Image from "next/image";
import Link from "next/link";

export default function HeroSlider() {
   
  return (
    <>
        <section className="wrapper bg-light">
            <div className="container py-10 py-md-10">
                <div className="row">
                    <div className="col-xl-12 mx-auto">
                        <div className="card call-to-action-area-5" data-image-src="/img/photos/bg3.jpg">
                            <div className="card-body p-0 d-lg-flex flex-row align-items-lg-center justify-content-md-between text-center text-lg-start">
                                <div className="div">
                                    <h3 className="display-6 title-skew mb-6 mb-lg-0 pe-lg-10 pe-xl-5 pe-xxl-18 text-white">Diskusikan Kebutuhan
                                    anda dengan tim kami. </h3>
                                    <p>Sederhanakan Pekerjaan anda dengan solusi kami</p>
                                    <a href="#" className="btn btn-white rounded-pill mb-0 text-nowrap">Join Us</a>
                                </div>


                                <div className="shape-image-cta">
                                    <Image src="/img/backgrounds/bg-cta.png" alt="" width={100} height={100} />
                                </div>
                            </div>
                            {/* <!--/.card-body --> */}
                        </div>
                        {/* <!--/.card --> */}
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
