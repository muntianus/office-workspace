import React from 'react';

const Footer = () => {
  return (
    <footer className="py-5 bg-dark">
      <div className="container px-5">
        <p className="m-0 text-center text-white">Copyright &copy; Nikita Muntian 2025</p>
        <div className="d-flex justify-content-center gap-4 mt-3">
            <a href="mailto:rusdevs@proton.me" className="text-white">rusdevs@proton.me</a>
            <a href="https://github.com/muntianus" target="_blank" className="text-white">GitHub</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
