import React, { useRef } from 'react';
import { toPng } from 'html-to-image';
import QRCodeGenerator from './QRCodeGenerator';

const QRCodeModal = ({ url, onClose }) => {
  const qrRef = useRef(null);

  const handleDownload = async () => {
    if (qrRef.current) {
      const dataUrl = await toPng(qrRef.current);
      const link = document.createElement('a');
      link.href = dataUrl;
      link.download = 'qr-code.png';
      link.click();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white rounded-lg p-6 shadow-lg relative w-[300px] text-center">
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-black text-lg"
          onClick={onClose}
        >
          ×
        </button>
        <h2 className="text-lg font-semibold mb-4">QR Code</h2>
        <QRCodeGenerator value={url} ref={qrRef} />
        <button
          onClick={handleDownload}
          className="mt-4 px-4 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700"
        >
          Download QR Code
        </button>
      </div>
    </div>
  );
};

export default QRCodeModal;
