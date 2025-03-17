import styled from 'styled-components';
import { useState } from 'react';

const ContactHeader = styled.div`
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

const ContactTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const ContactDescription = styled.p`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  opacity: 0.9;
`;

const ContactContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const FormContainer = styled.div``;

const ContactForm = styled.form`
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: var(--gray-800);
`;

const FormInput = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--gray-300);
  border-radius: 4px;
  font-size: 1rem;
  transition: border-color 0.3s;
  
  &:focus {
    border-color: var(--primary);
    outline: none;
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--gray-300);
  border-radius: 4px;
  font-size: 1rem;
  resize: vertical;
  min-height: 150px;
  transition: border-color 0.3s;
  
  &:focus {
    border-color: var(--primary);
    outline: none;
  }
`;

const FormSelect = styled.select`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--gray-300);
  border-radius: 4px;
  font-size: 1rem;
  background-color: white;
  transition: border-color 0.3s;
  
  &:focus {
    border-color: var(--primary);
    outline: none;
  }
`;

const SubmitButton = styled.button`
  background-color: var(--primary);
  color: white;
  border: none;
  font-weight: 600;
  padding: 0.8rem 2rem;
  border-radius: 4px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: #004494;
  }
  
  &:disabled {
    background-color: var(--gray-400);
    cursor: not-allowed;
  }
`;

const InfoContainer = styled.div``;

const InfoCard = styled.div`
  background-color: var(--gray-100);
  padding: 2rem;
  border-radius: 8px;
  margin-bottom: 2rem;
`;

const InfoTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: var(--gray-900);
`;

const InfoItem = styled.div`
  margin-bottom: 1.5rem;
  display: flex;
  align-items: flex-start;
`;

const InfoIcon = styled.span`
  margin-right: 1rem;
  color: var(--primary);
  font-size: 1.2rem;
`;

const InfoText = styled.div`
  flex: 1;
`;

const InfoLabel = styled.h4`
  font-size: 1.1rem;
  margin-bottom: 0.25rem;
  color: var(--gray-800);
`;

const InfoValue = styled.p`
  color: var(--gray-700);
`;

const SuccessMessage = styled.div`
  background-color: var(--success);
  color: white;
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 1.5rem;
  font-weight: 500;
`;

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };
  
  return (
    <>
      <ContactHeader>
        <HeaderContainer>
          <ContactTitle>Contact Us</ContactTitle>
          <ContactDescription>
            Get in touch with our team to discuss how our AI and cloud services
            can help your business thrive in the digital age.
          </ContactDescription>
        </HeaderContainer>
      </ContactHeader>
      
      <ContactContent>
        <FormContainer>
          <h2>Send Us a Message</h2>
          <p>Fill out the form below and we'll get back to you as soon as possible.</p>
          
          <ContactForm onSubmit={handleSubmit}>
            {isSubmitted && (
              <SuccessMessage>
                Thank you for contacting us! We'll get back to you shortly.
              </SuccessMessage>
            )}
            
            <FormGroup>
              <FormLabel htmlFor="name">Full Name*</FormLabel>
              <FormInput
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </FormGroup>
            
            <FormGroup>
              <FormLabel htmlFor="email">Email Address*</FormLabel>
              <FormInput
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </FormGroup>
            
            <FormGroup>
              <FormLabel htmlFor="phone">Phone Number</FormLabel>
              <FormInput
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </FormGroup>
            
            <FormGroup>
              <FormLabel htmlFor="company">Company</FormLabel>
              <FormInput
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
              />
            </FormGroup>
            
            <FormGroup>
              <FormLabel htmlFor="service">Interested Service</FormLabel>
              <FormSelect
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
              >
                <option value="">Select a service</option>
                <option value="legacy-modernization">AI-Enabled Legacy System Modernization</option>
                <option value="applied-ml-mlops">Applied Machine Learning and MLOps</option>
                <option value="cost-efficient-ai">Cost-Efficient AI Infrastructure</option>
                <option value="recommendation-systems">Personalized Recommendation Systems</option>
                <option value="intelligent-process-automation">Intelligent Process Automation</option>
                <option value="other">Other</option>
              </FormSelect>
            </FormGroup>
            
            <FormGroup>
              <FormLabel htmlFor="message">Message*</FormLabel>
              <FormTextarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </FormGroup>
            
            <SubmitButton type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </SubmitButton>
          </ContactForm>
        </FormContainer>
        
        <InfoContainer>
          <InfoCard>
            <InfoTitle>Get in Touch</InfoTitle>
            
            <InfoItem>
              <InfoIcon>📍</InfoIcon>
              <InfoText>
                <InfoLabel>Address</InfoLabel>
                <InfoValue>
                  123 Tech Boulevard<br />
                  Suite 500<br />
                  San Francisco, CA 94105
                </InfoValue>
              </InfoText>
            </InfoItem>
            
            <InfoItem>
              <InfoIcon>📱</InfoIcon>
              <InfoText>
                <InfoLabel>Phone</InfoLabel>
                <InfoValue>+1 (555) 123-4567</InfoValue>
              </InfoText>
            </InfoItem>
            
            <InfoItem>
              <InfoIcon>✉️</InfoIcon>
              <InfoText>
                <InfoLabel>Email</InfoLabel>
                <InfoValue>info@aicloudservices.com</InfoValue>
              </InfoText>
            </InfoItem>
            
            <InfoItem>
              <InfoIcon>🕒</InfoIcon>
              <InfoText>
                <InfoLabel>Business Hours</InfoLabel>
                <InfoValue>
                  Monday - Friday: 9am - 6pm PST<br />
                  Saturday - Sunday: Closed
                </InfoValue>
              </InfoText>
            </InfoItem>
          </InfoCard>
          
          <InfoCard>
            <InfoTitle>Looking for a Career?</InfoTitle>
            <p>We're always looking for talented individuals to join our team. Check out our current openings and apply today.</p>
            <div style={{ marginTop: '1.5rem' }}>
              <SubmitButton as="a" href="/careers" style={{ textDecoration: 'none', display: 'inline-block' }}>
                View Careers
              </SubmitButton>
            </div>
          </InfoCard>
        </InfoContainer>
      </ContactContent>
    </>
  );
};

export default ContactPage;
