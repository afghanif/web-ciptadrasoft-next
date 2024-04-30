import Image from 'next/image'
import Link from 'next/link'

export default async function Mitra() {
return (
<>
   
    <section className="section-frame overflow-hidden">
      <div className="wrapper bg-gray">
        <div className="container py-13 py-md-12 text-center">
          <div className="row">
            <div className="col-lg-10 col-xxl-8 mx-auto">
                <h2 className="fs-15 text-uppercase text-muted mb-3">Tentang Kami</h2>
                <h3 className="display-4 mb-9 px-xxl-11">PT. Ciptadra Softindo</h3>
              
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
        <div className="row text-start">
            <div className="container py-14 py-md-5">
              <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
                <div className="col-md-8 col-lg-6 col-xl-5 order-lg-2 position-relative">
                  <div className="shape bg-soft-primary rounded-circle rellax w-20 h-20" data-rellax-speed="1" style={{top: '-2rem', right:'-1.9rem'}}></div>
                  <figure className="rounded">
                    <Image src="/img/logo/logo-ciptadra.png" alt="" width={500} height={500}/></figure>
                </div>
                {/* <!--/column --> */}
                <div className="col-lg-7">
                  <h2 className="display-4 mb-3">Tentang Kami</h2>
                  <p className="fs-16">Ciptadra Softindo yang telah didirikan sejak tahun 1999 adalah
                    creative engineering company, perusahaan inovasi yang memiliki ratusan pengalaman
                    membangun solusi dengan beragam inovasi. Memiliki pengalaman dibanyak industri di perusahaan terkemuka nasionalnmaupun multinasional. Terus membangun
                    kompetensi, berinovasi berkomitmen tinggi untuk terus membangun manfaat dan berdampak untuk pelanggan. Setiap
                    karya dikerjakan oleh team terbaik, cara terbaik dan kultur terbaik. Saat ini menempati kantor sendiri seluas 1000m2 di kota depok, memiliki 80 orang karyawan kompeten.</p>
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
                  {/* <!--/.row --> */}
                </div>
                {/* <!--/column --> */}
              </div>
              {/* <!--/.row --> */}
            </div>
           
            {/* <!-- /section --> */}
            <ul className="nav nav-tabs nav-tabs-basic">
                <li className="nav-item"> <a className="nav-link active" data-bs-toggle="tab" href="#tab3-1">Pesan CEO</a> </li>
                <li className="nav-item"> <a className="nav-link" data-bs-toggle="tab" href="#tab3-2">Layanan Kami</a> </li>
                <li className="nav-item"> <a className="nav-link" data-bs-toggle="tab" href="#tab3-3">Bisnis Kami</a> </li>
                <li className="nav-item"> <a className="nav-link active" data-bs-toggle="tab" href="#tab3-1">Strategi Kami</a> </li>
                <li className="nav-item"> <a className="nav-link" data-bs-toggle="tab" href="#tab3-2">Partner Kami</a> </li>
            </ul>
            {/* <!-- /.nav-tabs --> */}
            <div className="tab-content mt-0 mt-md-5">
                <div className="tab-pane fade show active" id="tab3-1">
                <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
                    <div className="col-lg-5 text-center">
                    <Image src="/img/photos/ceo.jpg" alt="" width={500} height={500}/>
                    </div>
                    <div className="col-lg-7">
                    <figure>
                        <blockquote className="fs-16">
                        <p className="f-16">
                            Ciptadra Softindo berdiri 1999 adalah creative engineering company, perusahan inovasi yang memiliki ratusan pengalaman membangun solusi dengan beragam inovasi. Memiliki pengalaman dibanyak industri di perusahaan terkemuka nasional maupun multi nasional, membantu membangun solusi untuk pemerintahan sebagai bagian dari kontribusi kami membangun negeri. 
                        </p>
                        <p className="f-16">
                            Terus membangun kompetensi, berinovasi berkomitmen tinggi untuk terus membangun manfaat dan berdampak. Setiap karya dikerjakan oleh team terbaik, cara terbaik dan kultur terbaik. Saat ini kami bersyukur dipercaya oleh banyak perusahaan dan organisasi besar untuk membuat kami lebih banyak belajar dan bekesempatan menjadi bagian dari pertumbuhan dan kesuksesan semua pelanggan kami. 
                        </p>
                            <p>
                            Kami berdomisili di Depok menempati kantor
                            sendiri seluas 1000m2, memiliki 80 orang
                            karyawan kompeten, setiap hari membesarkan
                            dampak positif atas keberadaan kami.
                        </p>
                        </blockquote>
                        <figcaption className="blockquote-footer">From the CEO of PT Ciptadra Softindo</figcaption>
                    </figure>

                    
                    
                    </div>
                </div>
                {/* <!--/.tab-pane --> */}
                <div className="tab-pane fade" id="tab3-2">
                    
                
                </div>
                {/* <!--/.tab-pane --> */}
                <div className="tab-pane fade" id="tab3-3">
                    
                </div>
                {/* <!--/.tab-pane --> */}
                </div>
                {/* <!-- /.tab-content --> */}
        
            
            </div>
            {/* <!-- /.container --> */}
            </div>
            </div>
   
    </section>
      {/* <!-- /section --> */}
    </>

    

  )
}