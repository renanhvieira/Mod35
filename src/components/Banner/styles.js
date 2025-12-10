import styled from 'styled-components'

export const Wrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 40px 0;
`

export const Container = styled.div`
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  text-align: center;
`

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 24px;
  margin-bottom: 8px;
`

export const Subtitle = styled.p`
  font-size: 16px;
`
