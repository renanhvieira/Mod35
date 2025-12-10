import { useParams } from 'react-router-dom'
import { useState } from 'react'

import Header from '../../components/Header'
import Banner from '../../components/Banner'
import DishCard from '../../components/DishCard'
import DishModal from '../../components/Modal'
import restaurants from '../../mocks/restaurants'
import { Container, Grid } from './styles'

const Restaurant = () => {
  const { id } = useParams()
  const restaurant = restaurants.find((r) => r.id === Number(id))
  const [selectedDish, setSelectedDish] = useState(null)

  if (!restaurant) return <p>Restaurante não encontrado</p>

  return (
    <>
      <Header />
      <Banner title={restaurant.name} subtitle={restaurant.description} />
      <Container>
        <Grid>
          {restaurant.dishes.map((dish) => (
            <DishCard
              key={dish.id}
              dish={dish}
              onOpenModal={setSelectedDish}
            />
          ))}
        </Grid>
      </Container>
      {selectedDish && (
        <DishModal dish={selectedDish} onClose={() => setSelectedDish(null)} />
      )}
    </>
  )
}

export default Restaurant
