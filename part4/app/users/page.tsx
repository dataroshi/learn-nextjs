import React from 'react';
import type {Metadata} from "next";
import getAllUsers from "@/lib/getAllUsers";
import Link from "next/link";

export const metadata: Metadata = {
    title: 'Users'
}
const Users = async () => {
    const usersData: Promise<User[]> = getAllUsers();
    const users = await usersData;

    console.log('hello user')

    const content = (
        <section>
            <h2>
                <Link href="/">return home</Link>
            </h2>
            <br/>
            {users.map(user => {
                return (
                    <>
                        <p key={user.id}>
                            <Link href={`/users/${user.id}`}>{user.name}</Link>
                        </p>
                        <br/>
                    </>
                )
            })}
        </section>
    );
    return content;
};

export default Users;