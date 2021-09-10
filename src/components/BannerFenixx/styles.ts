import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  ${media.greaterThan('medium')`
    box-shadow: 0 0.4rem 0.5rem 0 rgba(0, 0, 0, 0.2);
  `}
`

export const ImageWrapper = styled.div`
  img {
    ${({ theme }) => css`
      width: 100%;
      height: 30rem;
      background-color: ${theme.colors.lightGray};
    `}
  }
`

export const Caption = styled.div`
  ${({ theme }) => css`
    ${media.greaterThan('medium')`
      text-align: center;
      border-radius: 0 0 ${theme.border.radius} ${theme.border.radius};
      width: 100%;
      background-color: transparent;
      padding-top: ${theme.spacings.large};
    `}
  `}
`
export const Title = styled.h2`
  ${({ theme }) => css`
    ${media.greaterThan('medium')`
      font-weight: ${theme.font.bold};
      color: ${theme.colors.black};
      font-size: ${theme.font.sizes.xxlarge};
    `}
  `}
`
export const Subtitle = styled.h3`
  ${({ theme }) => css`
    ${media.greaterThan('medium')`
      color: ${theme.colors.black};
      font-size: ${theme.font.sizes.small};
      font-weight: ${theme.font.normal};
      margin-bottom: ${theme.spacings.xsmall};
      font-size: ${theme.font.sizes.large};
      margin-top: ${theme.spacings.xsmall}
    `}
  `}
`
