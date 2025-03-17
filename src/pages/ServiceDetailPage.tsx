import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import services from '../data/services';

const ServiceHeader = styled.div`
  background-color: var(--primary);
  color: white;
  padding: 5rem 0 3rem;
`;

const HeaderContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const ServiceTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const ServiceDescription = styled.p`
  font-size: 1.2rem;
  max-width: 800px;
  margin-bottom: 1rem;
  opacity: 0.9;
  line-height: 1.6;
`;

const ServiceContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 1rem;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 4rem;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const MainContent = styled.div``;

const SideContent = styled.div``;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin: 2rem 0 1rem;
  color: var(--gray-900);
`;

const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FeatureItem = styled.li`
  margin-bottom: 1.5rem;
  padding-left: 1.5rem;
  position: relative;
  line-height: 1.6;
  
  &:before {
    content: '✓';
    color: var(--success);
    position: absolute;
    left: 0;
    font-weight: bold;
  }
`;

const ContactCard = styled.div`
  background-color: var(--gray-100);
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--gray-900);
`;

const CardText = styled.p`
  margin-bottom: 1.5rem;
  color: var(--gray-700);
`;

const ContactButton = styled(Link)`
  display: inline-block;
  background-color: var(--primary);
  color: white;
  font-weight: 600;
  padding: 0.8rem 1.5rem;
  border-radius: 4px;
  text-decoration: none;
  transition: background-color 0.3s;
  text-align: center;
  width: 100%;
  
  &:hover {
    background-color: #004494;
    text-decoration: none;
    color: white;
  }
`;

const RelatedServices = styled.div`
  margin-top: 2rem;
`;

const RelatedLink = styled(Link)`
  display: block;
  padding: 1rem 0;
  border-top: 1px solid var(--gray-300);
  color: var(--primary);
  text-decoration: none;
  transition: color 0.3s;
  
  &:last-child {
    border-bottom: 1px solid var(--gray-300);
  }
  
  &:hover {
    text-decoration: none;
    color: #004494;
  }
`;

const NotFound = styled.div`
  text-align: center;
  padding: 4rem 1rem;
`;

const NotFoundTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const BackLink = styled(Link)`
  display: inline-block;
  margin-top: 1rem;
  color: var(--primary);
`;

const ServiceDetailPage: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = services.find(s => s.id === serviceId);
  
  // Get related services (all except current one)
  const relatedServices = services.filter(s => s.id !== serviceId).slice(0, 3);
  
  if (!service) {
    return (
      <NotFound>
        <NotFoundTitle>Service Not Found</NotFoundTitle>
        <p>The service you're looking for doesn't exist or has been moved.</p>
        <BackLink to="/services">Back to Services</BackLink>
      </NotFound>
    );
  }
  
  return (
    <>
      <ServiceHeader>
        <HeaderContainer>
          <ServiceTitle>{service.title}</ServiceTitle>
          <ServiceDescription>{service.fullDescription}</ServiceDescription>
        </HeaderContainer>
      </ServiceHeader>
      
      <ServiceContent>
        <MainContent>
          <SectionTitle>Technical Highlights</SectionTitle>
          <FeaturesList>
            {service.technicalHighlights.map((highlight, index) => (
              <FeatureItem key={index}>{highlight}</FeatureItem>
            ))}
          </FeaturesList>
          
          <SectionTitle>Business Value</SectionTitle>
          <FeaturesList>
            {service.businessValue.map((value, index) => (
              <FeatureItem key={index}>{value}</FeatureItem>
            ))}
          </FeaturesList>
        </MainContent>
        
        <SideContent>
          <ContactCard>
            <CardTitle>Interested in {service.title}?</CardTitle>
            <CardText>
              Talk to our experts about how this service can help your business.
              We'll provide a customized solution that fits your specific needs.
            </CardText>
            <ContactButton to="/contact">Contact Us</ContactButton>
          </ContactCard>
          
          <RelatedServices>
            <CardTitle>Related Services</CardTitle>
            {relatedServices.map(relatedService => (
              <RelatedLink key={relatedService.id} to={`/services/${relatedService.id}`}>
                {relatedService.title}
              </RelatedLink>
            ))}
          </RelatedServices>
        </SideContent>
      </ServiceContent>
    </>
  );
};

export default ServiceDetailPage;
