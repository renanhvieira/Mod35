import styled from 'styled-components'

export const Wrapper = styled.div`
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 32px auto;
  padding: 0 16px;
`

export const Box = styled.div`
  background: #fff;
  border-radius: 8px;
  padding: 24px;
`

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 16px;
`

export const Input = styled.input`
  width: 100%;
  margin-bottom: 12px;
  padding: 8px 12px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: ${({ theme }) => theme.fontSizes.small};
`
