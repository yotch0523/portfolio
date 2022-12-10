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
      <title>{ title ?? 'yotch' }</title>
      <meta name="description" content={ description ?? 'yotch\'s portfolio' } />
      {/* <meta name="viewport" content="width=device-width,initial-scale=1.0" /> */}
    </Helmet>
  )
}

export default HeadBlock