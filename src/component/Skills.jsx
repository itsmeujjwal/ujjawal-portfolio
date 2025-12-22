import { styled } from '@mui/material/styles';
import CircularProgress from '@mui/material/CircularProgress';

const skillsData = {
    Frontend: [
        { name: 'HTML', level: 95 },
        { name: 'CSS', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'React.js', level: 80 },
    ],
    Backend: [
        { name: 'Node.js', level: 75 },
        { name: 'Python', level: 70 },
        { name: 'MongoDB', level: 65 },
        { name: 'SQL', level: 60 },
    ],
    Tools: [
        { name: 'Git', level: 90 },
        { name: 'AWS', level: 55 },
        { name: 'Figma', level: 70 },
    ],
    Languages: [
        { name: 'C++', level: 80 },
        { name: 'Java', level: 75 },
        { name: 'Python', level: 85 },
    ],
};

function Skills() {
    return (
        <div style={{padding:"0 10px",
            width:"100%",
            height: 'fit-content',
        }}>
            <Header id='myskill'>Skills</Header>
            <div className="container" >
                {Object.keys(skillsData).map(category => (
                    <CategorySection key={category}>
                        <CategoryTitle>{category}</CategoryTitle>
                        <SkillsContainer>
                            {skillsData[category].map((skill, index) => (
                                <SkillItem key={index}>
                                    <CircularProgress variant="determinate" value={skill.level} size={80} thickness={5} sx={{ color: '#1976d2', marginBottom: '10px' }} />
                                    <h4 style={{ margin: '0 0 5px 0', fontSize: '16px', textAlign: 'center' }}>{skill.name}</h4>
                                    <span>{skill.level}%</span>
                                </SkillItem>
                            ))}
                        </SkillsContainer>
                    </CategorySection>
                ))}
            </div>
        </div>
    );
}

export default Skills;

const Header = styled('h1')({
    display: 'flex',
    justifyContent: 'center',
   
   

    
});

const SkillsContainer = styled('div')({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',
    padding: '20px 0px',
    perspective: '1000px',
});

const CategorySection = styled('div')({
    marginBottom: '40px',
});

const CategoryTitle = styled('h3')({
    textAlign: 'center',
    color: 'white',
    marginBottom: '20px',
    fontSize: '24px',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    textShadow: '0 2px 4px rgba(0,0,0,0.5)',
});

const SkillItem = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '150px',
    padding: '20px',
    color: 'white',
    transition: 'transform 0.3s ease',
    '&:hover': {
        transform: 'scale(1.05)',
    },
});
