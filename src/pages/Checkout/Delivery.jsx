import { useNavigate } from 'react-router-dom'
import Header from '../../components/Header'
import { ButtonPrimary } from '../../components/Button'
import { Wrapper, Box, Title, Input } from './styles'

const Delivery = () => {
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/checkout/pagamento')
  }

  return (
    <>
      <Header />
      <Wrapper>
        <Box>
          <Title>Entrega</Title>
          <form onSubmit={handleSubmit}>
            <Input placeholder="Nome completo" required />
            <Input placeholder="Endereço" required />
            <Input placeholder="Cidade" required />
            <Input placeholder="CEP" required />
            <ButtonPrimary type="submit">Continuar com pagamento</ButtonPrimary>
          </form>
        </Box>
      </Wrapper>
    </>
  )
}

export default Delivery
