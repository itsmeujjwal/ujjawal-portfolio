import { styled } from "@mui/material/styles";

function Hero() {
  return (
    <>
      <Container>
        <Contentsss
          className="left"
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",


          }}
        >
          <h1 >
            Hey, I am <span style={{ color: "red" }}>Ujjawal Kumar Thakur</span><br /> I make responsibe websites.</h1>
        </Contentsss>
        <div
          className="right"
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: 'relative',
            zIndex: 1,
          }}
        >
          <StyledImage src="/image/mine.jpeg" alt="Portrait of Ujjawal" />
        </div>
      </Container>

    </>
  );
}

export default Hero;

const StyledImage = styled("img")({
  width: "400px",
  height: "400px",
  borderRadius: "50%",
  marginTop: "1rem",
  boxShadow: "0px 0px 10px red",
  cursor: "pointer",
  animation: "zoomInOut 3s infinite ease-in-out",

  "@keyframes zoomInOut": {
    "0%": {
      transform: "scale(1)", // Original size
    },
    "50%": {
      transform: "scale(1.05)", // Zoom in
    },
    "100%": {
      transform: "scale(1)", // Back to original size
    },
  },


});

const Container = styled('div')(({ theme }) => ({
  width: "100",
  display: "flex",
  textAlign: "center",
  height: "500px",
  justifyContent: "space-around",
  position: 'relative',
  overflow: 'hidden',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column-reverse',
  },

}));


const Contentsss = styled('div')(({ theme }) => ({
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: 'relative',
  zIndex: 1,



  [theme.breakpoints.down('md')]: {
    fontSize:"9px"
  },

}));
