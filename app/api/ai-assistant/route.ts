import { NextRequest, NextResponse } from 'next/server';

const freeAiEndpoint = 'https://api.affiliateplus.xyz/api/chatbot';

export async function POST(request: NextRequest) {
  const payload = (await request.json()) as { prompt?: string };
  const prompt = payload.prompt?.trim();

  if (!prompt) {
    return NextResponse.json({ error: 'Prompt is required.' }, { status: 400 });
  }

  try {
    const apiResponse = await fetch(freeAiEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        message: prompt,
        ownername: 'Luxury Concierge',
        botname: 'AI Concierge',
        user: 'private-circle-member'
      }),
      cache: 'no-store'
    });

    if (!apiResponse.ok) {
      return NextResponse.json({ error: 'Free AI service unavailable.' }, { status: 502 });
    }

    const data = (await apiResponse.json()) as { message?: string };
    const reply = data.message?.trim();

    if (!reply) {
      return NextResponse.json({ error: 'No reply from free AI service.' }, { status: 502 });
    }

    return NextResponse.json({ reply });
  } catch {
    return NextResponse.json({ error: 'AI provider request failed.' }, { status: 502 });
  }
}
