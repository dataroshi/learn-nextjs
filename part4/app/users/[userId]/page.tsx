import React from 'react';
import getUser from "@/lib/getUser";
import getUserPosts from "@/lib/getUserPosts";
import {Suspense} from "react";
import type {Metadata} from "next";
import UserPosts from "@/app/users/[userId]/components/UserPosts";

type Params = {
    params: {
        userId: string
    }
}

export async function generateMetadata({ params : {userId}}:Params): Promise<Metadata> {
    const userData: Promise<User> = getUser(userId); // no duplication
    const user: User = await userData;
    return {
        title: user.name,
        description: `This is the page of ${user.name}`
    }
}

const User = async ({ params: { userId}}: Params) => {
    const userData: Promise<User> = getUser(userId); // no duplication
    const userPostsData: Promise<Post[]> = getUserPosts(userId);

    // const [user, userPosts] = await Promise.all([userData, userPostsData]);
    const user = await userData;
    return (
        <>
            <h2>{user.name}</h2>
            <br />
            <Suspense fallback={<h2>Loading posts</h2>}/>
            {/*<UserPosts posts={userPosts} />*/}
            {/* @ts-expect-error Server Component */}
            <UserPosts promise={userPostsData} />
        </>
    );
};

export default User;