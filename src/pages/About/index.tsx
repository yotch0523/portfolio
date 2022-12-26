import React from 'react'
import {
  Box,
  Heading,
  HStack,
  Text,
} from '@chakra-ui/react'
import {
  SiCsharp,
  SiTypescript,
  SiPhp,
  SiMicrosoftazure,
} from 'react-icons/si'

import HeadBlock from '@/components/Common/HeadBlock'
import { commonStyles } from '@/common/consts/common-styles'
import { Skill } from '@/common/types'
import skillData from '@/data/skills.json'

type IconPropertiers = {
  icon: string;
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
          <Text>1991年生まれ。</Text>
          <Text>SEをしています。</Text>
          <Text>主にバックエンドの実装やインフラストラクチャの構成を担当しています。</Text>
          <Text>AzureやTypeScriptが好きです。最近、趣味でGolangを始めました。</Text>
        </Box>

        <Box pt={commonStyles.innerContentWrap.paddingTop}>
          <Heading as="h2">Skills</Heading>
          <HStack pt={'12px'} spacing={4}>
            {
              skills.map((skill, _) => {
                return(
                  // <Icon name={skill.name} icon={skill.icon} color={skill.color} size={iconSize} />
                  <GetIcon key={`skill-${skill.name}`} icon={skill.icon} color={skill.color} />
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
  const iconSize = 32
  const icon = properties.icon
  const color = properties.color

  switch (icon) {
    case "SiCsharp":
      return(<SiCsharp color={color} size={iconSize} />)
    case "SiTypescript":
      return(<SiTypescript color={color} size={iconSize} />)
    case "SiPhp":
      return(<SiPhp color={color} size={iconSize} />)
    case "SiMicrosoftazure":
      return(<SiMicrosoftazure color={color} size={iconSize} />)
  }
  return(<></>)
}

export default About