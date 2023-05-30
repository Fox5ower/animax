import Link from "next/link";
import React, { ReactElement } from "react";

export default function Header(): ReactElement {
    return (
        <header>
            <Link href="/">
                Home
            </Link>
            <Link href="/blog">
                Blog
            </Link>
            <Link href="/about">
                About
            </Link>
        </header>
    );
};