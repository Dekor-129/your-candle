import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import classes from '../../styles/Navbar.module.css'
import Link from 'next/link'

export default function HeaderReact() {
  return (
    <Navbar className= {classes.navbar } expand="lg">
      <Container>
        <Navbar.Brand>
        <Link href={'/'}>
              <a className = {classes.block}>Главная</a>
            </Link>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">     
            <Link href={'/catalog'}>
              <a className= {classes.block}>Каталог</a>
            </Link>
            <Link href={'/delivery'}>
              <a className= {classes.block}>Доставка</a>
            </Link>
            <Link href={'/about'}>
              <a className= {classes.block}>О нас</a>
            </Link>
            <Link href={'/contacts'}>
              <a className= {classes.block}>Контакты</a>
            </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}