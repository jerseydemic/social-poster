export default function TermsPage() {
    return (
        <div className="max-w-3xl mx-auto py-12 px-6 space-y-8 text-zinc-300">
            <div>
                <h1 className="text-3xl font-bold text-white mb-4">Terms of Service</h1>
                <p className="text-sm text-zinc-500">Last updated: {new Date().toLocaleDateString()}</p>
            </div>

            <section className="space-y-4">
                <h2 className="text-xl font-semibold text-white">1. Acceptance of Terms</h2>
                <p>
                    By accessing and using Social Poster ("the Service"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the Service.
                </p>
            </section>

            <section className="space-y-4">
                <h2 className="text-xl font-semibold text-white">2. Use of Service</h2>
                <p>
                    You agree to use the Service only for lawful purposes and in accordance with these Terms. You are responsible for all content you upload and post through the Service.
                </p>
                <ul className="list-disc pl-5 space-y-2">
                    <li>You must not post content that violates the rights of others.</li>
                    <li>You must not use the Service to distribute spam or malware.</li>
                    <li>You must comply with the terms of service of all connected social media platforms.</li>
                </ul>
            </section>

            <section className="space-y-4">
                <h2 className="text-xl font-semibold text-white">3. Account Security</h2>
                <p>
                    You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
                </p>
            </section>

            <section className="space-y-4">
                <h2 className="text-xl font-semibold text-white">4. Termination</h2>
                <p>
                    We reserve the right to terminate or suspend your access to the Service at any time, without prior notice or liability, for any reason, including breach of these Terms.
                </p>
            </section>

            <section className="space-y-4">
                <h2 className="text-xl font-semibold text-white">5. Limitation of Liability</h2>
                <p>
                    In no event shall Social Poster be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the Service.
                </p>
            </section>

            <section className="space-y-4">
                <h2 className="text-xl font-semibold text-white">6. Changes to Terms</h2>
                <p>
                    We reserve the right to modify these Terms at any time. We will notify you of any changes by posting the new Terms on this page.
                </p>
            </section>

            <section className="space-y-4">
                <h2 className="text-xl font-semibold text-white">7. Contact Us</h2>
                <p>
                    If you have any questions about these Terms, please contact us at support@example.com.
                </p>
            </section>
        </div>
    );
}
