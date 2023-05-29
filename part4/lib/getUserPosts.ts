export default async function getUserPosts(userId: String) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
        {next: {revalidate: 60 }});

    if (!res.ok) {
        throw new Error('Failed fetch user posts');
    }
    return res.json();
}