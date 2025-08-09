"use client";
import { useParams } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ProfilePage(){
  const { handle } = useParams<{handle:string}>();
  return (
    <div className="space-y-6 animate-fadeIn">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center">👤</div>
          <div>
            <h1 className="text-2xl text-white">@{handle}</h1>
            <div className="flex items-center gap-2 mt-1">
              <Badge>Rang: Élevé</Badge>
              <Badge className="border-violet/60">Vérifié</Badge>
              <Badge className="border-neon/60">Confiance 82%</Badge>
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="neon">Créer une alerte</Button>
          <Button variant="violet">Vendre mes Chronas</Button>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <Card className="md:col-span-2">
          <h3 className="text-white mb-2">Graph Global (mock)</h3>
          <div className="h-56 bg-white/5 rounded-xl" />
        </Card>
        <Card>
          <h3 className="text-white mb-2">Stats</h3>
          <div className="space-y-2 text-white/80">
            <div>Variation 24h: <span className="text-[color:var(--up,#00FF9F)]">+3.2%</span></div>
            <div>XP: 1240</div>
            <div>P/L: +12.4%</div>
          </div>
        </Card>
      </div>

      <div className="flex gap-3">
        <Link href="/dashboard"><Button variant="neon">Aller au Dashboard</Button></Link>
        <Link href="/subscription"><Button variant="violet">Être notifié</Button></Link>
      </div>
    </div>
  );
}
