import React from "react";

type RightArrowProps = React.SVGProps<SVGSVGElement>

export default function RightArrow(props: RightArrowProps) {
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                d="M13.4763 9.16658L9.00633 4.69657L10.1848 3.51807L16.6667 9.99992L10.1848 16.4817L9.00633 15.3032L13.4763 10.8332H3.33333V9.16658H13.4763Z"
                fill="#4338CA" />
        </svg>
    );
}