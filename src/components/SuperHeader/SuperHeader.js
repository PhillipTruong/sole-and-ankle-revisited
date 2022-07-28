import styled from "styled-components/macro";

import { COLORS, QUERIES } from "../../constants";

import Icon from "../Icon";
import SearchInput from "../SearchInput";
import UnstyledButton from "../UnstyledButton";

const SuperHeader = () => {
  return (
    <Wrapper>
      <Container>
        <MarketingMessage>
          Free shipping on domestic orders over $75!
        </MarketingMessage>
        <SearchInput />
        <HelpLink href="/help">Help</HelpLink>
        <UnstyledButton>
          <Icon id="shopping-bag" strokeWidth={1} />
        </UnstyledButton>
      </Container>
    </Wrapper>
  );
};

const Container = styled.div`
  display: none;
  height: 100%;
  align-items: center;
  gap: 24px;

  @media ${QUERIES.laptopAndUp} {
    display: flex;
  }
`;

const Wrapper = styled.div`
  font-size: 0.875rem;
  color: ${COLORS.gray[300]};
  background-color: ${COLORS.gray[900]};
  padding-left: 32px;
  padding-right: 32px;
  height: 8px;

  @media ${QUERIES.laptopAndUp} {
    height: 40px;
  }
`;

const MarketingMessage = styled.span`
  color: ${COLORS.white};
  margin-right: auto;
`;

const HelpLink = styled.a`
  color: inherit;
  text-decoration: none;
  outline-offset: 2px;

  &:not(:focus-visible) {
    outline: none;
  }
`;

export default SuperHeader;
