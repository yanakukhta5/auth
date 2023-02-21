import styled from '@emotion/styled'

import { secondary } from '@/variables/colors'
import { Row } from '@/components/Row'

export const Header = styled.header`
  width: 100%;
  padding: 20px 0;
`

export const Logo = styled.img`
  width: auto;
  height: 60px;
`

export const Link = styled.a`
  color: ${secondary};
`

export const Links = styled(Row)`
  width: clamp(100px, 50%, 600px);
  justify-content: space-between;
`
