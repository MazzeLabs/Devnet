import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import blockData from '../data/blocks.json';
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { BlockOverview } from "../components/BlockOverView";
import { BlockTransactions } from "../components/BlockTransactions";

export const DetailBlock = () => {
  const { blockNumber } = useParams();
  const [block, setBlock] = useState<any>();

  useEffect(() => {
    if (blockNumber) {
      const decimalBlockNumber = parseInt(blockNumber, 10);
      const hexBlockNumber = decimalBlockNumber.toString(16);

      const selectedBlock = blockData.find((b) => b.number === `0x${hexBlockNumber}`);

      if (selectedBlock) {
        setBlock(selectedBlock);
      }
    }

  }, [blockNumber]);

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
        {block ? (
          <>
            {/* <div className="flex my-10">
              <Link to={`/block/${blockNumber}/overview`} className="button light w-inline-block">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                </svg>
                <span className="ms-3">Overview</span>
              </Link>
              <Link to={`/block/${blockNumber}/transactions`} className="button light w-inline-block">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                  <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.89-2-2-2m0 16H5V7h14zm-2-7H7v-2h10zm-4 4H7v-2h6z"></path>
                </svg>
                <span className="ms-3">Transactions</span>
              </Link>
            </div> */}
            <Routes>
              <Route path="/" element={<BlockOverview item={block} />} />
            </Routes>
            <Routes>
              <Route path="/overview" element={<BlockOverview item={block} />} />
            </Routes>
            <Routes>
              <Route path="/transactions" element={<BlockTransactions item={block} />} />
            </Routes>
          </>
        ) : (
          <p>Block {blockNumber} not found.</p>
        )}
      </div>
      <Footer />
    </>
  )
}