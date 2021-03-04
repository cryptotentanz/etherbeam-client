import React, { FC } from 'react'
import { Address } from 'libraries/types'
import { getAddressTypeIcon } from './helpers'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faTag } from '@fortawesome/free-solid-svg-icons'
import Icon from '../Icon'
import Badge from '../Badge'

type ColorProp = 'dark' | 'light' | 'primary' | 'secondary' | 'positive' | 'negative'

interface AddressFlagProps {
  address: Address
  color?: ColorProp
  className?: string
}

const AddressFlag: FC<AddressFlagProps> = ({ address, color, className }: AddressFlagProps) => {
  const { label, type } = address

  const getTypeIcon = (): IconProp => {
    return getAddressTypeIcon(type) || faTag
  }

  return (
    <Badge color={color} className={className}>
      <Icon icon={getTypeIcon()} label={label} />
    </Badge>
  )
}

export default AddressFlag
