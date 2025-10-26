"use client";

import { Container, Nav } from "@/components/ds";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

export const Navbar = () => {
    const isMobile = useIsMobile();
    const navbarItems = [
        {
            label: "Handling bag ordene",
            href: "/handling-bag-ordene",
        },
        {
            label: "Vores mission",
            href: "/vores-mission",
        },
        {
            label: "Kontakt os",
            href: "/kontakt-os",
        },
    ];

    return (
        <header className="border-b">
            <Nav>
                <div>
                    {isMobile ? (
                        <div className="flex items-center justify-between ">
                            <div>
                                <Link
                                    href="/"
                                    className="text-muted-foreground hover:text-primary text-sm">
                                    Under Samme Sol
                                </Link>
                            </div>
                            <div
                                className="flex items-center gap-1"
                                suppressHydrationWarning={true}>
                                <Button size="sm">Støt projektet</Button>
                                <Sheet>
                                    <SheetTrigger asChild>
                                        <Button size="icon" variant={"ghost"}>
                                            <Menu />
                                        </Button>
                                    </SheetTrigger>
                                    <SheetContent>
                                        <SheetHeader>
                                            <SheetTitle>Navigation</SheetTitle>
                                        </SheetHeader>

                                        <div className="flex flex-col gap-2 mt-4">
                                            {navbarItems.map((item) => (
                                                <Button
                                                    key={item.href}
                                                    variant="ghost"
                                                    size="default">
                                                    <Link href={item.href}>
                                                        {item.label}
                                                    </Link>
                                                </Button>
                                            ))}
                                            <Separator className="my-2" />
                                            <div
                                                className="flex flex-col gap-2"
                                                suppressHydrationWarning={true}>
                                                <Button
                                                    variant="default"
                                                    size="default">
                                                    Støt projektet
                                                </Button>
                                            </div>
                                        </div>
                                    </SheetContent>
                                </Sheet>
                            </div>
                        </div>
                    ) : (
                        <div className="flex items-center justify-between">
                            <Link
                                href="/"
                                className="text-muted-foreground hover:text-primary text-base font-bold">
                                Under Samme Sol
                            </Link>

                            <div className="flex items-center gap-4">
                                <ul className="flex gap-4 text-base text-muted-foreground">
                                    {navbarItems.map((item) => (
                                        <li key={item.href}>
                                            <Link href={item.href}>
                                                {item.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div
                                className="flex items-center gap-2"
                                suppressHydrationWarning={true}>
                                <Button
                                    size="default"
                                    className="cursor-pointer">
                                    Støt projektet
                                </Button>
                            </div>
                        </div>
                    )}
                </div>
            </Nav>
        </header>
    );
};
