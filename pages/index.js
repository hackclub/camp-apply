import React from 'react'
import { Box, Container, Text, Link } from '@hackclub/design-system'
import { ColoredTitle } from '../components/Content'
import { theme } from '../components/style'

export default () => (
  <Container maxWidth={32} py={[5, 6]} px={3}>
    <Box align="center">
      <ColoredTitle
        colors={[theme.colors.primary, theme.colors.yellow, theme.colors.green]}
      >
        Hack Camp
      </ColoredTitle>
      <Text color={theme.colors.red} bold fontSize={[4, 5]}>
        Applications are now&nbsp;closed!
      </Text>
      <Text color="muted" mt={[1, 2]}>
        For questions, reach&nbsp;out to{' '}
        <Text.span color="blue">
          <a href="mailto:camp@hackclub.com">camp@hackclub.com</a>
        </Text.span>
      </Text>
    </Box>
  </Container>
)
