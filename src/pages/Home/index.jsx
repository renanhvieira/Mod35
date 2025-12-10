import Header from '../../components/Header'
import Banner from '../../components/Banner'
import RestaurantCard from '../../components/RestaurantCard'
import { Container, Grid } from './styles'
import restaurants from '../../mocks/restaurants'

const Home = () => {
  return (
    <>
      <Header />
      <Banner
        title="Viva experiências gastronômicas"
        subtitle="no conforto da sua casa"
      />
      <Container>
        <Grid>
          {restaurants.map((rest) => (
            <RestaurantCard key={rest.id} {...rest} />
          ))}
        </Grid>
      </Container>
    </>
  )
}

export default Home
