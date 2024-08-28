import React, { FC } from 'react'

interface ContainerProps {
    children: React.ReactNode;
    className?: string;
}

const Container = ({ children, className }: ContainerProps) => {
    return (
        <section className={`w-screen h-screen max-h-screen relative  ${className}`}>
            <div className='w-5/6 mx-auto h-full'>
                {children}
            </div>
        </section>
    )
}

export default Container