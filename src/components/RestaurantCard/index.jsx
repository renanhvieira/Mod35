import { Link } from 'react-router-dom'
import { Card, Image, Content, Title, Description } from './styles'
import { ButtonPrimary } from '../Button'

const RestaurantCard = ({ id, name, description, image }) => {
  return (
    <Card>
      <Image src={image} alt={name} />
      <Content>
        <Title>{name}</Title>
        <Description>{description}</Description>
        <Link to={`/restaurante/${id}`}>
          <ButtonPrimary>Ver mais</ButtonPrimary>
        </Link>
      </Content>
    </Card>
  )
}

export default RestaurantCard
