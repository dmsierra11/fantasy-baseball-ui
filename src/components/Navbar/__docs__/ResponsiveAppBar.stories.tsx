import type { Meta, StoryObj } from '@storybook/react';
import '../../../index.css';
import { ResponsiveAppBar } from '../ResponsiveAppBar';

const meta: Meta<typeof ResponsiveAppBar> = {
  title: 'Navbar',
  component: ResponsiveAppBar,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof ResponsiveAppBar>;

// Conditions Test
export const Default: Story = {
  args: {
    pages: [
      { label: 'Posiciones', path: '/' },
      { label: 'Torneos', path: '/' },
      { label: 'Calendario', path: '/' },
    ],
    settings: ['Perfil', 'Cuenta', 'Panel', 'Cerrar Sesión'],
  },
};

export const NoSettings: Story = {
  args: {
    pages: [
      { label: 'Posiciones', path: '/' },
      { label: 'Torneos', path: '/' },
      { label: 'Calendario', path: '/' },
    ],
  },
};
