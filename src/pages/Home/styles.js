import styled from 'styled-components'

export const Container = styled.div`
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 32px auto;
  padding: 0 16px;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 16px;
`
