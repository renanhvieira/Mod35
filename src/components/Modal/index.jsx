import { Overlay, Box, Image, Info, Title, Description, Price, Actions } from './styles'
import { ButtonPrimary, ButtonSecondary } from '../Button'
import { useCart } from '../../context/CartContext'

const DishModal = ({ dish, onClose }) => {
  const { addToCart } = useCart()

  if (!dish) return null

  const handleAdd = () => {
    addToCart(dish)
    onClose()
  }

  return (
    <Overlay onClick={onClose}>
      <Box onClick={(e) => e.stopPropagation()}>
        <Image src={dish.image} alt={dish.name} />
        <Info>
          <Title>{dish.name}</Title>
          <Description>{dish.description}</Description>
          <Price>R$ {dish.price.toFixed(2)}</Price>
          <Actions>
            <ButtonPrimary type="button" onClick={handleAdd}>
              Adicionar ao carrinho
            </ButtonPrimary>
            <ButtonSecondary type="button" onClick={onClose}>
              Cancelar
            </ButtonSecondary>
          </Actions>
        </Info>
      </Box>
    </Overlay>
  )
}

export default DishModal
