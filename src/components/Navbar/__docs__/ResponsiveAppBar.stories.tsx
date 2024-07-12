import type { Meta, StoryObj } from '@storybook/react';
import logo from '../../../assets/images/LMS.png';
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
    pages: ['Posiciones', 'Torneos', 'Calendario'],
    settings: ['Perfil', 'Cuenta', 'Panel', 'Cerrar Sesión'],
    logoUri: logo,
  },
};

export const NoPages: Story = {
  args: {
    settings: ['Perfil', 'Cuenta', 'Panel', 'Cerrar Sesión'],
    logoUri: logo,
  },
};

export const NoSettings: Story = {
  args: {
    pages: ['Posiciones', 'Torneos', 'Calendario'],
    logoUri: logo,
  },
};
