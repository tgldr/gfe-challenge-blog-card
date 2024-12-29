'use client';
import Image from "next/image";
import React from "react";
import Tag from "./Tag";
import Button from "./Button";
import RightArrow from "./RightArrow";

export default function Card({
    title,
    description,
    image,
    tags,
}: Readonly<{
    title: string;
    description: string;
    image: string;
    tags: string[];
}>) {
    return (
        <div className="w-full max-w-[340px] flex flex-col bg-white rounded-lg shadow overflow-hidden">
            <Image
                className="h-[288px] object-cover"
                src={image}
                width={340}
                height={288}
                alt={title}
            />
            <div className="flex flex-col gap-[12px] py-[24px] px-[16px]">
                <div className="flex flex-col gap-[8px]">
                    <div className="flex items-center">
                        {tags.map((tag) => (
                            <Tag key={tag} text={tag} />
                        ))}
                    </div>
                    <h2 className="text-lg font-bold text-neutral-900">{title}</h2>
                </div>
                <div className="flex flex-wrap gap-[24px]">
                    <p className="block font-medium text-md text-neutral-600">{description}</p>
                    <Button onClick={() => alert('clicked')} icon={<RightArrow />}>Read more</Button>
                </div>
            </div>
        </div >
    );
}