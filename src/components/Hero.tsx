import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeroSection = styled.section`
  background: linear-gradient(rgba(0, 86, 179, 0.9), rgba(0, 68, 148, 0.8)), url('/images/hero-bg.jpg') center/cover no-repeat;
  color: white;
  padding: 6rem 0;
  position: relative;
  
  @media (max-width: 768px) {
    padding: 4rem 0;
  }
`;

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  max-width: 800px;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  max-width: 600px;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const PrimaryButton = styled(Link)`
  background-color: white;
  color: var(--primary);
  font-weight: 600;
  padding: 0.8rem 2rem;
  border-radius: 4px;
  text-decoration: none;
  transition: all 0.3s;
  font-size: 1.1rem;
  
  &:hover {
    background-color: var(--gray-200);
    transform: translateY(-2px);
    text-decoration: none;
  }
`;

const SecondaryButton = styled(Link)`
  background-color: transparent;
  color: white;
  font-weight: 600;
  padding: 0.8rem 2rem;
  border-radius: 4px;
  text-decoration: none;
  transition: all 0.3s;
  font-size: 1.1rem;
  border: 2px solid white;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    transform: translateY(-2px);
    text-decoration: none;
  }
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
