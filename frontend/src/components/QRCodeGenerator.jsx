import React, { forwardRef } from 'react';
import QRCode from 'react-qr-code';

const QRCodeGenerator = forwardRef(({ value, size = 150 }, ref) => {
  return (
    <div ref={ref} className="p-4 bg-white rounded border inline-block">
      <QRCode value={value} size={size} />
    </div>
  );
});

export default QRCodeGenerator;
