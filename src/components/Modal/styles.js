import styled from 'styled-components'

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: ${({ theme }) => theme.colors.overlay};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 20;
`

export const Box = styled.div`
  background: ${({ theme }) => theme.colors.secondary};
  padding: 24px;
  border-radius: 8px;
  width: 600px;
  display: flex;
  gap: 16px;
`

export const Image = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 4px;
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const Title = styled.h3`
  color: ${({ theme }) => theme.colors.primary};
`

export const Description = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.small};
`

export const Price = styled.p`
  font-weight: bold;
`

export const Actions = styled.div`
  margin-top: auto;
  display: flex;
  gap: 8px;
`
