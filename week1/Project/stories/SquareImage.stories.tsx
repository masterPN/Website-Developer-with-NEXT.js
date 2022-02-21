import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import SquareImage from '../components/SquareImage'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/SquareImage',
  component: SquareImage,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof SquareImage>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SquareImage> = (args) => <SquareImage {...args} />

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
