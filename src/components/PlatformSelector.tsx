"use client";

import { Facebook, Instagram, Twitter, Youtube, Linkedin, Share2 } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// Custom icons for missing Lucide icons
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

const platforms = [
    { id: "instagram", name: "Instagram", icon: Instagram, color: "from-pink-500 to-purple-500" },
    { id: "tiktok", name: "TikTok", icon: TikTokIcon, color: "from-cyan-400 to-pink-500" },
    { id: "youtube", name: "YouTube", icon: Youtube, color: "from-red-500 to-red-600" },
    { id: "facebook", name: "Facebook", icon: Facebook, color: "from-blue-500 to-blue-600" },
    { id: "twitter", name: "Twitter", icon: Twitter, color: "from-sky-400 to-sky-500" },
    { id: "pinterest", name: "Pinterest", icon: PinterestIcon, color: "from-red-600 to-red-700" },
    { id: "linkedin", name: "LinkedIn", icon: Linkedin, color: "from-blue-600 to-blue-700" },
    { id: "threads", name: "Threads", icon: Share2, color: "from-zinc-100 to-zinc-300" }, // Using Share2 as placeholder for Threads
];

interface PlatformSelectorProps {
    selectedPlatforms: string[];
    onToggle: (platformId: string) => void;
}

export function PlatformSelector({ selectedPlatforms, onToggle }: PlatformSelectorProps) {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {platforms.map((platform) => {
                const isSelected = selectedPlatforms.includes(platform.id);
                const Icon = platform.icon;

                return (
                    <motion.button
                        key={platform.id}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => onToggle(platform.id)}
                        className={cn(
                            "relative p-4 rounded-xl border transition-all duration-200 flex flex-col items-center gap-3 overflow-hidden group",
                            isSelected
                                ? "border-transparent bg-zinc-900"
                                : "border-white/10 bg-white/5 hover:bg-white/10"
                        )}
                    >
                        {isSelected && (
                            <div className={cn("absolute inset-0 opacity-20 bg-gradient-to-br", platform.color)} />
                        )}

                        <div className={cn(
                            "w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300",
                            isSelected
                                ? cn("bg-gradient-to-br text-white shadow-lg", platform.color)
                                : "bg-white/5 text-zinc-400 group-hover:text-white group-hover:bg-white/10"
                        )}>
                            <Icon className="w-6 h-6 fill-current" />
                        </div>

                        <span className={cn(
                            "text-sm font-medium transition-colors",
                            isSelected ? "text-white" : "text-zinc-400 group-hover:text-white"
                        )}>
                            {platform.name}
                        </span>

                        {isSelected && (
                            <motion.div
                                layoutId="check"
                                className="absolute top-3 right-3 w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]"
                            />
                        )}
                    </motion.button>
                );
            })}
        </div>
    );
}
