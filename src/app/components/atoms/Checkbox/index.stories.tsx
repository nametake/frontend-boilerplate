/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
/* eslint-enable */

import { Checkbox } from './index';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'ui/Checkbox',
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

/* eslint-disable react/jsx-props-no-spreading */
const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
);
/* eslint-enable */

export const Default = Template.bind({});
Default.args = {
  checked: true,
};
