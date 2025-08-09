import { Card } from "@/components/ui/card";
export default function Seller(){
  return <div className="space-y-6 animate-fadeIn">
    <Card><h3 className="text-white">Mes offres</h3><div className="h-32 bg-white/5 rounded-xl mt-3"/></Card>
    <Card><h3 className="text-white">Statistiques de ventes</h3><div className="h-40 bg-white/5 rounded-xl mt-3"/></Card>
    <Card><h3 className="text-white">Paramètres de vente</h3><div className="h-24 bg-white/5 rounded-xl mt-3"/></Card>
  </div>
}