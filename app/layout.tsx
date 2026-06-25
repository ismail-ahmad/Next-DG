import type { Metadata } from "next";
import '@/app/globals.css';
import {Gruppo, Nunito, League_Spartan, Source_Sans_3} from 'next/font/google';

const gruppo = Gruppo({
  weight: '400',
  subsets: ['latin']
});

const nunito = Nunito({
  weight: '400',
  subsets: ['latin']
});

const leagueSpartan = League_Spartan({
  weight: '400',
  subsets: ['latin']
});

const sourceSans3 = Source_Sans_3({
  weight: '400',
  subsets: ['latin']
});

export const metadata:Metadata = {
  title: 'Design Gravitas',
  description: 'some description'
}
export default function RootLayout({children}: {children: React.ReactNode}){
  return(
    <html>

  <link rel="icon" href="/light-favicon-180x180.svg" type="image/svg+xml" media="(prefers-color-scheme: light)" />
  {/* <link rel="icon" sizes="32x32" href="/favicon-32x32.png" type="image/png" media="(prefers-color-scheme: light)">
  <link rel="icon" sizes="16x16" href="/favicon-16x16.png" type="image/png" media="(prefers-color-scheme: light)"> */}
  
  <link rel="icon" href="/dark-favicon-180x180.svg" type="image/svg+xml" media="(prefers-color-scheme: dark)" />
  <link rel="icon" sizes="32x32" href="/dark-favicon-32x32.png" type="image/png" media="(prefers-color-scheme: dark)" />
  <link rel="icon" sizes="16x16" href="/dark-favicon-16x16.png" type="image/png" media="(prefers-color-scheme: dark)" />
  <link rel="apple-touch-icon" href="/dark-apple-favicon-180x180.png" type="image/png" sizes="180x180" />
  <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#1E90FF" type="image/svg+xml" />

  <link rel="canonical" href="https://www.designgravitas.com" />
      <body className={sourceSans3.className}>
        <header className={"header"}>
    <a href="/">
        <div className={`logo-group ${gruppo.className}`}>
            <div className="logo">
                <svg width="75" height="41" viewBox="0 0 75 41" fill="transparent" xmlns="http://www.w3.org/2000/svg">
                <rect width="74.2004" height="41" fill="transparent"/>
                <path d="M64.0402 19.5525L63.3865 28.8162C53.2689 30.9108 37.3772 31.0283 37.3162 22.0003C37.2367 10.2259 66.3222 8.91588 66.3222 8.91588L64.0402 11.453" stroke="#1E90FF" strokeWidth="4"/>
                <path d="M13.3929 32.0899C12.6049 32.1926 11.8996 32.272 11.2954 32.3306L14.6753 13.2355C20.1064 12.1733 26.6401 11.635 31.8721 12.3747C34.713 12.7763 36.9707 13.5283 38.4659 14.6036C39.865 15.6099 40.6146 16.8956 40.5981 18.7094C40.577 21.0227 39.0525 23.1732 36.0182 25.166C33.0163 27.1375 28.9288 28.6779 24.7323 29.8287C20.5625 30.9722 16.4184 31.6957 13.3929 32.0899Z" fill="var(--dark-theme-background-color)" stroke="#1E90FF" strokeWidth="4"/>
                </svg>
            </div>
            <p className="logo-text">
              Design&nbsp;Gravitas
            </p>
          </div>
    </a>
    <div className="menu-close-button"></div>
    <nav className="nav-menu">      
      <ul className={leagueSpartan.className}>
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
        {children}
        <footer>
    <div className="footer-heading">
        <p>© 2025 Design Gravitas All rights reserved.</p>
    </div>
</footer>
      </body>
    </html>
  );
}