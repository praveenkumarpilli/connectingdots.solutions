import React from 'react'


interface BannerProps {
    children: React.ReactNode;
    className?: string;
}

const Banner = ({ children, className }: BannerProps) => {
    return (
        <div className={`${className}`}>
            {children}
        </div>
    )
}

export default Banner