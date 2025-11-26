export default function PrivacyPolicyPage() {
    return (
        <div className="max-w-3xl mx-auto py-12 px-6 space-y-8 text-zinc-300">
            <div>
                <h1 className="text-3xl font-bold text-white mb-4">Privacy Policy</h1>
                <p className="text-sm text-zinc-500">Last updated: {new Date().toLocaleDateString()}</p>
            </div>

            <section className="space-y-4">
                <h2 className="text-xl font-semibold text-white">1. Introduction</h2>
                <p>
                    Welcome to Social Poster ("we," "our," or "us"). We are committed to protecting your privacy and ensuring you have a positive experience on our website and in using our services.
                </p>
            </section>

            <section className="space-y-4">
                <h2 className="text-xl font-semibold text-white">2. Information We Collect</h2>
                <p>
                    We collect information you provide directly to us when you create an account, connect social media profiles, or upload content. This includes:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                    <li>Account information (name, email, profile picture) from connected social platforms (Google, Facebook, Twitter, etc.).</li>
                    <li>Content you upload (videos, captions, hashtags).</li>
                    <li>Usage data and analytics.</li>
                </ul>
            </section>

            <section className="space-y-4">
                <h2 className="text-xl font-semibold text-white">3. How We Use Your Information</h2>
                <p>
                    We use the information we collect to:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                    <li>Provide, maintain, and improve our services.</li>
                    <li>Process and publish your social media posts as requested.</li>
                    <li>Analyze usage trends and preferences.</li>
                </ul>
            </section>

            <section className="space-y-4">
                <h2 className="text-xl font-semibold text-white">4. Data Sharing</h2>
                <p>
                    We do not sell your personal information. We only share your information with:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                    <li>Social media platforms (YouTube, Instagram, etc.) strictly for the purpose of publishing your content.</li>
                    <li>Service providers who assist in our operations (hosting, analytics).</li>
                </ul>
            </section>

            <section className="space-y-4">
                <h2 className="text-xl font-semibold text-white">5. Contact Us</h2>
                <p>
                    If you have any questions about this Privacy Policy, please contact us at support@example.com.
                </p>
            </section>
        </div>
    );
}
