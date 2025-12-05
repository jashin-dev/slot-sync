import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { PenBox } from "lucide-react";

function Header() {
  return (
    <nav className="px-4 py-2 flex justify-between items-center bg-gray-400">
      <Link href="/">
        <Image
          src="/sync-slot-nav-logo.png"
          alt="SyncSlot Logo"
          height={100}
          width={100}
          className="h-30 w-30 -mt-4"
        />
      </Link>
      <div className="flex gap-2 -mt-7.5">
        <Link href="/events?create=true">
          <Button variant="default">
            <PenBox />
            <span className="hidden sm:inline">Create Event</span>
          </Button>
        </Link>
        <Button variant="default">Login</Button>
      </div>
    </nav>
  );
}

export default Header;
