import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import IconItem from '../components/IconItem'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/IconItem',
  component: IconItem,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: 'rgb(51,51,51)' },
      ],
    }
  }
} as ComponentMeta<typeof IconItem>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof IconItem> = (args) => <IconItem {...args} />

export const Menu = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Menu.args = {
  icon: 'bag'
}

// export const Secondary = Template.bind({})
// Secondary.args = {
//   label: 'Button',
// }
//
// export const Large = Template.bind({})
// Large.args = {
//   size: 'large',
//   label: 'Button',
// }
//
// export const Small = Template.bind({})
// Small.args = {
//   size: 'small',
//   label: 'Button',
// }
