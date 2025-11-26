"use client";

import { useState } from "react";
import { VideoUpload } from "@/components/VideoUpload";
import { PlatformSelector } from "@/components/PlatformSelector";
import { PostConfig } from "@/components/PostConfig";

export default function UploadPage() {
    const [file, setFile] = useState<File | null>(null);
    const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);
    const [isPosting, setIsPosting] = useState(false);

    const handlePlatformToggle = (platformId: string) => {
        setSelectedPlatforms((prev) =>
            prev.includes(platformId)
                ? prev.filter((id) => id !== platformId)
                : [...prev, platformId]
        );
    };

    const handlePost = async (data: { caption: string; tags: string }) => {
        if (!file) {
            alert("Please upload a video first");
            return;
        }
        if (selectedPlatforms.length === 0) {
            alert("Please select at least one platform");
            return;
        }

        setIsPosting(true);

        // Mock API call
        await new Promise((resolve) => setTimeout(resolve, 2000));

        console.log("Posting to:", selectedPlatforms);
        console.log("Data:", data);
        console.log("File:", file.name);

        setIsPosting(false);
        alert("Posted successfully! (Mock)");
    };

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-white mb-2">Create New Post</h1>
                    <p className="text-zinc-400">Upload, customize, and distribute your content.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-8">
                    <section className="space-y-4">
                        <h2 className="text-lg font-semibold text-white flex items-center gap-2">
                            <span className="w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400 text-xs flex items-center justify-center border border-indigo-500/20">1</span>
                            Upload Content
                        </h2>
                        <VideoUpload onFileSelect={setFile} />
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-lg font-semibold text-white flex items-center gap-2">
                            <span className="w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400 text-xs flex items-center justify-center border border-indigo-500/20">2</span>
                            Select Platforms
                        </h2>
                        <PlatformSelector
                            selectedPlatforms={selectedPlatforms}
                            onToggle={handlePlatformToggle}
                        />
                    </section>
                </div>

                <div className="lg:col-span-1">
                    <section className="space-y-4 sticky top-24">
                        <h2 className="text-lg font-semibold text-white flex items-center gap-2">
                            <span className="w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400 text-xs flex items-center justify-center border border-indigo-500/20">3</span>
                            Configure & Post
                        </h2>
                        <div className="bg-zinc-900/50 border border-white/5 rounded-2xl p-6 backdrop-blur-sm">
                            <PostConfig onPost={handlePost} isPosting={isPosting} />
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
