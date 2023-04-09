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
      <title>{ title ?? 'yyouki' }</title>
      <meta name="description" content={ description ?? 'yyouki\'s portfolio' } />
    </Helmet>
  )
}

export default HeadBlock