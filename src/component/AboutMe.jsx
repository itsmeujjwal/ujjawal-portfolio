import { styled } from "@mui/material/styles";



function AboutMe() {
    const handleSubmit = (e) => {
        e.preventDefault();
        const name = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        const subject = 'Contact Form Submission';
        const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
        const mailto = `mailto:thakurujjawal123@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailto;
    };

    return (
        <>

            <Container id="aboutus" style={{}}>
                <div className="Aboutus" style={{
                    width: "100%",

                    boxShadow: "0px 0px 8px red",
                    textAlign: "center",
                    padding: "5px",

                }}>
                    <h1>About Me</h1>
                    <ImgStyle src="/image/ujjawal.jpg" alt="ujjawal" style={{
                        width: "min(250px, 80vw)",
                        height: "min(250px, 80vw)",
                        borderRadius: "50%",
                        padding: "3px",
                        boxShadow: "0px 0px 10px red",
                        cursor: "pointer",
                        animation: "zoomInOu 3s infinite ease-in-out",



                    }} />
                    <p>
                        My name is <span style={{ color: "red" }}>Ujjawal Kumar Thakur</span>, and I am a dedicated FrontEnd Web Developer skilled in creating responsive, user-friendly websites using HTML, CSS, JavaScript, and modern frameworks. I am passionate about delivering seamless user experiences and staying updated with the latest web technologies. 😊
                    </p>

                </div>

                <div className="contactus" id="contact" style={{
                    width: "100%",
                    margin: "2px",
                    boxShadow: "0px 0px 8px red",
                    textAlign: "center",
                    padding: "5px",


                }}>
                    <h1>Contact Us</h1>
                    <ContactForm onSubmit={handleSubmit}>
                        <label htmlFor="username">Name</label>
                        <Input type="text" id="username" placeholder="Name" />

                        <label htmlFor="email">Email</label>
                        <Input type="email" id="email" placeholder="Email" />

                        <label htmlFor="message">Message</label>
                        <TextArea id="message" placeholder="Message" />

                        <SubmitButton type="submit">
                            Submit
                        </SubmitButton>
                    </ContactForm>

                    <div style={{
                        marginTop: "20px",
                        textAlign: "center",
                    }}>
                        <h3>Or Contact Me Directly</h3>
                        <a href="mailto:thakurujjawal123@gmail.com" style={{
                            display: "inline-block",
                            padding: "10px 20px",
                            backgroundColor: "#D44638",
                            color: "#fff",
                            textDecoration: "none",
                            borderRadius: "5px",
                            fontSize: "16px",
                            fontWeight: "bold",
                            boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                            transition: "background-color 0.3s",
                        }}
                        onMouseOver={(e) => e.target.style.backgroundColor = "#B33A2F"}
                        onMouseOut={(e) => e.target.style.backgroundColor = "#D44638"}
                        >
                            📧 Contact via Gmail
                        </a>
                    </div>

                </div>


            </Container >


        </>
    )
}

export default AboutMe;


const Container = styled('div')(({ theme }) => ({
    width: '100%',

    display: 'flex',
    justifyContent: 'space-around',
    padding: '0 15px',
    gap: '15px',
    [theme.breakpoints.down('md')]: {

        flexDirection: "column",
        justifyContent: "center",
        alignItem: "center",
    },

}));

const ImgStyle = styled('img')(({ theme }) => ({

    '&:hover': {
        transform: 'scale(1.1)',
        boxShadow: '2px 4px 10px red',
        transition: "transform 0.8s ease-in-out",
    },
    "@keyframes zoomInOu": {
        "0%": {
            transform: "scale(1)",
        },
        "50%": {
            transform: "scale(1.05)",
        },
        "100%": {
            transform: "scale(1)",
        },
    },

}));

const ContactForm = styled('form')({
    width: '90%',
    maxWidth: '400px',
    margin: '20px auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    '@media (max-width: 600px)': {
        width: '95%',
        gap: '10px',
    },
});

const Input = styled('input')({
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    '&:focus': {
        outline: 'none',
        borderColor: 'blue',
    },
    '@media (max-width: 600px)': {
        fontSize: '14px',
        padding: '8px',
    },
});

const TextArea = styled('textarea')({
    width: '100%',
    height: '100px',
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    resize: 'none',
    '&:focus': {
        outline: 'none',
        borderColor: 'blue',
    },
    '@media (max-width: 600px)': {
        fontSize: '14px',
        padding: '8px',
        height: '80px',
    },
});

const SubmitButton = styled('button')({
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    backgroundColor: 'blue',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    '&:hover': {
        backgroundColor: 'darkblue',
    },
    '@media (max-width: 600px)': {
        fontSize: '14px',
        padding: '8px',
    },
});
