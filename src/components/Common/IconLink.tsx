import React from 'react'
import {
  Link,
} from '@chakra-ui/react'

import DynamicIconSi from '@/components/Common/DynamicIconSi'
import { commonStyles } from '@/common/consts/common-styles'

type Props = {
  name: string;
  icon: string;
  to: string;
  color: string;
  size?: number;
  isExternal?: boolean;
}

const defaultIconSize = commonStyles.icon.defaultSize

const IconLink = (props: Props) => {
  const name = props.name
  const icon = props.icon
  const to = props.to
  const color = props.color
  const size = props.size ?? defaultIconSize
  const isExternal = props.isExternal ?? true

  return(
    <Link href={to} isExternal={isExternal}>
      <DynamicIconSi icon={icon} color={color} size={size} />
    </Link>
  )
}

export default IconLink