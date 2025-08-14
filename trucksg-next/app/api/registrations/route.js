import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'registrations.json');
    const fileContents = await fs.readFile(filePath, 'utf8');
    const registrations = JSON.parse(fileContents);
    
    return NextResponse.json({
      success: true,
      count: registrations.length,
      data: registrations
    });
  } catch (error) {
    console.error('Error reading registrations:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to fetch registrations' 
      },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const filePath = path.join(process.cwd(), 'registrations.json');
    
    // Read existing registrations
    let registrations = [];
    try {
      const fileContents = await fs.readFile(filePath, 'utf8');
      registrations = JSON.parse(fileContents);
    } catch (error) {
      // File doesn't exist, start with empty array
      registrations = [];
    }
    
    // Add new registration with timestamp
    const newRegistration = {
      ...body,
      timestamp: new Date().toISOString()
    };
    
    registrations.push(newRegistration);
    
    // Write back to file
    await fs.writeFile(filePath, JSON.stringify(registrations, null, 2));
    
    return NextResponse.json({
      success: true,
      message: 'Registration saved successfully',
      data: newRegistration
    });
  } catch (error) {
    console.error('Error saving registration:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to save registration' 
      },
      { status: 500 }
    );
  }
}