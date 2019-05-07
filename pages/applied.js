import React from 'react'
import { Icon, OutlineButton } from '@hackclub/design-system'
import { Title, Lead } from '../components/Content'
import { Section, theme } from '../components/style'

export default () => (
  <Section align="center" maxWidth={32}>
    <Icon glyph="checkmark" size={96} />
    <Title color="white" mb={2}>
      Submitted!
    </Title>
    <Lead maxWidth={24} mx="auto">
      We’ll let you know your status within the next 10 days.
    </Lead>
    <OutlineButton
      bg="snow"
      mt={[4, 5]}
      chevronRight
      target="_blank"
      href="https://hackclub.com/community/"
    >
      Join our chatroom
    </OutlineButton>
    <style jsx global>{`
      #__next {
        display: flex;
        min-height: 100vh;
        align-items: center;
        justify-content: center;
      }
      body {
        background-color: ${theme.colors.green};
        background-image: ${theme.gradient(
          theme.colors.yellow,
          theme.colors.green
        )};
      }
    `}</style>
  </Section>
)
