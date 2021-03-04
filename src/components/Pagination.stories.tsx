/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { Meta } from '@storybook/react/types-6-0'
import Pagination from './Pagination'

export default {
  title: 'Components/Pagination',
  component: Pagination,
  argTypes: { setCurrent: { action: 'page clicked' } },
  args: { total: 10, current: 5 },
} as Meta

const Template = (args: any) => <Pagination {...args} />

export const Default = Template.bind({})

export const First = Template.bind({})
;(First as any).args = { current: 1 }

export const Second = Template.bind({})
;(Second as any).args = { current: 2 }

export const BeforeLast = Template.bind({})
;(BeforeLast as any).args = { current: 9 }

export const Last = Template.bind({})
;(Last as any).args = { current: 10 }

export const FewPages = Template.bind({})
;(FewPages as any).args = { total: 6 }
