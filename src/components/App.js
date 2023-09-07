import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ThemeProvider, styled } from "styled-components";
import HexesContainer from "./HexesContainer";
import ScoreContainer from "./ScoreContainer";
import WordBar from "./WordBar";
import SubmitButton from "./SubmitButton";
import Heading from "./Heading";
import ErrorPopup from "./ErrorPopup";
import { updateIsHorizontal } from "../redux/appSlice";
import { removeLastLetter, submitWord, wordTooShort } from "../redux/wordSlice";
import { current } from "@reduxjs/toolkit";

const theme = {
  dark: "#140001",
  light: "#CDD3E0",
  primary: "#F3C33F",
  secondary: "#564110",
  success: "#7CB441",
  successAlt: "#6ca62e",
  warning: "#FF7247",
  failure: "#FF4747",
  info: "#009FB7"
}

const StyledApp = styled.div`
  background-color: ${props => props.theme.dark};
  color: ${props => props.theme.primary};
  min-height: 100vh;
  margin: auto;
  padding: 2em;
`

const StyledFlexContainer = styled.div`
  display: flex;
  min-width: 100%;
  flex-direction: ${props => props.$horizontal ? 'row' : 'column'};
  justify-content: center;
  text-align: center;
`

const StyledControls = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-width: 50vw;
`

function App() {
  const dispatch = useDispatch()
  const isHorizontal = useSelector(state => state.app.isHorizontal)
  const currentWord = useSelector(state => state.word.currentWord)

  useEffect(() => {
    const handleResize = () => dispatch(updateIsHorizontal())
    const handleBackspace = (e) => {
      if (e.key === 'Backspace' || e.key === 'Delete') {
        dispatch(removeLastLetter())
      }
      if (e.key === 'Enter') {
        if (currentWord && currentWord.length > 2) {
            dispatch(submitWord(currentWord))
        } else {
            dispatch(wordTooShort())
        }
      }
    }
    window.addEventListener('keydown', handleBackspace)
    window.addEventListener('resize', handleResize)
    handleResize()
  
    return () => {
      window.removeEventListener('keydown', handleBackspace)
      window.removeEventListener('resize', handleResize)
    };
  }, [dispatch, currentWord])

  return (
    <ThemeProvider theme={theme}>
      <StyledApp>
        <StyledFlexContainer $horizontal={isHorizontal}>
          { !isHorizontal && <Heading /> }
          { !isHorizontal && <ScoreContainer /> }
          <HexesContainer />
          { isHorizontal &&
            <StyledControls>
              <Heading />
              <ScoreContainer />
              <WordBar />
              <SubmitButton />
              <ErrorPopup />
            </StyledControls>
          }
          { !isHorizontal && <WordBar /> }
          { !isHorizontal && <SubmitButton /> }
          { !isHorizontal && <ErrorPopup /> }
        </StyledFlexContainer>
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
