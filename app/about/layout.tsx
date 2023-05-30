import Link from "next/link";
import { ReactNode } from "react";

export default function AboutLayout({
    children,
}: {
    children: ReactNode;
}) {
    return (
        <div>
            <h1>
                About Us
            </h1>
            <ul>
                <li>
                    <Link href="/about/contacts">
                        Contacts
                    </Link>
                </li>
                <li>
                    <Link href="/about/team">
                        Team
                    </Link>
                </li>
            </ul>
            {children}
        </div>
    );
}