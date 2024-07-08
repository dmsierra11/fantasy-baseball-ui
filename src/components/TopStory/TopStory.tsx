import { ThemeProvider, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Paper from '@mui/material/Paper';
import theme from '../../config/theme';
import './TopStory.css';

interface TopStoryProps {
  imageUrl: string;
  imageAlt: string;
  headline: string;
  description: string;
  link: string;
}

const TopStory: React.FC<TopStoryProps> = ({
  imageUrl,
  imageAlt,
  headline,
  description,
  link,
}) => {
  return (
    <ThemeProvider theme={theme}>
      <Paper data-cmp-id="top-story" style={{ overflowX: 'auto' }}>
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
              variant="h4"
              className="headline-container"
              fontWeight="bold"
            >
              {headline}
            </Typography>
            <Typography variant="body1" p={2}>
              {description}
            </Typography>
          </Box>
        </a>
      </Paper>
    </ThemeProvider>
  );
};

export { TopStory };
