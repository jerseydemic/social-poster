import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const formData = await request.formData();
        const file = formData.get("file") as File;

        if (!file) {
            return NextResponse.json(
                { error: "No file provided" },
                { status: 400 }
            );
        }

        // In a real app, we would upload this file to S3 or similar storage
        // For now, we'll just log the file details and return success
        console.log("File received:", file.name, file.size, file.type);

        return NextResponse.json({
            success: true,
            filename: file.name,
            size: file.size,
            message: "File uploaded successfully",
        });
    } catch (error) {
        console.error("Upload error:", error);
        return NextResponse.json(
            { error: "Upload failed" },
            { status: 500 }
        );
    }
}
