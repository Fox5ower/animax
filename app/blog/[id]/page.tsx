import { Metadata } from "next";

async function getData(id: string) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        next: {
            revalidate: 60,
        },
    });

    return response.json();
}


interface IProps {
    params: {
        // By the name of folder in [] (this case id)
        id: string;
    }
}

export async function generateMetadata({ params: {id} }: IProps): Promise<Metadata> {
    const post = await getData(id);
    return {
        title: post.title,
    };
}

export default async function Post({ params: {id} }: IProps) {
    const post = await getData(id);
    console.log(post);
    return (
        <div className="post-container">
            <h1>
                {post.title}
            </h1>
            <p>
                {post.body}
            </p>
        </div>
    );
}