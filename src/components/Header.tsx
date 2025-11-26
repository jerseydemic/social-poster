import { Bell, Search } from "lucide-react";

export function Header() {
    return (
        <header className="h-16 border-b border-white/10 bg-black/20 backdrop-blur-md sticky top-0 z-40 flex items-center justify-between px-8 ml-64">
            <div className="flex items-center gap-4 w-96">
                <div className="relative w-full group">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 group-focus-within:text-indigo-400 transition-colors" />
                    <input
                        type="text"
                        placeholder="Search posts..."
                        className="w-full bg-white/5 border border-white/10 rounded-full py-2 pl-10 pr-4 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all"
                    />
                </div>
            </div>

            <div className="flex items-center gap-6">
                <button className="relative text-zinc-400 hover:text-white transition-colors">
                    <Bell className="w-5 h-5" />
                    <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full ring-4 ring-black" />
                </button>
                <div className="flex items-center gap-3 pl-6 border-l border-white/10">
                    <div className="text-right hidden sm:block">
                        <p className="text-sm font-medium text-white">Alex Designer</p>
                        <p className="text-xs text-zinc-500">alex@example.com</p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-zinc-800 border border-white/10 overflow-hidden">
                        {/* Placeholder avatar */}
                        <div className="w-full h-full bg-gradient-to-br from-zinc-700 to-zinc-800 flex items-center justify-center text-xs font-bold text-zinc-400">
                            AD
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
