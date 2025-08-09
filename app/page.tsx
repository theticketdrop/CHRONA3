"use client";
import { Card, CardTitle, CardDesc } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";
import Link from "next/link";

type TickerItem = { symbol:string; price:number; change:number };
const MOCK: TickerItem[] = [
  { symbol: "CHR-A", price: 12.45, change: +2.1 },
  { symbol: "CHR-B", price: 8.30, change: -1.2 },
  { symbol: "CHR-C", price: 22.05, change: +5.4 },
  { symbol: "CHR-D", price: 5.19, change: +0.8 },
];

export default function Marketplace() {
  const [ticker, setTicker] = useState<TickerItem[]>(MOCK);
  useEffect(()=>{
    const id = setInterval(()=>{
      setTicker(prev => prev.map(t => ({
        ...t, price: +(t.price * (1 + (Math.random()-0.5)*0.01)).toFixed(2),
        change: +(t.change + (Math.random()-0.5)).toFixed(2)
      })));
    }, 3000);
    return ()=> clearInterval(id);
  }, []);

  return (
    <div className="space-y-8 animate-fadeIn">
      <section className="card text-center space-y-4">
        <h1 className="text-3xl md:text-5xl text-white">La marketplace des cotes sociales</h1>
        <p className="text-white/70">Investissez sur des profils avec une cotation vivante, transparente et immersive.</p>
        <div className="flex gap-3 justify-center">
          <Link href="/join"><Button variant="neon" size="lg">Investir maintenant</Button></Link>
          <Link href="/news"><Button variant="violet" size="lg">Explorer</Button></Link>
        </div>
      </section>

      <section className="card">
        <div className="ticker-track">
          <div className="ticker-inner">
            {ticker.concat(ticker).map((t, i) => (
              <span key={i} className="mx-6 text-white/80">
                <span className="mr-2 text-white">{t.symbol}</span>
                <span>{t.price.toFixed(2)}€</span>
                <span className={t.change>=0 ? "text-[color:var(--up,#00FF9F)] ml-2" : "text-red-400 ml-2"}>
                  {t.change>=0 ? "▲" : "▼"} {t.change.toFixed(2)}%
                </span>
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-6">
        {[1,2,3].map(i=> (
          <Card key={i}>
            <CardTitle>Top Profil #{i}</CardTitle>
            <CardDesc>Variation 7j : <span className="text-[color:var(--up,#00FF9F)]">+{(5*i).toFixed(1)}%</span></CardDesc>
            <div className="mt-4 flex items-center gap-3">
              <Badge>Score {80 + i}%</Badge>
              <Badge className="border-violet/50">Confiance {(70 + 3*i)}%</Badge>
            </div>
            <div className="mt-6"><Link href={`/profile/user${i}`}><Button variant="neon">Voir le profil</Button></Link></div>
          </Card>
        ))}
      </section>
    </div>
  );
}
