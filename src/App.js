import { ThemeProvider, styled } from "styled-components";
import HexesContainer from "./components/HexesContainer";
import ScoreContainer from "./components/ScoreContainer";
import WordBar from "./components/WordBar";
import SubmitButton from "./components/SubmitButton";
import Heading from "./components/Heading";
import { useEffect, useState } from "react";

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
	width: 100%;
`

const StyledFlexContainer = styled.div`
  display: flex;
  min-width: 100%;
  flex-direction: ${props => props.isHorizontal ? 'row' : 'column'};
  justify-content: center;
`

const StyledControls = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px;
  min-width: 30vw;
`

function App() {
  const [isHorizontal, setIsHorizontal] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsHorizontal(window.innerHeight < window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
    handleResize()
  
    return () => {
      window.removeEventListener('resize', handleResize)
    };
  }, [setIsHorizontal])

  return (
    <ThemeProvider theme={theme}>
      <StyledApp>
        <StyledFlexContainer isHorizontal={isHorizontal}>
          { !isHorizontal && <Heading /> }
          { !isHorizontal && <ScoreContainer /> }
          <HexesContainer />
          { isHorizontal &&
            <StyledControls>
              <Heading />
              <ScoreContainer />
              <WordBar />
              <SubmitButton />
            </StyledControls>
          }
          { !isHorizontal && <WordBar /> }
          { !isHorizontal && <SubmitButton /> }
        </StyledFlexContainer>
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
