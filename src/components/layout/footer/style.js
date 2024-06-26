import styled from "styled-components";

export const StyledFooter = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${(props) => props.theme.colorWhite};
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;

export const FooterWrapper = styled.div`
  margin: 0 auto;
  padding: 18px 90px;
  max-width: 1280px;
  min-height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 30px;

  @media (max-width: 768px) {
    padding: 18px 30px;
    justify-content: center;
  }
`;

export const Copyright = styled.span`
  font-weight: 400;
  font-size: ${(props) => props.theme.fontSizeDefault};
  line-height: 1.5;
  color: ${(props) => props.theme.colorBlackForText};
  min-height: 27px;
  min-width: 122px;
  max-width: 700px;
  text-align: center;
`;

