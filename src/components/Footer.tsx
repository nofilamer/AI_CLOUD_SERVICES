import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FooterContainer = styled.footer`
  background-color: var(--dark);
  color: var(--light);
  padding: 3rem 1rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  
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
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  color: white;
`;

const FooterLink = styled(Link)`
  color: var(--gray-400);
  margin-bottom: 0.75rem;
  text-decoration: none;
  transition: color 0.3s;
  
  &:hover {
    color: white;
    text-decoration: none;
  }
`;

const ExternalLink = styled.a`
  color: var(--gray-400);
  margin-bottom: 0.75rem;
  text-decoration: none;
  transition: color 0.3s;
  
  &:hover {
    color: white;
    text-decoration: none;
  }
`;

const Copyright = styled.div`
  max-width: 1200px;
  margin: 2rem auto 0;
  padding-top: 2rem;
  border-top: 1px solid var(--gray-700);
  text-align: center;
  color: var(--gray-500);
  font-size: 0.9rem;
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
