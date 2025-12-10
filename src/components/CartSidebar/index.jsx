import { useNavigate } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import {
  Overlay,
  Wrapper,
  Title,
  ItemList,
  Item,
  ItemInfo,
  Total,
  Actions
} from './styles'
import { ButtonPrimary, ButtonSecondary } from '../Button'

const CartSidebar = () => {
  const { isOpen, closeCart, items, removeFromCart, total } = useCart()
  const navigate = useNavigate()

  if (!isOpen) return null

  const handleDelivery = () => {
    closeCart()
    navigate('/checkout/entrega')
  }

  return (
    <Overlay onClick={closeCart}>
      <Wrapper onClick={(e) => e.stopPropagation()}>
        <Title>Seu carrinho</Title>
        <ItemList>
          {items.length === 0 && <p>Carrinho vazio.</p>}
          {items.map((item) => (
            <Item key={item.id}>
              <ItemInfo>
                <strong>{item.name}</strong>
                <br />
                Qtd: {item.quantity}
              </ItemInfo>
              <div>
                <p>R$ {(item.price * item.quantity).toFixed(2)}</p>
                <button type="button" onClick={() => removeFromCart(item.id)}>remover</button>
              </div>
            </Item>
          ))}
        </ItemList>
        <Total>Total: R$ {total.toFixed(2)}</Total>
        <Actions>
          <ButtonPrimary
            type="button"
            onClick={handleDelivery}
            disabled={items.length === 0}
          >
            Continuar com a entrega
          </ButtonPrimary>
          <ButtonSecondary type="button" onClick={closeCart}>
            Fechar
          </ButtonSecondary>
        </Actions>
      </Wrapper>
    </Overlay>
  )
}

export default CartSidebar
