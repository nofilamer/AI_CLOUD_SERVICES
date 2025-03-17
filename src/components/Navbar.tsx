import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { useState } from 'react';

const NavContainer = styled.nav`
  background-color: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: all 0.3s ease;
`;

const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem 1.5rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    padding: 1rem;
  }
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: 700;
  background: var(--bg-gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
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
    margin-top: 1.5rem;
    gap: 1.25rem;
    padding-top: 1.25rem;
    border-top: 1px solid var(--gray-200);
  }
`;

const NavLink = styled(Link)<{ active: boolean }>`
  margin: 0 1.25rem;
  color: ${({ active }) => (active ? 'var(--primary)' : 'var(--gray-700)')};
  text-decoration: none;
  font-weight: ${({ active }) => (active ? '600' : '500')};
  position: relative;
  transition: all 0.3s;
  font-size: 1.05rem;
  
  &:after {
    content: '';
    position: absolute;
    width: ${({ active }) => (active ? '100%' : '0')};
    height: 3px;
    border-radius: 1.5px;
    bottom: -8px;
    left: 0;
    background: var(--bg-gradient-primary);
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
    margin: 0.25rem 0;
  }
`;

const ContactButton = styled(Link)`
  background: var(--bg-gradient-primary);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s;
  box-shadow: 0 4px 15px rgba(67, 97, 238, 0.2);
  margin-left: 1rem;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(67, 97, 238, 0.3);
    text-decoration: none;
    color: white;
  }
  
  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 0.5rem;
    align-self: flex-start;
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.75rem;
  cursor: pointer;
  color: var(--primary);
  transition: all 0.3s;
  
  &:hover {
    transform: scale(1.1);
  }
  
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
