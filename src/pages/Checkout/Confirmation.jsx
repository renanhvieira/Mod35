import { useNavigate } from 'react-router-dom'
import Header from '../../components/Header'
import { ButtonPrimary } from '../../components/Button'
import { Wrapper, Box, Title } from './styles'
import { useCart } from '../../context/CartContext'

const Confirmation = () => {
  const navigate = useNavigate()
  const { clearCart } = useCart()

  const handleFinish = () => {
    clearCart()
    navigate('/')
  }

  return (
    <>
      <Header />
      <Wrapper>
        <Box>
          <Title>Pedido confirmado!</Title>
          <p>
            Em breve você receberá a confirmação do pedido no seu e-mail e a
            entrega será iniciada.
          </p>
          <br />
          <ButtonPrimary type="button" onClick={handleFinish}>
            Voltar à Home
          </ButtonPrimary>
        </Box>
      </Wrapper>
    </>
  )
}

export default Confirmation
