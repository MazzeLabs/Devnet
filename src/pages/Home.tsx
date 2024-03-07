import { useEffect } from "react";
import { Header } from "../components/Header"
import LineChart from "../components/LineChart";
import accounts from "../data/accounts.json";
import blocks from "../data/blocks.json";
import transactions from "../data/transactions.json";
import { Block } from "../components/Block";
import { Transaction } from "../components/Txn";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";

export const Home = () => {

  const lineChartData = [
    {
      name: "",
      data: [2600, 2180, 3900, 3068, 1870]
    },
  ];

  const lineChartOptions: any = {
    chart: {
      toolbar: {
        show: false,
      },
      dropShadow: {
        enabled: true,
        top: 13,
        left: 0,
        blur: 10,
        opacity: 0.1,
        color: "#4318FF",
      },
    },
    colors: ["#ffa200", "#39B8FF"],
    markers: {
      size: 1,
      colors: "read",
      strokeColors: "#ffa200",
      strokeWidth: 3,
      strokeOpacity: 0.9,
      strokeDashArray: 0,
      fillOpacity: 1,
      discrete: [],
      shape: "circle",
      radius: 2,
      offsetX: 0,
      offsetY: 0,
      showNullDataPoints: true,
    },
    tooltip: {
      theme: "dark",
      enabled: false
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      type: "line",
      width: 2
    },
    xaxis: {
      type: "numeric",
      categories: ["02-22", "", "02-24", "", "02-26"],
      labels: {
        rotate: 0,
        style: {
          colors: "#A3AED0",
          fontSize: "12px",
          fontWeight: "500",
        },
      },
      formatter: function (index: number, value: string) {
        return index % 2 === 0 ? value : ""; // Hide labels for even indexes
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      }
    },
    yaxis: {
      labels: {
        style: {
          colors: "#A3AED0",
          fontSize: "12px",
          fontWeight: "500",
        },
        formatter: function (value: number) {
          if (value >= 1000) {
            return value / 1000 + 'K';
          }
          return value;
        },
      },
      show: true,
    },
    legend: {
      show: false,
    },
    grid: {
      show: false,
      row: {
        color: "#7551FF",
        opacity: 0.2,
      },
    }
  };

  const sortedTransactions = transactions.sort((a, b) => parseInt(b.blockTimestamp, 16) - parseInt(a.blockTimestamp, 16)).slice(0, 6);
  const sortedBlocks = blocks.sort((a, b) => parseInt(b.number, 16) - parseInt(a.number, 16)).slice(0, 6);
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
        <div className="grid grid-rows-2 grid-cols-3 gap-4" style={{ marginTop: '25px', marginBottom: '35px' }}>
          <div className="cta-card col">
            <div className="pricing-crown">
              <div className="plan-title">
                <div className="pricing-detail"><strong>Total Supply</strong></div>
              </div>
              <div className="price-wrapper-month">
                <h3 className="price-text" style={{ marginBottom: '0px' }}> 5,000,000,000</h3>
              </div>
            </div>
          </div>
          <div className="cta-card col">
            <div className="pricing-crown">
              <div className="plan-title">
                <div className="pricing-detail"><strong>Transactions</strong></div>
              </div>
              <div className="price-wrapper-month">
                <div>
                  <h3 className="price-text" style={{ marginBottom: '0px' }}>49,599</h3>
                </div>
                <div>
                  <h3 className="price-text" style={{ marginBottom: '0px' }}>1,000 Gmazzy</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="cta-card col row-span-2" style={{ padding: '0' }}>
            <LineChart
              chartData={lineChartData}
              chartOptions={lineChartOptions}
            />
          </div>
          <div className="cta-card col" style={{ display: 'flex', flexDirection: 'row', padding: '0' }}>
            <div className="relative">
              <div className="layer"></div>
              <div className="layer"></div>
              <div className="layer"></div>
              <div className="layer"></div>
              <div className="layer"></div>
            </div>
            <div className="relative">
              <div className="layer"></div>
              <div className="layer"></div>
              <div className="layer"></div>
              <div className="layer"></div>
              <div className="layer"></div>
            </div>
            <div className="relative">
              <div className="layer"></div>
              <div className="layer"></div>
              <div className="layer"></div>
              <div className="layer"></div>
              <div className="layer"></div>
            </div>
          </div>
          <div className="cta-card col">
            <div className="pricing-crown">
              <div className="plan-title">
                <div className="pricing-detail"><strong>Latest Block Number</strong></div>
              </div>
              <div className="price-wrapper-month">
                <div>
                  <h3 className="price-text" style={{ marginBottom: '0px' }}>{parseInt(sortedBlocks[0].number, 16)}</h3>
                </div>
                <div>
                  <h3 className="price-text" style={{ marginBottom: '0px' }}>Next</h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3>Latest Blocks</h3>
            {sortedBlocks.map(block => (
              <Block hash={block.hash} blocknumber={parseInt(block.number, 16)} timestamp={block.timestamp} txns={block.transactions.length} cdt={parseInt(block.totalTxs, 16)} />
            ))}
            <Link to="/allblocks">
              <div className="cards p-4 text-center cursor-pointer" style={{ display: 'block' }}>
                View All Blocks
              </div>
            </Link>
          </div>
          <div>
            <h3>Latest Transactions</h3>
            {sortedTransactions.map(transaction => (
              <Transaction hash={transaction.transactionHash} from={transaction.from} to={transaction.to} timestamp={transaction.blockTimestamp} gas={parseInt(transaction.gasUsed, 16)} cdt="0.006" />
            ))}
            <Link to="/alltxn">
              <div className="cards p-4 text-center cursor-pointer" style={{ display: 'block' }}>
                View All Transactions
              </div>
            </Link>
          </div>
        </div>

      </div>
      <Footer />
    </>
  )
}