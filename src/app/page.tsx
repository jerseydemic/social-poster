"use client";

import { BarChart3, TrendingUp, Users, Eye } from "lucide-react";
import { cn } from "@/lib/utils";

const stats = [
  { label: "Total Posts", value: "128", change: "+12%", icon: BarChart3, color: "text-indigo-400", bg: "bg-indigo-500/10" },
  { label: "Engagement", value: "24.5k", change: "+5.2%", icon: TrendingUp, color: "text-green-400", bg: "bg-green-500/10" },
  { label: "Followers", value: "12.8k", change: "+2.1%", icon: Users, color: "text-blue-400", bg: "bg-blue-500/10" },
  { label: "Total Views", value: "892k", change: "+18%", icon: Eye, color: "text-purple-400", bg: "bg-purple-500/10" },
];

const recentPosts = [
  { id: 1, title: "Summer Vibes Vlog", platforms: ["instagram", "tiktok"], views: "1.2k", date: "2 hours ago", status: "Posted" },
  { id: 2, title: "Tech Review: iPhone 15", platforms: ["youtube", "twitter"], views: "8.5k", date: "5 hours ago", status: "Posted" },
  { id: 3, title: "Morning Routine", platforms: ["instagram", "tiktok", "pinterest"], views: "3.4k", date: "1 day ago", status: "Posted" },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
        <p className="text-zinc-400">Overview of your social media performance.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div key={stat.label} className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-4">
              <div className={cn("p-3 rounded-xl", stat.bg)}>
                <stat.icon className={cn("w-6 h-6", stat.color)} />
              </div>
              <span className="text-xs font-medium text-green-400 bg-green-500/10 px-2 py-1 rounded-full">
                {stat.change}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-white">{stat.value}</h3>
            <p className="text-sm text-zinc-500">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5 backdrop-blur-sm">
          <h3 className="text-lg font-semibold text-white mb-6">Recent Activity</h3>
          <div className="space-y-4">
            {recentPosts.map((post) => (
              <div key={post.id} className="flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-zinc-800 flex items-center justify-center text-zinc-500">
                    Video
                  </div>
                  <div>
                    <h4 className="font-medium text-white">{post.title}</h4>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs text-zinc-500">{post.date}</span>
                      <span className="text-zinc-600">•</span>
                      <div className="flex gap-1">
                        {post.platforms.map(p => (
                          <span key={p} className="text-xs text-zinc-400 capitalize">{p}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-white">{post.views}</p>
                  <p className="text-xs text-zinc-500">Views</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5 backdrop-blur-sm flex items-center justify-center text-zinc-500">
          Analytics Chart Placeholder
        </div>
      </div>
    </div>
  );
}
