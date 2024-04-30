'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react';

export default function Mitra() {
    const [activeFilter, setActiveFilter] = useState('all'); // State untuk menyimpan filter yang aktif

    function filterSelection(category: string): void {
        const elements = document.querySelectorAll('.filterDiv');
        elements.forEach(element => {
            if (category === 'all') {
                element.classList.remove('d-none');
            } else if (element.classList.contains(category)) {
                element.classList.remove('d-none');
            } else {
                element.classList.add('d-none');
            }
        });
        setActiveFilter(category); // Set filter yang aktif
    }

    return (
        <>
            <section className="section-frame mt-4">
                <div className="wrapper bg-gray rounded">
                    <div className="container py-13 py-md-12 text-center">
                        <div className="row">
                            <div className="col-lg-10 col-xxl-8 mx-auto">
                                <h2 className="fs-15 text-uppercase text-muted mb-3">App Features</h2>
                                <h3 className="display-4 px-xxl-11">Mitra Kami</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="wrapper bg-light">
                <div className="container py-14 py-md-10">
                    <div className="row text-center">
                    </div>
                    <div id="myBtnContainer" className="text-center mb-5">
                        <button className={`btn-filter ${activeFilter === 'all' ? 'active' : ''}`} onClick={() => filterSelection('all')}> Show all</button>
                        <button className={`btn-filter ${activeFilter === 'banking' ? 'active' : ''}`} onClick={() => filterSelection('banking')}> Banking dan Asuransi</button>
                        <button className={`btn-filter ${activeFilter === 'government' ? 'active' : ''}`} onClick={() => filterSelection('government')}> Pemerintahan</button>
                        <button className={`btn-filter ${activeFilter === 'privat' ? 'active' : ''}`} onClick={() => filterSelection('privat')}> Sektor Privat</button>
                        <button className={`btn-filter ${activeFilter === 'telekomunikasi' ? 'active' : ''}`} onClick={() => filterSelection('telekomunikasi')}> Telekomunikasi</button>
                    </div>
                    <div className="container1 mt-5">
                        <div className="">
                        <div className="row">
                                <div className="col-lg-3 mb-3 filterDiv banking">
                                    <div className="border">
                                        <Image src="/img/logo/klien-1.png" alt="" className="logo-sm" width={100} height={100} />
                                    </div>
                                </div>
                                  <div className="col-lg-3 mb-3 filterDiv banking">
                                    <div className="border">
                                          <Image src="/img/logo/klien-2.png" alt="" className="logo-sm" width={100} height={100} />
                                    </div>
                                </div>
                                  <div className="col-lg-3 mb-3 filterDiv banking">
                                    <div className="border">
                                          <Image src="/img/logo/klien-3.png" alt="" className="logo-sm" width={100} height={100} />
                                    </div>
                                </div>
                                  <div className="col-lg-3 mb-3 filterDiv banking">
                                    <div className="border">
                                          <Image src="/img/logo/klien-4.png" alt="" className="logo-sm" width={100} height={100} />
                                    </div>
                                </div>
                                  <div className="col-lg-3 mb-3 filterDiv banking">
                                    <div className="border">
                                          <Image src="/img/logo/klien-5.jpg" alt="" className="logo-sm" width={100} height={100} />
                                    </div>
                                </div>
                                  <div className="col-lg-3 mb-3 filterDiv banking">
                                    <div className="border">
                                          <Image src="/img/logo/klien-6.png" alt="" className="logo-sm" width={100} height={100} />
                                    </div>
                                </div>
                                <div className="col-lg-3 mb-3 filterDiv banking">
                                    <div className="border">
                                          <Image src="/img/logo/klien-7.png" alt="" className="logo-sm" width={100} height={100} />
                                    </div>
                                </div>
                                <div className="col-lg-3 mb-3 filterDiv banking">
                                    <div className="border">
                                          <Image src="/img/logo/klien-8.png" alt="" className="logo-sm" width={100} height={100} />
                                    </div>
                                </div>
                                <div className="col-lg-3 mb-3 filterDiv banking">
                                    <div className="border">
                                          <Image src="/img/logo/klien-9.jpg" alt="" className="logo-sm" width={100} height={100} />
                                    </div>
                                </div>
                                <div className="col-lg-3 mb-3 filterDiv banking">
                                    <div className="border">
                                          <Image src="/img/logo/klien-10.png" alt="" className="logo-sm" width={100} height={100} />
                                    </div>
                                </div>
                                <div className="col-lg-3 mb-3 filterDiv banking">
                                    <div className="border">
                                          <Image src="/img/logo/klien-11.png" alt="" className="logo-sm" width={100} height={100} />
                                    </div>
                                </div>
                                <div className="col-lg-3 mb-3 filterDiv banking">
                                    <div className="border">
                                          <Image src="/img/logo/klien-12.png" alt="" className="logo-sm" width={100} height={100} />
                                    </div>
                                </div>
                                <div className="col-lg-3 mb-3 filterDiv banking">
                                    <div className="border">
                                          <Image src="/img/logo/klien-13.png" alt="" className="logo-sm" width={100} height={100} />
                                    </div>
                                </div>
                                <div className="col-lg-3 mb-3 filterDiv government">
                                    <div className="border">
                                          <Image src="/img/logo/klien-14.png" alt="" className="logo-sm" width={100} height={100} />
                                    </div>
                                </div>
                                <div className="col-lg-3 mb-3 filterDiv government">
                                    <div className="border">
                                          <Image src="/img/logo/klien-15.png" alt="" className="logo-sm" width={100} height={100} />
                                    </div>
                                </div>
                                  <div className="col-lg-3 mb-3 filterDiv government">
                                    <div className="border">
                                          <Image src="/img/logo/klien-16.png" alt="" className="logo-sm" width={100} height={100} />
                                    </div>
                                </div>
                                  <div className="col-lg-3 mb-3 filterDiv government">
                                    <div className="border">
                                          <Image src="/img/logo/klien-17.png" alt="" className="logo-sm" width={100} height={100} />
                                    </div>
                                </div>
                                  <div className="col-lg-3 mb-3 filterDiv government">
                                    <div className="border">
                                          <Image src="/img/logo/klien-18.png" alt="" className="logo-sm" width={100} height={100} />
                                    </div>
                                </div>
                                  <div className="col-lg-3 mb-3 filterDiv government">
                                    <div className="border">
                                          <Image src="/img/logo/klien-19.png" alt="" className="logo-sm" width={100} height={100} />
                                    </div>
                                </div>
                                  <div className="col-lg-3 mb-3 filterDiv government">
                                    <div className="border">
                                          <Image src="/img/logo/klien-20.png" alt="" className="logo-sm" width={100} height={100} />
                                    </div>
                                </div>
                                <div className="col-lg-3 mb-3 filterDiv government">
                                    <div className="border">
                                          <Image src="/img/logo/klien-21.png" alt="" className="logo-sm" width={100} height={100} />
                                    </div>
                                </div>
                                <div className="col-lg-3 mb-3 filterDiv government">
                                    <div className="border">
                                          <Image src="/img/logo/klien-22.png" alt="" className="logo-sm" width={100} height={100} />
                                    </div>
                                </div>
                                <div className="col-lg-3 mb-3 filterDiv government">
                                    <div className="border">
                                          <Image src="/img/logo/klien-23.jpg" alt="" className="logo-sm" width={100} height={100} />
                                    </div>
                                </div>
                                <div className="col-lg-3 mb-3 filterDiv government">
                                    <div className="border">
                                          <Image src="/img/logo/klien-24.png" alt="" className="logo-sm" width={100} height={100} />
                                    </div>
                                </div>
                                <div className="col-lg-3 mb-3 filterDiv government">
                                    <div className="border">
                                          <Image src="/img/logo/klien-25.png" alt="" className="logo-sm" width={100} height={100} />
                                    </div>
                                </div>
                                <div className="col-lg-3 mb-3 filterDiv government">
                                    <div className="border">
                                          <Image src="/img/logo/klien-26.png" alt="" className="logo-sm" width={100} height={100} />
                                    </div>
                                </div>
                                <div className="col-lg-3 mb-3 filterDiv government">
                                    <div className="border">
                                          <Image src="/img/logo/klien-27.png" alt="" className="logo-sm" width={100} height={100} />
                                    </div>
                                </div>
                                <div className="col-lg-3 mb-3 filterDiv government">
                                    <div className="border">
                                          <Image src="/img/logo/klien-28.png" alt="" className="logo-sm" width={100} height={100} />
                                    </div>
                                </div>
                                <div className="col-lg-3 mb-3 filterDiv government">
                                    <div className="border">
                                          <Image src="/img/logo/klien-29.png" alt="" className="logo-sm" width={100} height={100} />
                                    </div>
                                </div>
                                <div className="col-lg-3 mb-3 filterDiv government">
                                    <div className="border">
                                          <Image src="/img/logo/klien-30.png" alt="" className="logo-sm" width={100} height={100} />
                                    </div>
                                </div>
                                <div className="col-lg-3 mb-3 filterDiv government">
                                    <div className="border">
                                          <Image src="/img/logo/klien-31.png" alt="" className="logo-sm" width={100} height={100} />
                                    </div>
                                </div>
                                <div className="col-lg-3 mb-3 filterDiv privat">
                                    <div className="border">
                                          <Image src="/img/logo/klien-32.png" alt="" className="logo-sm" width={100} height={100} />
                                    </div>
                                </div>
                                  <div className="col-lg-3 mb-3 filterDiv privat">
                                    <div className="border">
                                          <Image src="/img/logo/klien-33.png" alt="" className="logo-sm" width={100} height={100} />
                                    </div>
                                </div>
                                  <div className="col-lg-3 mb-3 filterDiv privat">
                                    <div className="border">
                                          <Image src="/img/logo/klien-34.png" alt="" className="logo-sm" width={100} height={100} />
                                    </div>
                                </div>
                                  <div className="col-lg-3 mb-3 filterDiv privat">
                                    <div className="border">
                                          <Image src="/img/logo/klien-35.png" alt="" className="logo-sm" width={100} height={100} />
                                    </div>
                                </div>
                                  <div className="col-lg-3 mb-3 filterDiv privat">
                                    <div className="border">
                                          <Image src="/img/logo/klien-36.png" alt="" className="logo-sm" width={100} height={100} />
                                    </div>
                                </div>
                                  <div className="col-lg-3 mb-3 filterDiv privat">
                                    <div className="border">
                                          <Image src="/img/logo/klien-37.jpg" alt="" className="logo-sm" width={100} height={100} />
                                    </div>
                                </div>
                                <div className="col-lg-3 mb-3 filterDiv privat">
                                    <div className="border">
                                          <Image src="/img/logo/klien-38.png" alt="" className="logo-sm" width={100} height={100} />
                                    </div>
                                </div>
                                <div className="col-lg-3 mb-3 filterDiv privat">
                                    <div className="border">
                                          <Image src="/img/logo/klien-39.png" alt="" className="logo-sm" width={100} height={100} />
                                    </div>
                                </div>
                                <div className="col-lg-3 mb-3 filterDiv privat">
                                    <div className="border">
                                          <Image src="/img/logo/klien-40.png" alt="" className="logo-sm" width={100} height={100} />
                                    </div>
                                </div>
                                <div className="col-lg-3 mb-3 filterDiv privat">
                                    <div className="border">
                                          <Image src="/img/logo/klien-41.png" alt="" className="logo-sm" width={100} height={100} />
                                    </div>
                                </div>
                                <div className="col-lg-3 mb-3 filterDiv privat">
                                    <div className="border">
                                          <Image src="/img/logo/klien-43.png" alt="" className="logo-sm" width={100} height={100} />
                                    </div>
                                </div>
                                <div className="col-lg-3 mb-3 filterDiv privat">
                                    <div className="border">
                                          <Image src="/img/logo/klien-44.png" alt="" className="logo-sm" width={100} height={100} />
                                    </div>
                                </div>
                                <div className="col-lg-3 mb-3 filterDiv privat">
                                    <div className="border">
                                          <Image src="/img/logo/klien-45.png" alt="" className="logo-sm" width={100} height={100} />
                                    </div>
                                </div>
                                <div className="col-lg-3 mb-3 filterDiv privat">
                                    <div className="border">
                                          <Image src="/img/logo/klien-46.png" alt="" className="logo-sm" width={100} height={100} />
                                    </div>
                                </div>
                                <div className="col-lg-3 mb-3 filterDiv privat">
                                    <div className="border">
                                          <Image src="/img/logo/klien-47.jpg" alt="" className="logo-sm" width={100} height={100} />
                                    </div>
                                </div>
                                <div className="col-lg-3 mb-3 filterDiv privat">
                                    <div className="border">
                                          <Image src="/img/logo/klien-48.png" alt="" className="logo-sm" width={100} height={100} />
                                    </div>
                                </div>
                                <div className="col-lg-3 mb-3 filterDiv privat">
                                    <div className="border">
                                          <Image src="/img/logo/klien-49.png" alt="" className="logo-sm" width={100} height={100} />
                                    </div>
                                </div>
                                <div className="col-lg-3 mb-3 filterDiv privat">
                                    <div className="border">
                                          <Image src="/img/logo/klien-50.png" alt="" className="logo-sm" width={100} height={100} />
                                    </div>
                                </div>
                                <div className="col-lg-3 mb-3 filterDiv privat">
                                    <div className="border">
                                          <Image src="/img/logo/klien-51.png" alt="" className="logo-sm" width={100} height={100} />
                                    </div>
                                </div>
                                <div className="col-lg-3 mb-3 filterDiv privat">
                                    <div className="border">
                                          <Image src="/img/logo/klien-52.png" alt="" className="logo-sm" width={100} height={100} />
                                    </div>
                                </div>
                                <div className="col-lg-3 mb-3 filterDiv telekomunikasi">
                                    <div className="border">
                                          <Image src="/img/logo/klien-53.png" alt="" className="logo-sm" width={100} height={100} />
                                    </div>
                                </div>
                                  <div className="col-lg-3 mb-3 filterDiv telekomunikasi">
                                    <div className="border">
                                          <Image src="/img/logo/klien-54.jpg" alt="" className="logo-sm" width={100} height={100} />
                                    </div>
                                </div>
                                  <div className="col-lg-3 mb-3 filterDiv telekomunikasi">
                                    <div className="border">
                                          <Image src="/img/logo/klien-55.png" alt="" className="logo-sm" width={100} height={100} />
                                    </div>
                                </div>
                                  <div className="col-lg-3 mb-3 filterDiv telekomunikasi">
                                    <div className="border">
                                          <Image src="/img/logo/klien-56.png" alt="" className="logo-sm" width={100} height={100} />
                                    </div>
                                </div>
                                  <div className="col-lg-3 mb-3 filterDiv telekomunikasi">
                                    <div className="border">
                                          <Image src="/img/logo/klien-57.png" alt="" className="logo-sm" width={100} height={100} />
                                    </div>
                                </div>
                                  <div className="col-lg-3 mb-3 filterDiv telekomunikasi">
                                    <div className="border">
                                          <Image src="/img/logo/klien-59.png" alt="" className="logo-sm" width={100} height={100} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
