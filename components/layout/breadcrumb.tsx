"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Fragment } from "react";
import { navigation } from "./sidebar";

export function Breadcrumbs() {
    const pathname = usePathname();

    if (pathname === "/") return null; // No breadcrumb on home

    // Let's find the matching leaf node and its parent
    let parentGroup: typeof navigation[0] | undefined;
    let currentItem: typeof navigation[0]["items"][0] | undefined;

    for (const group of navigation) {
        if (group.href === pathname) {
            parentGroup = group;
            break;
        }
        for (const item of group.items) {
            if (pathname === item.href || pathname.startsWith(`${item.href}/`)) {
                parentGroup = group;
                currentItem = item;
                break;
            }
        }
        if (parentGroup) break;
    }

    if (!parentGroup) return null;

    return (
        <Breadcrumb className="hidden md:flex">
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                        <Link href="/">Ana Sayfa</Link>
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />

                <BreadcrumbItem>
                    {currentItem ? (
                        <BreadcrumbLink asChild>
                            <span className="cursor-default">{parentGroup.name}</span>
                        </BreadcrumbLink>
                    ) : (
                        <BreadcrumbPage>{parentGroup.name}</BreadcrumbPage>
                    )}
                </BreadcrumbItem>

                {currentItem && (
                    <Fragment>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>{currentItem.name}</BreadcrumbPage>
                        </BreadcrumbItem>
                    </Fragment>
                )}
            </BreadcrumbList>
        </Breadcrumb>
    );
}
