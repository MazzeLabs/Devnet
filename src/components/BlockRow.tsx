import { useEffect, useState } from "react";

type BlockRowType = {
  blcok: any
}

export const BlockRow = ({ blcok }: BlockRowType) => {
  const [blockNumber, setBlockNumber] = useState<string>();
  const [disHash, setDisHash] = useState<string>();
  const [timeStamp, setTimeStamp] = useState<string>();

  useEffect(() => {
    const number = parseInt(blcok.number, 16).toString();

    setBlockNumber(number)
    const firstPart = blcok.hash.slice(0, 6);
    const lastPart = blcok.hash.slice(-4);

    setDisHash(`${firstPart}...${lastPart}`);

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

  }, [blcok]);


  return (
    <div className="cards p-5 my-5 md:flex">
      <span className="ms-2 flex address-label">{blockNumber}</span>
      <div className="flex mt-3 md:mt-0 mx-auto">
        <span className="mx-auto text-white">{timeStamp}</span>
      </div>
      <div className="mt-3 md:mt-0 mx-auto">
        <span className="ms-2 flex address-label ms-auto">{disHash}</span>
      </div>
      <div className="flex mt-3 md:mt-0 mx-auto">
        <span className="mx-auto text-white">{blcok.transactions.length} transactions</span>
      </div>
      <div className="flex mt-3 md:mt-0 ms-auto">
        <span className="mx-auto text-white">{parseInt(blcok.baseFeePerGas, 16) / 1000000000} Gmazzy</span>
      </div>
    </div>
  )
}