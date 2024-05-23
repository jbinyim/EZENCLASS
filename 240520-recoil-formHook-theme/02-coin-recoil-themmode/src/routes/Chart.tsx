import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";
import ApexCharts from "react-apexcharts";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "../atoms";

interface ChartProps {
  coinId?: string;
}

interface IHistory {
  time_open: number;
  time_close: number;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
  market_cap: number;
}

const Chart = ({ coinId }: ChartProps) => {
  const isDark = useRecoilValue(isDarkAtom);
  const { isLoading, data } = useQuery<IHistory[]>(
    ["coinHistory", coinId],
    () => fetchCoinHistory(coinId)
  );

  return (
    <div>
      {isLoading ? (
        "Loading chart..."
      ) : (
        <ApexCharts
          type="line"
          series={[
            {
              name: "price",
              data: data?.map((price) => parseFloat(price.close)) || [],
            },
          ]}
          options={{
            chart: {
              width: 500,
              height: 500,
              toolbar: {
                show: false,
              },
              background: "#000",
            },
            grid: {
              show: true,
            },
            theme: {
              mode: isDark ? "dark" : "light",
            },
            stroke: {
              width: 5,
            },
            fill: {
              type: "gradient",
              gradient: {
                gradientToColors: ["blue"],
              },
              colors: ["red"],
            },
            xaxis: {
              labels: {
                show: true,
              },
              axisBorder: {
                show: true,
              },
              axisTicks: {
                show: true,
              },
            },
            yaxis: {
              labels: {
                show: true,
              },
            },
          }}
        />
      )}
    </div>
  );
};

export default Chart;
