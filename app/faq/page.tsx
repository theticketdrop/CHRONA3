"use client";
import { Card } from "@/components/ui/card";
import { useState } from "react";
const Q = [
  ["Comment fonctionne la cotation ?", "Par agrégation pondérée des métriques publiques/privées selon la persona."],
  ["Puis-je retirer mes Chronas ?", "Oui, selon les règles du marché et la liquidité disponible."],
  ["Les données sont-elles fiables ?", "Un badge 'Vérifié' indique des comptes connectés via APIs officielles."],
  ["Quelle est la fréquence de mise à jour ?", "De quelques minutes à quelques heures selon le mode et la charge."],
  ["Comment éviter la triche ?", "Détection d'anomalies et pénalités automatiques multi-plateformes."]
];
export default function FAQ(){
  const [open, setOpen] = useState<number|null>(null);
  return <div className="max-w-2xl mx-auto space-y-3 animate-fadeIn">
    {Q.map((qa, i)=>(
      <Card key={i} className="cursor-pointer" onClick={()=> setOpen(open===i?null:i)}>
        <div className="flex items-center justify-between">
          <h3 className="text-white">{qa[0]}</h3>
          <span className="text-white/60">{open===i? "–" : "+"}</span>
        </div>
        {open===i && <p className="text-white/70 mt-2">{qa[1]}</p>}
      </Card>
    ))}
  </div>
}