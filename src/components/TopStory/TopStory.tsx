import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Paper from '@mui/material/Paper';
import './TopStory.css';

interface TopStoryProps {
  imageUrl: string;
  headline: string;
  description: string;
  link: string;
  imageAlt?: string;
}

const TopStory: React.FC<TopStoryProps> = ({
  imageUrl,
  imageAlt,
  headline,
  description,
  link,
}) => {
  return (
    <Paper>
      <a href={link}>
        <Box className="media-container">
          <CardMedia
            component="img"
            image={imageUrl}
            alt={imageAlt}
            className="img"
            data-testid="image"
          />
        </Box>
        <Box className="content-container">
          <Typography
            variant="h5"
            className="headline-container"
            fontWeight="900"
          >
            {headline}
          </Typography>
          <Typography p={2}>{description}</Typography>
        </Box>
      </a>
    </Paper>
  );
};

export { TopStory };
