import { Paper, Typography } from '@mui/material';
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

const NewsItem: React.FC<NewsItemType> = ({ href, imgSrc, imgAlt, text }) => {
  return (
    <a href={href}>
      <Paper className="card-wrapper" variant="outlined">
        <Stack
          direction="row"
          spacing={2}
          p={2}
          minHeight={100}
          alignItems="center"
        >
          <Avatar alt={imgAlt} src={imgSrc} />
          <Typography variant="h6">{text}</Typography>
        </Stack>
      </Paper>
    </a>
  );
};

const LatestNews: React.FC<LatestNewsProps> = ({ newsItems, sectionTitle }) => {
  return (
    <SectionCard sectionTitle={sectionTitle}>
      <Stack direction="column" spacing={2}>
        {newsItems.map((item) => (
          <>
            <NewsItem key={item.id} {...item} />
          </>
        ))}
      </Stack>
    </SectionCard>
  );
};

export { LatestNews };
