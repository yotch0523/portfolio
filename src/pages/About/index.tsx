import React from 'react'
import {
  Box,
  Heading,
  HStack,
  Text,
} from '@chakra-ui/react'

import JsSquareIcon from '@patternfly/react-icons/dist/esm/icons/js-square-icon'
import PhpIcon from '@patternfly/react-icons/dist/esm/icons/php-icon'
import AzureIcon from '@patternfly/react-icons/dist/esm/icons/azure-icon'

import HeadBlock from '@/components/Common/HeadBlock'
import { commonStyles } from '@/common/consts/common-styles'
import { Skill } from '@/common/types'
import skillData from '@/data/skills.json'

type IconPropertiers = {
  name: string;
  color: string;
}

const About = () => {
  const skills: Skill[] = skillData.data

  return (
    <>
      <Box px={commonStyles.contentWrap.paddingX} py={commonStyles.contentWrap.paddingY}>
        <HeadBlock title={'About | Youki'} />
        <Heading as="h1" size="2xl">About</Heading>

        <Box pt={commonStyles.innerContentWrap.paddingTop}>
          <Text>Youki</Text>
          <Text>SEをしています。</Text>
          <Text>主にバックエンドの実装やインフラストラクチャの構成を担当しています。</Text>
          <Text>AzureやJavaScriptが好きです。最近、趣味でGolangを始めました。</Text>
        </Box>

        <Box pt={commonStyles.innerContentWrap.paddingTop}>
          <Heading as="h2">Skills</Heading>
          <HStack pt={'12px'} spacing={4}>
            {
              skills.map((skill, _) => {
                return(
                  <GetIcon key={`skill-${skill.name}`} name={skill.name} color={skill.color} />
                )
              })
            }
          </HStack>
        </Box>
      </Box>
    </>
  )
}

const GetIcon = (properties: IconPropertiers) => {
  const iconSize = 'xl'
  const name = properties.name
  const color = properties.color

  switch (name) {
    case "JavaScript":
      return(<JsSquareIcon color={color} size={iconSize} />)
    case "PHP":
      return(<PhpIcon color={color} size={iconSize} />)
    case "Azure":
      return(<AzureIcon color={color} size={iconSize} />)
  }
  return(<></>)
}

export default About