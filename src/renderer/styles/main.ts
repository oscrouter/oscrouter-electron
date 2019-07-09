import styled from 'styled-components';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

export const Wrapper = styled.div``;

export const RouteContainer = styled.div`
  border: 1px solid rgb(31, 31, 31);
  margin: 10px;
  height: 78vh;
  overflow-y: auto;
`;
export const LogContainer = styled.pre`
  border: 1px solid rgb(31, 31, 31);
  height: 13vh;
  overflow: auto;
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

const TextBox = styled(TextField)`
  && {
    background-color: rgb(60, 60, 60);
    input {
      color: rgb(119, 167, 255);
      font-size: 0.9rem;
    }
    label {
      color: rgb(119, 167, 255);
    }
    label:not(.MuiInputLabel-shrink) {
      color: rgba(119, 167, 255, 0.48);
    }
  }
`;

TextBox.defaultProps = {
  margin: 'dense',
  variant: 'outlined',
};

export { TextBox };

const SmallButton = styled(Button)`
  && {
    width: 20px;
    min-width: 0;
    background-color: rgba(60, 60, 60, 1);
    color: rgb(119, 167, 255);
    text-align: center;
  }
`;

SmallButton.defaultProps = {
  variant: 'contained',
};

export { SmallButton };
