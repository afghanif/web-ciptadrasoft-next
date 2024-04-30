import React from 'react'

export default function ProdukOrbeets() {
  return (
    <section className="wrapper bg-light">
      <div className="container py-14 py-md-10">

        <div className="container py-14 py-md-10">
          <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
            <div className="col-md-8 col-lg-6 col-xl-5 order-lg-2 position-relative">
              <div className="shape bg-soft-primary rounded-circle rellax w-20 h-20" data-rellax-speed="1"
                style={{top: '-2rem', right: '-1.9rem'}}></div>
              <figure className="rounded"><img src="/img/logo/logo-onebox.png"
                  srcSet="/img/logo/logo-onebox.png 2x" alt="" className="w-75" /></figure>
            </div>
            {/*/column */}
            <div className="col-lg-7">
              <h2 className="fs-15 text-uppercase text-muted mb-3">Contact Center Omnichannel</h2>
              <h2 className="display-4 mb-3">Satu Solusi Untuk Bekerja Lebih Cepat Dan Mudah Dari Semua Channel Layanan
              </h2>
              <p className="fs-16">Onebox adalah Solusi customer service omnichannel, menyatukan semua kanal layanan
                telepon, wa, email,
                sosmed, playstore dan lainnya kedalam satu layer.</p>
              <p>Objective dari penggunaan Onebox secara umum membantu
                memberikan kepuasaan layanan pelanggan, meningkatkan penjualan, produktifitas, reputasi dan efisiensi
              </p>
            </div>

            {/*/.row */}
          </div>
          {/*/column */}
        </div>
        {/*/.row */}
       

        {/* /section */}
        <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
        <div className="col-lg-12">
            <ul className="nav nav-tabs nav-tabs-basic nav-custom2 mt-10">
            <li className="nav-item"> <a className="nav-link active" data-bs-toggle="tab" href="#tab3-1">Manfaat</a> </li>
            <li className="nav-item"> <a className="nav-link" data-bs-toggle="tab" href="#tab3-2">Fitur Tersedia</a> </li>
            <li className="nav-item"> <a className="nav-link" data-bs-toggle="tab" href="#tab3-3">Produk Lainnya</a> </li>
        </ul>
        {/* /.nav-tabs */}
        <div className="tab-content mt-0 mt-md-5">
            <div className="tab-pane fade show active" id="tab3-1">
            <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
                <div className="col-lg-6">
                <ul className="poin-custom1 p-0">
                    <li className="d-flex gap">
                    <div className="icon">
                        <i className="uil uil-link"></i>
                    </div>
                    
                    <div className="text">
                        <h6>Terintegrasi</h6>
                        <p>Agen dapat melayani pelanggan dari berbagai kanal dalam satu screen dengan
                        integrasi data pelanggan, knowledge, dan fitur eskalasi serta kolaborasi dengan unit
                        kerja lainnya.</p>
                    </div>
                    </li>

                    <li className="d-flex gap">
                    <div className="icon">
                        <i className="uil uil-stopwatch"></i>
                    </div>
                    
                    <div className="text">
                        <h6>Real Time</h6>
                        <p>Supervisor secara real time melihat trafik, kesibukan agen, status, tingkat layanan,
                        produktifitas , tersedia laporan secara real time dan kemudahan melakukan penugasan dan
                        penilaian produktifitas agent </p>
                    </div>
                    </li>

                </ul>
                </div>

                <div className="col-lg-6">
                <ul className="poin-custom1 p-0">
                    <li className="d-flex gap">
                    <div className="icon">
                        <i className="uil uil-comments-alt"></i>
                    </div>
                    
                    <div className="text">
                        <h6>Feedback</h6>
                        <p>Feedback atas kualitas produk, layanan, serta unit kerja tergambar dengan jelas sehingga
                        memudahkan manajemen perusahaan untuk melakukan Improvement </p>
                    </div>
                    </li>

                    <li className="d-flex gap">
                    <div className="icon">
                        <i className="uil uil-megaphone"></i>
                    
                    </div>
                
                    <div className="text">
                        <h6>Branding</h6>
                        <p>Meningkatkan efisiensi, kepercayaan, branding, dan reputasi Perusahaan. </p>
                    </div>
                    </li>



                </ul>
                </div>

            </div>
            </div>
            {/*/.tab-pane */}
            <div className="tab-pane fade" id="tab3-2">
            <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
                <div className="col-lg-12">
                    <ul className="icon-list bullet-primary cc-2 px-2">
                <li><span><i className="uil uil-arrow-right"></i></span><span>Berbagai kanal layanan yang terintegrasi
                    </span></li>
                <li><span><i className="uil uil-arrow-right"></i></span><span>Kemudahan intergrasi dengan data pelanggan,
                    transaksi, sistem lainnya</span></li>
                <li><span><i className="uil uil-arrow-right"></i></span><span>Auto distribusi, auto reply, auto close
                    </span></li>
                <li><span><i className="uil uil-arrow-right"></i></span><span>Template jawaban </span></li>
                <li><span><i className="uil uil-arrow-right"></i></span><span>Riwayat komunikasi omni channel </span></li>
                <li><span><i className="uil uil-arrow-right"></i></span><span>Terintegrasi dengan system knowledge </span>
                </li>
                <li><span><i className="uil uil-arrow-right"></i></span><span>Tercatat semua aktifitas agen </span></li>
                <li><span><i className="uil uil-arrow-right"></i></span><span>Tercatat SLA atas response time & resolution
                    time </span></li>
                <li><span><i className="uil uil-arrow-right"></i></span><span>Terintegrasi dengan manajemen tiket,
                    kemudahan eskalasi dan kolaborasi dengan unit kerja lain </span></li>
                <li><span><i className="uil uil-arrow-right"></i></span><span>Lengkapnya laporan dan dahsboard trafik
                    layanan omni chnnel, produktiftas agent, pemetaan pengaduan/masalah, status layanan dan SLA
                    layanan </span></li>
                </ul>
                </div>
            
            </div>
            </div>
            {/*/.tab-pane */}
            <div className="tab-pane fade" id="tab3-3">
            <div className="row gx-lg-8 gx-xl-12 gy-10">
                <div className="col-lg-4">
                <h3>Customer <span className="underline-2 green">Experience</span></h3>
                <p>Meningkatkan layanan contact center lebih mudah dan cepat, melayani informasi dan pengaduan dari
                    berbagai channel dalam satu screen dan didukung sumber daya informasi yang dibutuhkan pelanggan.</p>
                <ul className="icon-list bullet-primary">
                    <li><span><i className="uil uil-headphones"></i></span><span className="ms-2">Contact Center</span></li>
                    <li><span><i className="uil uil-notes"></i></span><span className="ms-2">Manajemen Tugas </span></li>
                    <li><span><i className="uil uil-robot"></i></span><span className="ms-2">Chatbot </span></li>
                    <li><span><i className="uil uil-users-alt"></i></span><span className="ms-2">Customer Relationship </span></li>
                    <li><span><i className="uil uil-desktop"></i></span><span className="ms-2">Customer Portal/Mobile </span></li>
                    <li><span><i className="uil uil-mobile-android"></i></span><span className="ms-2">API Media Sosial </span></li>

                </ul>
                </div>
                <div className="col-lg-4">
                <h3>Marketing <span className="underline-2 green">dan Sales</span></h3>
                <p>Berkomunikasi dengan prospek melalui banyak channel (Telephony, Whatsapp, Facebook, Twitter,
                    Instagram dan channel lainnya), sales dapat membuat reminder janji, update status prospek, memasukan
                    target dan nilai penjualan, serta semua kinerja agent penjualan lebih terpantau.</p>

                <ul className="icon-list bullet-primary">
                    <li><span><i className="uil uil-bag"></i></span><span className="ms-2">Prospect Management </span></li>
                    <li><span><i className="uil uil-megaphone"></i></span><span className="ms-2">Broadcast </span></li>
                    <li><span><i className="uil uil-gold"></i></span><span className="ms-2">Sistem Antrian </span></li>
                </ul>

                </div>
                <div className="col-lg-4">
                <h3>Customer <span className="underline-2 green">Feedback</span></h3>
                <p>Mengukur tingkat kepuasan layanan dan melakukan survey layanan yang dilakukan melalui broadcast
                    melalui sosmed, email/wa, terkait apa yang perlu dilakukan perbaikan (melalui website/aplikasi
                    mobile, play store maupun google review).</p>
                <ul className="icon-list bullet-primary">
                    <li><span><i className="uil uil-comments-alt"></i></span><span className="ms-2">Customer Feedback </span></li>
                    <li><span><i className="uil uil-monitor"></i></span><span className="ms-2">Media Monitoring </span></li>
                    <li><span><i className="uil uil-star"></i></span><span className="ms-2">CSAT Layanan </span></li>
                </ul>
                </div>

            </div>
            </div>
            {/*/.tab-pane */}
        </div>
        {/* /.tab-content */}
        </div>
        


        </div>
        {/* /.container */}
      </div>
    </section>
  )
}