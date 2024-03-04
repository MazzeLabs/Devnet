import { useEffect, useState } from "react";

type ItemProps = {
  item: any
};

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

export const LeaderboardItem = ({ item }: ItemProps) => {
  const [disHash, setDisHash] = useState<string>();
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const firstPart = item.user.slice(0, 6);
    const lastPart = item.user.slice(-4);

    setDisHash(`${firstPart}...${lastPart}`);
  }, [item]);

  const handleCopy = () => {
    navigator.clipboard.writeText(item.user).then(() => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 1000);
    });
  };

  return (
    <div className="cards my-3 p-3 flex">
      <div className="ms-5">
        {item.rank}
      </div>
      <div className="ms-10 me-auto">
        <span className="ms-2 flex address-label">{disHash}
          <button onClick={handleCopy} className="relative">
            <Tooltip show={copied} message="Copied!" />
            <svg className="w-4 h-4 ms-2" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ContentCopyIcon">
              <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 16H8V7h11z" fill="#ffa200"></path>
            </svg>
          </button>
        </span>
      </div>
      <div className="mx-auto">
        {`${item.completed} Quests`}
      </div>
      <div className="me-5">
        {`${item.totalPoints} Points`}
      </div>
    </div>
  )
}