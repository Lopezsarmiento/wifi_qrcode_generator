import { useState } from 'react';
import QRCode from 'qrcode-generator';

const useGenerateQrCode = () => {
  const [qrcode, setQrcode] = useState('');

  const generateQrCode = (ssid, password) => {
    const wifiString = `WIFI:T:WPA;S:${ssid};P:${password};;`;

    const qr = QRCode(0, 'H');
    qr.addData(wifiString);
    qr.make();

    setQrcode(qr.createImgTag(10, 10));
  };

  return { qrcode, generateQrCode };
};

export default useGenerateQrCode;
