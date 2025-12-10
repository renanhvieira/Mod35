import { Wrapper, Container, Title, Subtitle } from './styles'

const Banner = ({ title, subtitle }) => {
  return (
    <Wrapper>
      <Container>
        {title && <Title>{title}</Title>}
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
      </Container>
    </Wrapper>
  )
}

export default Banner
