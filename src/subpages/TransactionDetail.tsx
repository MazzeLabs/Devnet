import { useParams } from "react-router-dom"
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useEffect, useState } from "react";
import transactionData from '../data/transactions.json';

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

export const TransactionDetail = () => {
  const [copied, setCopied] = useState(false);
  const { transactionhash } = useParams<string>();
  const [txn, setTxn] = useState<any>();
  const [disFrom, setDisFrom] = useState<string>();
  const [disTo, setDisTo] = useState<string>();
  const [fromCopied, setFromCopied] = useState(false);
  const [toCopied, setToCopied] = useState(false);

  useEffect(() => {
    if (transactionhash) {
      const selectedTransaction = transactionData.find((b) => b.transactionHash === transactionhash);

      if (selectedTransaction) {
        setTxn(selectedTransaction);
      }
    }
  }, []);

  console.log(txn)

  useEffect(() => {
    if (txn) {
      const firstFrom = txn.from.slice(0, 6);
      const lastFrom = txn.from.slice(-4);

      setDisFrom(`${firstFrom}...${lastFrom}`);

      const firstTo = txn.to.slice(0, 6);
      const lastTo = txn.to.slice(-4);

      setDisTo(`${firstTo}...${lastTo}`);
    }
  }, [txn])

  const handleCopy = () => {
    if (transactionhash) {
      navigator.clipboard.writeText(transactionhash).then(() => {
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 1000);
      });
    } else {
      return;
    }
  };
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
    <>
      <div className="main-container w-container">
        <Header />
        <div style={{ marginTop: '25px' }}>
          <input className="w-input" type="text"
            style={{
              width: '100%',
              padding: '22px 22px',
              fontSize: '14px',
              border: '1px solid #ffa2001f',
              color: 'white',
              backgroundColor: 'transparent'
            }}
            placeholder="Search Explorer"
          />
        </div>

        <div className="mt-20 flex">
          <span className="flex address-label">{transactionhash}
            <button onClick={handleCopy} className="relative">
              <Tooltip show={copied} message="Copied!" />
              <svg className="w-4 h-4 ms-2" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ContentCopyIcon">
                <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 16H8V7h11z" fill="#ffa200"></path>
              </svg>
            </button>
          </span>
        </div>

        <div className="mt-2 flex text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
          </svg>
          <span>User Transaction</span>
        </div>

        {txn ?
          <>
            <div className="cards mt-10 p-10">
              <div className="w-full">
                <div className="grid grid-cols-4 items-center mb-5">
                  <div className="col">Hash</div>
                  <div className="col-span-3">
                    {transactionhash}
                  </div>
                </div>
                <div className="grid grid-cols-4 items-center mt-8">
                  <div className="col">Status</div>
                  <div className="col-span-3">
                    <div className="flex">
                      {parseInt(txn.status, 16)}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-4 items-center mt-6">
                  <div className="col">
                    Sender
                  </div>
                  <div className="col-span-3">
                    <div className="flex">
                      <div>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAK5JREFUSEtjjBeu/8+ABp5NPIcuxCCVb4Qhhk2AWL2MoxaDgo/Y4BqaQc3RKoORuGzlDYlKSMQqOvzwPIZSxlGLQWEyvIPadYkvRuLCVkqtLJpLVFoK70vGUIctezKOWgwKp+Ed1NgKEKJSEYWKsJZcFJpJlPZRi4kKJmoowlqAYKvGiC2/idU7ajE4+ogNLmxxTazewRXU2MpqbFUbNh8Tq5foanHUYlyFyKAPagC89cJ620xcLAAAAABJRU5ErkJggg==" />
                      </div>
                      <span className="flex address-label ms-4">{disFrom}
                        <button onClick={handleFromCopy} className="relative">
                          <Tooltip show={fromCopied} message="Copied!" />
                          <svg className="w-4 h-4 ms-2" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ContentCopyIcon">
                            <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 16H8V7h11z" fill="#ffa200"></path>
                          </svg>
                        </button>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-4 items-center my-5">
                  <div className="col">
                    Receiver
                  </div>
                  <div className="col-span-3">
                    <div className="flex">
                      <div>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAJlJREFUSEtjdPyt8J8BDZx/IIMuRBHfUOEJhn7GUYtBYTK8g1rgtg1G4sKWGChJXdhCkHHUYlCQjgY1KBQen9InKn3Jml3EUEdR4hq1GFe4D/6gVjnqj1FyEZWKKFTEOGoxhSFItPaBC2pia6fRAmToFiCDKo5FXgljhOQbsbdEZRVi9WJtcxGrGZtLiNU7ajE49IgNLkqCGgBn8bnxtfrnxQAAAABJRU5ErkJggg==" />
                      </div>
                      <span className="flex address-label ms-4">{disTo}
                        <button onClick={handleToCopy} className="relative">
                          <Tooltip show={toCopied} message="Copied!" />
                          <svg className="w-4 h-4 ms-2" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ContentCopyIcon">
                            <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 16H8V7h11z" fill="#ffa200"></path>
                          </svg>
                        </button>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-4 items-center mt-6">
                  <div className="col">
                    Function
                  </div>
                  <div className="col-span-3">
                    Transfer
                  </div>
                </div>

                <div className="grid grid-cols-4 items-center mt-8">
                  <div className="col">
                    Amount
                  </div>
                  <div className="col-span-3">
                    {txn.cdt} MAZZE
                  </div>
                </div>
              </div>
            </div>
            <div className="cards mt-10 p-10">
              <div className="w-full">
                <div className="grid grid-cols-4 items-center mb-5">
                  <div className="col">Block</div>
                  <div className="col-span-3">
                    {parseInt(txn.blockNumber, 16)}
                  </div>
                </div>
                <div className="grid grid-cols-4 items-center mt-8">
                  <div className="col">Timestamp</div>
                  <div className="col-span-3">
                    <div className="flex">
                      {txn.blockTimestamp}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-4 items-center mt-8">
                  <div className="col">
                    Gas Fee
                  </div>
                  <div className="col-span-3">
                    {parseInt(txn.effectiveGasPrice, 16) / 100000000000000}
                  </div>
                </div>

                <div className="grid grid-cols-4 items-center mt-8">
                  <div className="col">
                    Gas Unit Price
                  </div>
                  <div className="col-span-3">
                    {parseInt(txn.effectivePriorityFee, 16) / 100000000000000}
                  </div>
                </div>
              </div>
            </div>
          </>
          :
          <div>
            No Data Found
          </div>
        }
      </div>
      <Footer />
    </>
  )
}