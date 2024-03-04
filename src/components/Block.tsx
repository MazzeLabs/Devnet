import React, { useEffect, useState } from "react";

interface BlockProps {
    hash: string;
    blocknumber: number;
    timestamp: string;
    txns: number;
    cdt: number;
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
export const Block: React.FC<BlockProps> = ({ hash, blocknumber, timestamp, txns, cdt }) => {
    const [disHash, setDisHash] = useState<string>();
    const [token, setToken] = useState<number>();
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        if (hash.length <= 10) {
            setDisHash(hash)
        }

        const firstPart = hash.slice(0, 6);
        const lastPart = hash.slice(-4);

        setDisHash(`${firstPart}...${lastPart}`);
        const txntoken = Math.floor(cdt / 1000)
        setToken(txntoken);

    }, [hash]);

    const handleCopy = () => {
        console.log("Hello")
        navigator.clipboard.writeText(hash).then(() => {
            setCopied(true);
            setTimeout(() => {
                setCopied(false);
            }, 1000);
        });
    };

    return (
        <div className="cards cursor-pointer" style={{ padding: '20px', display: 'flex', marginBottom: '10px', height: '120px' }}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
            </svg>
            <div style={{ marginLeft: '10px' }}>
                <span style={{ color: '#ffa200', fontSize: '16px' }}>{blocknumber} </span><br />
                {timestamp}
            </div>
            <div style={{ textAlign: 'center', marginLeft: '3.25rem' }}>
                <p className="flex items-center">
                    Hash
                    <span className="ms-2 flex address-label">{disHash}
                        <button onClick={handleCopy} className="relative">
                            <Tooltip show={copied} message="Copied!" />
                            <svg className="w-4 h-4 ms-2" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ContentCopyIcon">
                                <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 16H8V7h11z" fill="#ffa200"></path>
                            </svg>
                        </button>
                    </span>
                </p>
                <p style={{ color: '#ffa200', fontSize: '16px' }}>{txns} txns</p>
            </div>
            <div style={{ marginLeft: 'auto' }}>
                <span>{token} MAZ</span>
            </div>
        </div>
    )
}