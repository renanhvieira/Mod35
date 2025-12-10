import { Link } from 'react-router-dom'
import { Wrapper, Container, Logo } from './styles'

const Header = () => {
  return (
    <Wrapper>
      <Container>
        <Link to="/">
          <Logo>efood</Logo>
        </Link>
      </Container>
    </Wrapper>
  )
}

export default Header
