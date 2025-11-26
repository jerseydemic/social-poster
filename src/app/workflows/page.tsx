"use client";

import { useState } from "react";
import { Plus, ArrowRight, Trash2, Save, Play } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface WorkflowStep {
    id: string;
    type: "trigger" | "action";
    platform: string;
    config?: Record<string, unknown>;
}

interface Workflow {
    id: string;
    name: string;
    active: boolean;
    steps: WorkflowStep[];
}

const platforms = [
    { id: "instagram", name: "Instagram", color: "bg-pink-500" },
    { id: "tiktok", name: "TikTok", color: "bg-cyan-500" },
    { id: "youtube", name: "YouTube", color: "bg-red-500" },
    { id: "twitter", name: "Twitter", color: "bg-sky-500" },
    { id: "facebook", name: "Facebook", color: "bg-blue-600" },
    { id: "pinterest", name: "Pinterest", color: "bg-red-600" },
];

export default function WorkflowsPage() {
    const [workflows, setWorkflows] = useState<Workflow[]>([
        {
            id: "1",
            name: "Cross-post to Video Platforms",
            active: true,
            steps: [
                { id: "s1", type: "trigger", platform: "instagram" },
                { id: "s2", type: "action", platform: "tiktok" },
                { id: "s3", type: "action", platform: "youtube" },
            ],
        },
    ]);

    const [isCreating, setIsCreating] = useState(false);
    const [newWorkflow, setNewWorkflow] = useState<Workflow>({
        id: "temp",
        name: "New Workflow",
        active: true,
        steps: [],
    });

    const addStep = (platformId: string) => {
        const type = newWorkflow.steps.length === 0 ? "trigger" : "action";
        setNewWorkflow({
            ...newWorkflow,
            steps: [...newWorkflow.steps, { id: crypto.randomUUID(), type, platform: platformId }],
        });
    };

    const saveWorkflow = () => {
        if (newWorkflow.steps.length < 2) return;
        setWorkflows([...workflows, { ...newWorkflow, id: crypto.randomUUID() }]);
        setIsCreating(false);
        setNewWorkflow({ id: "temp", name: "New Workflow", active: true, steps: [] });
    };

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-white mb-2">Automation Workflows</h1>
                    <p className="text-zinc-400">Create &quot;If This Then That&quot; rules for your content.</p>
                </div>
                {/* ... */}
                <button
                    onClick={() => setIsCreating(true)}
                    className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-xl font-medium flex items-center gap-2 transition-colors"
                >
                    <Plus className="w-4 h-4" />
                    Create Workflow
                </button>
            </div>

            <AnimatePresence>
                {isCreating && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="bg-zinc-900/50 border border-white/10 rounded-2xl p-6 overflow-hidden"
                    >
                        <div className="mb-6">
                            <label className="text-sm text-zinc-400 block mb-2">Workflow Name</label>
                            <input
                                type="text"
                                value={newWorkflow.name}
                                onChange={(e) => setNewWorkflow({ ...newWorkflow, name: e.target.value })}
                                className="bg-transparent text-xl font-bold text-white border-b border-white/10 focus:border-indigo-500 outline-none w-full py-2"
                            />
                        </div>

                        <div className="flex items-center gap-4 flex-wrap mb-8">
                            {newWorkflow.steps.map((step, index) => {
                                const platform = platforms.find((p) => p.id === step.platform);
                                return (
                                    <div key={step.id} className="flex items-center gap-4">
                                        {index > 0 && <ArrowRight className="w-5 h-5 text-zinc-600" />}
                                        <div className="relative group">
                                            <div className={cn(
                                                "px-4 py-3 rounded-xl flex items-center gap-3 text-white font-medium min-w-[140px]",
                                                platform?.color
                                            )}>
                                                <span className="text-xs uppercase opacity-70 font-bold tracking-wider">
                                                    {step.type === "trigger" ? "IF" : "THEN"}
                                                </span>
                                                {platform?.name}
                                            </div>
                                            <button
                                                onClick={() => setNewWorkflow({
                                                    ...newWorkflow,
                                                    steps: newWorkflow.steps.filter((s) => s.id !== step.id)
                                                })}
                                                className="absolute -top-2 -right-2 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                                            >
                                                <Trash2 className="w-3 h-3" />
                                            </button>
                                        </div>
                                    </div>
                                );
                            })}

                            {newWorkflow.steps.length > 0 && <ArrowRight className="w-5 h-5 text-zinc-600" />}

                            <div className="relative group">
                                <button className="px-4 py-3 rounded-xl border-2 border-dashed border-white/10 text-zinc-400 hover:text-white hover:border-white/30 flex items-center gap-2 transition-all">
                                    <Plus className="w-4 h-4" />
                                    Add Step
                                </button>

                                <div className="absolute top-full left-0 mt-2 w-48 bg-zinc-900 border border-white/10 rounded-xl shadow-xl overflow-hidden hidden group-focus-within:block group-hover:block z-10">
                                    {platforms.map((p) => (
                                        <button
                                            key={p.id}
                                            onClick={() => addStep(p.id)}
                                            className="w-full text-left px-4 py-2 text-sm text-zinc-300 hover:bg-white/5 hover:text-white"
                                        >
                                            {p.name}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-end gap-3">
                            <button
                                onClick={() => setIsCreating(false)}
                                className="px-4 py-2 text-zinc-400 hover:text-white transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={saveWorkflow}
                                disabled={newWorkflow.steps.length < 2}
                                className="px-6 py-2 bg-white text-black rounded-lg font-medium hover:bg-zinc-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
                            >
                                <Save className="w-4 h-4" />
                                Save Workflow
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="grid gap-4">
                {workflows.map((workflow) => (
                    <motion.div
                        key={workflow.id}
                        layout
                        className="bg-white/5 border border-white/10 rounded-xl p-6 flex items-center justify-between group hover:border-white/20 transition-colors"
                    >
                        <div className="flex items-center gap-6">
                            <div className={cn(
                                "w-12 h-12 rounded-full flex items-center justify-center",
                                workflow.active ? "bg-indigo-500/20 text-indigo-400" : "bg-zinc-800 text-zinc-500"
                            )}>
                                <Play className="w-5 h-5 fill-current" />
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-white">{workflow.name}</h3>
                                <div className="flex items-center gap-2 mt-2">
                                    {workflow.steps.map((step, index) => (
                                        <div key={step.id} className="flex items-center gap-2 text-sm text-zinc-400">
                                            {index > 0 && <ArrowRight className="w-3 h-3" />}
                                            <span className={cn(
                                                "px-2 py-0.5 rounded text-xs font-medium",
                                                step.type === "trigger" ? "bg-indigo-500/20 text-indigo-300" : "bg-zinc-800 text-zinc-300"
                                            )}>
                                                {platforms.find(p => p.id === step.platform)?.name}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                                <span className="text-sm text-zinc-500">{workflow.active ? "Active" : "Paused"}</span>
                                <button
                                    onClick={() => {
                                        const updated = workflows.map(w => w.id === workflow.id ? { ...w, active: !w.active } : w);
                                        setWorkflows(updated);
                                    }}
                                    className={cn(
                                        "w-10 h-6 rounded-full relative transition-colors",
                                        workflow.active ? "bg-green-500" : "bg-zinc-700"
                                    )}
                                >
                                    <motion.div
                                        animate={{ x: workflow.active ? 20 : 2 }}
                                        className="absolute top-1 left-0 w-4 h-4 bg-white rounded-full shadow-sm"
                                    />
                                </button>
                            </div>
                            <button
                                onClick={() => setWorkflows(workflows.filter(w => w.id !== workflow.id))}
                                className="p-2 text-zinc-500 hover:text-red-400 transition-colors"
                            >
                                <Trash2 className="w-5 h-5" />
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
