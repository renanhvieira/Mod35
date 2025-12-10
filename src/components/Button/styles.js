import styled from 'styled-components'

export const BaseButton = styled.button`
  padding: 8px 16px;
  border-radius: 4px;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSizes.small};
  text-transform: uppercase;
  transition: opacity 0.2s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`

export const PrimaryButton = styled(BaseButton)`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.textLight};
`

export const SecondaryButton = styled(BaseButton)`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.primary};
`
