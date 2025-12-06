"use client";

import React from "react";
import { UserButton } from "@clerk/nextjs";
import { Calendar } from "lucide-react";

function UserMenu() {
  return (
    <>
      <UserButton
        appearance={{
          elements: {
            userButtonAvatarBox: { width: "35px", height: "35px" },
          },
        }}
      >
        <UserButton.MenuItems>
          <UserButton.Link
            label="My Events"
            href="/events"
            labelIcon=<Calendar className="h-3 w-3 mx-auto" />
          />
          <UserButton.Action label="manageAccount" />
        </UserButton.MenuItems>
      </UserButton>
    </>
  );
}

export default UserMenu;
