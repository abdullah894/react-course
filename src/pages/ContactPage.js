import React from 'react';
const companyImage = './src/img/company-img.jpg';

const ContactPage = () => {

  const handleSubmit = (event) => {
    event.preventDefault();
    
    console.log('Form submitted!');
  };

  return (
    <body>
      <nav className='navbar bg-dark'>
        <div className="container">
          <h1 className='logo lg-heading text-light'>WT</h1>
          <ul className='nav-items'>
            <li className="nav-item"><a href="/">Home</a></li>
            <li className="nav-item"><a href="/about">About</a></li>
            <li className="nav-item"><a href="/contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      <section className="contact-form">
        <div className="container">
          <div className="form-wrapper">
            <div className="company-address">
              <div className="address-group">
                <i className="fas fa-map-marker-alt fa-3x text-red"></i>
                <h2 className="text-gray md-heading">Location</h2>
                <p>#2661 Janakpuri Colony, city name, town name</p>
              </div>
              <div className="address-group">
                <i className="far fa-envelope fa-3x text-red"></i>
                <h2 className="text-gray md-heading">Email</h2>
                <p>harshitvashisth@mycompany.com</p>
              </div>
              <div className="address-group">
                <i className=" fas fa-phone-square-alt fa-3x text-red"></i>
                <h2 className="text-gray md-heading">Call</h2>
                <p>+910101010101</p>
              </div>
              <img src={companyImage} alt="Company Image" />
            </div>
            <form onSubmit={handleSubmit} className="form">
              <h1 className="lg-heading text-black">Contact Us</h1>
              <p className="text-gray">Let us know your questions, suggestions and concerns by filling out the contact form below.</p>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="text" name="" id="username" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" name="" id="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input type="text" name="" id="phone" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea name="" id="message"> </textarea>
              </div>
              <button type="submit" className='form-btn'>Submit</button>
            </form>
          </div>
        </div>
      </section>
    </body>
  );
};

export default ContactPage;
