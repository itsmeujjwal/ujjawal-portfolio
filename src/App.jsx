
import AboutMe from "./component/AboutMe"
import Footer from "./component/Footer"
import Header from "./component/Header"
import Hero from "./component/Hero"
import Mywork from "./component/Mywrok"


import Skills from "./component/Skills"
import { styled } from "@mui/material/styles";

const BubblesBackground = () => {
  const bubbles = Array.from({ length: 30 }, (_, i) => (
    <Bubble key={i} style={{
      left: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 10}s`,
      animationDuration: `${8 + Math.random() * 7}s`,
    }} />
  ));

  return <BubbleContainer>{bubbles}</BubbleContainer>;
};

function App() {
  return (
    <>
      <AppWrapper>
        <BubblesBackground />
        <Header/>
        <Hero/>
        <Mywork/>
        <Skills/>
        <AboutMe/>
        <Footer/>
      </AppWrapper>
    </>
  )
}

export default App

const AppWrapper = styled('div')({
  position: 'relative',
  minHeight: '100vh',
  overflow: 'hidden',
});

const BubbleContainer = styled('div')({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  overflow: 'hidden',
  pointerEvents: 'none',
  zIndex: 0,
});

const Bubble = styled('div')({
  position: 'absolute',
  bottom: '-100px',
  width: '25px',
  height: '25px',
  backgroundColor: 'rgba(45, 212, 191, 0.3)',
  borderRadius: '50%',
  animation: 'floatUp 15s infinite linear',
  '@keyframes floatUp': {
    '0%': {
      transform: 'translateY(0) scale(1)',
      opacity: 0.3,
    },
    '50%': {
      opacity: 0.5,
    },
    '100%': {
      transform: 'translateY(-100vh) scale(1.3)',
      opacity: 0,
    },
  },
});
