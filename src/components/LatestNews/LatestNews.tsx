import { Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import React from 'react';
import type { NewsItemType } from '../../types/news';
import { SectionCard } from '../SectionCard';
import './LatestNews.css';

interface LatestNewsProps {
  newsItems: NewsItemType[];
  sectionTitle?: string;
  divider?: boolean;
}

const NewsItem: React.FC<NewsItemType> = ({ href, imgSrc, imgAlt, title }) => {
  return (
    <a href={href}>
      <Stack
        className="card-wrapper"
        direction="row"
        spacing={2}
        p={2}
        minHeight={75}
        alignItems="center"
      >
        <Avatar alt={imgAlt} src={imgSrc} />
        <Typography fontWeight="700">{title}</Typography>
      </Stack>
    </a>
  );
};

const LatestNews: React.FC<LatestNewsProps> = ({ newsItems, sectionTitle }) => {
  return (
    <SectionCard sectionTitle={sectionTitle}>
      <Stack>
        {newsItems.map((item, index) => (
          <NewsItem key={`${index}`} {...item} />
        ))}
      </Stack>
    </SectionCard>
  );
};

export { LatestNews };
