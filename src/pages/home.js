import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import staticDataHome from '../static/home.json';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './home.scss';

const KnowUs = (props) => {
  const { id } = props;
  const sectionParameter = staticDataHome.maincontent.section;
  const { title, description, socialMedia } = sectionParameter[id];
  const descriptionData = [];
  description.split('*').forEach((linkData, i) => {
    if (i % 2) {
      const linkWord = linkData.split('~')[0];
      const linkUrl = linkData.split('~')[1];
      descriptionData.push(<a className="sharp-red" href={linkUrl}>{linkWord}</a>);
    } else {
      descriptionData.push(linkData);
    }
  });
  // eslint-disable-next-line prefer-const
  const descriptionElement = (
    <p>
      {
        descriptionData.map((data,i) => (
          <React.Fragment key={`descriptionData_${i}`}>{data}</React.Fragment>
        ))
      }
    </p>
  );
  return (
    <div className="section-container without-dark-bg">
      <h3><span className="without-underline">{title}</span></h3>
      <div className="section-content-container">
        {descriptionElement}
        <div className="social-media">
          {
            socialMedia.map((list, i) => (
              <a key={`socialMedia_${i}`} href={list.url}>
                <img src={list.imgSrc} alt={`socialMedia_${i}`} />
              </a>
            ))
          }
        </div>
      </div>
    </div>
  );
};
const Portfolio = (props) => {
  const { id } = props;
  const sectionParameter = staticDataHome.maincontent.section;
  const { title, listData, moreLink } = sectionParameter[id];
  return (
    <div className="section-container">
      <h3><span>{title}</span></h3>
      <div className="section-content-container">
        {
          listData.map((list, i) => (
            <div key={`section-content-list_${i}`} className="section-content-list list-style-card">
              <div className="imgcontainer-sectionlist"><img src={list.imgSrc} alt={`imgcontainer-sectionlist_${i}`} /></div>
              <h4>{list.mainTitle}</h4>
              <p>
                {list.description}
              </p>
            </div>
          ))
        }
        <div className="more-link">
          <a className="sharp-red" href={moreLink.url}>{moreLink.content}</a>
        </div>
      </div>
    </div>
  );
};
const OnlineCourses = (props) => {
  const { id } = props;
  const sectionParameter = staticDataHome.maincontent.section;
  const { title, listData } = sectionParameter[id];
  return (
    <div className="section-container">
      <h3><span>{title}</span></h3>
      <div className="section-content-container">
        <Carousel
          showStatus={false}
          showArrows={false}
          showThumbs={false}
          infiniteLoop
          autoPlay
        >
          {
            listData.map((list, i) => (
              <div key={`section-content-list_${i}`} className="section-content-list list-style-carousel">
                <div className="imgcontainer-sectionlist"><img src={list.imgSrc} alt={`section-content-list_${i}`} /></div>
                <div className="carousel-introduction-container">
                  <p>{list.feedback}</p>
                  <span className="author">{list.author}</span>
                  <span>{list.profession}</span>
                </div>
              </div>
            ))
          }
        </Carousel>
      </div>
    </div>
  );
};
const PopularCourses = (props) => {
  const { id } = props;
  const sectionParameter = staticDataHome.maincontent.section;
  const { title, listData, linkButton } = sectionParameter[id];
  return (
    <div className="section-container">
      <h3><span>{title}</span></h3>
      <div className="section-content-container">
        {
          listData.map((list, i) => (
            <div key={`section-content-list_${i}`} className="section-content-list list-style-card">
              <div className="imgcontainer-sectionlist"><img src={list.imgSrc} alt={`section-content-list_${i}`} /></div>
              <h4>{list.mainTitle}</h4>
              <div className="course-date">
                {
                    list.remind && <span className="remind">{list.remind}</span>
                  }
                <span>{list.date}</span>
              </div>
              <p className="restrict-height">
                {list.description}
              </p>
              <p className="note">
                {list.note}
              </p>
            </div>
          ))
        }
        <div className="btngroup">
          {
            linkButton.map((list) => (
              <a key={`btngroup_${list}`} href={list.url}>
                <button type="button">{list.value}</button>
              </a>
            ))
          }
        </div>
      </div>
    </div>
  );
};
const About5xRuby = (props) => {
  const { id } = props;
  const sectionParameter = staticDataHome.maincontent.section;
  const { title, listData } = sectionParameter[id];
  return (
    <div className="section-container">
      <h3><span>{title}</span></h3>
      <div className="section-content-container">
        {
          listData.map((list, i) => (
            <div key={`section-content-list_${i}`} className="section-content-list">
              <div className="imgcontainer-sectionlist"><img src={list.imgSrc} alt={`section-content-list_${i}`} /></div>
              <h3>{list.mainTitle}</h3>
              <h3>{list.secondaryTitle}</h3>
              <p>{list.description}</p>
            </div>
          ))
        }
      </div>
    </div>
  );
};
const CarouselContainer = () => (
  <Carousel
    showStatus={false}
    showArrows={false}
    showThumbs={false}
  >
    {
        staticDataHome.maincontent.carousel.map((imgList, i) => (
          <div key={`carousel${imgList}`}>
            <img src={imgList} alt={`carousel${i}`} />
          </div>
        ))
      }
  </Carousel>
);
const Home = () => (
  <div className="pagecontainer-home">
    <div className="maincontent">
      <CarouselContainer />
      <About5xRuby id="about5xRuby" />
      <PopularCourses id="popularCourses" />
      <OnlineCourses id="onlineCourses" />
      <Portfolio id="portfolio" />
      <KnowUs id="knowUs" />
    </div>
  </div>
);

export default Home;
