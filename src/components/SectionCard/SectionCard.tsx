import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import React from 'react';

type Component = 'paper' | 'div';

interface SectionCardProps {
  sectionTitle?: string;
  children: React.ReactNode;
  variant?: 'elevation' | 'outlined';
  component?: Component;
  titleSize?: 'h6' | 'h5' | 'h4' | 'h3' | 'h2' | 'h1';
}

export const SectionCard: React.FC<SectionCardProps> = ({
  sectionTitle,
  children,
  variant,
  component = 'paper',
  titleSize = 'h6',
}) => {
  if (component === 'paper') {
    return (
      <Paper className="p-4" variant={variant}>
        {sectionTitle && (
          <Typography variant={titleSize} mb={2} fontWeight="700">
            {sectionTitle}
          </Typography>
        )}
        {children}
      </Paper>
    );
  }
  return (
    <Box className="p-4">
      {sectionTitle && (
        <Typography variant={titleSize} mb={2} fontWeight="700">
          {sectionTitle}
        </Typography>
      )}
      {children}
    </Box>
  );
};
