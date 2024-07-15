"use client";
import Link from "next/link";

import { Archive, DoorOpen, LayoutGrid, Library, User } from "lucide-react";
import { Command, CommandGroup, CommandItem, CommandList } from "@/@/components/ui/command";

const menuList = [
    {
        group: "General",
        items: [
            {
                link: "/dashboard",
                text: "Dashboard",
                icon: LayoutGrid,
            },

            {
                link: "/dashboard/management",
                text: "Management",
                icon: Library,
            },
            {
                link: "/dashboard/submissions",
                text: "Submissions",
                icon: Archive,
            },
        ],
    },
    {
        group: "Manager",
        items: [
            {
                link: "/settings/profile",
                text: "Profile",
                icon: User,
            },

            {
                link: "/logout",
                text: "Logout",
                icon: DoorOpen,
            },
        ],
    },
];

const SideBar = () => {
    return (
        <div className="hidden md:block w-[300px] min-w[300px] border-gray-200 border-solid  border-r-2 min-h-screen p-4 bg-white">
            <Command className="h-[300px] flex flex-col gap-2 bg-transparent">
                <CommandList>
                    {menuList.map((menu, key) => (
                        <CommandGroup key={key} heading={menu.group}>
                            {menu.items.map((option, optionKey) => (
                                <Link href={option.link} key={optionKey}>
                                    <CommandItem
                                        key={optionKey}
                                        className="flex  gap-2 cursor-pointer hover:text-green-600"
                                    >
                                        <option.icon className="h-4 w-4 " />
                                        {option.text}
                                    </CommandItem>
                                </Link>
                            ))}
                        </CommandGroup>
                    ))}
                </CommandList>
            </Command>
        </div>
    );
};

export default SideBar;
