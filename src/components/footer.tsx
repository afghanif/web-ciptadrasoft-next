import Link from "next/link";
import Image from "next/image";


export default async function Footer() {
    
    return (
        <>
        <hr /><footer className="bg-light">
            <div className="container py-10 py-md-10">
                <div className="row gy-6 gy-lg-0">
                    <div className="col-md-4 col-lg-3">
                        <div className="widget">
                            <Image className="mb-4 w-100" src="/img/logo/logo-ciptadra.png" alt=""  width={100} height={100}/>
                            <p className="mb-4">© 2024 Ciptadra Softindo. <br className="d-none d-lg-block" />All rights reserved.</p>
                            <nav className="nav social ">
                                <a href="#"><i className="uil uil-twitter"></i></a>
                                <a href="#"><i className="uil uil-facebook-f"></i></a>
                                <a href="#"><i className="uil uil-dribbble"></i></a>
                                <a href="#"><i className="uil uil-instagram"></i></a>
                                <a href="#"><i className="uil uil-youtube"></i></a>
                            </nav>
                            {/* < />!-- /.social --> */}
                        </div>
                        {/* < />!-- /.widget --> */}
                    </div>
                    {/* < />!-- /column --> */}
                    <div className="col-md-4 col-lg-6">
                        <div className="widget">
                            <h4 className="widget-title  mb-3">Produk</h4>
                            <ul className="list-unstyled text-reset mb-0 cc-2">
                                <li><a href="#">Contact Center Omnichannel</a></li>
                                <li><a href="#">Smartcity Solutions</a></li>
                                <li><a href="#">Asuransi dan Finansial</a></li>
                                <li><a href="#">Health And Insurance</a></li>
                                <li><a href="#">Telesales And Telemarketing</a></li>
                                <li><a href="#">Commision dan Benefit</a></li>
                                <li><a href="#">Management Property & Contract</a></li>
                                <li><a href="#">Staffing System</a></li>
                            </ul>
                        </div>
                        {/* < />!-- /.widget --> */}
                    </div>
                    {/* < />!-- /column --> */}
                    <div className="col-md-12 col-lg-3">
                        <div className="widget">
                            <h4 className="widget-title  mb-3">Our Newsletter</h4>
                            <ul className="list-unstyled text-reset mb-0">
                                <li><a href="#">Tentang Kami</a></li>
                                <li><a href="#">Produk</a></li>
                                <li><a href="#">Mitra</a></li>
                                <li><a href="#">Portofolio</a></li>
                                <li><a href="#">Galeri</a></li>
                                <li><a href="#">Artikel</a></li>
                            </ul>
                        </div>
                        {/* < />!-- /.widget --> */}
                    </div>
                    {/* < />!-- /column --> */}
                </div>
                {/* < />!--/.row --> */}
            </div>
            {/* < />!-- /.container --> */}
        </footer>
        </>
    );
}