"use client";

import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import { ModeToggle } from "../components/ui/toggle-button";
import { Zap } from "lucide-react"
import Link from "next/link"

export function Appbar() {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 p-4 w-full">
     
      <div className="flex items-center gap-2 flex-shrink-0">
        <Zap className="h-6 w-6 text-emerald-500" />
        <span className="text-xl font-bold">BetterUptime</span>
      </div>

      <nav className="flex flex-wrap justify-center gap-17 flex-1 min-w-[200px]">
        <Link href="#features" className="text-sm font-medium hover:text-primary">
          Features
        </Link>
        <Link href="#how-it-works" className="text-sm font-medium hover:text-primary">
          How It Works
        </Link>
        <Link href="#pricing" className="text-sm font-medium hover:text-primary">
          Pricing
        </Link>
        <Link href="#testimonials" className="text-sm font-medium hover:text-primary">
          Testimonials
        </Link>
      </nav>

      {/* Auth and Toggle Section */}
      <div className="flex items-center gap-2 flex-shrink-0">
        <ModeToggle />
        <SignedOut>
          <SignInButton />
          <SignUpButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
}
