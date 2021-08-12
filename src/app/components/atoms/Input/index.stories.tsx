/* eslint-disable import/no-extraneous-dependencies,import/no-default-export,@typescript-eslint/explicit-module-boundary-types */
import { action } from '@storybook/addon-actions';
import React from 'react';

import { Input } from './index';

export default {
  title: 'app/components/atoms/Input',
  component: Input,
};

export function Story() {
  return <Input onChange={action('changed')} />;
}

Story.story = {
  name: 'Input',
};
