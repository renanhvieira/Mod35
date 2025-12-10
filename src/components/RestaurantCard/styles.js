import styled from 'styled-components'

export const Card = styled.article`
  background: #fff;
  border: 1px solid ${({ theme }) => theme.colors.borderLight};
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`

export const Image = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`

export const Content = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const Title = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.big};
  color: ${({ theme }) => theme.colors.primary};
`

export const Description = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.textDark};
`
