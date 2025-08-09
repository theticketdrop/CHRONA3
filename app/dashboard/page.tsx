import { Card, CardTitle, CardDesc } from "@/components/ui/card";
export default function Dashboard(){
  return <div className="grid md:grid-cols-2 gap-6 animate-fadeIn">
    <Card><CardTitle>Mon portefeuille</CardTitle><CardDesc>Valeur totale : 12 430€</CardDesc></Card>
    <Card><CardTitle>Watchlist</CardTitle><CardDesc>3 profils suivis</CardDesc></Card>
    <Card className="md:col-span-2"><CardTitle>Historique</CardTitle><div className="h-40 bg-white/5 rounded-xl mt-3"/></Card>
    <Card><CardTitle>Récompenses XP</CardTitle><div className="h-4 bg-white/10 rounded mt-3"/><div className="h-4 w-2/3 bg-[color:var(--up,#00FF9F)] rounded mt-2"/></Card>
  </div>
}