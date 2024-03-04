import LineChart from "../components/LineChart";
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { BarChart } from "../components/BarChart";
import AreaChart from "../components/AreaChart";

export const Analytics = () => {

  const TransactionChartData = [
    {
      name: "User Transactions",
      data: [2600, 2180, 3900, 3068, 1870]
    },
  ];

  const TransactionChartOptions: any = {
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

  const TPSChartData = [
    {
      name: "",
      data: [0.00715, 0.00598, 0.01640, 0.01606, 0.02840, 0.00140]
    },
  ];

  const TPSChartOptions: any = {
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
          if (value >= 1) {
            return value;
          }
          return 0;
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

  const DailyAccountsChartData = [
    {
      name: "",
      data: [125, 114, 110, 1123, 1103, 1104, 7]
    }
  ]

  const NewAccountsChartData = [
    {
      name: "",
      data: [4, 3, 3, 3, 0, 3, 0]
    }
  ]

  const DeployedScriptsChartData = [
    {
      name: "",
      data: [0, 0, 0, 0, 0, 0, 0]
    }
  ]

  const GasChartData = [
    {
      name: "",
      data: [12978000, 10857000, 10563000, 29757000, 29148000, 51534000, 483000]
    }
  ]

  const GasChartOptions: any = {
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
          return value / 1000000 + 'M';
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
  }

  const AverageGasData = [
    {
      name: "",
      data: [0.000001, 0.000001, 0.000001, 0.000001, 0.000001, 0.000001, 0.000002]
    }
  ]

  const AverageGasChartOptions: any = {
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
        return index % 2 === 0 ? value : "";
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
          return 0;
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
  }

  return (
    <div>
      <div className="main-container w-container">
        <Header />
        <div style={{ marginTop: '25px' }}>
          <input className="w-input" type="text"
            style={{
              width: '100%',
              padding: '22px 22px',
              fontSize: '18px',
              border: '1px solid #ffa2001f',
              color: 'white',
              backgroundColor: 'transparent'
            }}
            placeholder="Search Explorer"
          />
        </div>

        <div className="grid grid-cols-4 gap-4" style={{ marginTop: '25px', marginBottom: '35px' }}>
          <div className="cta-card col">
            <div className="pricing-crown">
              <div className="plan-title">
                <div className="pricing-detail"><strong>Total Supply</strong></div>
              </div>
              <div className="price-wrapper-month">
                <h3 className="price-text" style={{ marginBottom: '0px' }}>10,030,962</h3>
              </div>
            </div>
          </div>
          <div className="cta-card col">
            <div className="pricing-crown">
              <div className="plan-title">
                <div className="pricing-detail"><strong>Latest Block Number</strong></div>
              </div>
              <div className="price-wrapper-month">
                <div>
                  <h3 className="price-text" style={{ marginBottom: '0px' }}>2,854</h3>
                </div>
                <div>
                  <h3 className="price-text" style={{ marginBottom: '0px' }}>Next</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="cta-card col">
            <div className="pricing-crown">
              <div className="plan-title">
                <div className="pricing-detail"><strong>Max Supply</strong></div>
              </div>
              <div className="price-wrapper-month">
                <h3 className="price-text" style={{ marginBottom: '0px' }}>21,000,000 MAZ</h3>
              </div>
            </div>
          </div>
          <div className="cta-card col">
            <div className="pricing-crown">
              <div className="plan-title">
                <div className="pricing-detail"><strong>Active Validators</strong></div>
              </div>
              <div className="price-wrapper-month">
                <h3 className="price-text" style={{ marginBottom: '0px' }}>1</h3>
              </div>
            </div>
          </div>


        </div>

        <div>
          <details className="custom-select">
            <summary className="radios">
              <input type="radio" name="item" id="item1" title="Last 7 days" checked />
              <input type="radio" name="item" id="item2" title="Last 30 days" />
            </summary>
            <ul className="list">
              <li>
                <label htmlFor="item1">
                  Last 7 days
                  <span></span>
                </label>
              </li>
              <li>
                <label htmlFor="item2">Last 30 days</label>
              </li>
            </ul>
          </details>
        </div>

        <div className="grid grid-cols-4 gap-4 mt-5">
          <div className="cta-card col" style={{ padding: '0' }}>
            <div className="pt-3 ps-3">
              <span>User Transactions</span>
            </div>
            <LineChart
              chartData={TransactionChartData}
              chartOptions={TransactionChartOptions}
            />
          </div>
          <div className="cta-card col" style={{ padding: '0' }}>
            <div className="pt-3 ps-3">
              <span>TPS</span>
            </div>
            <LineChart
              chartData={TPSChartData}
              chartOptions={TPSChartOptions}
            />
          </div>
          <div className="cta-card col" style={{ padding: '0' }}>
            <div className="pt-3 ps-3">
              <span>Daily Active Accounts</span>
            </div>
            <BarChart
              chartData={DailyAccountsChartData}
              chartOptions={TPSChartOptions}
            />
          </div>
          <div className="cta-card col" style={{ padding: '0' }}>
            <div className="pt-3 ps-3">
              <span>New Accounts Created</span>
            </div>
            <BarChart
              chartData={NewAccountsChartData}
              chartOptions={TPSChartOptions}
            />
          </div>
          <div className="cta-card col" style={{ padding: '0' }}>
            <div className="pt-3 ps-3">
              <span>Deployed Scripts</span>
            </div>
            <BarChart
              chartData={DeployedScriptsChartData}
              chartOptions={TPSChartOptions}
            />
          </div>
          <div className="cta-card col" style={{ padding: '0' }}>
            <div className="pt-3 ps-3">
              <span>Gas Consumption</span>
            </div>
            <AreaChart
              chartData={GasChartData}
              chartOptions={GasChartOptions}
            />
          </div>
          <div className="cta-card col" style={{ padding: '0' }}>
            <div className="pt-3 ps-3">
              <span>Average Gas Unit Price</span>
            </div>
            <AreaChart
              chartData={AverageGasData}
              chartOptions={AverageGasChartOptions}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}