import styled from 'styled-components'

export const Card = styled.article`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.textLight};
  border-radius: 8px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const Image = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: 4px;
`

export const Title = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.big};
`

export const Description = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.small};
`
