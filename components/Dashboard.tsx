"use client"

import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";
import { Button } from "./ui/button";
export default function Dashboard() {
    const {data: session} = useSession();
    
    return (
        <>
            {session ? (
                <>
                    <img src={session.user?.image as string} alt="Failed" className="rounded-full h-20 w-20" />
                    <h1 className="text-3xl text-green-700 font-bold">
                        Welcome, {session.user?.name}
                    </h1>
                    <p className="text-2xl font-semibold">{session.user?.email}</p>
                    <Button
                            variant="default"
                            size="lg"
                            onClick={()=>signOut({callbackUrl: "/"})}
                            className="border border-black rounded-lg bg-orange-500"
                        >
                            Sign out
                        </Button>
                </>
            ):(
                <>
                    <h1 className="text-3xl text-red-600 font-bold">You're not logged in!</h1>
                    <div className="flex space-x-5">
                        <Button
                            variant="outline"
                            size="lg"
                            onClick={()=>signIn("github")}
                            className="border border-black rounded-lg px-5 py-1 bg-gray-700 text-white"
                        >
                            Sign in with Github
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            onClick={()=>signIn("google")}
                            className="border border-black rounded-lg bg-green-700 text-white"
                        >
                            Sign in with Google
                        </Button>
                    </div>
                </>
            )}
        </>
    );
}