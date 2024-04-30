import Image from "next/image";
import Link from "next/link";

export default function HeroSlider() {
   
  return (
    <>
    {/* <!-- /section --> */}
  <section className="wrapper bg-light">
    <div className="container py-10 py-md-10">
      <div className="row text-center mt-xl-12">
        <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
          <h2 className="fs-15 text-uppercase text-muted mb-3">App Features</h2>
          <h3 className="display-4 mb-9 px-xxl-11">Artikel Terkini</h3>
        </div>
        {/* <!-- /column --> */}
      </div>
      <div className="row gx-lg-8 gx-xl-12">

        <div className="col-lg-12">
          <div className="blog grid grid-view">
            <div className="row isotope gx-md-8 gy-8 mb-8">
              <article className="item post col-md-4">
                <div className="card">
                  <figure className="card-img-top overlay overlay-1 hover-scale">
                    <Link href="/artikel"> <Image src="/img/photos/b4.jpg" alt="" width={100} height={100}/></Link>
                    <figcaption>
                      <h5 className="from-top mb-0">Read More</h5>
                    </figcaption>
                  </figure>
                  <div className="card-body">
                    <div className="post-header">
                      <div className="post-category text-line">
                        <span>
                          <Link href="/artikel" className="hover" rel="category">Coding</Link>
                        </span>

                      </div>
                      {/* <!-- /.post-category --> */}
                      <h2 className="post-title h3 mt-1 mb-3"><Link className="link-dark" href="/artikel">10 Quick Tips
                          About Blogging Beautiful Blog Design</Link></h2>
                      <ul className="post-meta d-flex mb-0">
                        <li className="post-date"><i className="uil uil-calendar-alt"></i><span>14 Apr 2022</span></li>
                      </ul>
                    </div>
                    {/* <!-- /.post-header --> */}

                  </div>
                  {/* <!--/.card-body --> */}

                </div>
                {/* <!-- /.card --> */}
              </article>
              {/* <!-- /.post --> */}
              <article className="item post col-md-4">
                <div className="card">
                  <figure className="card-img-top overlay overlay-1 hover-scale">
                    <Link href="/artikel"> <Image src="/img/photos/b4.jpg" alt="" width={100} height={100}/></Link>
                    <figcaption>
                      <h5 className="from-top mb-0">Read More</h5>
                    </figcaption>
                  </figure>
                  <div className="card-body">
                    <div className="post-header">
                      <div className="post-category text-line">
                        <span>
                          <Link href="/artikel" className="hover" rel="category">Coding</Link>
                        </span>

                      </div>
                      {/* <!-- /.post-category --> */}
                      <h2 className="post-title h3 mt-1 mb-3"><Link className="link-dark" href="/artikel">10 Quick Tips
                          About Blogging Beautiful Blog Design</Link></h2>
                      <ul className="post-meta d-flex mb-0">
                        <li className="post-date"><i className="uil uil-calendar-alt"></i><span>14 Apr 2022</span></li>
                      </ul>
                    </div>
                    {/* <!-- /.post-header --> */}

                  </div>
                  {/* <!--/.card-body --> */}

                </div>
                {/* <!-- /.card --> */}
              </article>
              {/* <!-- /.post --> */}
              <article className="item post col-md-4">
                <div className="card">
                  <figure className="card-img-top overlay overlay-1 hover-scale">
                    <Link href="/artikel"> <Image src="/img/photos/b4.jpg" alt="" width={100} height={100}/></Link>
                    <figcaption>
                      <h5 className="from-top mb-0">Read More</h5>
                    </figcaption>
                  </figure>
                  <div className="card-body">
                    <div className="post-header">
                      <div className="post-category text-line">
                        <span>
                          <Link href="/artikel" className="hover" rel="category">Coding</Link>
                        </span>

                      </div>
                      {/* <!-- /.post-category --> */}
                      <h2 className="post-title h3 mt-1 mb-3"><Link className="link-dark" href="/artikel">10 Quick Tips
                          About Blogging Beautiful Blog Design</Link></h2>
                      <ul className="post-meta d-flex mb-0">
                        <li className="post-date"><i className="uil uil-calendar-alt"></i><span>14 Apr 2022</span></li>
                      </ul>
                    </div>
                    {/* <!-- /.post-header --> */}

                  </div>
                  {/* <!--/.card-body --> */}

                </div>
                {/* <!-- /.card --> */}
              </article>
              {/* <!-- /.post --> */}

            </div>
            {/* <!-- /.row --> */}
          </div>
          {/* <!-- /.blog --> */}

          {/* <!-- /nav --> */}
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
