import styled from 'styled-components';
import services from '../data/services';
import ServiceCard from '../components/ServiceCard';

const ServicesHeader = styled.div`
  background-color: var(--primary);
  color: white;
  padding: 5rem 0 3rem;
  text-align: center;
`;

const HeaderContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const ServicesTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const ServicesDescription = styled.p`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  opacity: 0.9;
`;

const ServicesContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 1rem;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ServicesPage: React.FC = () => {
  return (
    <>
      <ServicesHeader>
        <HeaderContainer>
          <ServicesTitle>Our Services</ServicesTitle>
          <ServicesDescription>
            We offer a comprehensive range of AI and cloud services designed to help businesses
            modernize, innovate, and thrive in today's technology-driven landscape.
          </ServicesDescription>
        </HeaderContainer>
      </ServicesHeader>
      
      <ServicesContainer>
        <ServicesGrid>
          {services.map(service => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </ServicesGrid>
      </ServicesContainer>
    </>
  );
};

export default ServicesPage;
