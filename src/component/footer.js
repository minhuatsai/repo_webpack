import React from 'react';
import { Link } from 'react-router-dom';
import './footer.scss';

const Footer = (props) => {
  const { staticData } = props;

  return (
    <div className="componentcontainer-footer">
      <div className="footer-content">
        <div className="advertisement-link">
          <a className="media-report" href={staticData.mediaReport.url}>
            <img src={staticData.mediaReport.imgSrc} alt="media-report" />
          </a>
          <a className="cakeresume" href={staticData.cakeResume.url}>
            <img src={staticData.cakeResume.imgSrc} alt="cakeresume" />
            <span>{staticData.cakeResume.description}</span>
          </a>
        </div>
        <div className="footer-feature">
          <ul className="footer-menu">
            {
                        staticData.menu.map((list,i) => (
                          <li key={`footerMenu_${i}`}>
                            {
                                        list.url.indexOf('/contacts') >= 0
                                          ? <Link to={
                                                {
                                                    pathname: list.url,
                                                    state: {
                                                        breadcrumbPath: list.breadcrumbPath,
                                                        headerDescription: list.headerDescription,
                                                    }
                                                }
                                            }
                                            >
                                                {list.title}
                                            </Link>
                                          : (
                                            <a href={list.url}>
                                              {list.title}
                                            </a>
                                          )
                                    }
                          </li>
                        ))
                    }
          </ul>
          <div className="footer-contact-container">
            <div className="contact-info">
              <div className="contact-phone sharp-red">{staticData.contactInfo.phone}</div>
              <div className="contact-worktime">{staticData.contactInfo.workTime}</div>
              <div className="contact-social-media">
                {
                  staticData.contactInfo.socialMedia.map((list, i) => (
                    <a key={`socialMedia_${i}`} href={list.url}>
                      <i className={`media-icon ${list.fontIcon}`} />
                    </a>
                  ))
                }
              </div>
            </div>
            <div className="mail-address">
              <p>{staticData.mailAddress.title}</p>
              <a href={staticData.mailAddress.mail.url}>{staticData.mailAddress.mail.content}</a>
              <p>
                {staticData.mailAddress.address.title}
                <a href={staticData.mailAddress.address.url}>
                  {staticData.mailAddress.address.content}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <p>{staticData.copyright.description}</p>
        <p>{staticData.copyright.case}</p>
      </div>
    </div>
  );
};

export default Footer;
