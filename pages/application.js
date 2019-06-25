import React from 'react'
import { Box, Container, Text } from '@hackclub/design-system'
import { ColoredTitle } from '../components/Content'
import { theme } from '../components/style'
import ApplyForm from '../components/ApplyForm'

export default () => (
  <Container maxWidth={32} py={[5, 6]} px={3}>
    <Box align="center">
      <Text.span color="muted" bold caps fontSize={[4, 5]}>
        Apply to
      </Text.span>{' '}
      <ColoredTitle
        colors={[theme.colors.primary, theme.colors.yellow, theme.colors.green]}
      >
        Hack Camp
      </ColoredTitle>
    </Box>
    <ApplyForm />
  </Container>
)
