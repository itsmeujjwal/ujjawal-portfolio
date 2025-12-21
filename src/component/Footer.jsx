import { styled } from "@mui/material/styles";
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Container = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '16px',
  margin: '16px',
  gap: '8px',
  textAlign: 'center',
  borderTop: '2px solid white',
  '@media (max-width: 600px)': {
    padding: '12px',
    margin: '12px',
    gap: '6px',
  },
});

const LinkContainer = styled('div')({
  display: 'flex',
  gap: '16px',
  marginTop: '8px',
  flexWrap: 'wrap',
  justifyContent: 'center',
  '@media (max-width: 600px)': {
    gap: '12px',
  },
});

const StyledLink = styled('a')({
  color: '#007BFF',
  textDecoration: 'none',
  fontWeight: 'bold',
  '&:hover': {
    textDecoration: 'underline',
  },
});

function Footer() {
  return (
    <Container>
      <p>© 2024 Ujjawal Kumar Thakur. All rights reserved.</p>
      <LinkContainer>
        <StyledLink href="https://wa.me/9779811210639"><WhatsAppIcon /></StyledLink>
        <StyledLink href="https://www.facebook.com/ujjawalkumar.thakur.56"><FacebookIcon /></StyledLink>
        <StyledLink href="https://www.instagram.com/ujjwal_thakur43?igsh=MXB3aTV1M2JjZ2h4Yg=="><InstagramIcon /></StyledLink>
        <StyledLink href="https://t.me/ujjawalkrthakur"><TelegramIcon /></StyledLink>
        <StyledLink href="https://github.com/itsmeujjwal"><GitHubIcon /></StyledLink>
        <StyledLink href="https://www.linkedin.com/in/ujjawal-kumar-thakur-9107a6325?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><LinkedInIcon /></StyledLink>
      </LinkContainer>
    </Container>
  );
}

export default Footer;

