import React from 'react'
import {
  Link,
} from '@chakra-ui/react'
import * as Icons from 'react-icons/si'

type Props = {
  name: string;
  icon: string;
  to: string;
  color: string;
  size?: number;
  isExternal?: boolean;
}

type IconProps = {
  name: string;
  color: string;
  size: number;
  isExterrnal: boolean
}

const defaultIconSize = 12

const IconLink = (props: Props) => {
  const name = props.name
  const icon = props.icon
  const to = props.to
  const color = props.color
  const size = props.size ?? defaultIconSize
  const isExternal = props.isExternal ?? true

  return(
    <Link href={to} key={`icon-link-${name}`} isExternal={isExternal}>
      <DynamicIcon name={icon} color={color} size={size} isExterrnal={isExternal} />
    </Link>
  )
}

const DynamicIcon = (props: IconProps): JSX.Element => {
  const key = props.name as keyof typeof Icons
  const IconComponent = Icons[key]({
    color: props.color,
    size: props.size,
  })

  if (!IconComponent) return(<></>)

  return IconComponent
}

export default IconLink