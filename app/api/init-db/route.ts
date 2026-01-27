import { NextResponse } from "next/server";
import { initDatabase } from "@/lib/db";

// This endpoint initializes the database tables
// Call this once after setting up your database connection
export async function GET() {
  try {
    await initDatabase();
    return NextResponse.json(
      { message: "Database initialized successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error initializing database:", error);
    return NextResponse.json(
      { 
        error: "Failed to initialize database",
        details: error instanceof Error ? error.message : "Unknown error"
      },
      { status: 500 }
    );
  }
}
