import React from 'react';
import './LatestNews.css';

interface NewsItem {
  id: string;
  href: string;
  imgSrc: string;
  text: string;
  imgAlt?: string;
}

interface LatestNewsProps {
  newsItems: NewsItem[];
  sectionTitle?: string;
}

const NewsItem: React.FC<NewsItem> = ({ href, imgSrc, imgAlt, text }) => {
  return (
    <li className="headline-stack-card-container">
      <div className="content-card-container">
        <div className="content-container">
          <div className="headline-container">
            <a className="link headline-link" href={href}>
              <div className="headline-wrapper">
                <div className="spot-container">
                  <div className="image-wrapper">
                    <img src={imgSrc} alt={imgAlt} className="img" />
                  </div>
                </div>
                <span>{text}</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </li>
  );
};

const LatestNews: React.FC<LatestNewsProps> = ({ newsItems, sectionTitle }) => {
  return (
    <div className="card-wrapper">
      <section>
        {sectionTitle && <h2 className="headline-stack-title">{sectionTitle}</h2>}
        <ul className="headline-stack-list">
          {newsItems.map((item) => (
            <NewsItem key={item.id} {...item} />
          ))}
        </ul>
      </section>
    </div>
  );
};

export { LatestNews };
