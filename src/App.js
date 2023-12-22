import React, { useState, useEffect } from "react";
import Qrcode from "./components/qrcode/qrcode";
import useGenerateQrCode from "./hooks/useGenerateQrCode";
import Form from "./components/form/form";

function App() {
  const { qrcode, generateQrCode } = useGenerateQrCode();
  const [showForm, setShowForm] = useState(true);

  const handlePrint = () => {
    window.print();
  };

  const handleGoBack = () => {
    setShowForm(true);
  };

  useEffect(() => {
    if (qrcode) {
      setShowForm(false);
    }
  }, [qrcode]);

  return (
    <>
      {showForm ? (
        <Form handleGenerateQrCode={generateQrCode} />
      ) : (
        <Qrcode
          qrcode={qrcode}
          handlePrint={handlePrint}
          handleGoBack={handleGoBack}
        />
      )}
    </>
  );
}

export default App;
