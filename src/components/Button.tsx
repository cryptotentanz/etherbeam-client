import React, { FC } from 'react'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import Icon from './Icon'
import './Button.scss'

type ColorProp = 'dark' | 'light' | 'primary' | 'secondary' | 'positive' | 'negative'
type SizeProp = 'm' | 'l' | 'xl'
type LabelBreakpointProp = 'xs' | 's' | 'm' | 'l'

interface ButtonProps {
  action?: () => void
  label?: string | null
  icon?: IconProp | null
  description?: string | null
  color?: ColorProp
  size?: SizeProp
  link?: boolean
  labelBreakpoint?: LabelBreakpointProp
  active?: boolean
  disabled?: boolean
  className?: string
}

const Button: FC<ButtonProps> = ({
  action,
  label,
  icon,
  description,
  color = 'light',
  size,
  link,
  labelBreakpoint,
  active,
  disabled,
  className,
}: ButtonProps) => {
  const getClassName = (): string => {
    const classNames = [link ? `my-button-link my-${color}-fg` : `my-button my-${color}-bg`, 'my-clickable']
    if (disabled) {
      if (!link) classNames.push('my-disabled-bg')
      classNames.push('my-disabled-fg')
    }
    if (active) classNames.push('my-active')
    if (className) classNames.push(className)

    return classNames.join(' ')
  }

  return (
    <button
      className={getClassName()}
      title={description ? description : undefined}
      onClick={action}
      disabled={disabled}
    >
      {icon ? (
        <Icon
          icon={icon}
          iconAlt={!link}
          labelBreakpoint={labelBreakpoint}
          label={label ? label : undefined}
          size={size}
        />
      ) : (
        <span className={size ? `my-size-${size}` : ''}>{label}</span>
      )}
    </button>
  )
}

export default Button
