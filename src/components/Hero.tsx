import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeroSection = styled.section`
  background: var(--bg-dark-gradient);
  position: relative;
  padding: 8rem 0 6rem;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 30%, rgba(67, 97, 238, 0.15) 0%, transparent 50%),
      radial-gradient(circle at 80% 70%, rgba(247, 37, 133, 0.15) 0%, transparent 50%);
    z-index: 0;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url('/images/hero-bg.jpg');
    background-size: cover;
    background-position: center;
    opacity: 0.15;
    z-index: -1;
  }
  
  @media (max-width: 768px) {
    padding: 6rem 0 4rem;
  }
`;

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  z-index: 1;
`;

const HeroTitle = styled.h1`
  font-size: 3.75rem;
  font-weight: 700;
  margin-bottom: 1.75rem;
  max-width: 800px;
  line-height: 1.2;
  background: var(--bg-gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
  
  @media (max-width: 768px) {
    font-size: 2.75rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2.5rem;
  max-width: 650px;
  line-height: 1.6;
  color: var(--gray-300);
  
  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1.25rem;
  
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const PrimaryButton = styled(Link)`
  background: var(--bg-gradient-primary);
  color: white;
  font-weight: 600;
  padding: 1rem 2.5rem;
  border-radius: 6px;
  text-decoration: none;
  transition: all 0.3s;
  font-size: 1.1rem;
  box-shadow: 0 4px 15px rgba(67, 97, 238, 0.3);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(67, 97, 238, 0.4);
    text-decoration: none;
    color: white;
  }
`;

const SecondaryButton = styled(Link)`
  background-color: transparent;
  color: white;
  font-weight: 600;
  padding: 0.95rem 2.5rem;
  border-radius: 6px;
  text-decoration: none;
  transition: all 0.3s;
  font-size: 1.1rem;
  border: 2px solid rgba(255, 255, 255, 0.3);
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    transform: translateY(-3px);
    border-color: rgba(255, 255, 255, 0.5);
    text-decoration: none;
    color: white;
  }
`;

// Abstract shapes for visual interest
const Shape1 = styled.div`
  position: absolute;
  width: 450px;
  height: 450px;
  border-radius: 50%;
  background: linear-gradient(45deg, rgba(67, 97, 238, 0.15), rgba(72, 149, 239, 0.05));
  top: -100px;
  right: -150px;
  z-index: 0;
  filter: blur(30px);
`;

const Shape2 = styled.div`
  position: absolute;
  width: 350px;
  height: 350px;
  border-radius: 50%;
  background: linear-gradient(45deg, rgba(247, 37, 133, 0.15), rgba(114, 9, 183, 0.05));
  bottom: -150px;
  left: -100px;
  z-index: 0;
  filter: blur(30px);
`;

interface HeroProps {
  title: string;
  subtitle: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText: string;
  secondaryButtonLink: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink
}) => {
  return (
    <HeroSection>
      <Shape1 />
      <Shape2 />
      <HeroContent>
        <HeroTitle>{title}</HeroTitle>
        <HeroSubtitle>{subtitle}</HeroSubtitle>
        <ButtonContainer>
          <PrimaryButton to={primaryButtonLink}>{primaryButtonText}</PrimaryButton>
          <SecondaryButton to={secondaryButtonLink}>{secondaryButtonText}</SecondaryButton>
        </ButtonContainer>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;
