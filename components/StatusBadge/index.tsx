import React from "react";

type Props = {
  color: string;
  title: string;
};

const StatusBadge = ({ color, title }: Props) => {
  return (
    <span
      className={`${color} text-white text-[12px] font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-${color}-200 dark:text-${color}-800`}
    >
      {title}
    </span>
  );
};

export default StatusBadge;
