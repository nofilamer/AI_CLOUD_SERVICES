import styled from 'styled-components';

const AboutHeader = styled.div`
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

const AboutTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const AboutDescription = styled.p`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  opacity: 0.9;
`;

const AboutContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 1rem;
`;

const AboutSection = styled.section`
  margin-bottom: 4rem;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: var(--gray-900);
`;

const SectionText = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--gray-700);
  margin-bottom: 1.5rem;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const TeamMember = styled.div`
  text-align: center;
`;

const MemberImage = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: var(--gray-300);
  margin: 0 auto 1rem;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const MemberName = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  color: var(--gray-900);
`;

const MemberTitle = styled.p`
  color: var(--gray-600);
  font-size: 1rem;
  margin-bottom: 0.75rem;
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ValueCard = styled.div`
  background-color: var(--gray-100);
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
`;

const ValueTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: var(--gray-900);
`;

const ValueDescription = styled.p`
  color: var(--gray-700);
`;

const AboutPage: React.FC = () => {
  return (
    <>
      <AboutHeader>
        <HeaderContainer>
          <AboutTitle>About AI Cloud Services</AboutTitle>
          <AboutDescription>
            We're a team of AI and cloud experts dedicated to helping businesses
            harness the power of advanced technologies to solve complex challenges.
          </AboutDescription>
        </HeaderContainer>
      </AboutHeader>
      
      <AboutContent>
        <AboutSection>
          <SectionTitle>Our Story</SectionTitle>
          <SectionText>
            AI Cloud Services was founded in 2020 by a group of technology enthusiasts who saw the tremendous
            potential of artificial intelligence and cloud computing to transform businesses across industries.
            What began as a small consulting team has grown into a full-service AI solutions provider with
            expertise spanning legacy system modernization, machine learning operations, cost optimization,
            and intelligent automation.
          </SectionText>
          <SectionText>
            Our journey has been defined by our commitment to both technical excellence and practical business outcomes.
            We believe that the most powerful AI solutions are those that seamlessly integrate with existing systems,
            align with specific business goals, and deliver measurable results. This philosophy has guided our approach
            to every client engagement and fueled our growth into the company we are today.
          </SectionText>
        </AboutSection>
        
        <AboutSection>
          <SectionTitle>Our Mission</SectionTitle>
          <SectionText>
            Our mission is to democratize access to advanced AI capabilities by helping organizations of all sizes
            leverage these technologies effectively. We strive to break down the barriers that often prevent businesses
            from realizing the full potential of AI and cloud solutions - whether those barriers are technical complexity,
            legacy system constraints, or uncertainty about implementation approaches.
          </SectionText>
          <SectionText>
            Through our services, we aim to empower businesses to innovate faster, operate more efficiently, and
            create exceptional experiences for their customers. We measure our success not just by the quality of our
            technical solutions, but by the tangible business outcomes we help our clients achieve.
          </SectionText>
        </AboutSection>
        
        <AboutSection>
          <SectionTitle>Our Values</SectionTitle>
          <ValuesGrid>
            <ValueCard>
              <ValueTitle>Technical Excellence</ValueTitle>
              <ValueDescription>
                We are committed to maintaining the highest standards of technical quality in everything we do,
                staying at the forefront of AI and cloud advancements, and continuously expanding our expertise.
              </ValueDescription>
            </ValueCard>
            
            <ValueCard>
              <ValueTitle>Client-Centric Approach</ValueTitle>
              <ValueDescription>
                We place our clients' goals and challenges at the center of our work, designing custom solutions
                that address their specific needs rather than offering one-size-fits-all approaches.
              </ValueDescription>
            </ValueCard>
            
            <ValueCard>
              <ValueTitle>Integrity & Transparency</ValueTitle>
              <ValueDescription>
                We build trust through honest communication, transparent processes, and ethical handling of data.
                We set realistic expectations and deliver on our promises.
              </ValueDescription>
            </ValueCard>
          </ValuesGrid>
        </AboutSection>
        
        <AboutSection>
          <SectionTitle>Our Leadership Team</SectionTitle>
          <TeamGrid>
            <TeamMember>
              <MemberImage>
                <img src="/images/team-1.jpg" alt="CEO" />
              </MemberImage>
              <MemberName>Alexandra Chen</MemberName>
              <MemberTitle>Chief Executive Officer</MemberTitle>
            </TeamMember>
            
            <TeamMember>
              <MemberImage>
                <img src="/images/team-2.jpg" alt="CTO" />
              </MemberImage>
              <MemberName>Marcus Johnson</MemberName>
              <MemberTitle>Chief Technology Officer</MemberTitle>
            </TeamMember>
            
            <TeamMember>
              <MemberImage>
                <img src="/images/team-3.jpg" alt="Head of AI" />
              </MemberImage>
              <MemberName>Sophia Rodriguez</MemberName>
              <MemberTitle>Head of AI Research</MemberTitle>
            </TeamMember>
            
            <TeamMember>
              <MemberImage>
                <img src="/images/team-4.jpg" alt="Director" />
              </MemberImage>
              <MemberName>David Kim</MemberName>
              <MemberTitle>Director of Client Solutions</MemberTitle>
            </TeamMember>
          </TeamGrid>
        </AboutSection>
      </AboutContent>
    </>
  );
};

export default AboutPage;
