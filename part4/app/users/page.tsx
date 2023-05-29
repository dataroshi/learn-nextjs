import React from 'react';
import type {Metadata} from "next";
import getAllUsers from "@/lib/getAllUsers";
import Link from "next/link";
import User from "@/app/users/[userId]/page";

export const metadata: Metadata = {
    title: 'Users'
}

const Users = async () => {
    const usersData: Promise<User[]> = getAllUsers();
    const users = await usersData;

    console.log('hello user')

    return (
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
};

export default Users;