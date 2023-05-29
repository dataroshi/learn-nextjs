import React from 'react';
import Link from "next/link";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'about meta',
    description: 'this is my about meta',
};
const About = () => {
    // throw new Error('broken...');
    return (
        <>
            <h1>About</h1>
            <Link href="/">back to home</Link>
        </>
    );
};

export default About;
