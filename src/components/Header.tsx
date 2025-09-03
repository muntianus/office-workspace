import React from 'react';

const Header = () => {
  return (
    <header className="py-5">
      <div className="container px-5">
        <div className="row gx-5 align-items-center justify-content-center">
          <div className="col-lg-8 col-xl-7 col-xxl-6">
            <div className="my-5 text-center text-xl-start">
              <h1 className="display-5 fw-bolder text-white mb-2">Nikita Muntian (Muntianus)</h1>
              <p className="lead fw-normal text-white-50 mb-4">QA Lead / Performance Analyst / Team Lead / PM / EM. Специалист по нагрузочному тестированию, перформанс-инжинирингу и автоматизации.</p>
              <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                <a className="btn btn-primary btn-lg px-4 me-sm-3" href="#features">Стек и проекты</a>
                <a className="btn btn-outline-light btn-lg px-4" href="https://www.linkedin.com/in/muntianus/" target="_blank">LinkedIn</a>
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-xxl-6 d-none d-xl-block text-center">
            {/* Placeholder for a profile picture */}
            <div className="bg-secondary rounded-circle d-flex align-items-center justify-content-center" style={{ width: '300px', height: '300px'}}>
                <span className="text-white">NM</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
