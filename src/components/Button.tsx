'use client';
import React from "react";

export default function Button({
    children,
    onClick,
    className = "",
    icon,
}: Readonly<{
    children: React.ReactNode;
    onClick: () => void;
    className?: string;
    icon?: React.ReactNode;
}>) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`inline-flex items-center gap-[6px] rounded-[4px] focus:outline-none focus:shadow-focus ${className}`}
        >
            <span className="font-medium text-indigo-700 hover:text-indigo-800 focus:text-indigo-800 text-sm md:text-base px-[2px]">{children}</span>
            {icon && icon}
        </button>
    );
}