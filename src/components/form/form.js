import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #ecf0f1;
`;

const Row = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 50%;
  margin: 10px;
`;

const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const CheckboxRow = styled.div`
  display: flex;
  align-items: center;
`;

const Checkbox = styled.input`
  margin-right: 8px;
`;

const Button = styled.button`
  background-color: #3498db;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  &:hover {
    background-color: ${({ disabled }) => (disabled ? '#3498db' : '#2980b9')};
  }

  &:disabled {
    background-color: #bdc3c7;
    color: #7f8c8d;
    cursor: not-allowed;
  }
`;

const Form = ({ handleGenerateQrCode }) => {
  const [ssid, setSsid] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleClick = () => {
    handleGenerateQrCode(ssid, password);
    setPassword('');
    setSsid('');
    setShowPassword(false);
  };

  const isButtonDisabled = !ssid || !password;

  return (
    <Container>
      <Row>
        <label htmlFor="ssid">Wifi Network Name</label>
        <Input
          type="text"
          id="ssid"
          placeholder="Enter Wifi Name"
          value={ssid}
          onChange={(e) => setSsid(e.target.value)}
          required
        />
      </Row>
      <Row>
        <label htmlFor="password">Wifi Password</label>
        <Input
          type={showPassword ? 'text' : 'password'}
          id="password"
          placeholder="Enter Wifi Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </Row>
      <CheckboxRow>
        <Checkbox
          type="checkbox"
          id="showPassword"
          checked={showPassword}
          onChange={() => setShowPassword(!showPassword)}
        />
        <label htmlFor="showPassword">Show Password</label>
      </CheckboxRow>
      <Row>
        <Button disabled={isButtonDisabled} onClick={handleClick}>
          Generate QR Code
        </Button>
      </Row>
    </Container>
  );
};

export default Form;
