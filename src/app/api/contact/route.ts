import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    console.log('API Route: Received form data:', body);
    
    const zapierWebhookUrl = process.env.NEXT_PUBLIC_ZAPIER_WEBHOOK_URL;
    
    if (!zapierWebhookUrl) {
      console.error('API Route: Zapier webhook URL not configured');
      return NextResponse.json(
        { error: 'Webhook URL not configured' },
        { status: 500 }
      );
    }
    
    console.log('API Route: Sending to Zapier webhook:', zapierWebhookUrl);
    
    // Send to Zapier webhook
    const response = await fetch(zapierWebhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    
    console.log('API Route: Zapier response status:', response.status);
    
    if (response.ok) {
      const zapierResponse = await response.json();
      console.log('API Route: Zapier response:', zapierResponse);
      
      return NextResponse.json(
        { success: true, message: 'Form submitted successfully' },
        { status: 200 }
      );
    } else {
      const errorText = await response.text();
      console.error('API Route: Zapier error:', errorText);
      
      return NextResponse.json(
        { error: `Failed to submit form: ${response.status} ${errorText}` },
        { status: response.status }
      );
    }
  } catch (error) {
    console.error('API Route: Error processing form submission:', error);
    
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 