import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  border-bottom: 8px solid #222;
  color: white;
`;

export const Frame = styled.div`
  margin-bottom: 40px;
  max-width: 1200px;
`;

export const Item = styled.div`
  color: white;
  margin-bottom: 10px;

  &:first-of-type {
    margin-top: 3em;
  }
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 815px;
  padding: 70px 45px;
  margin: auto;
`;

export const Title = styled.h1`
  font-size: 50px;
  line-height: 1.1;
  margin-top: 0;
  margin-bottom: 8px;
  color: white;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 35px;
  }
`;

export const Header = styled.div`
  display: flex;
  cursor: pointer;
  justify-content: space-between;
  margin-bottom: 1px;
  font-size: 26px;
  box-sizing: border-box;
  font-weight: normal;
  background: #303030;
  padding: 0.8em 1.2em 0.8em 1.2em;
  user-select: none;
  align-items: center;

  img {
    filter: brightness(0) invert(1);
    width: 24px;

    @media (max-width: 600px) {
      width: 16px;
    }
  }

  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

export const Body = styled.div`
  color: white;
  transition: max-height 0.25s cubic-bezier(0.5, 0, 0.1, 1);
  box-sizing: border-box;
  font-size: 26px;
  font-weight: normal;
  line-height: normal;
  background: #303030;
  padding: 0.8em 1.2em 0.8em 1.2em;
  user-select: none;
  align-items: center;

  @media (max-width: 600px) {
    font-size: 16px;
    line-height: 22px;
  }
`;
