import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import React from 'react';
import type { NewsItem } from '../../types/news';
import { Typography } from '../Typography';
import './LatestNews.css';

interface LatestNewsProps {
  newsItems: NewsItem[];
  sectionTitle?: string;
  divider?: boolean;
}

const NewsItemComponent: React.FC<NewsItem> = ({
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

const LatestNewsComponent: React.FC<LatestNewsProps> = ({
  newsItems,
  sectionTitle,
  divider,
}) => {
  return (
    <Card>
      <CardContent>
        {sectionTitle && (
          <Typography variant="h5" mb={2}>
            {sectionTitle}
          </Typography>
        )}
        <Stack direction="column" spacing={2}>
          {newsItems.map((item) => (
            <>
              <NewsItemComponent key={item.id} {...item} />
              {divider && <Divider />}
            </>
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
};

export { LatestNewsComponent };
