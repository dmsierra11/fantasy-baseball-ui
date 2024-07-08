import React from 'react';
import type { NewsItem } from '../../types/news';
import { Typography } from '../Typography';
import './LatestNews.css';

interface LatestNewsProps {
  newsItems: NewsItem[];
  sectionTitle?: string;
}

const NewsItem: React.FC<NewsItem> = ({ href, imgSrc, imgAlt, text }) => {
  return (
    <li className="headline-stack-card-container">
      <div className="content-card-container">
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
    </li>
  );
};

const LatestNewsComponent: React.FC<LatestNewsProps> = ({
  newsItems,
  sectionTitle,
}) => {
  return (
    <div className="card-wrapper">
      <section>
        {sectionTitle && <Typography variant="h4">{sectionTitle}</Typography>}
        <ul className="headline-stack-list">
          {newsItems.map((item) => (
            <NewsItem key={item.id} {...item} />
          ))}
        </ul>
      </section>
    </div>
  );
};

export { LatestNewsComponent };
