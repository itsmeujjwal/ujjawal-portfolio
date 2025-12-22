import { useState } from "react";
import { styled } from "@mui/material";
import { useTransition } from "react";

const workList = [
  {
    img: "/image/port.png",
    title: "Blog Application",
    par: "I created the blog application by using html,css,javascript and react for front end. MongoDB for the backend",
  },
  {
    img: "/image/code.png",
    title: "Coding Website",
    par: "It is the coding work for the different projects",
  },
  {
    img: "/image/kri.png",
    title: "Library Management System",
    par: "It is the library management system for managing the books in the library of any institution",
  },
  {
    img: "/image/page.png",
    title: "Project Structure",
    par: "It is the structure of any project selected randomly",
  },
  {
    img: "/image/ss.png",
    title: "Currency Converter",
    par: "It is the currency converter project which converts one currency to another currency",
  },
 
];

function MyWork() {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = 4; // Number of projects to show initially

  const toggleShowMore = () => {
    setShowAll((prev) => !prev);
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }} id="mywork">My Work</h1>
      <ContainerStyle  className="container">
        {workList
          .slice(0, showAll ? workList.length : visibleProjects)
          .map((work, index) => (
            <WorkCard key={index}>
              <img src={work.img} alt={work.title} />
              <h5>{work.title}</h5>
              <p>{work.par}</p>
            </WorkCard>
          ))}
      </ContainerStyle>
      <ButtonStyle onClick={toggleShowMore}>
        {showAll ? "Show Less" : "Show More"}
      </ButtonStyle>
    </>
  );
}

export default MyWork;

const ContainerStyle = styled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: "2rem",
  padding: "40px",
  width: "100%",
  [theme.breakpoints.down("lg")]: {
    gridTemplateColumns: "repeat(2, 1fr)",
  },
  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "1fr",
  },
}));

const WorkCard = styled("div")(() => ({
  textAlign: "center",
  padding: "10px",
  boxShadow: "0px 0px 10px red",
  borderRadius: "8px",
  overflow: "hidden",
  position: "relative", // Ensures the image stays within the card
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  "&:hover": {
    transform: "translateY(-10px)",
    boxShadow: "0px 10px 20px rgba(255, 0, 0, 0.5)",
  },
  img: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderRadius: "8px 8px 0 0",
    animation: "zoomInOut 3s infinite ease-in-out", // Apply infinite animation
  },
  h5: {
    margin: "10px 0",
    fontSize: "1.2rem",
    fontWeight: "bold",
  },
  p: {
    fontSize: "1rem",
    color: "#555",
  },
  "@keyframes zoomInOut": {
    "0%": {
      transform: "scale(1)", // Original size
    },
    "50%": {
      transform: "scale(1.2)", // Zoom in
    },
    "100%": {
      transform: "scale(1)", // Back to original size
    },
  },
}));


const ButtonStyle = styled("button")(() => ({
  display: "block",
  margin: "20px auto",
  padding: "10px 20px",
  fontSize: "1rem",
  fontWeight: "bold",
  color: "#fff",
  background: "red",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  "&:hover": {
    background: "darkred",
  },
}));










































// import { styled } from "@mui/material";  


// function Mywrok() {
//     return (
//       <>
//       <h1 style={{textAlign:"center"}}>My work</h1>
//        <ConainerStyle className="container">
//         <div style={{textAlign:"center", padding:"5px", boxShadow:"0px 0px 10px red"}}><img src="#"/> <h5>Project title</h5> <p>Lorem ipsum dolor sit amet consectetur</p></div>
//         <div style={{textAlign:"center", padding:"5px", boxShadow:"0px 0px 10px red"}}><img src="#"/> <h5>Project title</h5> <p>Lorem ipsum dolor sit amet consectetur</p></div>
//         <div style={{textAlign:"center", padding:"5px", boxShadow:"0px 0px 10px red"}}><img src="#"/> <h5>Project title</h5> <p>Lorem ipsum dolor sit amet consectetur</p></div>
//         <div style={{textAlign:"center", padding:"5px", boxShadow:"0px 0px 10px red"}}><img src="#"/> <h5>Project title</h5> <p>Lorem ipsum dolor sit amet consectetur</p></div>
//         <div style={{textAlign:"center", padding:"5px", boxShadow:"0px 0px 10px red"}}><img src="#"/> <h5>Project title</h5> <p>Lorem ipsum dolor sit amet consectetur</p></div>
//         <div style={{textAlign:"center", padding:"5px", boxShadow:"0px 0px 10px red"}}><img src="#"/> <h5>Project title</h5> <p>Lorem ipsum dolor sit amet consectetur</p></div>
//         <div style={{textAlign:"center", padding:"5px", boxShadow:"0px 0px 10px red"}}><img src="#"/> <h5>Project title</h5> <p>Lorem ipsum dolor sit amet consectetur</p></div>
//         <div style={{textAlign:"center", padding:"5px", boxShadow:"0px 0px 10px red"}}><img src="#"/> <h5>Project title</h5> <p>Lorem ipsum dolor sit amet consectetur</p></div>
//        </ConainerStyle>
//       </>
//     )
//   }
  
//   export default Mywrok ;


// const ConainerStyle = styled("div")(({theme})=>({
//     display:"grid",
//     gridTemplateColumns: "auto auto auto auto",
//     justifyContent:"space-around",
//     gap:"2rem",
//     paddingTop:"10px",
//     width:"100%",
//     [theme.breakpoints.down('lg')]: {
//         gridTemplateColumns:"auto auto",
//     },
//     [theme.breakpoints.down('sm')]: {
//         gridTemplateColumns:"auto",
//     },
// }));