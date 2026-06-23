import Image from "next/image";

export default function Homepage() {
  return(
    <>
    <header className={"header"}>
    <a href="/">
        <div className="logo-group">
            <div className="logo">
                <svg width="75" height="41" viewBox="0 0 75 41" fill="transparent" xmlns="http://www.w3.org/2000/svg">
                <rect width="74.2004" height="41" fill="transparent"/>
                <path d="M64.0402 19.5525L63.3865 28.8162C53.2689 30.9108 37.3772 31.0283 37.3162 22.0003C37.2367 10.2259 66.3222 8.91588 66.3222 8.91588L64.0402 11.453" stroke="#1E90FF" stroke-width="4"/>
                <path d="M13.3929 32.0899C12.6049 32.1926 11.8996 32.272 11.2954 32.3306L14.6753 13.2355C20.1064 12.1733 26.6401 11.635 31.8721 12.3747C34.713 12.7763 36.9707 13.5283 38.4659 14.6036C39.865 15.6099 40.6146 16.8956 40.5981 18.7094C40.577 21.0227 39.0525 23.1732 36.0182 25.166C33.0163 27.1375 28.9288 28.6779 24.7323 29.8287C20.5625 30.9722 16.4184 31.6957 13.3929 32.0899Z" fill="var(--dark-theme-background-color)" stroke="#1E90FF" stroke-width="4"/>
                </svg>
            </div>
            <p className="logo-text">
              Design&nbsp;Gravitas
            </p>
          </div>
    </a>
    <div className="menu-close-button"></div>
    <nav className="nav-menu">      
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
        <li style={{display: 'none'}}><a href="#about">About</a></li>
      </ul>
    </nav>
    <svg className ="menu-open-button" xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="white"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
    <div className="cta-button-container" style={{backgroundColor: 'transparent'}}>
      <a id="header-cta-button" target="_blank" href = 'https://calendly.com/ismailahmad/book-a-consultation'>
          <button className="cta-button">Book a Consultation</button>
      </a>
    </div>
  </header>
  <main>
    <section className="hero-section">
      <div>
        <div className="hero-container">
        <h1 className="h1">Transforming Brands with Innovative Web Design &amp; Development</h1>
        <p className="hero-text">Elevate Your Brand with our <i>D3G</i> approach, Your Complete Digital Journey</p>
        <ul className="hero-list">
          <li className="hero-list-first">
            <svg width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.39939 13.5005L0 7.10107L1.59985 5.50123L6.39939 10.3008L16.7002 0L18.3 1.59985L6.39939 13.5005Z" fill="#FF7043"/></svg>
                <i>Design</i></li>
          <li className="hero-list-second">
            <svg width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.39939 13.5005L0 7.10107L1.59985 5.50123L6.39939 10.3008L16.7002 0L18.3 1.59985L6.39939 13.5005Z" fill="#FF7043"/></svg>
                <i>Develop &amp; Deploy</i></li>
          <li className="hero-list-third">
            <svg width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.39939 13.5005L0 7.10107L1.59985 5.50123L6.39939 10.3008L16.7002 0L18.3 1.59985L6.39939 13.5005Z" fill="#FF7043"/></svg>
                <i>Grow</i> your Business</li>
        </ul>
        <div className="button-container">
          {/* <button id="hero-cta-button" className="cta-button hero-cta" onClick={window.location.href='mailto:ismailahmad0505@gmail.com'}>Get a Free Quote</button> */}
        </div>
      </div>
      </div>
    </section>
    <section className="services" id="services">
      <h2 className="services-heading">Services</h2>
      <div className="services-list">
        <div className="service-container first-service-container">
        <h3 className="service-heading">Design</h3>
        <div className="service-items">
          <h4><svg width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.39939 13.5005L0 7.10107L1.59985 5.50123L6.39939 10.3008L16.7002 0L18.3 1.59985L6.39939 13.5005Z" fill="#FF7043"/></svg> Wireframing & Prototyping</h4>
          <h4><svg width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.39939 13.5005L0 7.10107L1.59985 5.50123L6.39939 10.3008L16.7002 0L18.3 1.59985L6.39939 13.5005Z" fill="#FF7043"/></svg> UI/UX Design</h4>
          <h4><svg width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.39939 13.5005L0 7.10107L1.59985 5.50123L6.39939 10.3008L16.7002 0L18.3 1.59985L6.39939 13.5005Z" fill="#FF7043"/></svg> Responsive Design</h4>
          <h4><svg width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.39939 13.5005L0 7.10107L1.59985 5.50123L6.39939 10.3008L16.7002 0L18.3 1.59985L6.39939 13.5005Z" fill="#FF7043"/></svg> Custom Web Design</h4>
          <h4><svg width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.39939 13.5005L0 7.10107L1.59985 5.50123L6.39939 10.3008L16.7002 0L18.3 1.59985L6.39939 13.5005Z" fill="#FF7043"/></svg> Landing Page Design</h4>
          <h4><svg width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.39939 13.5005L0 7.10107L1.59985 5.50123L6.39939 10.3008L16.7002 0L18.3 1.59985L6.39939 13.5005Z" fill="#FF7043"/></svg> Design System Creation</h4>
          <h4><svg width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.39939 13.5005L0 7.10107L1.59985 5.50123L6.39939 10.3008L16.7002 0L18.3 1.59985L6.39939 13.5005Z" fill="#FF7043"/></svg> Branding Integration</h4>
        </div>
      </div>
      <div className="service-container">
        <h3 className="service-heading">Development</h3>
        <div className="service-items">
          <h4><svg width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.39939 13.5005L0 7.10107L1.59985 5.50123L6.39939 10.3008L16.7002 0L18.3 1.59985L6.39939 13.5005Z" fill="#FF7043"/></svg> Front-End Development</h4>
          <h4><svg width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.39939 13.5005L0 7.10107L1.59985 5.50123L6.39939 10.3008L16.7002 0L18.3 1.59985L6.39939 13.5005Z" fill="#FF7043"/></svg> Back-End Development</h4>
          <h4><svg width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.39939 13.5005L0 7.10107L1.59985 5.50123L6.39939 10.3008L16.7002 0L18.3 1.59985L6.39939 13.5005Z" fill="#FF7043"/></svg> CMS Implementation</h4>
          <h4><svg width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.39939 13.5005L0 7.10107L1.59985 5.50123L6.39939 10.3008L16.7002 0L18.3 1.59985L6.39939 13.5005Z" fill="#FF7043"/></svg> E-commerce Development</h4>
          <h4><svg width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.39939 13.5005L0 7.10107L1.59985 5.50123L6.39939 10.3008L16.7002 0L18.3 1.59985L6.39939 13.5005Z" fill="#FF7043"/></svg> Custom Web Development</h4>
          <h4><svg width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.39939 13.5005L0 7.10107L1.59985 5.50123L6.39939 10.3008L16.7002 0L18.3 1.59985L6.39939 13.5005Z" fill="#FF7043"/></svg> API Development &amp; Integration</h4>
          <h4><svg width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.39939 13.5005L0 7.10107L1.59985 5.50123L6.39939 10.3008L16.7002 0L18.3 1.59985L6.39939 13.5005Z" fill="#FF7043"/></svg> Website Maintenance &amp; Support</h4>
        </div>
      </div>
      <div className="service-container last-service-container">
        <h3 className="service-heading">Marketing</h3>
        <div className="service-items">
          <h4><svg width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.39939 13.5005L0 7.10107L1.59985 5.50123L6.39939 10.3008L16.7002 0L18.3 1.59985L6.39939 13.5005Z" fill="#FF7043"/></svg> Marketing Stategy Development &amp; Implementation</h4>
          <h4><svg width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.39939 13.5005L0 7.10107L1.59985 5.50123L6.39939 10.3008L16.7002 0L18.3 1.59985L6.39939 13.5005Z" fill="#FF7043"/></svg> Google &amp; Meta Ads Campaigns</h4>
          <h4><svg width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.39939 13.5005L0 7.10107L1.59985 5.50123L6.39939 10.3008L16.7002 0L18.3 1.59985L6.39939 13.5005Z" fill="#FF7043"/></svg> Robust Conversion Tracking Setup</h4>
          <h4><svg width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.39939 13.5005L0 7.10107L1.59985 5.50123L6.39939 10.3008L16.7002 0L18.3 1.59985L6.39939 13.5005Z" fill="#FF7043"/></svg> Cookie Consent Setup Implementation</h4>
          <h4><svg width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.39939 13.5005L0 7.10107L1.59985 5.50123L6.39939 10.3008L16.7002 0L18.3 1.59985L6.39939 13.5005Z" fill="#FF7043"/></svg> SEO Strategy &amp; Implementation</h4>
          <h4><svg width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.39939 13.5005L0 7.10107L1.59985 5.50123L6.39939 10.3008L16.7002 0L18.3 1.59985L6.39939 13.5005Z" fill="#FF7043"/></svg> Content Strategy &amp; Creation</h4>
          <h4><svg width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.39939 13.5005L0 7.10107L1.59985 5.50123L6.39939 10.3008L16.7002 0L18.3 1.59985L6.39939 13.5005Z" fill="#FF7043"/></svg> Local SEO</h4>
          <h4><svg width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.39939 13.5005L0 7.10107L1.59985 5.50123L6.39939 10.3008L16.7002 0L18.3 1.59985L6.39939 13.5005Z" fill="#FF7043"/></svg> Analytics &amp; Reporting</h4>
        </div>
      </div>
      </div>
    </section>

    <section className="why-choose-us-section">
        <h2 className="wcu-heading">Why choose us</h2>
        <div className="wcu-cards-list">
          <div className="wcu-card card-container">
            <div className="card" >
              <div className="card-face card-front">
                <h3 className="wcu-card-heading card-front">Expertise &amp;<br /> Experience</h3>
              </div>
              <div className="card-face card-back">
                  <ul>
                    <li>100% Success Score on the top freelance platform <a id="upwork-profile" href="https://www.upwork.com/freelancers/googleindexingexpert" style={{color: 'white'}}>UpWork</a></li>
                  <li>Top Rated developers with verified skills in today’s top tech stacks</li>
                  <li>Years of hands-on experience across diverse industries and project types</li>
                  <li>Continuous upskilling to stay ahead in the fast-evolving tech landscape</li>
                  </ul>
              </div>
            </div>
          </div>
          <div className="wcu-card card-container">
            <div className="card" >
              <div className="card-face card-front">
                <h3 className="wcu-card-heading card-front">Results-oriented<br />Approach</h3>
              </div>
                <div className="card-face card-back">
                <ul>
                    <li> We focus on conversions, not just pretty designs</li>
                    <li>SEO-optimized, mobile-first design as default</li>
                    <li>Built with performance, speed, and accessibility in mind</li>
                    <li>Analytics-ready integration to track success from day one</li>
                </ul>
                </div>
            </div>
          </div>
          <div className="wcu-card card-container">
            <div className="card" >
              <div className="card-face card-front">
                <h3 className="wcu-card-heading card-front">Custom Solutions</h3>
              </div>
                <div className="card-face card-back">
                <ul>
                    <li>Tailored solutions</li>
                    <li>Designs aligned with your vision, industry, and audience</li>
                    <li>Fully customizable features and layout flexibility</li>
                    <li>Collaborative process with regular design reviews</li>
                </ul>
                </div>
            </div>
          </div>
          <div className="wcu-card card-container">
            <div className="card" >
              <div className="card-face card-front">
                <h3 className="wcu-card-heading card-front">End-to-End<br />Services</h3>
              </div>
                <div className="card-face card-back">
                <ul>
                    <li>From concept to launch and beyond</li>
                    <li>Design, development, hosting, and ongoing support</li>
                    <li>UX/UI design, frontend & backend dev, CMS setup, and more</li>
                    <li>Optional maintenance & upgrade plans to keep your site sharp</li>
                </ul>
                </div>
            </div>
            </div>
            <div className="wcu-card card-container">
              <div className="card" >
                <div className="card-face card-front">
                  <h3 className="wcu-card-heading card-front">Client-focused<br />partnership</h3>
                </div>
                <div className="card-face card-back">
                <ul>
                    <li>24/7 customer support and quick turnaround on queries</li>
                    <li>Clear, consistent communication throughout the project</li>
                    <li>Weekly updates, milestone check-ins, and post-launch support</li>
                </ul>
                </div>
            </div>
            </div>
            <div className="wcu-card card-container">
              <div className="card" >
                <div className="card-face card-front">
                  <h3 className="wcu-card-heading card-front">On time, Everytime</h3>
                </div>
                <div className="card-face card-back">
                <ul>
                    <li>Trackable milestones from start to finish</li>
                    <li>Reliable timelines with built-in buffer for peace of mind</li>
                    <li>100% on-time delivery record across past projects</li>
                </ul>
                </div>
            </div>
          </div>
        </div>
      </section>


    {/* <section className="our-clients">
      <h2 className="our-clients-heading">Our Clients</h2>
      <div className="logos-container">
          <div className="client-logo"><Image height="80px" width="192px" src="assets/clients-logo/MWS-Logo.png" alt="Michael Web Services logo" loading="lazy"></div>
      <div className="client-logo white-bg"><Image height="80px" width="209" src="assets/clients-logo/color-it.png" alt="Color it logo" loading="lazy"></div>
      <div className="client-logo"><Image height="80px" width="86px" src="assets/clients-logo/br-logo.png" alt="Bookroo logo" loading="lazy"></div>
      <div className="client-logo"><Image height="80px" width="80px" src="assets/clients-logo/gik_logo.jpeg" alt="GiK logo" loading="lazy"></div>
      <div className="client-logo"><Image height="80px" width="80px" src="assets/clients-logo/M.webp" alt="Merch Logo" loading="lazy"></div>
      <div className="client-logo"><Image height="80px" width="80px" src="assets/clients-logo/zee.png" alt="Zyrous Logo" loading="lazy"></div>
      <div className="client-logo white-bg"><Image width="558px" height ="78px" src="assets/clients-logo/the-furniture-shack.webp" alt="The Furniture shack logo" loading="lazy"></div>
      </div>
  </section> */}


    <section className="contact-section" id="contact">
        <h2 className="contact-heading">Contact</h2>
        <div className="contact-container">
            <p className="contact-content">Ready to transform your digital presence? We're just as excited as you are!<br />Let's create something brilliant together!</p>
            <div className="contact-button-container">
                {/* <p id="write-to-us" className="contact-banner" onClick="window.location.href='mailto:ismailahmad0505@gmail.com'"><svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="var(--blue)"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/></svg> <span>Write to us!</span></p> */}
                <a style={{textDecoration: 'none'}} id="schedule-a-meeting" target="_blank" href='https://calendly.com/ismailahmad/book-a-consultation'>
                    <p className="contact-banner"><svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="var(--blue)"><path d="M580-240q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29ZM200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Z"/></svg><span>Schedule a Meeting</span></p>
                </a>
                {/* <p className="contact-banner" onclick="window.location.href='https://calendar.app.google/zWsnSGkvrX9SMKug6'"><svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="var(--blue)"><path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z"/></svg><span>Schedule a Meeting</span></p> */}
            </div>
        </div>
    </section>

  </main>
  <footer>
    <div className="footer-heading">
        <p>© 2025 Design Gravitas All rights reserved.</p>
    </div>
</footer>
    </>
  );
}