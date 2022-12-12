import React from 'react'
import * as Icons from 'react-icons/si'

type Props = {
  icon: string;
  color: string;
  size: number;
}

const DynamicIconSi = (props: Props): JSX.Element => {
  const key = props.icon as keyof typeof Icons
  const IconComponent = Icons[key]({
    color: props.color,
    size: props.size,
  })

  if (!IconComponent) return(<></>)

  return IconComponent
}

export default DynamicIconSi