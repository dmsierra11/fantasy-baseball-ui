import fs from 'fs';
import path from 'path';

const componentTemplate = (componentName) => `
import React from 'react';
import { SectionCard } from '../SectionCard';

interface ${componentName}Props {
  // Define your props here
}

const ${componentName}: React.FC<${componentName}Props> = (props) => {
  return (
    <SectionCard sectionTitle="${componentName}">
      {/* Your component implementation */}
    </SectionCard>
  );
};

export { ${componentName} };
`;

const indexTemplate = (componentName) => `
export { ${componentName} } from './${componentName}';
`;

const storyTemplate = (componentName) => `
import type { Meta, StoryObj } from '@storybook/react';
import '../../../index.css';
import { ${componentName} } from '../${componentName}';

const meta: Meta<typeof ${componentName}> = {
  title: '${componentName}',
  component: ${componentName},
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof ${componentName}>;

export const Default: Story = {
  args: {
    // Define your default args here
  },
};
`;

const cssTemplate = `
@tailwind base;
@tailwind components;
@tailwind utilities;
`;

const createComponent = (componentName) => {
  const componentDir = path.join(
    process.cwd(),
    'src',
    'components',
    componentName,
  );

  if (!fs.existsSync(componentDir)) {
    fs.mkdirSync(componentDir, { recursive: true });
  }

  fs.writeFileSync(
    path.join(componentDir, `${componentName}.tsx`),
    componentTemplate(componentName),
  );
  fs.writeFileSync(
    path.join(componentDir, 'index.ts'),
    indexTemplate(componentName),
  );
  fs.mkdirSync(path.join(componentDir, '__docs__'), { recursive: true });
  fs.writeFileSync(
    path.join(componentDir, '__docs__', `${componentName}.stories.tsx`),
    storyTemplate(componentName),
  );
  fs.writeFileSync(
    path.join(componentDir, `${componentName}.css`),
    cssTemplate,
  );
};

const componentName = process.argv[2];

if (!componentName) {
  console.error('Please provide a component name.');
  process.exit(1);
}

createComponent(componentName);
console.log(`Component ${componentName} created successfully.`);
