import { Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import React from 'react';
import type { NewsItemType } from '../../types/news';
import './LatestNews.css';

interface LatestNewsProps {
  newsItems: NewsItemType[];
  sectionTitle?: string;
  divider?: boolean;
}

const NewsItem: React.FC<NewsItemType> = ({
  href,
  imgSrc,
  imgAlt,
  text,
}) => {
  return (
    <a href={href}>
      <Stack direction="row" spacing={2} p={2}>
        <Avatar alt={imgAlt} src={imgSrc} />
        <Typography variant="h6">{text}</Typography>
      </Stack>
    </a>
  );
};

const LatestNews: React.FC<LatestNewsProps> = ({
  newsItems,
  sectionTitle,
  divider,
}) => {
  return (
    <Paper className="p-4">
      {sectionTitle && (
        <Typography variant="h5" mb={2}>
          {sectionTitle}
        </Typography>
      )}
      <Stack direction="column" spacing={2}>
        {newsItems.map((item) => (
          <>
            <NewsItem key={item.id} {...item} />
            {divider && <Divider />}
          </>
        ))}
      </Stack>
    </Paper>
  );
};

export { LatestNews };
