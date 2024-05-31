import React from "react";

type TPropsWithIcon = {
  children: React.ReactNode;
  total: string;
  label: string;
};

export default function ItemWithIcon({
  children,
  label,
  total,
}: TPropsWithIcon) {
  return (
    <div className="flex-col flex gap-2">
      {children}
      <p className="text-base text-gray-500">
        <span className="text-cyan-600 font-semibold">{total}</span> {label}
      </p>
    </div>
  );
}
