import Image from 'next/image'
import Link from 'next/link'

export default async function DetailArtikel() {
return (
<>
   
<section className="wrapper bg-light">
      <div className="container py-14 py-md-10">
        <div className="row gx-lg-8 gx-xl-12">
          <div className="col-lg-8">
            <div className="row mb-5">
              <div className="col-md-12 col-xl-12">
                <div className="post-header">
                  <div className="post-category text-line ">
                    <Link href="#" className="text-reset" rel="category">Teamwork</Link>
                  </div>
                  {/* <!-- /.post-category --> */}
                  <h1 className="display-10 mb-4 mt-0">Commodo Dolor Bibendum Parturient Cursus Mollis</h1>
                  <ul className="post-meta ">
                    <li className="post-date"><i className="uil uil-calendar-alt"></i><span>5 Jul 2022</span></li>
                    <li className="post-author"><i className="uil uil-user"></i><Link href="#" className="text-reset"><span>By Sandbox</span></Link></li>
                    <li className="post-comments"><i className="uil uil-comment"></i><Link href="#" className="text-reset">3<span> Comments</span></Link></li>
                    <li className="post-likes"><i className="uil uil-heart-alt"></i><Link href="#" className="text-reset">3<span> Likes</span></Link></li>
                  </ul>
                  {/* <!-- /.post-meta --> */}
                </div>
                {/* <!-- /.post-header --> */}
              </div>
              {/* <!-- /column --> */}
            </div>
            <div className="blog single">
             
                <figure className="card-img-top mb-5">
                  <Image src="/img/photos/b1.jpg" alt="" className="rounded" width={100} height={100}/>
                </figure>
               
                  <div className="classNameic-view">
                    <article className="post">
                      <div className="post-content mb-5">
                        <p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur. Curabitur blandit tempus porttitor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Nullam quis risus eget porta ac consectetur vestibulum.</p>
                        <p>Donec sed odio dui consectetur adipiscing elit. Etiam adipiscing tincidunt elit, eu convallis felis suscipit ut. Phasellus rhoncus tincidunt auctor. Nullam eu sagittis mauris. Donec non dolor ac elit aliquam tincidunt at at sapien. Aenean tortor libero, condimentum ac laoreet vitae, varius tempor nisi. Duis non arcu vel lectus urna mollis ornare vel eu leo.</p>
                      </div>
                      {/* <!-- /.post-content --> */}
                      <div className="post-footer d-md-flex flex-md-row justify-content-md-between align-items-center mt-8">
                        <div>
                          <ul className="list-unstyled tag-list mb-0">
                            <li><Link href="#" className="btn btn-soft-ash btn-sm rounded-pill mb-0">Still Life</Link></li>
                            <li><Link href="#" className="btn btn-soft-ash btn-sm rounded-pill mb-0">Urban</Link></li>
                            <li><Link href="#" className="btn btn-soft-ash btn-sm rounded-pill mb-0">Nature</Link></li>
                          </ul>
                        </div>
                        <div className="mb-0 mb-md-2">
                          <div className="dropdown share-dropdown btn-group">
                            <button className="btn btn-sm btn-red rounded-pill btn-icon btn-icon-start dropdown-toggle mb-0 me-0" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              <i className="uil uil-share-alt"></i> Share </button>
                            <div className="dropdown-menu">
                              <Link className="dropdown-item" href="#"><i className="uil uil-twitter"></i>Twitter</Link>
                              <Link className="dropdown-item" href="#"><i className="uil uil-facebook-f"></i>Facebook</Link>
                              <Link className="dropdown-item" href="#"><i className="uil uil-linkedin"></i>Linkedin</Link>
                            </div>
                            {/* <!--/.dropdown-menu --> */}
                          </div>
                          {/* <!--/.share-dropdown --> */}
                        </div>
                      </div>
                      {/* <!-- /.post-footer --> */}
                    </article>
                    {/* <!-- /.post --> */}
                  </div>
                  {/* <!-- /.classNameic-view --> */}
             
            </div>
            {/* <!-- /.blog --> */}
          </div>
          {/* <!-- /column --> */}
          <aside className="col-lg-4 sidebar mt-11 mt-lg-6">
            <div className="widget">
              <form className="search-form">
                <div className="form-floating mb-0">
                  <input id="search-form" type="text" className="form-control" placeholder="Search"/>
                  <label htmlFor="search-form">Search</label>
                </div>
              </form>
              {/* <!-- /.search-form --> */}
            </div>
            {/* <!-- /.widget --> */}
           
            {/* <!-- /.widget --> */}
            <div className="widget">
              <h4 className="widget-title mb-3">Popular Posts</h4>
              <ul className="image-list">
                <li>
                  <figure className="rounded"><Link href="./blog-post.html">
                    <Image src="/img/photos/a1.jpg" alt="" width={100} height={100}/></Link></figure>
                  <div className="post-content">
                    <h6 className="mb-2"> <Link className="link-dark" href="./blog-post.html">Magna Mollis Ultricies</Link> </h6>
                    <ul className="post-meta">
                      <li className="post-date"><i className="uil uil-calendar-alt"></i><span>26 Mar 2022</span></li>
                      <li className="post-comments"><Link href="#"><i className="uil uil-comment"></i>3</Link></li>
                    </ul>
                    {/* <!-- /.post-meta --> */}
                  </div>
                </li>
                <li>
                  <figure className="rounded"> <Link href="./blog-post.html"><Image src="/img/photos/a2.jpg" alt="" width={100} height={100} /></Link></figure>
                  <div className="post-content">
                    <h6 className="mb-2"> <Link className="link-dark" href="./blog-post.html">Ornare Nullam Risus</Link> </h6>
                    <ul className="post-meta">
                      <li className="post-date"><i className="uil uil-calendar-alt"></i><span>16 Feb 2022</span></li>
                      <li className="post-comments"><Link href="#"><i className="uil uil-comment"></i>6</Link></li>
                    </ul>
                    {/* <!-- /.post-meta --> */}
                  </div>
                </li>
                <li>
                  <figure className="rounded"><Link href="./blog-post.html"><Image src="/img/photos/a3.jpg" alt=""  width={100} height={100}/></Link></figure>
                  <div className="post-content">
                    <h6 className="mb-2"> <Link className="link-dark" href="./blog-post.html">Euismod Nullam Fusce</Link> </h6>
                    <ul className="post-meta">
                      <li className="post-date"><i className="uil uil-calendar-alt"></i><span>8 Jan 2022</span></li>
                      <li className="post-comments"><Link href="#"><i className="uil uil-comment"></i>5</Link></li>
                    </ul>
                    {/* <!-- /.post-meta --> */}
                  </div>
                </li>
              </ul>
              {/* <!-- /.image-list --> */}
            </div>
            {/* <!-- /.widget --> */}
            <div className="widget">
              <h4 className="widget-title mb-3">Categories</h4>
              <ul className="unordered-list bullet-primary text-reset">
                <li><Link href="#">Teamwork (21)</Link></li>
                <li><Link href="#">Ideas (19)</Link></li>
                <li><Link href="#">Workspace (16)</Link></li>
                <li><Link href="#">Coding (7)</Link></li>
                <li><Link href="#">Meeting (12)</Link></li>
                <li><Link href="#">Business Tips (14)</Link></li>
              </ul>
            </div>
            {/* <!-- /.widget --> */}
            <div className="widget">
              <h4 className="widget-title mb-3">Tags</h4>
              <ul className="list-unstyled tag-list">
                <li><Link href="#" className="btn btn-soft-ash btn-sm rounded-pill">Still Life</Link></li>
                <li><Link href="#" className="btn btn-soft-ash btn-sm rounded-pill">Urban</Link></li>
                <li><Link href="#" className="btn btn-soft-ash btn-sm rounded-pill">Nature</Link></li>
                <li><Link href="#" className="btn btn-soft-ash btn-sm rounded-pill">Landscape</Link></li>
                <li><Link href="#" className="btn btn-soft-ash btn-sm rounded-pill">Macro</Link></li>
                <li><Link href="#" className="btn btn-soft-ash btn-sm rounded-pill">Fun</Link></li>
                <li><Link href="#" className="btn btn-soft-ash btn-sm rounded-pill">Workshop</Link></li>
                <li><Link href="#" className="btn btn-soft-ash btn-sm rounded-pill">Photography</Link></li>
              </ul>
            </div>
            {/* <!-- /.widget --> */}
          
            {/* <!-- /.widget --> */}
          </aside>
          {/* <!-- /column .sidebar --> */}
        </div>
       
      </div>
    </section>
    {/* <!-- /section --> */}
    </>

    

  )
}