import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Service } from '../data/services';

const Card = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;
  height: 100%;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  }
`;

const CardImage = styled.div<{ bgImage: string }>`
  height: 200px;
  background-image: ${props => `url(${props.bgImage})`};
  background-size: cover;
  background-position: center;
`;

const CardContent = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.75rem;
  color: var(--gray-900);
`;

const CardDescription = styled.p`
  color: var(--gray-700);
  margin-bottom: 1.5rem;
  flex-grow: 1;
`;

const CardLink = styled(Link)`
  color: var(--primary);
  font-weight: 600;
  text-decoration: none;
  display: flex;
  align-items: center;
  margin-top: auto;
  
  &:after {
    content: '→';
    margin-left: 0.5rem;
    transition: transform 0.3s;
  }
  
  &:hover {
    text-decoration: none;
    
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
