import React from 'react'

import DynamicIconSi from '@/components/Common/DynamicIconSi'
import { commonStyles } from '@/common/consts/common-styles'

type Props = {
  name: string;
  icon: string;
  color: string;
  size?: number;
}

const defaultIconSize = commonStyles.icon.defaultSize

const Icon = (props: Props) => {
  const name = props.name
  const icon = props.icon
  const color = props.color
  const size = props.size ?? defaultIconSize

  return(
    <>
      <DynamicIconSi icon={icon} color={color} size={size} />
    </>
  )
}

export default Icon