import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations";
import { writeFileSync, existsSync, readFileSync } from "fs";
import { join } from "path";

// Simple rate limiting (in production, use Redis or a proper rate limiting service)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const limit = rateLimitMap.get(ip);

  if (!limit || now > limit.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + 60000 }); // 1 minute window
    return true;
  }

  if (limit.count >= 5) {
    // Max 5 requests per minute
    return false;
  }

  limit.count++;
  return true;
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const ip = request.headers.get("x-forwarded-for") || "unknown";
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    // Parse and validate request body
    const body = await request.json();
    const validationResult = contactFormSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        { error: "Validation failed", details: validationResult.error.issues },
        { status: 400 }
      );
    }

    const data = validationResult.data;

    // Honeypot check
    if (data.honeypot && data.honeypot.length > 0) {
      // Silently reject bot submissions
      return NextResponse.json({ success: true }, { status: 200 });
    }

    // Store lead data to JSON file (for development - in production, use a database)
    const leadsDir = join(process.cwd(), "data");
    const leadsFile = join(leadsDir, "leads.json");

    // Create data directory if it doesn't exist
    if (!existsSync(leadsDir)) {
      const mkdirSync = require("fs").mkdirSync;
      mkdirSync(leadsDir, { recursive: true });
    }

    // Read existing leads or create empty array
    let leads: any[] = [];
    if (existsSync(leadsFile)) {
      const fileContent = readFileSync(leadsFile, "utf-8");
      leads = JSON.parse(fileContent);
    }

    // Add new lead with timestamp
    const newLead = {
      ...data,
      timestamp: new Date().toISOString(),
      ip: ip,
    };
    leads.push(newLead);

    // Write back to file
    writeFileSync(leadsFile, JSON.stringify(leads, null, 2));

    // In production, you would:
    // 1. Send email notification via Resend, SendGrid, or similar
    // 2. Add to CRM via API
    // 3. Store in database (Prisma, Supabase, etc.)

    // Email placeholder (uncomment and configure in production)
    /*
    await sendEmail({
      to: process.env.CONTACT_EMAIL || "chinmaydongarkar@gmail.com",
      subject: `New Lead: ${data.name} from ${data.company}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Company:</strong> ${data.company}</p>
        <p><strong>Role:</strong> ${data.role}</p>
        <p><strong>Current Systems:</strong> ${data.currentSystems || "N/A"}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message}</p>
      `,
    });
    */

    return NextResponse.json(
      { success: true, message: "Thank you for your inquiry!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing lead:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
