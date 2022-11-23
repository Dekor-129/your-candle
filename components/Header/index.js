import { Container } from "react-bootstrap";
import MyAlert from "../MyAlert";
import HeaderReact from "./HeaderReact";
import HeaderTop from "./HeaderTop";


export default function index() {
  return (
    <header>
      <Container>
        <HeaderTop />  
      </Container>
      <HeaderReact />
      <MyAlert />
    </header>
  )
}
