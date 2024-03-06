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
  const [minerCopied, setMinerCopied] = useState(false);
  const [disHash, setDisHash] = useState<string>();
  const [minerHash, setMinerHash] = useState<string>();

  const handleHashCopy = () => {
    navigator.clipboard.writeText(item.hash).then(() => {
      setHashCopied(true);
      setTimeout(() => {
        setHashCopied(false);
      }, 1000);
    });
  };

  const handleMinerCopy = () => {
    navigator.clipboard.writeText(item.miner).then(() => {
      setMinerCopied(true);
      setTimeout(() => {
        setMinerCopied(false);
      }, 1000);
    });
  };

  useEffect(() => {
    const firstPart = item.hash.slice(0, 6);
    const lastPart = item.hash.slice(-4);

    const firstMinerPart = item.miner.slice(0, 6);
    const lastMinerPart = item.miner.slice(-4);

    setDisHash(`${firstPart}...${lastPart}`);
    setMinerHash(`${firstMinerPart}...${lastMinerPart}`)

  }, [item]);

  return (
    <>
      <div className="cards p-5 block text-white">
        <div className="w-full">
          <div className="grid grid-cols-4 items-center mb-5">
            <div className="col">Hash</div>
            <div className="col-span-3">
              <div className="flex">
                <span className="flex address-label">{disHash}
                  <button onClick={handleHashCopy} className="relative">
                    <Tooltip show={hashCopied} message="Copied!" />
                    <svg className="w-4 h-4 ms-2" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ContentCopyIcon">
                      <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 16H8V7h11z" fill="#ffa200"></path>
                    </svg>
                  </button>
                </span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-4 items-center my-5">
            <div className="col">Block Height</div>
            <div className="col-span-3">
              <div className="flex">
                {parseInt(item.number, 16)}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-4 items-center mt-6">
            <div className="col">
              Timestamp
            </div>
            <div className="col-span-3">
              {item.timestamp}
            </div>
          </div>

          <div className="grid grid-cols-4 items-center my-5">
            <div className="col">
              Proposer
            </div>
            <div className="col-span-3">
              <div className="flex">
                <div>
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAK5JREFUSEtjjBeu/8+ABp5NPIcuxCCVb4Qhhk2AWL2MoxaDgo/Y4BqaQc3RKoORuGzlDYlKSMQqOvzwPIZSxlGLQWEyvIPadYkvRuLCVkqtLJpLVFoK70vGUIctezKOWgwKp+Ed1NgKEKJSEYWKsJZcFJpJlPZRi4kKJmoowlqAYKvGiC2/idU7ajE4+ogNLmxxTazewRXU2MpqbFUbNh8Tq5foanHUYlyFyKAPagC89cJ620xcLAAAAABJRU5ErkJggg==" />
                </div>
                <span className="flex address-label ms-4">{minerHash}
                  <button onClick={handleMinerCopy} className="relative">
                    <Tooltip show={minerCopied} message="Copied!" />
                    <svg className="w-4 h-4 ms-2" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ContentCopyIcon">
                      <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 16H8V7h11z" fill="#ffa200"></path>
                    </svg>
                  </button>
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-4 items-center mt-3">
            <div className="col">
              Transactions
            </div>
            <div className="col-span-3">
              {item.transactions.length} transaction in this block
            </div>
          </div>
        </div>
      </div>

      <div className="cards p-5 block text-white mt-5">
        <div className="w-full">
          <div className="grid grid-cols-4 items-center mb-5">
            <div className="col">Block Reward</div>
            <div className="col-span-3">
              50.0 (50.0 + 0.0 - 0.0)
            </div>
          </div>
          <div className="grid grid-cols-4 items-center my-5">
            <div className="col">Total Difficulty</div>
            <div className="col-span-3">
              <div className="flex">
                {parseInt(item.difficulty, 16)}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-4 items-center mt-6">
            <div className="col">
              Gas Used
            </div>
            <div className="col-span-3">
              {(parseInt(item.gasUsed, 16) / 10000000).toFixed(0)} ({(parseInt(item.gasUsed, 16) / 10000000).toFixed(2)}%)
            </div>
          </div>

          <div className="grid grid-cols-4 items-center my-5">
            <div className="col">
              Gas Limit
            </div>
            <div className="col-span-3">
              {parseInt(item.gasLimit, 16)}
            </div>
          </div>

          <div className="grid grid-cols-4 items-center mt-3">
            <div className="col">
              Base Fee Per Gas
            </div>
            <div className="col-span-3">
              0.000001 MAZZE (1000.0 Gmazzy)
            </div>
          </div>

          <div className="grid grid-cols-4 items-center mt-5">
            <div className="col">
              Burnt Fees
            </div>
            <div className="col-span-3">
              0.0 MAZZE
            </div>
          </div>
        </div>
      </div>
    </>
  )
}