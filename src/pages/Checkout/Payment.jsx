import { useNavigate } from 'react-router-dom'
import Header from '../../components/Header'
import { ButtonPrimary } from '../../components/Button'
import { Wrapper, Box, Title, Input } from './styles'

const Payment = () => {
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/checkout/confirmacao')
  }

  return (
    <>
      <Header />
      <Wrapper>
        <Box>
          <Title>Pagamento</Title>
          <form onSubmit={handleSubmit}>
            <Input placeholder="Número do cartão" required />
            <Input placeholder="Nome no cartão" required />
            <Input placeholder="Validade (MM/AA)" required />
            <Input placeholder="CVV" required />
            <ButtonPrimary type="submit">Finalizar pagamento</ButtonPrimary>
          </form>
        </Box>
      </Wrapper>
    </>
  )
}

export default Payment
