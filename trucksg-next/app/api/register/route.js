import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request) {
  try {
    const data = await request.json();
    const timestamp = new Date().toISOString();
    const entry = { ...data, timestamp };
    
    // Store in a JSON file
    const filePath = path.join(process.cwd(), 'registrations.json');
    
    let registrations = [];
    if (fs.existsSync(filePath)) {
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      registrations = JSON.parse(fileContent);
    }
    
    registrations.push(entry);
    fs.writeFileSync(filePath, JSON.stringify(registrations, null, 2));
    
    return NextResponse.json({ success: true, message: 'Registration saved' });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'registrations.json');
    
    if (!fs.existsSync(filePath)) {
      return NextResponse.json([]);
    }
    
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const registrations = JSON.parse(fileContent);
    
    return NextResponse.json(registrations);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}