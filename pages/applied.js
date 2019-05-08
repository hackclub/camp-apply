import React from 'react'
import { Container, Icon, OutlineButton } from '@hackclub/design-system'
import { Title, Lead } from '../components/Content'
import { theme } from '../components/style'

export default () => (
  <Container align="center" maxWidth={32} px={3} py={4}>
    <Icon glyph="checkmark" size={96} />
    <Title color="white" mb={2}>
      Submitted!
    </Title>
    <Lead maxWidth={24} mx="auto">
      We’ll let you know your status within the next 10 days.
    </Lead>
    <OutlineButton
      bg={theme.colors.snow}
      color={theme.colors.green}
      mt={[4, 5]}
      chevronRight
      target="_blank"
      href="https://hackclub.com/community/"
    >
      Join our community
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
  </Container>
)
