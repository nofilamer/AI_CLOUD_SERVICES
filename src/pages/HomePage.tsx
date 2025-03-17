import styled from 'styled-components';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import services from '../data/services';

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2.5rem;
  margin-top: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FeaturesSection = styled.section`
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(180deg, #f8f9fa 0%, #f1f3f5 100%);
    z-index: -1;
  }
`;

const FeaturesContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

const FeaturesList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureItem = styled.div`
  background-color: white;
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: all 0.3s;
  position: relative;
  z-index: 1;
  isolation: isolate;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
  }
  
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 5px;
    top: 0;
    left: 0;
    background: var(--bg-gradient-primary);
    border-radius: 12px 12px 0 0;
    opacity: 0;
    transition: opacity 0.3s;
    z-index: -1;
  }
  
  &:hover::before {
    opacity: 1;
  }
`;

const FeatureIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: var(--bg-gradient-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  box-shadow: 0 5px 20px rgba(67, 97, 238, 0.2);
  
  svg {
    width: 28px;
    height: 28px;
    color: white;
  }
`;

const FeatureTitle = styled.h3`
  font-size: 1.6rem;
  margin-bottom: 1rem;
  color: var(--gray-900);
`;

const FeatureDescription = styled.p`
  color: var(--gray-700);
  font-size: 1.05rem;
  line-height: 1.7;
`;

const CallToActionSection = styled.section`
  background: var(--bg-dark-gradient);
  color: white;
  padding: 6rem 0;
  text-align: center;
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
      radial-gradient(circle at 20% 30%, rgba(67, 97, 238, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 70%, rgba(247, 37, 133, 0.1) 0%, transparent 50%);
    z-index: 0;
  }
`;

const CTAContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 1.5rem;
  position: relative;
  z-index: 1;
`;

const CTATitle = styled.h2`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  background: var(--bg-gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
  display: inline-block;
  
  @media (max-width: 768px) {
    font-size: 2.25rem;
  }
`;

const CTADescription = styled.p`
  font-size: 1.3rem;
  margin-bottom: 2.5rem;
  color: var(--gray-300);
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

// Abstract shapes for visual interest
const CTAShape1 = styled.div`
  position: absolute;
  width: 350px;
  height: 350px;
  border-radius: 50%;
  background: linear-gradient(45deg, rgba(67, 97, 238, 0.1), rgba(72, 149, 239, 0.05));
  top: -100px;
  right: -100px;
  z-index: 0;
  filter: blur(50px);
`;

const CTAShape2 = styled.div`
  position: absolute;
  width: 250px;
  height: 250px;
  border-radius: 50%;
  background: linear-gradient(45deg, rgba(247, 37, 133, 0.1), rgba(114, 9, 183, 0.05));
  bottom: -50px;
  left: -50px;
  z-index: 0;
  filter: blur(40px);
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
          <h2 className="section-title centered">Our Services</h2>
          <p className="section-subtitle" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem', fontSize: '1.2rem', color: 'var(--gray-700)' }}>
            We specialize in AI-enabled solutions that help businesses modernize legacy systems,
            deploy machine learning models, optimize costs, and automate processes.
          </p>
          
          <ServicesGrid>
            {services.map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </ServicesGrid>
        </div>
      </section>
      
      <FeaturesSection className="section">
        <FeaturesContainer>
          <h2 className="section-title centered">Why Choose Us</h2>
          <p className="section-subtitle" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem', fontSize: '1.2rem', color: 'var(--gray-700)' }}>
            With our deep expertise in AI, cloud technologies, and enterprise systems,
            we deliver solutions that drive real business impact.
          </p>
          
          <FeaturesList>
            <FeatureItem>
              <FeatureIcon>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </FeatureIcon>
              <FeatureTitle>Technical Excellence</FeatureTitle>
              <FeatureDescription>
                Our team combines deep technical knowledge with hands-on experience implementing AI solutions
                across industries. We stay at the forefront of AI advancements to deliver cutting-edge solutions.
              </FeatureDescription>
            </FeatureItem>
            
            <FeatureItem>
              <FeatureIcon>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                  <path d="M2 17l10 5 10-5"></path>
                  <path d="M2 12l10 5 10-5"></path>
                </svg>
              </FeatureIcon>
              <FeatureTitle>Business-Focused Approach</FeatureTitle>
              <FeatureDescription>
                We focus on the business outcomes that matter to you. Every solution we design starts
                with your specific challenges and goals, ensuring that technology serves your business strategy.
              </FeatureDescription>
            </FeatureItem>
            
            <FeatureItem>
              <FeatureIcon>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                  <line x1="9" y1="9" x2="9.01" y2="9"></line>
                  <line x1="15" y1="9" x2="15.01" y2="9"></line>
                </svg>
              </FeatureIcon>
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
        <CTAShape1 />
        <CTAShape2 />
        <CTAContainer>
          <CTATitle>Ready to Transform Your Business with AI?</CTATitle>
          <CTADescription>
            Let's discuss how our AI-powered solutions can help you overcome challenges,
            seize opportunities, and achieve your business goals.
          </CTADescription>
          <a href="/contact" className="btn btn-white">Schedule a Consultation</a>
        </CTAContainer>
      </CallToActionSection>
    </>
  );
};

export default HomePage;
