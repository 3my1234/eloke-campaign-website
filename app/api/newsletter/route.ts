import { NextRequest, NextResponse } from "next/server";
import { getDbPool } from "@/lib/db";

interface NewsletterSubscription {
  name: string;
  email: string;
  lga: string;
  timestamp?: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: NewsletterSubscription = await request.json();

    // Validate required fields
    if (!body.name || !body.email || !body.lga) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    const pool = getDbPool();

    // Check if email already exists
    const existingSubscription = await pool.query(
      "SELECT id FROM newsletter_subscriptions WHERE email = $1",
      [body.email]
    );

    if (existingSubscription.rows.length > 0) {
      return NextResponse.json(
        {
          message: "You are already subscribed!",
          success: true,
        },
        { status: 200 }
      );
    }

    // Insert new subscription
    const result = await pool.query(
      `INSERT INTO newsletter_subscriptions (name, email, lga)
       VALUES ($1, $2, $3)
       RETURNING id, created_at`,
      [body.name, body.email, body.lga]
    );

    return NextResponse.json(
      {
        message: "Subscription saved successfully",
        success: true,
        id: result.rows[0].id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error saving newsletter subscription:", error);
    return NextResponse.json(
      { error: "Failed to save subscription" },
      { status: 500 }
    );
  }
}
