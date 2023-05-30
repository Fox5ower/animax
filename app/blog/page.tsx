import { Metadata } from "next";
import Link from "next/link";

async function getData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        next: {
            revalidate: 60,
        },
    });

    if (!response.ok) {
        throw new Error('Unable to fetch posts');
    }

    return response.json();
}

export const metadata: Metadata = {
    title: "Blop | Animax",
};

export default async function Blog() {
    const posts = await getData();
    return (
        <div className="blog-container">
            <h1>
                Blog Page
            </h1>
            <div className="posts-container">
                {posts.map((post: any) => (
                    <Link key={post.id} href={`blog/${post.id}`} className="post-link">
                        {post.title}
                    </Link>
                ))}
            </div>
        </div>
    );
}