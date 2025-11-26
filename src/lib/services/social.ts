export interface SocialPlatform {
    id: string;
    name: string;
    post: (content: PostContent) => Promise<PostResult>;
}

export interface PostContent {
    videoUrl: string;
    caption: string;
    tags: string[];
}

export interface PostResult {
    success: boolean;
    platformId: string;
    postId?: string;
    error?: string;
}

class SocialMediaService {
    private platforms: Map<string, SocialPlatform> = new Map();

    registerPlatform(platform: SocialPlatform) {
        this.platforms.set(platform.id, platform);
    }

    async postToAll(platforms: string[], content: PostContent): Promise<PostResult[]> {
        const results: PostResult[] = [];

        for (const platformId of platforms) {
            const platform = this.platforms.get(platformId);
            if (platform) {
                try {
                    const result = await platform.post(content);
                    results.push(result);
                } catch (error) {
                    results.push({
                        success: false,
                        platformId,
                        error: error instanceof Error ? error.message : "Unknown error",
                    });
                }
            } else {
                results.push({
                    success: false,
                    platformId,
                    error: "Platform not supported",
                });
            }
        }

        return results;
    }
}

export const socialService = new SocialMediaService();

// Mock implementations
socialService.registerPlatform({
    id: "twitter",
    name: "Twitter",
    post: async (content) => {
        console.log("Posting to Twitter:", content);
        return { success: true, platformId: "twitter", postId: "mock-twitter-id" };
    },
});

socialService.registerPlatform({
    id: "instagram",
    name: "Instagram",
    post: async (content) => {
        console.log("Posting to Instagram:", content);
        return { success: true, platformId: "instagram", postId: "mock-instagram-id" };
    },
});

// Add other platforms similarly...
