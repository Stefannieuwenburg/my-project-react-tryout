import { ThemeProvider } from "styled-components";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Header from "./components/header/Header";
import { Container } from "./components/styles/Container.styled"
import { GlobalStyles } from "./components/styles/Global";
const theme = {
  colors: {
    header: '#ebfbff',
    body: 'pink',
    footer:'#00333',
  }
}
export default function App() {
  return (
      <ThemeProvider theme = {theme}>
      <>
        <GlobalStyles/>
            <Navbar />
            <Header />
            <Home />
            <Container>
                <h1>hello World</h1>
                <ul>
                    <lo>Learn React</lo>
                    <lo> practice more</lo>
                </ul>
            </Container>
        </>
    </ThemeProvider>
    );
}
