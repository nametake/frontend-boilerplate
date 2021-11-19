/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
/* eslint-enable */

import { Input } from './index';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'ui/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

/* eslint-disable react/jsx-props-no-spreading */
const Template: ComponentStory<typeof Input> = function Template(args) {
  return <Input {...args} />;
};
/* eslint-enable */

export const Default = Template.bind({});
Default.args = {};
