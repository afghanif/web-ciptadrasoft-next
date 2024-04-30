import Image from 'next/image'
import Link from 'next/link'

export default async function Hubungi() {
return (
<>
   
   <section className="wrapper bg-soft-primary">
      <div className="container py-14 py-md-10">

        <div className="row">
          <div className="col-lg-12 col-xl-12">
            <div className="row">
              <div className="col-xl-5 col-lg-6">
                <div className="card bg-light mb-5">
                  <div className="card-body">
                    <Image src="/img/icons/solid/icon-chat.png" alt="" className="icon-img-md" width={100} height={100} />
                    <h4>Live Chat</h4>
                    <p>Bicara langsung dengan konsultan kami melalui telepon atau email.</p>
                    <a href="#" className="btn btn-primary">Chat via Whatsapp</a>
                  </div>
                </div>

                <div className="card bg-light">
                  <div className="card-body">
                    <Image src="/img/icons/solid/icon-phone.png" alt="" className="icon-img-md" width={100} height={100} />
                    <h4> Pusat Panggilan</h4>
                    <p>Bicara langsung dengan konsultan kami melalui telepon atau email.</p>
                    <a href="#" className="btn btn-primary">Chat via Whatsapp</a>
                  </div>
                </div>
              </div>
              <div className="offset-xl-1 col-xl-6 col-lg-6">
                <form className="contact-form needs-validation" method="post" action="/php/contact.php" noValidate>
                  <h2 className="display-9 mb-3">Diskusikan kebutuhan bisnis
                    Anda dengan kami</h2>
                  <div className="messages">
                  <div className="row gx-4">
                    <div className="col-md-6">
                      <div className="form-floating mb-4">
                        <input id="form_name" type="text" name="name" className="form-control" placeholder="Jane" required/>
                        <label htmlFor="form_name">First Name *</label>
                        <div className="valid-feedback"> Looks good! </div>
                        <div className="invalid-feedback"> Please enter your first name. </div>
                      </div>
                    </div>
                    {/* <!-- /column --> */}
                    <div className="col-md-6">
                      <div className="form-floating mb-4">
                        <input id="form_lastname" type="text" name="surname" className="form-control" placeholder="Doe"
                          required />
                        <label htmlFor="form_lastname">Last Name *</label>
                        <div className="valid-feedback"> Looks good! </div>
                        <div className="invalid-feedback"> Please enter your last name. </div>
                      </div>
                    </div>
                    {/* <!-- /column --> */}
                    <div className="col-md-6">
                      <div className="form-floating mb-4">
                        <input id="form_email" type="email" name="email" className="form-control"
                          placeholder="jane.doe@example.com" required/>
                        <label htmlFor="form_email">Email *</label>
                        <div className="valid-feedback"> Looks good! </div>
                        <div className="invalid-feedback"> Please provide a valid email address. </div>
                      </div>
                    </div>
                    {/* <!-- /column --> */}
                    <div className="col-md-6">
                      <div className="form-select-wrapper mb-4">
                        <select className="form-select" id="form-select" name="department" required>
                          <option selected disabled value="">Select a department</option>
                          <option value="Sales">Sales</option>
                          <option value="Marketing">Marketing</option>
                          <option value="Customer Support">Customer Support</option>
                        </select>
                        <div className="valid-feedback"> Looks good! </div>
                        <div className="invalid-feedback"> Please select a department. </div>
                      </div>
                    </div>
                    {/* <!-- /column --> */}
                    <div className="col-12">
                      <div className="form-floating mb-4">
                        <textarea id="form_message" name="message" className="form-control" placeholder="Your message"
                          style={{height: '150px'}} required></textarea>
                        <label htmlFor="form_message">Message *</label>
                        <div className="valid-feedback"> Looks good! </div>
                        <div className="invalid-feedback"> Please enter your messsage. </div>
                      </div>
                    </div>
                    {/* <!-- /column --> */}
                    <div className="col-12 text-end">
                      <input type="submit" className="btn btn-primary rounded-pill btn-send mb-3" value="Send message"/>
                      <p className="text-muted"><strong>*</strong> These fields are required.</p>
                    </div>
                    {/* <!-- /column --> */}
                  </div>
                  </div>
                  {/* <!-- /.row --> */}
                </form>
                {/* <!-- /form --> */}
              </div>
            </div>

          </div>
          {/* <!-- /column --> */}
        </div>
        {/* <!-- /.row --> */}
      </div>
      {/* <!-- /.container --> */}
    </section>

    <section className="wrapper bg-light map-wrapper">
      <div className="container py-14 py-md-16">

        <div className="row">
          <div className="col-lg-12 col-xl-12">
            <div className="row">
              <div className="col-xl-5 col-lg-6">
                <div className="row">
                  <div className="col-lg-12 col-xxl-12 mx-auto">
                    <h2 className="fs-15 text-uppercase text-muted mb-3">App Features</h2>
                    <h3 className="display-4 mb-9">Visit one of our offices around the World</h3>
                </div>
                  {/* <!-- /column --> */}
                </div>
              </div>
              <div className="offset-xl-1 col-xl-6 col-lg-6">
                <div className="map-bg">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253772.91402883164!2d106.52968089453125!3d-6.367927499999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ed0fc69a6827%3A0xc3205bd9121d5627!2sOnebox%20CRM!5e0!3m2!1sid!2sid!4v1713727067731!5m2!1sid!2sid" width="700" height="550" style={{border:'0'}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
              </div>
            </div>

          </div>
          {/* <!-- /column --> */}
        </div>
        {/* <!-- /.row --> */}
      </div>
      {/* <!-- /.container --> */}
    </section>
    {/* <!-- /section --> */}
    </>

    

  )
}