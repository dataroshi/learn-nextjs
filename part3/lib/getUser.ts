export default async function getUser(userId: String) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);

    if (!res.ok) {
        throw new Error('Failed fetch user');
    }
    return res.json();
}