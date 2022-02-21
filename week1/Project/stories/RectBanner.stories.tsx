import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import RectBanner from '../components/RectBanner'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/RectBanner',
  component: RectBanner,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    autoWidth: { type: 'boolean' }
  },
} as ComponentMeta<typeof RectBanner>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof RectBanner> = (args) => <RectBanner {...args} />

export const Small = Template.bind({})
Small.args = {
  size: 'small'
}

export const Medium = Template.bind({})
Medium.args = {
  size: 'medium'
}

export const Large = Template.bind({})
Large.args = {
  size: 'large'
}
