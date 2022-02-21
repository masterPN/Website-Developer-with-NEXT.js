import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import ProductCard from '../components/ProductCard'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/ProductCard',
  component: ProductCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },
} as ComponentMeta<typeof ProductCard>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ProductCard> = () => <ProductCard />

export const Card = Template.bind({})
Card.args = {
}
