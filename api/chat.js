import { NextResponse } from 'next/server';

export async function POST(req) {
    const { message } = await req.json();
    
    // Customize this logic to mimic your writing style
    const reply = `You said: "${message}". I'm your AI clone responding like you!`;

    return NextResponse.json({ reply });
}
