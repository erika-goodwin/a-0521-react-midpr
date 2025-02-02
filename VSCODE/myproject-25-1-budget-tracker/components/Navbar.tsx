"use client";
import React from "react";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { UserButton } from "@clerk/nextjs";
import { ThemeSwitcherBtn } from "./ThemeSwitcherBtn";

function Navbar() {
  return (
    <>
      <DesktopNavbar />
      <MobileNavbar />
    </>
  );
}

const items = [
  { label: "Dashboard", link: "/" },
  { label: "Transactions", link: "/transactions" },
  { label: "Manage", link: "maange" },
];

// FROM HERE
function MobileNavbar() {
  return (
    <div className="flex border-separate border-b bg-background md:hidden">
      <nav className="container flex items-center justify-between px-8">
        <Logo />
        <ThemeSwitcherBtn />
      </nav>
    </div>
  );
}

function DesktopNavbar() {
  return (
    <div className="hidden border-separate border-b bg-background md:block">
      <nav className="container flex items-center justify-between px-8">
        <div className="flex h-[80px] min-h-[80px] items-center gap-x-4">
          <Logo />
          <div className="flex h-full">
            {items.map((item) => (
              <NavbarItem
                key={item.label}
                label={item.label}
                link={item.link}
              />
            ))}
          </div>
          <div className="flex items-center gap-2">
            <ThemeSwitcherBtn />
            <UserButton afterSignOutUrl="/sign-in" />
          </div>
        </div>
      </nav>
    </div>
  );
}

function NavbarItem({ label, link }: { label: string; link: string }) {
  const pathName = usePathname();
  const isActive = pathName === link;

  return (
    <div className="relative flex items-center">
      <Link
        href={link}
        className={cn(
          buttonVariants(
            { variant: "ghost" },
            "w-full justify-start text-lg text-muted-foregroud hover:text-foreground",
            isActive && "text-foreground"
          )
        )}
      >
        {label}
      </Link>
      {isActive && (
        <div className="absolute -bottom-[2px] left-1/2 hidden h-[2px] w-[80%] -translate-x-1/2 rounded-xl bg-foreground md:block" />
      )}
    </div>
  );
}

export default Navbar;
