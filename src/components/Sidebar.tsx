"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Upload, GitFork, Users, Share2 } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
    { icon: LayoutDashboard, label: "Dashboard", href: "/" },
    { icon: Upload, label: "New Post", href: "/upload" },
    { icon: GitFork, label: "Workflows", href: "/workflows" },
    { icon: Users, label: "Accounts", href: "/settings" },
];

export function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="w-64 border-r border-white/10 bg-black/20 backdrop-blur-xl h-screen fixed left-0 top-0 z-50 flex flex-col">
            <div className="p-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center shadow-lg shadow-indigo-500/20">
                    <Share2 className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
                    OmniPost
                </span>
            </div>

            <nav className="flex-1 px-4 py-6 space-y-2">
                {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group",
                                isActive
                                    ? "bg-white/10 text-white shadow-inner"
                                    : "text-zinc-400 hover:text-white hover:bg-white/5"
                            )}
                        >
                            <item.icon
                                className={cn(
                                    "w-5 h-5 transition-colors",
                                    isActive ? "text-indigo-400" : "text-zinc-500 group-hover:text-indigo-300"
                                )}
                            />
                            <span className="font-medium">{item.label}</span>
                        </Link>
                    );
                })}
            </nav>

            <div className="p-4 border-t border-white/5">
                <div className="p-4 rounded-xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-white/5">
                    <h4 className="text-sm font-medium text-white mb-1">Pro Plan</h4>
                    <p className="text-xs text-zinc-400 mb-3">Unlimited posts & analytics</p>
                    <button className="w-full py-2 text-xs font-medium bg-white text-black rounded-lg hover:bg-zinc-200 transition-colors">
                        Upgrade Now
                    </button>
                </div>
            </div>
        </aside>
    );
}
