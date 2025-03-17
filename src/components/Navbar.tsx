import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { useState } from 'react';

const NavContainer = styled.nav`
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary);
  text-decoration: none;
  display: flex;
  align-items: center;
  
  &:hover {
    text-decoration: none;
  }
`;

const NavLinks = styled.div<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    align-items: flex-start;
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    margin-top: 1rem;
    gap: 1rem;
  }
`;

const NavLink = styled(Link)<{ active: boolean }>`
  margin: 0 1rem;
  color: ${({ active }) => (active ? 'var(--primary)' : 'var(--gray-700)')};
  text-decoration: none;
  font-weight: ${({ active }) => (active ? '600' : '400')};
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    width: ${({ active }) => (active ? '100%' : '0')};
    height: 2px;
    bottom: -5px;
    left: 0;
    background-color: var(--primary);
    transition: width 0.3s;
  }
  
  &:hover {
    text-decoration: none;
    color: var(--primary);
    
    &:after {
      width: 100%;
    }
  }
  
  @media (max-width: 768px) {
    margin: 0.5rem 0;
  }
`;

const ContactButton = styled(Link)`
  background-color: var(--primary);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  text-decoration: none;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: #004494;
    text-decoration: none;
    color: white;
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <NavContainer>
      <NavContent>
        <Logo to="/">AI Cloud Services</Logo>
        
        <MenuButton onClick={toggleMenu}>
          {isOpen ? '✕' : '☰'}
        </MenuButton>
        
        <NavLinks isOpen={isOpen}>
          <NavLink to="/" active={isActive('/')}>Home</NavLink>
          <NavLink to="/services" active={isActive('/services') || location.pathname.includes('/services/')}>Services</NavLink>
          <NavLink to="/about" active={isActive('/about')}>About</NavLink>
          <ContactButton to="/contact">Contact Us</ContactButton>
        </NavLinks>
      </NavContent>
    </NavContainer>
  );
};

export default Navbar;
