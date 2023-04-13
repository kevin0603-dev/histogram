"use client";

import { Loading } from "@/components/loading";
import { Area, Column } from "@ant-design/plots";

type Props = {
  data?: {
    time: number;
    count: number;
  }[];
};

export const EventsPerDay: React.FC<Props> = ({ data }) => {
  const day = new Date();
  day.setUTCDate(day.getUTCDate() - 30);
  const series = [];
  while (day.getTime() <= new Date().getTime()) {
    const usage = data?.find((u) => {
      return new Date(u.time).toDateString() === day.toDateString();
    });
    series.push({
      time: day.toDateString(),
      usage: usage?.count ?? 0,
    });
    day.setUTCDate(day.getUTCDate() + 1);
  }
  if (!data) {
    return (
      <div className="inset-0 flex items-center justify-center">
        <Loading />
      </div>
    );
  }
  return (
    <Column
      theme="dark"
      autoFit={true}
      data={series}
      padding={[40, 40, 30, 40]}
      xField="time"
      yField="usage"
      color="#e5e5e5"
      xAxis={{
        tickCount: 3,
      }}
      yAxis={{
        tickCount: 3,
        label: {
          formatter: (v: string) =>
            Intl.NumberFormat(undefined, { notation: "compact" }).format(Number(v)),
        },
      }}
      tooltip={{
        formatter: (datum) => ({
          name: "Events",
          value: Intl.NumberFormat(undefined, { notation: "compact" }).format(Number(datum.usage)),
        }),
      }}
    />
  );
};

export const CumulativeEventsPerDay: React.FC<Props> = ({ data }) => {
  const day = new Date();
  day.setUTCDate(day.getUTCDate() - 30);
  let usage = 0;
  const series = [];
  while (day.getTime() <= new Date().getTime()) {
    const d = data?.find((u) => {
      return new Date(u.time).toLocaleDateString() === day.toLocaleDateString();
    });

    usage += d?.count ?? 0;
    series.push({
      time: day.toDateString(),
      usage,
    });
    day.setUTCDate(day.getUTCDate() + 1);
  }
  if (!data) {
    return (
      <div className="flex items-center justify-center w-full h-full">
        <Loading />
      </div>
    );
  }

  return (
    <Area
      theme="dark"
      autoFit={true}
      data={series}
      smooth={true}
      padding={[40, 40, 30, 40]}
      xField="time"
      yField="usage"
      color="#e5e5e5"
      areaStyle={() => {
        return {
          fill: "l(270) 0:#000 1:#e5e5e5",
        };
      }}
      xAxis={{
        tickCount: 3,
      }}
      yAxis={{
        tickCount: 3,
        label: {
          formatter: (v: string) =>
            Intl.NumberFormat(undefined, { notation: "compact" }).format(Number(v)),
        },
      }}
      tooltip={{
        formatter: (datum) => ({
          name: "Events",
          value: Intl.NumberFormat(undefined, { notation: "compact" }).format(Number(datum.usage)),
        }),
      }}
    />
  );
};

export const CumulativeEventsPerHour: React.FC<Props> = ({ data }) => {
  const day = new Date();
  day.setUTCDate(day.getUTCDate() - 30);
  let usage = 0;
  const series = [];
  while (day.getTime() <= new Date().getTime()) {
    const d = data?.find((u) => {
      return new Date(u.time).toLocaleDateString() === day.toLocaleDateString();
    });

    usage += d?.count ?? 0;
    series.push({
      time: day.toDateString(),
      usage,
    });
    day.setUTCHours(day.getUTCHours() + 1);
  }
  if (!data) {
    return (
      <div className="flex items-center justify-center w-full h-full">
        <Loading />
      </div>
    );
  }

  return (
    <Area
      theme="dark"
      autoFit={true}
      data={series}
      smooth={true}
      padding={[40, 40, 30, 40]}
      xField="time"
      yField="usage"
      color="#e5e5e5"
      areaStyle={() => {
        return {
          fill: "l(270) 0:#000 1:#e5e5e5",
        };
      }}
      xAxis={{
        tickCount: 3,
      }}
      yAxis={{
        tickCount: 3,
        label: {
          formatter: (v: string) =>
            Intl.NumberFormat(undefined, { notation: "compact" }).format(Number(v)),
        },
      }}
      tooltip={{
        formatter: (datum) => ({
          name: "Events",
          value: Intl.NumberFormat(undefined, { notation: "compact" }).format(Number(datum.usage)),
        }),
      }}
    />
  );
};
