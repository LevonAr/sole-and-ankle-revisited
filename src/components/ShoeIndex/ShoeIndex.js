import React from 'react';
import styled from 'styled-components/macro';

import { WEIGHTS, QUERIES } from '../../constants';

import Breadcrumbs from '../Breadcrumbs';
import Select from '../Select';
import Spacer from '../Spacer';
import ShoeSidebar from '../ShoeSidebar';
import ShoeGrid from '../ShoeGrid';
import { set } from 'date-fns';

const ShoeIndex = ({ sortId, setSortId }) => {
  return (
    <Wrapper>
      <MainColumn>
        <Header>
          <MobileBreadcrumbs>
            <Breadcrumbs>
              <Breadcrumbs.Crumb href="/">Home</Breadcrumbs.Crumb>
              <Breadcrumbs.Crumb href="/sale">Sale</Breadcrumbs.Crumb>
              <Breadcrumbs.Crumb href="/sale/shoes">
                Shoes
              </Breadcrumbs.Crumb>
            </Breadcrumbs>          
          </MobileBreadcrumbs>
          <MobileRow>
            <Title>Running</Title>
            <Select
              label="Sort"
              value={sortId}
              onChange={(ev) => setSortId(ev.target.value)}
            >
              <option value="newest">Newest Releases</option>
              <option value="price">Price</option>
            </Select>
          </MobileRow>
        </Header>
        <Spacer size={32} />
        <ShoeGrid />
      </MainColumn>
      <LeftColumn>
        <Breadcrumbs>
          <Breadcrumbs.Crumb href="/">Home</Breadcrumbs.Crumb>
          <Breadcrumbs.Crumb href="/sale">Sale</Breadcrumbs.Crumb>
          <Breadcrumbs.Crumb href="/sale/shoes">
            Shoes
          </Breadcrumbs.Crumb>
        </Breadcrumbs>
        <Spacer size={42} />
        <ShoeSidebar />
      </LeftColumn>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: baseline;
  gap: 32px;
`;

const LeftColumn = styled.div`
  flex-basis: 248px;
  @media ${QUERIES.tabletAndBelow} {
    display: none;
  }
`;

const MainColumn = styled.div`
  flex: 1;
`;

const MobileBreadcrumbs = styled.div`
  display: none;
    @media ${QUERIES.tabletAndBelow} {
      display: flex;
    }
`

const MobileRow = styled.div`
  display: flex;
  justify-content: space-between;
`

const Header = styled.header`
  flex: 1;
  @media ${QUERIES.tabletAndBelow} {
    display: grid; 
    grid-auto-columns: 1fr; 
    grid-template-rows: 1fr 1fr; 
    gap: 0px 0px; 
  }
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: ${WEIGHTS.medium};
`;

export default ShoeIndex;
