/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import { COLORS, WEIGHTS, QUERIES } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Wrapper>
      <RightColumn>

      </RightColumn>
      <MainColumn>
        <DismissButton>
          <button onClick={onDismiss}>
            <Icon id="close" strokeWidth={2} />
          </button>
        </DismissButton>
        <MobileNav>
            <NavLink href="/sale">Sale</NavLink>
            <NavLink href="/new">New&nbsp;Releases</NavLink>
            <NavLink href="/men">Men</NavLink>
            <NavLink href="/women">Women</NavLink>
            <NavLink href="/kids">Kids</NavLink>
            <NavLink href="/collections">Collections</NavLink>
          </MobileNav>
        <Footer>
          <footer>
            <a href="/terms">Terms and Conditions</a>
            <a href="/privacy">Privacy Policy</a>
            <a href="/contact">Contact Us</a>
          </footer>
        </Footer>
      </MainColumn>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`

const RightColumn = styled.div`
  position: absolute;
  background-color: red;
  flex: 20;
  height: 100%;
  width: 30%;
`

const MainColumn = styled.div`
  flex: 80;
  position: absolute;
  background-color: white;
  height: 100%;
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 100;
  padding: 32px;
`

const MobileNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

const DismissButton = styled.div`
  display: flex;
  justify-content: flex-end;
`


const Footer = styled.div`
`
export default MobileMenu;
