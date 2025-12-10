import styled from 'styled-components'

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: ${({ theme }) => theme.colors.overlay};
  display: flex;
  justify-content: flex-end;
  z-index: 15;
`

export const Wrapper = styled.aside`
  width: 320px;
  height: 100vh;
  background: ${({ theme }) => theme.colors.secondary};
  padding: 16px;
  border-left: 2px solid ${({ theme }) => theme.colors.primary};
  display: flex;
  flex-direction: column;
`

export const Title = styled.h3`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 16px;
`

export const ItemList = styled.div`
  flex: 1;
  overflow-y: auto;
`

export const Item = styled.div`
  background: #fff;
  border-radius: 4px;
  padding: 8px;
  margin-bottom: 8px;
  display: flex;
  justify-content: space-between;
  gap: 8px;
`

export const ItemInfo = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.xsmall};
`

export const Total = styled.p`
  margin-top: 16px;
  font-weight: bold;
`

export const Actions = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`
