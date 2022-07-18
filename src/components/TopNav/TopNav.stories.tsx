import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import TopNav from './TopNav';

export default {
  title: 'ReactComponentLibrary/TopNav',
  component: TopNav,
} as ComponentMeta<typeof TopNav>;

const Template: ComponentStory<typeof TopNav> = (args) => <TopNav {...args} />;

export const HelloWorld = Template.bind({});
HelloWorld.args = {
  title: 'Hello world',
};

export const ClickMe = Template.bind({});
ClickMe.args = {
  title: 'Click me',
};
