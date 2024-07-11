import { Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import React from 'react';

interface SectionCardProps {
  sectionTitle?: string;
  children: React.ReactNode;
}

export const SectionCard: React.FC<SectionCardProps> = ({
  sectionTitle,
  children,
}) => {
  return (
    <Paper className="p-4">
      {sectionTitle && (
        <Typography variant="h5" mb={2}>
          {sectionTitle}
        </Typography>
      )}
      {children}
    </Paper>
  );
};
