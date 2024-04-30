import Image from "next/image";
import Link from "next/link";

export default function HeroSlider() {
   
  return (
    <>
       <section className="wrapper bg-gradient-primary">
      <div className="container pt-15 pt-md-10">
        <h2 className="fs-16 text-uppercase text-muted mb-8 text-center">Dipercaya oleh +200 klien</h2>
        <div className="swiper-container clients mb-10" data-margin="30" data-dots="false" data-loop="true"
          data-autoplay="true" data-autoplaytime="1" data-drag="false" data-speed="5000" data-items-xxl="7"
          data-items-xl="6" data-items-lg="5" data-items-md="4" data-items-sm="3" data-items-xs="3">
          <div className="swiper swiper-style pe-none">
            <div className="swiper-wrapper ticker">
              <div className="swiper-slide px-5"><Image src="/img/logo/klien-1.png" alt="" width={100} height={100}/></div>
              <div className="swiper-slide px-5"><Image src="/img/logo/klien-2.png" alt="" width={100} height={100}/></div>
              <div className="swiper-slide px-5"><Image src="/img/logo/klien-3.png" alt="" width={100} height={100}/></div>
              <div className="swiper-slide px-5"><Image src="/img/logo/klien-4.png" alt="" width={100} height={100}/></div>
              <div className="swiper-slide px-5"><Image src="/img/logo/klien-5.jpg" alt="" width={100} height={100}/></div>
              <div className="swiper-slide px-5"><Image src="/img/logo/klien-6.png" alt="" width={100} height={100}/></div>
              <div className="swiper-slide px-5"><Image src="/img/logo/klien-7.png" alt="" width={100} height={100}/></div>
              <div className="swiper-slide px-5"><Image src="/img/logo/klien-8.png" alt="" width={100} height={100}/></div>
              <div className="swiper-slide px-5"><Image src="/img/logo/klien-9.jpg" alt="" width={100} height={100}/></div>
              <div className="swiper-slide px-5"><Image src="/img/logo/klien-10.png" alt=""width={100} height={100} /></div>
              <div className="swiper-slide px-5"><Image src="/img/logo/klien-11.png" alt=""width={100} height={100} /></div>
            </div>
            {/* <!--/.swiper-wrapper --> */}
          </div>
          {/* <!-- /.swiper --> */}
        </div>


        <div className="swiper-container clients mb-10" data-margin="30" data-dots="false" data-loop="true"
          data-autoplay="true" data-autoplaytime="1" data-drag="false" data-speed="5000" data-items-xxl="7"
          data-items-xl="6" data-items-lg="5" data-items-md="4" data-items-sm="3" data-items-xs="3">
          <div className="swiper swiper-style pe-none" dir="rtl">
            <div className="swiper-wrapper ticker">
              <div className="swiper-slide px-5"><Image src="/img/logo/klien-11.png" alt=""width={100} height={100} /></div>
              <div className="swiper-slide px-5"><Image src="/img/logo/klien-12.png" alt=""width={100} height={100} /></div>
              <div className="swiper-slide px-5"><Image src="/img/logo/klien-13.png" alt=""width={100} height={100} /></div>
              <div className="swiper-slide px-5"><Image src="/img/logo/klien-14.png" alt=""width={100} height={100} /></div>
              <div className="swiper-slide px-5"><Image src="/img/logo/klien-15.png" alt=""width={100} height={100} /></div>
              <div className="swiper-slide px-5"><Image src="/img/logo/klien-16.png" alt=""width={100} height={100} /></div>
              <div className="swiper-slide px-5"><Image src="/img/logo/klien-17.png" alt=""width={100} height={100} /></div>
              <div className="swiper-slide px-5"><Image src="/img/logo/klien-18.png" alt=""width={100} height={100} /></div>
              <div className="swiper-slide px-5"><Image src="/img/logo/klien-19.png" alt=""width={100} height={100} /></div>
              <div className="swiper-slide px-5"><Image src="/img/logo/klien-20.png" alt=""width={100} height={100} /></div>
              <div className="swiper-slide px-5"><Image src="/img/logo/klien-21.png" alt=""width={100} height={100} /></div>
            </div>
            {/* <!--/.swiper-wrapper --> */}
          </div>
          {/* <!-- /.swiper --> */}
        </div>
      </div>
      {/* <!-- /.container --> */}
    </section>

    </>
  )
}
