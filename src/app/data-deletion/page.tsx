export default function DataDeletionPage() {
    return (
        <div className="max-w-3xl mx-auto py-12 px-6 space-y-8 text-zinc-300">
            <div>
                <h1 className="text-3xl font-bold text-white mb-4">User Data Deletion Instructions</h1>
                <p className="text-sm text-zinc-500">Last updated: {new Date().toLocaleDateString()}</p>
            </div>

            <section className="space-y-4">
                <h2 className="text-xl font-semibold text-white">1. Introduction</h2>
                <p>
                    According to the Facebook Platform rules, we have to provide User Data Deletion Callback URL or Data Deletion Instructions URL. If you want to delete your activities for the Social Poster App, you can follow these instructions.
                </p>
            </section>

            <section className="space-y-4">
                <h2 className="text-xl font-semibold text-white">2. How to Remove Social Poster from your Facebook Account</h2>
                <ol className="list-decimal pl-5 space-y-2">
                    <li>Go to your Facebook Account's "Settings & Privacy". Click "Settings".</li>
                    <li>Scroll down and click "Apps and Websites".</li>
                    <li>Find "Social Poster" in the list of active apps.</li>
                    <li>Click the "Remove" button next to the Social Poster app.</li>
                    <li>Select the option to delete posts, videos, or events Social Poster posted on your timeline.</li>
                    <li>Click "Remove" again to confirm.</li>
                </ol>
            </section>

            <section className="space-y-4">
                <h2 className="text-xl font-semibold text-white">3. Requesting Complete Data Deletion</h2>
                <p>
                    If you wish to have all your data permanently deleted from our servers, please send an email to our support team at support@example.com with the subject "Data Deletion Request". We will process your request within 30 days.
                </p>
            </section>

            <section className="space-y-4">
                <h2 className="text-xl font-semibold text-white">4. Contact Us</h2>
                <p>
                    If you have any questions about these instructions, please contact us at support@example.com.
                </p>
            </section>
        </div>
    );
}
