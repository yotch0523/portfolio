import React from 'react'

import { Helmet } from 'react-helmet-async'

type Props = {
  title?: string;
  description?: string;
}

const HeadBlock = (props: Props) => {
  const { title, description } = props

  return(
    <Helmet>
      <title>{ title ?? 'Youki' }</title>
      <meta name="description" content={ description ?? 'Youki\'s portfolio' } />
    </Helmet>
  )
}

export default HeadBlock