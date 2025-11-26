"use client";

import { useState, useRef } from "react";
import { Upload, FileVideo, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface VideoUploadProps {
    onFileSelect: (file: File) => void;
}

export function VideoUpload({ onFileSelect }: VideoUploadProps) {
    const [isDragging, setIsDragging] = useState(false);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);

        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            const file = e.dataTransfer.files[0];
            if (file.type.startsWith("video/")) {
                handleFile(file);
            } else {
                alert("Please upload a video file");
            }
        }
    };

    const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            handleFile(e.target.files[0]);
        }
    };

    const handleFile = (file: File) => {
        setSelectedFile(file);
        onFileSelect(file);
    };

    const clearFile = () => {
        setSelectedFile(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };

    return (
        <div className="w-full">
            <AnimatePresence mode="wait">
                {!selectedFile ? (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className={cn(
                            "relative group cursor-pointer border-2 border-dashed rounded-2xl p-12 transition-all duration-300 ease-out",
                            isDragging
                                ? "border-indigo-500 bg-indigo-500/10 scale-[1.02]"
                                : "border-white/10 hover:border-white/20 hover:bg-white/5 bg-black/20"
                        )}
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        onDrop={handleDrop}
                        onClick={() => fileInputRef.current?.click()}
                    >
                        <input
                            type="file"
                            ref={fileInputRef}
                            className="hidden"
                            accept="video/*"
                            onChange={handleFileSelect}
                        />

                        <div className="flex flex-col items-center justify-center text-center gap-4">
                            <div className={cn(
                                "w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300",
                                isDragging ? "bg-indigo-500 text-white" : "bg-white/5 text-zinc-400 group-hover:bg-white/10 group-hover:text-white"
                            )}>
                                <Upload className="w-8 h-8" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-white mb-1">
                                    Upload Video
                                </h3>
                                <p className="text-sm text-zinc-400">
                                    Drag & drop or click to browse
                                </p>
                            </div>
                            <p className="text-xs text-zinc-500 mt-2">
                                Supports MP4, MOV, AVI up to 500MB
                            </p>
                        </div>
                    </motion.div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="relative rounded-2xl overflow-hidden bg-black/40 border border-white/10"
                    >
                        <div className="aspect-video bg-black flex items-center justify-center">
                            <FileVideo className="w-16 h-16 text-zinc-700" />
                            {/* In a real app, we'd show a thumbnail or video preview here */}
                            <video
                                src={URL.createObjectURL(selectedFile)}
                                className="absolute inset-0 w-full h-full object-contain"
                                controls
                            />
                        </div>
                        <div className="p-4 flex items-center justify-between bg-white/5 backdrop-blur-md">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center">
                                    <FileVideo className="w-5 h-5 text-indigo-400" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-white truncate max-w-[200px]">
                                        {selectedFile.name}
                                    </p>
                                    <p className="text-xs text-zinc-400">
                                        {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    clearFile();
                                }}
                                className="p-2 hover:bg-white/10 rounded-full transition-colors text-zinc-400 hover:text-red-400"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
