"use client";

import { signIn } from "next-auth/react";
import { Facebook, Instagram, Twitter, Youtube, Linkedin, Share2 } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// Reusing icons from PlatformSelector (should ideally be in a shared file)
const TikTokIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
);

const PinterestIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.399.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.951-7.252 4.173 0 7.41 2.967 7.41 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.367 18.62 0 12.017 0z" />
    </svg>
);

interface Account {
    id: string;
    name: string;
    icon: React.ElementType;
    color: string;
    providerId?: string; // NextAuth provider ID
}

const accounts: Account[] = [
    { id: "instagram", name: "Instagram", icon: Instagram, color: "from-pink-500 to-purple-500", providerId: "facebook" }, // Instagram uses Facebook login
    { id: "tiktok", name: "TikTok", icon: TikTokIcon, color: "from-cyan-400 to-pink-500" }, // Custom provider needed
    { id: "youtube", name: "YouTube", icon: Youtube, color: "from-red-500 to-red-600", providerId: "google" },
    { id: "facebook", name: "Facebook", icon: Facebook, color: "from-blue-500 to-blue-600", providerId: "facebook" },
    { id: "twitter", name: "Twitter", icon: Twitter, color: "from-sky-400 to-sky-500", providerId: "twitter" },
    { id: "pinterest", name: "Pinterest", icon: PinterestIcon, color: "from-red-600 to-red-700" },
    { id: "linkedin", name: "LinkedIn", icon: Linkedin, color: "from-blue-600 to-blue-700", providerId: "linkedin" },
    { id: "threads", name: "Threads", icon: Share2, color: "from-zinc-100 to-zinc-300", providerId: "facebook" },
];

export default function AccountsPage() {
    // In a real app, we'd use useSession to check connection status
    // const { data: session } = useSession();

    const handleConnect = async (providerId?: string) => {
        if (providerId) {
            await signIn(providerId);
        } else {
            alert("This provider is not yet configured with NextAuth.");
        }
    };

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-white mb-2">Connected Accounts</h1>
                <p className="text-zinc-400">Manage your social media connections and permissions.</p>
                <div className="mt-4 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-xl text-yellow-200 text-sm">
                    <strong>Note:</strong> To make these connections work, you must provide Client IDs and Secrets in your <code>.env</code> file.
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {accounts.map((account) => {
                    const Icon = account.icon;
                    // Mock connection status check
                    const isConnected = false;

                    return (
                        <motion.div
                            key={account.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5 backdrop-blur-sm relative overflow-hidden group"
                        >
                            <div className="flex items-start justify-between mb-6">
                                <div className={cn(
                                    "w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br shadow-lg",
                                    account.color
                                )}>
                                    <Icon className="w-6 h-6 text-white fill-current" />
                                </div>
                                <button
                                    onClick={() => handleConnect(account.providerId)}
                                    className={cn(
                                        "px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 border",
                                        isConnected
                                            ? "bg-green-500/10 text-green-400 border-green-500/20 hover:bg-red-500/10 hover:text-red-400 hover:border-red-500/20"
                                            : "bg-white/5 text-zinc-400 border-white/10 hover:bg-white/10 hover:text-white"
                                    )}
                                >
                                    {isConnected ? "Connected" : "Connect"}
                                </button>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-white">{account.name}</h3>
                                <p className="text-sm text-zinc-500 mt-1">
                                    {isConnected ? "@username" : "Not connected"}
                                </p>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}
