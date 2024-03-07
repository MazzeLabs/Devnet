import { useEffect, useState } from "react";

type BlockRowType = {
    blcok: any
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

export const BlockRow = ({ blcok }: BlockRowType) => {
    const [blockNumber, setBlockNumber] = useState<string>();
    const [disHash, setDisHash] = useState<string>();
    const [disFrom, setDisFrom] = useState<string>();
    const [disTo, setDisTo] = useState<string>();
    const [timeStamp, setTimeStamp] = useState<string>();
    const [type, setType] = useState<number>();
    const [fromCopied, setFromCopied] = useState(false);
    const [toCopied, setToCopied] = useState(false);

    useEffect(() => {
        const number = parseInt(blcok.number, 16).toString();

        setBlockNumber(number)
        const firstPart = blcok.hash.slice(0, 6);
        const lastPart = blcok.hash.slice(-4);

        setDisHash(`${firstPart}...${lastPart}`);

        // const firstFrom = txn.from.slice(0, 6);
        // const lastFrom = txn.from.slice(-4);

        // setDisFrom(`${firstFrom}...${lastFrom}`);

        // const firstTo = txn.to.slice(0, 6);
        // const lastTo = txn.to.slice(-4);

        // setDisTo(`${firstTo}...${lastTo}`);

        const decimalTimestamp = parseInt(blcok.timestamp, 16);
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

        const txnType = parseInt(blcok.type, 16);
        setType(txnType);
    }, [blcok]);

    const handleFromCopy = () => {
        navigator.clipboard.writeText(blcok.from).then(() => {
            setFromCopied(true);
            setTimeout(() => {
                setFromCopied(false);
            }, 1000);
        });
    };

    const handleToCopy = () => {
        navigator.clipboard.writeText(blcok.to).then(() => {
            setToCopied(true);
            setTimeout(() => {
                setToCopied(false);
            }, 1000);
        });
    };

    return (
        <div className="cards p-5 my-5">
            <span className="ms-2 flex address-label">{blockNumber}</span>
            <span className="ms-auto text-white">{timeStamp}</span>
            <span className="ms-2 flex address-label ms-auto">{disHash}</span>
            <span className="ms-auto text-white">{blcok.transactions.length} transactions</span>
            <span className="ms-auto text-white">{parseInt(blcok.baseFeePerGas, 16) / 1000000000} Gmazzy</span>
            {/* <span className="ms-auto flex address-label">{disFrom}
        <button onClick={handleFromCopy} className="relative">
          <Tooltip show={fromCopied} message="Copied!" />
          <svg className="w-4 h-4 ms-2" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ContentCopyIcon">
            <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 16H8V7h11z" fill="#ffa200"></path>
          </svg>
        </button>
      </span>

      <span className="ms-auto flex address-label">{disTo}
        <button onClick={handleToCopy} className="relative">
          <Tooltip show={toCopied} message="Copied!" />
          <svg className="w-4 h-4 ms-2" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ContentCopyIcon">
            <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 16H8V7h11z" fill="#ffa200"></path>
          </svg>
        </button>
      </span>

      <span className="ms-auto text-white">Transfer</span>

      <div className="ms-auto">
        <div className="flex">
          <p className="ms-auto mb-0 text-white">0.02 MAZZE</p>
        </div>
        <p className="text-xs">Gas {txn.gasUsed / 1000000} MAZZE</p>
      </div> */}
        </div>
    )
}