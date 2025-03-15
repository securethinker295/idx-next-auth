'use client';

import { useSession } from "next-auth/react";
import { SignInButton, SignOutButton, UserProfile } from "./auth";

export default function AuthStatus() {
  const { data: session, status } = useSession();
  const isLoading = status === "loading";

  if (isLoading) {
    return (
      <div className="flex justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (session) {
    return (
      <div className="space-y-8">
        <UserProfile />
        <SignOutButton />
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <p className="text-gray-600 mb-4">
        You are not signed in
      </p>
      <SignInButton />
    </div>
  );
}