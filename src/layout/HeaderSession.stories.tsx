/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactNode } from 'react'
import { Meta } from '@storybook/react/types-6-0'
import { action } from '@storybook/addon-actions'
import { ServerData } from 'libraries/server'
import { User, UserType } from 'libraries/types'
import { SessionContext } from './SessionContext'
import HeaderSession from './HeaderSession'

const user = {
  name: 'User Name',
  email: 'user@email.com',
  type: UserType.User,
}

const administrator = {
  name: 'Administrator',
  email: 'admin@email.com',
  type: UserType.Administrator,
}

const createDecorator = (currentUser: User | null | undefined): ((Story: any) => ReactNode) => {
  // eslint-disable-next-line react/display-name
  return (Story) => (
    <SessionContext.Provider
      value={{
        serverData: (undefined as unknown) as ServerData,
        currentUser,
        initialize: action('session initialized'),
        signIn: action('signed in'),
        signOut: action('signed out'),
      }}
    >
      <Story />
    </SessionContext.Provider>
  )
}

export default {
  title: 'Layout/HeaderSession',
  component: HeaderSession,
  argTypes: { signIn: { action: 'signed in' }, signOut: { action: 'signed out' } },
  args: { currentUser: user },
  decorators: [createDecorator(user)],
} as Meta

const Template = (args: any) => <HeaderSession {...args} />

export const Default = Template.bind({})

export const Administrator = Template.bind({})
;(Administrator as any).decorators = [createDecorator(administrator)]

export const Unauthentified = Template.bind({})
;(Unauthentified as any).decorators = [createDecorator(null)]
