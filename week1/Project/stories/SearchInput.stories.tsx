import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import SearchInput from '../components/SearchInput'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/SearchInput',
  component: SearchInput,
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: 'rgb(51,51,51)' },
      ],
    }
  }
} as ComponentMeta<typeof SearchInput>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SearchInput> = () => <SearchInput />

export const Input = Template.bind({})
Input.args = {
}
