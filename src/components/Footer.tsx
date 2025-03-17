import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FooterContainer = styled.footer`
  background: var(--bg-dark-gradient);
  color: var(--light);
  padding: 5rem 1.5rem 3rem;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 10% 10%, rgba(67, 97, 238, 0.05) 0%, transparent 30%),
      radial-gradient(circle at 90% 90%, rgba(247, 37, 133, 0.05) 0%, transparent 30%);
    z-index: 0;
  }
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3rem;
  position: relative;
  z-index: 1;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterTitle = styled.h4`
  font-size: 1.3rem;
  margin-bottom: 1.75rem;
  color: white;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    width: 30px;
    height: 3px;
    background: var(--bg-gradient-primary);
    bottom: -10px;
    left: 0;
    border-radius: 1.5px;
  }
`;

const FooterLink = styled(Link)`
  color: var(--gray-400);
  margin-bottom: 1rem;
  text-decoration: none;
  transition: all 0.3s;
  position: relative;
  display: inline-block;
  
  &::before {
    content: '';
    position: absolute;
    width: 0;
    height: 1px;
    bottom: -2px;
    left: 0;
    background: var(--bg-gradient-primary);
    transition: width 0.3s;
  }
  
  &:hover {
    color: white;
    text-decoration: none;
    transform: translateX(3px);
    
    &::before {
      width: 100%;
    }
  }
`;

const ExternalLink = styled.a`
  color: var(--gray-400);
  margin-bottom: 1rem;
  text-decoration: none;
  transition: all 0.3s;
  position: relative;
  display: inline-block;
  
  &::before {
    content: '';
    position: absolute;
    width: 0;
    height: 1px;
    bottom: -2px;
    left: 0;
    background: var(--bg-gradient-primary);
    transition: width 0.3s;
  }
  
  &:hover {
    color: white;
    text-decoration: none;
    transform: translateX(3px);
    
    &::before {
      width: 100%;
    }
  }
`;

const Copyright = styled.div`
  max-width: 1200px;
  margin: 3rem auto 0;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
  color: var(--gray-500);
  font-size: 0.95rem;
  position: relative;
  z-index: 1;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterColumn>
          <FooterTitle>AI Cloud Services</FooterTitle>
          <FooterLink to="/">Home</FooterLink>
          <FooterLink to="/about">About Us</FooterLink>
          <FooterLink to="/contact">Contact</FooterLink>
          <FooterLink to="/careers">Careers</FooterLink>
        </FooterColumn>
        
        <FooterColumn>
          <FooterTitle>Services</FooterTitle>
          <FooterLink to="/services/legacy-modernization">Legacy Modernization</FooterLink>
          <FooterLink to="/services/applied-ml-mlops">ML & MLOps</FooterLink>
          <FooterLink to="/services/cost-efficient-ai">Cost-Efficient AI</FooterLink>
          <FooterLink to="/services/recommendation-systems">Recommendation Systems</FooterLink>
          <FooterLink to="/services/intelligent-process-automation">Process Automation</FooterLink>
        </FooterColumn>
        
        <FooterColumn>
          <FooterTitle>Resources</FooterTitle>
          <FooterLink to="/blog">Blog</FooterLink>
          <FooterLink to="/case-studies">Case Studies</FooterLink>
          <FooterLink to="/whitepapers">Whitepapers</FooterLink>
          <FooterLink to="/webinars">Webinars</FooterLink>
        </FooterColumn>
        
        <FooterColumn>
          <FooterTitle>Connect</FooterTitle>
          <ExternalLink href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</ExternalLink>
          <ExternalLink href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</ExternalLink>
          <ExternalLink href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</ExternalLink>
          <ExternalLink href="mailto:info@aicloudservices.com">info@aicloudservices.com</ExternalLink>
        </FooterColumn>
      </FooterContent>
      
      <Copyright>
        © {new Date().getFullYear()} AI Cloud Services. All rights reserved.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
