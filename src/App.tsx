import { useWalletConnect, QRCodeModal } from "@provenanceio/walletconnect-js";
import React from "react";
import "./App.css";

function App() {
  const { walletConnectService, walletConnectState } = useWalletConnect();
  const {
    connected,
    address,
    publicKey,
    signedJWT,
    walletInfo = {},
  } = walletConnectState;
  const { name } = walletInfo;

  const handleErrorTest = () => {
    const messageArray = [
      "Ch8vY29zbW9zLmF1dGh6LnYxYmV0YTEuTXNnUmV2b2tlEoQBCil0cDFuZGM2djVjejI2czRhbHM0ejV6MmQ5MGY4dWx5dnNnYzB1ZHhycRIpdHAxbTh1dWc1bmQwd2RsNDV3OWdrdGUzMG5nNGU1eXk3bW1jd2x5dWQaLC9wcm92ZW5hbmNlLm1ldGFkYXRhLnYxLk1zZ1dyaXRlU2NvcGVSZXF1ZXN0",
      "Ch8vY29zbW9zLmF1dGh6LnYxYmV0YTEuTXNnUmV2b2tlEoUBCil0cDFuZGM2djVjejI2czRhbHM0ejV6MmQ5MGY4dWx5dnNnYzB1ZHhycRIpdHAxbTh1dWc1bmQwd2RsNDV3OWdrdGUzMG5nNGU1eXk3bW1jd2x5dWQaLS9wcm92ZW5hbmNlLm1ldGFkYXRhLnYxLk1zZ0RlbGV0ZVNjb3BlUmVxdWVzdA==",
      "Ch8vY29zbW9zLmF1dGh6LnYxYmV0YTEuTXNnUmV2b2tlEowBCil0cDFuZGM2djVjejI2czRhbHM0ejV6MmQ5MGY4dWx5dnNnYzB1ZHhycRIpdHAxbTh1dWc1bmQwd2RsNDV3OWdrdGUzMG5nNGU1eXk3bW1jd2x5dWQaNC9wcm92ZW5hbmNlLm1ldGFkYXRhLnYxLk1zZ0FkZFNjb3BlRGF0YUFjY2Vzc1JlcXVlc3Q=",
      "Ch8vY29zbW9zLmF1dGh6LnYxYmV0YTEuTXNnUmV2b2tlEo8BCil0cDFuZGM2djVjejI2czRhbHM0ejV6MmQ5MGY4dWx5dnNnYzB1ZHhycRIpdHAxbTh1dWc1bmQwd2RsNDV3OWdrdGUzMG5nNGU1eXk3bW1jd2x5dWQaNy9wcm92ZW5hbmNlLm1ldGFkYXRhLnYxLk1zZ0RlbGV0ZVNjb3BlRGF0YUFjY2Vzc1JlcXVlc3Q=",
      "Ch8vY29zbW9zLmF1dGh6LnYxYmV0YTEuTXNnUmV2b2tlEocBCil0cDFuZGM2djVjejI2czRhbHM0ejV6MmQ5MGY4dWx5dnNnYzB1ZHhycRIpdHAxbTh1dWc1bmQwd2RsNDV3OWdrdGUzMG5nNGU1eXk3bW1jd2x5dWQaLy9wcm92ZW5hbmNlLm1ldGFkYXRhLnYxLk1zZ0FkZFNjb3BlT3duZXJSZXF1ZXN0",
      "Ch8vY29zbW9zLmF1dGh6LnYxYmV0YTEuTXNnUmV2b2tlEooBCil0cDFuZGM2djVjejI2czRhbHM0ejV6MmQ5MGY4dWx5dnNnYzB1ZHhycRIpdHAxbTh1dWc1bmQwd2RsNDV3OWdrdGUzMG5nNGU1eXk3bW1jd2x5dWQaMi9wcm92ZW5hbmNlLm1ldGFkYXRhLnYxLk1zZ0RlbGV0ZVNjb3BlT3duZXJSZXF1ZXN0",
      "Ch8vY29zbW9zLmF1dGh6LnYxYmV0YTEuTXNnUmV2b2tlEoYBCil0cDFuZGM2djVjejI2czRhbHM0ejV6MmQ5MGY4dWx5dnNnYzB1ZHhycRIpdHAxbTh1dWc1bmQwd2RsNDV3OWdrdGUzMG5nNGU1eXk3bW1jd2x5dWQaLi9wcm92ZW5hbmNlLm1ldGFkYXRhLnYxLk1zZ1dyaXRlU2Vzc2lvblJlcXVlc3Q=",
      "Ch8vY29zbW9zLmF1dGh6LnYxYmV0YTEuTXNnUmV2b2tlEoUBCil0cDFuZGM2djVjejI2czRhbHM0ejV6MmQ5MGY4dWx5dnNnYzB1ZHhycRIpdHAxbTh1dWc1bmQwd2RsNDV3OWdrdGUzMG5nNGU1eXk3bW1jd2x5dWQaLS9wcm92ZW5hbmNlLm1ldGFkYXRhLnYxLk1zZ1dyaXRlUmVjb3JkUmVxdWVzdA==",
      "Ch8vY29zbW9zLmF1dGh6LnYxYmV0YTEuTXNnUmV2b2tlEoYBCil0cDFuZGM2djVjejI2czRhbHM0ejV6MmQ5MGY4dWx5dnNnYzB1ZHhycRIpdHAxbTh1dWc1bmQwd2RsNDV3OWdrdGUzMG5nNGU1eXk3bW1jd2x5dWQaLi9wcm92ZW5hbmNlLm1ldGFkYXRhLnYxLk1zZ0RlbGV0ZVJlY29yZFJlcXVlc3Q=",
      "Ch8vY29zbW9zLmF1dGh6LnYxYmV0YTEuTXNnUmV2b2tlEpABCil0cDFuZGM2djVjejI2czRhbHM0ejV6MmQ5MGY4dWx5dnNnYzB1ZHhycRIpdHAxbTh1dWc1bmQwd2RsNDV3OWdrdGUzMG5nNGU1eXk3bW1jd2x5dWQaOC9wcm92ZW5hbmNlLm1ldGFkYXRhLnYxLk1zZ1A4ZU1lbW9yaWFsaXplQ29udHJhY3RSZXF1ZXN0",
    ];
    walletConnectService.sendMessage({ message: messageArray });
  };
  const handleCoinSend = () => {
    const message =
      "ChwvY29zbW9zLmJhbmsudjFiZXRhMS5Nc2dTZW5kEmwKKXRwMWtuc3hmbm4wbHE0OG1tbmtmbmtndGtrOHFueHhkdTB5MnRrbGtoEil0cDFrbnN4Zm5uMGxxNDhtbW5rZm5rZ3Rrazhxbnh4ZHUweTJ0a2xraBoUCgVuaGFzaBILMTAwMDAwMDAwMDA=";
    walletConnectService.sendMessage({ message });
  };

  return (
    <section className="App">
      <header className="App-header">
        {connected ? (
          <div>
            <p>
              You've Connected with "<code>{name}</code>" wallet!
            </p>
            <p>Address:</p>
            <code>{address}</code>
            <p>PublicKey:</p>
            <code>{publicKey}</code>
            <p>Signed JWT:</p>
            <code>{signedJWT}</code>
            <div>
              <button onClick={() => walletConnectService.disconnect()}>
                Disconnect
              </button>
            </div>
            <div>
              <button onClick={handleErrorTest}>Test Error</button>
              <button onClick={handleCoinSend}>Test Coin Send</button>
            </div>
          </div>
        ) : (
          <div>
            <p>Click the connect button to link your wallet to this app</p>
            <button onClick={() => walletConnectService.connect()}>
              Connect
            </button>
          </div>
        )}
        <QRCodeModal walletConnectService={walletConnectService} />
      </header>
    </section>
  );
}

export default App;
