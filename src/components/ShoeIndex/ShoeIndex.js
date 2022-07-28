import styled from "styled-components/macro";

import { QUERIES, WEIGHTS } from "../../constants";

import Breadcrumbs from "../Breadcrumbs";
import Select from "../Select";
import ShoeGrid from "../ShoeGrid";
import ShoeSidebar from "../ShoeSidebar";
import Spacer from "../Spacer";

const ShoeIndex = ({ sortId, setSortId }) => {
  return (
    <Wrapper>
      <MainColumn>
        <Header>
          <Container>
            <BreadCrumbsTitle>
              <Breadcrumbs>
                <Breadcrumbs.Crumb href="/">Home</Breadcrumbs.Crumb>
                <Breadcrumbs.Crumb href="/sale">Sale</Breadcrumbs.Crumb>
                <Breadcrumbs.Crumb href="/sale/shoes">Shoes</Breadcrumbs.Crumb>
              </Breadcrumbs>
            </BreadCrumbsTitle>
            <Title>Running</Title>
          </Container>
          <CustomSelect>
            <Select
              label="Sort"
              value={sortId}
              onChange={(ev) => setSortId(ev.target.value)}
            >
              <option value="newest">Newest Releases</option>
              <option value="price">Price</option>
            </Select>
          </CustomSelect>
        </Header>
        <Spacer size={32} />
        <ShoeGrid />
      </MainColumn>
      <LeftColumn>
        <Breadcrumbs>
          <Breadcrumbs.Crumb href="/">Home</Breadcrumbs.Crumb>
          <Breadcrumbs.Crumb href="/sale">Sale</Breadcrumbs.Crumb>
          <Breadcrumbs.Crumb href="/sale/shoes">Shoes</Breadcrumbs.Crumb>
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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  @media ${QUERIES.laptopAndUp} {
    flex-direction: row;
  }
`;

const BreadCrumbsTitle = styled.div`
  display: block;

  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;

const LeftColumn = styled.div`
  flex-basis: 248px;
  display: none;
  @media ${QUERIES.laptopAndUp} {
    display: revert;
  }
`;

const MainColumn = styled.div`
  flex: 1;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: ${WEIGHTS.medium};
`;

const CustomSelect = styled.div`
  display: none;

  @media ${QUERIES.tabletAndUp} {
    display: flex;
  }
`;

export default ShoeIndex;
