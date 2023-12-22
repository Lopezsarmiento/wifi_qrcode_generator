import React from 'react';
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

const QrCodeImage = styled.div`
  /* Add styling for the QR code image if needed */
`;

const TitleRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
const ImageRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  transition: background-color 0.3s ease; /* Add a smooth transition effect */

  &:hover {
    background-color: #d4e6f1; /* Change the background color on hover */
    cursor: pointer;
  }
`;

const Qrcode = ({ qrcode, handlePrint, handleGoBack }) => {
  return (
    <Container>
      <TitleRow><h1>GUEST WIFI</h1></TitleRow>
      <ImageRow onClick={handlePrint}>
        <QrCodeImage dangerouslySetInnerHTML={{ __html: qrcode }} />
      </ImageRow>
    </Container>
  );
};

export default Qrcode;
