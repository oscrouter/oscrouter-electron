import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { TextBox, SmallButton } from '../styles/main.ts';
import Light from './Light';

function Route({ add }: { add: boolean }) {
  return (
    <tr>
      <td>
        <Light on={true} /> <Light />
      </td>
      <td>
        <TextBox label="Label" />
      </td>
      <td style={{ width: '75px' }}>
        <FormControl variant="outlined" style={{ width: '100%' }}>
          <Select input={<TextBox fullWidth={true} label="Type" />}>
            <MenuItem value="udp">UDP</MenuItem>
            <MenuItem value="tcpserver">TCP Server</MenuItem>
            <MenuItem value="tcpclient">TCP Client</MenuItem>
          </Select>
        </FormControl>
      </td>
      <td style={{ width: '120px' }}>
        <TextBox label="Incoming IP" />
      </td>
      <td>
        <TextBox label="Port" />
      </td>
      <td>
        <TextBox label="Path" />
      </td>
      <td>
        <TextBox label="Min" />
      </td>
      <td>
        <TextBox label="Max" />
      </td>
      <td>></td>
      <td>
        <Light on={true} /> <Light />
      </td>
      <td style={{ width: '75px' }}>
        <FormControl variant="outlined" style={{ width: '100%' }}>
          <Select input={<TextBox fullWidth={true} label="Type" />}>
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>UDP</MenuItem>
            <MenuItem value={20}>TCP Server</MenuItem>
            <MenuItem value={30}>TCP Client</MenuItem>
          </Select>
        </FormControl>
      </td>
      <td style={{ width: '120px' }}>
        <TextBox label="Outgoing IP" />
      </td>
      <td>
        <TextBox label="Port" />
      </td>
      <td>
        <TextBox label="Path" />
      </td>
      <td>
        <TextBox label="Min" />
      </td>
      <td>
        <TextBox label="Max" />
      </td>
      <td>
        <SmallButton>{add ? '+' : '-'}</SmallButton>
      </td>
    </tr>
  );
}

Route.propTypes = {
  add: PropTypes.bool,
};

Route.defaultProps = {
  add: false,
};

export default Route;
