import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Service } from '../data/services';

const Card = styled.div`
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
  isolation: isolate; /* Creates a new stacking context */
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
  }
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, 
      rgba(72, 149, 239, 0.03) 0%, 
      rgba(72, 149, 239, 0) 20%,
      rgba(67, 97, 238, 0) 80%,
      rgba(67, 97, 238, 0.05) 100%
    );
    z-index: -1;
    opacity: 0;
    transition: opacity 0.3s;
  }
  
  &:hover::before {
    opacity: 1;
  }
`;

const CardImage = styled.div<{ bgImage: string }>`
  height: 220px;
  background-image: ${props => `url(${props.bgImage})`};
  background-size: cover;
  background-position: center;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(to bottom, 
      transparent 60%, 
      rgba(0, 0, 0, 0.15) 100%
    );
  }
`;

const CardContent = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const CardTitle = styled.h3`
  font-size: 1.6rem;
  margin-bottom: 1rem;
  color: var(--gray-900);
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    width: 40px;
    height: 3px;
    background: var(--bg-gradient-primary);
    bottom: -8px;
    left: 0;
    border-radius: 2px;
  }
`;

const CardDescription = styled.p`
  color: var(--gray-700);
  margin-bottom: 1.5rem;
  flex-grow: 1;
  font-size: 1.05rem;
  line-height: 1.6;
`;

const CardLink = styled(Link)`
  color: var(--primary);
  font-weight: 600;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  margin-top: auto;
  padding: 0.5rem 0;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    height: 2px;
    bottom: 0;
    left: 0;
    width: 100%;
    background: var(--bg-gradient-primary);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
  }
  
  &:after {
    content: '→';
    margin-left: 0.75rem;
    transition: transform 0.3s;
  }
  
  &:hover {
    text-decoration: none;
    
    &::before {
      transform: scaleX(1);
    }
    
    &:after {
      transform: translateX(4px);
    }
  }
`;

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <Card>
      <CardImage bgImage={service.image} />
      <CardContent>
        <CardTitle>{service.title}</CardTitle>
        <CardDescription>{service.shortDescription}</CardDescription>
        <CardLink to={`/services/${service.id}`}>Learn More</CardLink>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
