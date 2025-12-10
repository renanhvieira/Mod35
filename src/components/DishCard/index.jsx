import { Card, Image, Title, Description } from './styles'
import { ButtonSecondary } from '../Button'

const DishCard = ({ dish, onOpenModal }) => {
  return (
    <Card>
      <Image src={dish.image} alt={dish.name} />
      <Title>{dish.name}</Title>
      <Description>{dish.description}</Description>
      <ButtonSecondary onClick={() => onOpenModal(dish)}>
        Mais detalhes
      </ButtonSecondary>
    </Card>
  )
}

export default DishCard
