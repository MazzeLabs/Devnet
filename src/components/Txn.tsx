import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface BlockProps {
  hash: string;
  timestamp: string;
  from: string;
  to: string;
  cdt: string;
  gas: number;
}

interface TooltipProps {
  show: boolean;
  message: string;
}

const Tooltip: React.FC<TooltipProps> = ({ show, message }) => {
  if (!show) return null;

  return (
    <div className="absolute bg-black text-white px-2 py-1 rounded text-xs bottom-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
      {message}
    </div>
  );
};
export const Transaction: React.FC<BlockProps> = ({ hash, from, to, timestamp, cdt }) => {
  const [disHash, setDisHash] = useState<string>();
  const [disFrom, setDisFrom] = useState<string>();
  const [disTo, setDisTo] = useState<string>();
  const [disTimeStamp, setDisTimeStamp] = useState<string>();
  const [fromCopied, setFromCopied] = useState(false);
  const [toCopied, setToCopied] = useState(false);

  useEffect(() => {
    const firstPart = hash.slice(0, 6);
    const lastPart = hash.slice(-4);

    setDisHash(`${firstPart}...${lastPart}`);

    const firstFrom = from.slice(0, 6);
    const lastFrom = from.slice(-4);

    setDisFrom(`${firstFrom}...${lastFrom}`);

    const firstTo = to.slice(0, 6);
    const lastTo = to.slice(-4);

    setDisTo(`${firstTo}...${lastTo}`);

    const decimalTimestamp = parseInt(timestamp, 16);
    const millisecondsSinceEpoch = decimalTimestamp * 1000;

    const date = new Date(millisecondsSinceEpoch);

    const currentDate = new Date();

    const timeDifference = currentDate.getTime() - date.getTime();

    const minutesDiff = Math.floor(timeDifference / (1000 * 60));
    const secondsDiff = Math.floor((timeDifference % (1000 * 60)) / 1000);

    const timeDiffString = `${minutesDiff} minutes, ${secondsDiff} seconds ago`;

    setDisTimeStamp(timeDiffString)
  }, [hash]);

  const handleFromCopy = () => {
    navigator.clipboard.writeText(from).then(() => {
      setFromCopied(true);
      setTimeout(() => {
        setFromCopied(false);
      }, 1000);
    });
  };

  const handleToCopy = () => {
    navigator.clipboard.writeText(to).then(() => {
      setToCopied(true);
      setTimeout(() => {
        setToCopied(false);
      }, 1000);
    });
  };

  return (
    <Link to={`/txn/${hash}/`}>
      <div className="cards cursor-pointer" style={{ padding: '20px', display: 'flex', marginBottom: '10px', height: '120px' }}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
        </svg>

        <div style={{ marginLeft: '10px' }}>
          <span style={{ color: '#ffa200', fontSize: '16px' }}>{disHash} </span><br />
          <span className="hidden md:block">{disTimeStamp}</span>
        </div>
        <div style={{ textAlign: 'center' }} className="ms-auto" >
          <p className="flex items-center">
            <span className="hidden md:block">From</span>
            <span className="ms-2 flex address-label">{disFrom}
              <button onClick={handleFromCopy} className="relative">
                <Tooltip show={fromCopied} message="Copied!" />
                <svg className="w-4 h-4 ms-2" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ContentCopyIcon">
                  <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 16H8V7h11z" fill="#ffa200"></path>
                </svg>
              </button>
            </span>
          </p>
          <p className="flex items-center mb-0">
            <span className="hidden md:block">To</span>
            <span className="ms-2 flex address-label ms-auto">{disTo}
              <button onClick={handleToCopy} className="relative">
                <Tooltip show={toCopied} message="Copied!" />
                <svg className="w-4 h-4 ms-2" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ContentCopyIcon">
                  <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 16H8V7h11z" fill="#ffa200"></path>
                </svg>
              </button>
            </span>
          </p>
        </div>
        <div style={{ marginLeft: 'auto' }}>
          <span>{cdt} MAZZE</span>
        </div>
      </div>
    </Link >
  )
}