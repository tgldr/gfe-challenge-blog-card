import React from "react";

export default function Tag({
    text,
}: Readonly<{
    text: React.ReactNode;
}>) {
    return (
        <span className="px-[8px] py-[1px] text-sm text-green-700 bg-green-50 rounded-full border-[1px] border-green-200">
            {text}
        </span>
    );
}