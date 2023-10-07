const Footer = () => {
  return (
    <div className="p-10 bg-base-200">
      <footer className="footer max-w-[1440px] mx-auto text-base-content flex justify-between">
        <aside>
         
          <p>
          <h1 className="normal-case text-xl font-semibold">Training<span className="text-orange-700">Fusion</span> </h1>
            <br />
            Providing reliable conference since 2012
          </p>
        </aside>
        <nav>
          <header className="footer-title">Services</header>
        <div className="flex gap-5">
        <div className="flex flex-col space-y-2">
          <a className="link link-hover">Conferences and Seminars</a>
          <a className="link link-hover">Workshops and Training Sessions</a>

          <a className="link link-hover">Career Fairs and College Expos</a>
          </div>
          <div className="flex flex-col space-y-2">
          <a className="link link-hover">Educational Exhibitions</a>
          <a className="link link-hover">Hackathons and Coding Competitions</a>
          <a className="link link-hover">Webinars</a>
          </div>
        </div>
         
    
        </nav>
        <nav>
          <header className="footer-title">Company</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
         
        </nav>
        <nav>
          <header className="footer-title">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        
      </footer>
    </div>
  );
};

export default Footer;
