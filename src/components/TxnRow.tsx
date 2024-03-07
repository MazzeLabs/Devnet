import { useEffect, useState } from "react";

type TxnRowType = {
  txn: any
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

export const TxnRow = ({ txn }: TxnRowType) => {
  const [disHash, setDisHash] = useState<string>();
  const [disFrom, setDisFrom] = useState<string>();
  const [disTo, setDisTo] = useState<string>();
  const [timeStamp, setTimeStamp] = useState<string>();
  const [type, setType] = useState<number>();
  const [fromCopied, setFromCopied] = useState(false);
  const [toCopied, setToCopied] = useState(false);

  useEffect(() => {
    const firstPart = txn.transactionHash.slice(0, 6);
    const lastPart = txn.transactionHash.slice(-4);

    setDisHash(`${firstPart}...${lastPart}`);

    const firstFrom = txn.from.slice(0, 6);
    const lastFrom = txn.from.slice(-4);

    setDisFrom(`${firstFrom}...${lastFrom}`);

    const firstTo = txn.to.slice(0, 6);
    const lastTo = txn.to.slice(-4);

    setDisTo(`${firstTo}...${lastTo}`);

    const decimalTimestamp = parseInt(txn.blockTimestamp, 16);
    const millisecondsSinceEpoch = decimalTimestamp * 1000;

    const date = new Date(millisecondsSinceEpoch);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hour = String(date.getHours()).padStart(2, '0');
    const minute = String(date.getMinutes()).padStart(2, '0');
    const second = String(date.getSeconds()).padStart(2, '0');

    const formattedDate = `${month}/${day}/${year} ${hour}:${minute}:${second}`;
    setTimeStamp(formattedDate);

    const txnType = parseInt(txn.type, 16);
    setType(txnType);
  }, [txn]);

  const handleFromCopy = () => {
    navigator.clipboard.writeText(txn.from).then(() => {
      setFromCopied(true);
      setTimeout(() => {
        setFromCopied(false);
      }, 1000);
    });
  };

  const handleToCopy = () => {
    navigator.clipboard.writeText(txn.to).then(() => {
      setToCopied(true);
      setTimeout(() => {
        setToCopied(false);
      }, 1000);
    });
  };

  return (
    <div className="cards p-5 my-5 block lg:flex">
      <span className="ms-2 flex address-label">{disHash}</span>
      {type !== undefined && (
        <div className="mx-auto text-white flex">
          {(() => {
            switch (type) {
              case 0:
                return (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-4  mx-auto mt-5 md:mt-0">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5" />
                  </svg>
                );
              case 1:
                return (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-4 mx-auto mt-5 md:mt-0">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 14H4V6h16zM6 10h2v2H6zm0 4h8v2H6zm10 0h2v2h-2zm-6-4h8v2h-8z"></path>
                  </svg>
                );
              case 2:
                return (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-4 mx-auto mt-5 md:mt-0">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                  </svg>
                );
              default:
                return null;
            }
          })()}
        </div>
      )}
      <div className="mx-auto flex mt-5 md:mt-0">
        <span className="text-white mx-auto">{timeStamp}</span>
      </div>
      <div className="flex mt-5 md:mt-0">
        <span className="mx-auto md:mx-3 address-label">{disFrom}
          <button onClick={handleFromCopy} className="relative">
            <Tooltip show={fromCopied} message="Copied!" />
            <svg className="w-4 h-4 ms-2" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ContentCopyIcon">
              <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 16H8V7h11z" fill="#ffa200"></path>
            </svg>
          </button>
        </span>

        <span className="mx-auto md:mx-3 flex address-label">{disTo}
          <button onClick={handleToCopy} className="relative">
            <Tooltip show={toCopied} message="Copied!" />
            <svg className="w-4 h-4 ms-2" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ContentCopyIcon">
              <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 16H8V7h11z" fill="#ffa200"></path>
            </svg>
          </button>
        </span>
      </div>
      <div className="flex mt-5 md:mt-0 mx-auto">
        <span className="mx-auto text-white">Transfer</span>
      </div>

      <div className="ms-auto mt-5 md:mt-0">
        <div className="flex">
          <p className="mx-auto mb-0 text-white md:ms-auto md:me-0">0.02 MAZZE</p>
        </div>
        <div className="flex">
          <p className="text-xs mx-auto md:mx-0 mb-0">Gas {txn.gasUsed / 1000000} MAZZE</p>
        </div>
      </div>
    </div>
  )
}