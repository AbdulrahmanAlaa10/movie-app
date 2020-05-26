import React from 'react';

function Footer() {
  return (
    <div className="footer">
      <div className="row footer">
        <div className="col-md-12 footer">
          <div className="footer p-3 mt-4 text-center">
            Developed By :
            <span className="text-warning font-weight-normal">
              Abdulrahman Alaa
            </span>
            , Using <i className="fab fa-react" /> React JS &amp; Redux JS
            with external movies data API
            <a
              href="http://www.omdbapi.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <br />
              OMDB
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;