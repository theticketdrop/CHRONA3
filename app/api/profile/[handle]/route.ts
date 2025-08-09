import { NextResponse } from "next/server";
export async function GET(_: Request, { params }: { params: { handle: string }}) {
  const { handle } = params;
  const now = Date.now();
  const series = Array.from({length: 30}, (_,i)=> ({
    t: now - (29-i)*3600_000,
    price: 60 + Math.sin(i/6)*5 + Math.random()*2
  }));
  const platforms = {
    tiktok: Array.from({length: 30}, (_,i)=> ({ t: now - (29-i)*3600_000, S: 0.9 + Math.sin(i/7)*0.2 })),
    instagram: Array.from({length: 30}, (_,i)=> ({ t: now - (29-i)*3600_000, S: 0.6 + Math.sin(i/5)*0.15 })),
    youtube: Array.from({length: 30}, (_,i)=> ({ t: now - (29-i)*3600_000, S: 0.7 + Math.sin(i/8)*0.1 })),
  };
  return NextResponse.json({
    handle,
    scores: {
      global: { price: series.at(-1)?.price ?? 65.0, odds: 1.5, confidence: 0.8 },
      platforms
    },
    series
  });
}
