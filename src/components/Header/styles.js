import styled from 'styled-components'

export const Wrapper = styled.header`
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 16px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
`

export const Container = styled.div`
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  display: flex;
  justify-content: center;
`

export const Logo = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.title};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: bold;
`
