"use client";

import { useState } from "react";
import { Calendar, Hash, Send, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface PostConfigProps {
    onPost: (data: { caption: string; tags: string; scheduledDate?: Date }) => void;
    isPosting?: boolean;
}

export function PostConfig({ onPost, isPosting = false }: PostConfigProps) {
    const [caption, setCaption] = useState("");
    const [tags, setTags] = useState("");
    const [isScheduled, setIsScheduled] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onPost({ caption, tags });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-400">Caption</label>
                <div className="relative">
                    <textarea
                        value={caption}
                        onChange={(e) => setCaption(e.target.value)}
                        placeholder="Write a catchy caption..."
                        className="w-full h-32 bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 resize-none transition-all"
                    />
                    <span className="absolute bottom-3 right-3 text-xs text-zinc-500">
                        {caption.length}/2200
                    </span>
                </div>
            </div>

            <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-400">Hashtags</label>
                <div className="relative">
                    <Hash className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                    <input
                        type="text"
                        value={tags}
                        onChange={(e) => setTags(e.target.value)}
                        placeholder="viral, trending, fyp..."
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all"
                    />
                </div>
            </div>

            <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center">
                        <Clock className="w-5 h-5 text-indigo-400" />
                    </div>
                    <div>
                        <p className="text-sm font-medium text-white">Schedule Post</p>
                        <p className="text-xs text-zinc-400">Post automatically at a later time</p>
                    </div>
                </div>
                <button
                    type="button"
                    onClick={() => setIsScheduled(!isScheduled)}
                    className={cn(
                        "w-12 h-6 rounded-full transition-colors relative",
                        isScheduled ? "bg-indigo-500" : "bg-zinc-700"
                    )}
                >
                    <motion.div
                        animate={{ x: isScheduled ? 24 : 2 }}
                        className="absolute top-1 left-0 w-4 h-4 bg-white rounded-full shadow-sm"
                    />
                </button>
            </div>

            {isScheduled && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden"
                >
                    <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                        <input
                            type="datetime-local"
                            className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all [&::-webkit-calendar-picker-indicator]:invert"
                        />
                    </div>
                </motion.div>
            )}

            <button
                type="submit"
                disabled={isPosting || !caption}
                className={cn(
                    "w-full py-4 rounded-xl font-semibold text-white shadow-lg flex items-center justify-center gap-2 transition-all duration-300",
                    isPosting || !caption
                        ? "bg-zinc-800 cursor-not-allowed text-zinc-500"
                        : "bg-gradient-to-r from-indigo-500 to-purple-500 hover:shadow-indigo-500/25 hover:scale-[1.02]"
                )}
            >
                {isPosting ? (
                    <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Posting...</span>
                    </>
                ) : (
                    <>
                        <Send className="w-5 h-5" />
                        <span>{isScheduled ? "Schedule Post" : "Post Now"}</span>
                    </>
                )}
            </button>
        </form>
    );
}
