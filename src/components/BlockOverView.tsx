import { useEffect, useState } from "react";

type BlockOverviewProps = {
  item: any
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

export const BlockOverview = ({ item }: BlockOverviewProps) => {
  console.log(item);
  const [hashCopied, setHashCopied] = useState(false);
  const [disHash, setDisHash] = useState<string>();

  const handleHashCopy = () => {
    navigator.clipboard.writeText(item.hash).then(() => {
      setHashCopied(true);
      setTimeout(() => {
        setHashCopied(false);
      }, 1000);
    });
  };

  useEffect(() => {
    const firstPart = item.hash.slice(0, 6);
    const lastPart = item.hash.slice(-4);

    setDisHash(`${firstPart}...${lastPart}`);

  }, [item]);

  return (
    <>
      <div className="cards p-5 block">
        <div>
          <div className="flex items-center my-3">
            <div>Hash</div>
            <span className="ms-20 flex address-label">{disHash}
              <button onClick={handleHashCopy} className="relative">
                <Tooltip show={hashCopied} message="Copied!" />
                <svg className="w-4 h-4 ms-2" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ContentCopyIcon">
                  <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 16H8V7h11z" fill="#ffa200"></path>
                </svg>
              </button>
            </span>
          </div>
          <div className="flex items-center my-3">
            <div>Block Height</div>
            <div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}