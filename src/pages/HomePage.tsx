import styled from 'styled-components';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import services from '../data/services';

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 1rem;
  font-size: 2.5rem;
  color: var(--gray-900);
`;

const SectionSubtitle = styled.p`
  text-align: center;
  max-width: 800px;
  margin: 0 auto 3rem;
  font-size: 1.2rem;
  color: var(--gray-700);
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FeaturesSection = styled.section`
  background-color: var(--gray-100);
  padding: 5rem 0;
`;

const FeaturesContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const FeaturesList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureItem = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--gray-900);
`;

const FeatureDescription = styled.p`
  color: var(--gray-700);
`;

const CallToActionSection = styled.section`
  background: linear-gradient(to right, var(--primary), #003c7e);
  color: white;
  padding: 5rem 0;
  text-align: center;
`;

const CTAContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const CTATitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
`;

const CTADescription = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
`;

const CTAButton = styled.a`
  display: inline-block;
  background-color: white;
  color: var(--primary);
  font-weight: 600;
  padding: 1rem 2rem;
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

const HomePage: React.FC = () => {
  return (
    <>
      <Hero 
        title="AI-Powered Solutions for Modern Business Challenges"
        subtitle="We help enterprises leverage AI and cloud technologies to innovate faster, operate more efficiently, and gain competitive advantage."
        primaryButtonText="Explore Services"
        primaryButtonLink="/services"
        secondaryButtonText="Contact Us"
        secondaryButtonLink="/contact"
      />
      
      <section className="section">
        <div className="container">
          <SectionTitle>Our Services</SectionTitle>
          <SectionSubtitle>
            We specialize in AI-enabled solutions that help businesses modernize legacy systems,
            deploy machine learning models, optimize costs, and automate processes.
          </SectionSubtitle>
          
          <ServicesGrid>
            {services.map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </ServicesGrid>
        </div>
      </section>
      
      <FeaturesSection>
        <FeaturesContainer>
          <SectionTitle>Why Choose Us</SectionTitle>
          <SectionSubtitle>
            With our deep expertise in AI, cloud technologies, and enterprise systems,
            we deliver solutions that drive real business impact.
          </SectionSubtitle>
          
          <FeaturesList>
            <FeatureItem>
              <FeatureTitle>Technical Excellence</FeatureTitle>
              <FeatureDescription>
                Our team combines deep technical knowledge with hands-on experience implementing AI solutions
                across industries. We stay at the forefront of AI advancements to deliver cutting-edge solutions.
              </FeatureDescription>
            </FeatureItem>
            
            <FeatureItem>
              <FeatureTitle>Business-Focused Approach</FeatureTitle>
              <FeatureDescription>
                We focus on the business outcomes that matter to you. Every solution we design starts
                with your specific challenges and goals, ensuring that technology serves your business strategy.
              </FeatureDescription>
            </FeatureItem>
            
            <FeatureItem>
              <FeatureTitle>End-to-End Implementation</FeatureTitle>
              <FeatureDescription>
                From strategy and planning to deployment and ongoing optimization, we provide
                comprehensive support throughout your AI journey with a focus on sustainable results.
              </FeatureDescription>
            </FeatureItem>
          </FeaturesList>
        </FeaturesContainer>
      </FeaturesSection>
      
      <CallToActionSection>
        <CTAContainer>
          <CTATitle>Ready to Transform Your Business with AI?</CTATitle>
          <CTADescription>
            Let's discuss how our AI-powered solutions can help you overcome challenges,
            seize opportunities, and achieve your business goals.
          </CTADescription>
          <CTAButton href="/contact">Schedule a Consultation</CTAButton>
        </CTAContainer>
      </CallToActionSection>
    </>
  );
};

export default HomePage;
