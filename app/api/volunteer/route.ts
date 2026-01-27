import { NextRequest, NextResponse } from "next/server";
import { getDbPool } from "@/lib/db";

interface VolunteerSubmission {
  name: string;
  email: string;
  phone: string;
  lga: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: VolunteerSubmission = await request.json();

    // Validate required fields
    if (!body.name || !body.email || !body.phone || !body.lga) {
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
    const existingVolunteer = await pool.query(
      "SELECT id FROM volunteers WHERE email = $1",
      [body.email]
    );

    if (existingVolunteer.rows.length > 0) {
      return NextResponse.json(
        { 
          message: "You are already registered as a volunteer!",
          success: true 
        },
        { status: 200 }
      );
    }

    // Insert new volunteer
    const result = await pool.query(
      `INSERT INTO volunteers (name, email, phone, lga, status)
       VALUES ($1, $2, $3, $4, 'pending')
       RETURNING id, created_at`,
      [body.name, body.email, body.phone, body.lga]
    );

    return NextResponse.json(
      {
        message: "Volunteer registration successful!",
        success: true,
        id: result.rows[0].id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error saving volunteer registration:", error);
    return NextResponse.json(
      { error: "Failed to save volunteer registration" },
      { status: 500 }
    );
  }
}
