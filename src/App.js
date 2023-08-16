import { ThemeProvider, styled } from "styled-components";
import HexesContainer from "./components/HexesContainer";

const theme = {
  dark: "#140001",
  light: "#CDD3E0",
  primary: "#F3C33F",
  secondary: "#564110",
  success: "#7CB441",
  warning: "#FF7247",
  failure: "#FF4747",
  info: "#009FB7"
}

const StyledApp = styled.div`
  background-color: ${props => props.theme.dark};
  color: ${props => props.theme.primary};
  min-height: 100vh;
  margin: auto;
	--wrp: 75vw;
	width: var(--wrp);
`

function App() {
  return (
    <ThemeProvider theme={theme}>
      <StyledApp>
        <HexesContainer />
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
