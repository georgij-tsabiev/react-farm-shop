import styled from "styled-components";

export const StyledHeader = styled.header`
  position: relative;
  background-color: ${(props) => props.theme.colorWhite};
  box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.04), 0 2px 6px 0 rgba(0, 0, 0, 0.04), 0 10px 20px 0 rgba(0, 0, 0, 0.04);
  z-index: 5;
`;

export const HeaderWrapper = styled.div`
  margin: 0 auto;
  padding: 10px 90px;
  max-width: 1280px;
  min-height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;

  @media (max-width: 768px) {
    padding: 10px 30px;
    justify-content: center;
  }
`;
