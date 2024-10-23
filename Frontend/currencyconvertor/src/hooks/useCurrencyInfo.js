import { useState, useEffect } from "react";

import React from "react";

const useCurrencyInfo = (currency) => {
  const [data, setData] = useState({});
  useEffect(async () => {
    let url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`;
    const response = await fetch(url);
    console.log(response);

    // .then((res) => res.json())
    // .then((res) => setData(res[currency]));

    // console.log(json);
  }, [data]);

  return data;
};

export default useCurrencyInfo;
