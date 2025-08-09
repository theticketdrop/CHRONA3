import { NextResponse } from "next/server";

export async function GET(){
  const data = [
    { handle:"user1", price: 67.2, change24h: 3.1, confidence: 0.78 },
    { handle:"user2", price: 54.9, change24h: -1.2, confidence: 0.62 },
    { handle:"user3", price: 72.5, change24h: 4.7, confidence: 0.83 }
  ];
  return NextResponse.json({ data });
}
