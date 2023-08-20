import { ThemeProvider, styled } from "styled-components";
import HexesContainer from "./components/HexesContainer";
import ScoreContainer from "./components/ScoreContainer";
import WordBar from "./components/WordBar";
import SubmitButton from "./components/SubmitButton";
import Heading from "./components/Heading";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateIsHorizontal } from "./redux/appSlice";

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
  flex-direction: ${props => props.horizontal ? 'row' : 'column'};
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
  const dispatch = useDispatch()
  const isHorizontal = useSelector(state => state.app.isHorizontal)

  useEffect(() => {
    const handleResize = () => dispatch(updateIsHorizontal())
    window.addEventListener('resize', handleResize)
    handleResize()
  
    return () => {
      window.removeEventListener('resize', handleResize)
    };
  }, [dispatch])

  return (
    <ThemeProvider theme={theme}>
      <StyledApp>
        <StyledFlexContainer horizontal={isHorizontal}>
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
