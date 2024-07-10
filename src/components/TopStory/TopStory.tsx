import React from 'react';
import './TopStory.css';

interface TopStoryProps {
  imageUrl: string;
  imageAlt: string;
  headline: string;
  description: string;
  link: string;
}

const TopStory: React.FC<TopStoryProps> = ({ imageUrl, imageAlt, headline, description, link }) => {
  console.log(imageUrl);
  return (
    <div className="content-card-container" data-cmp-id="top-story">
      <div className="media-container">
        <div className="aspect-ratio-container">
          <div className="aspect-ratio-content">
            <a className="image-link" href={link} data-testid="image-container">
              <div className="image-wrapper">
                <img src={imageUrl} alt={imageAlt} className="img" data-testid="image" />
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="content-container">
        <div className="headline-container" data-testid="headline-container">
          <a className="headline-link" href={link} data-testid="link">
            <h1 className="headline-wrapper">{headline}</h1>
          </a>
        </div>
        <div className="description-container" data-testid="description-container">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export { TopStory };
