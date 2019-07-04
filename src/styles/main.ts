import styled from 'styled-components';
import ButtonGroup from '@material-ui/core/ButtonGroup';

export const Wrapper = styled.div``;

export const RouteContainer = styled.div`
  border: 1px solid rgb(31, 31, 31);
  margin: 10px;
  height: 78vh;
`;
export const LogContainer = styled.pre`
  border: 1px solid rgb(31, 31, 31);
  height: 13vh;
`;

export const BottomContainer = styled.div`
  margin: 5px 20px;
`;

export const RouteTable = styled.table`
  width: 100%;
  font-size: 0.95em;
`;

export const ButtonContainer = styled(ButtonGroup)`
  background-color: rgb(78, 78, 78);
`;
