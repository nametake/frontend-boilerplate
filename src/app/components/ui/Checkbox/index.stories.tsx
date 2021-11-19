/* eslint-disable import/no-extraneous-dependencies */
import React, { useCallback, useState } from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
/* eslint-enable */

import { Checkbox } from './index';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'ui/Checkbox',
  component: Checkbox,
  argTypes: {
    checked: {
      control: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof Checkbox>;

/* eslint-disable react/jsx-props-no-spreading */
const Template: ComponentStory<typeof Checkbox> = function Template({
  checked,
  onChange,
  ...args
}) {
  const [check, setCheck] = useState(checked ?? false);
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(e);
      setCheck(e.target.checked);
    },
    [onChange]
  );
  return <Checkbox checked={check} onChange={handleChange} {...args} />;
};
/* eslint-enable */

export const Default = Template.bind({});
Default.args = {
  checked: false,
  label: 'with text',
  onChange: () => { },
};
