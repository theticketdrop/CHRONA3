import { Card } from "@/components/ui/card";
export default function About(){
  return <div className="grid md:grid-cols-3 gap-6 animate-fadeIn">
    <Card><h3 className="text-white mb-2">Objectif</h3><p className="text-white/70">Coter le capital d'attention de façon transparente.</p></Card>
    <Card><h3 className="text-white mb-2">Vision</h3><p className="text-white/70">Créer le marché mondial des cotes sociales.</p></Card>
    <Card><h3 className="text-white mb-2">Équipe</h3><div className="flex gap-3 mt-2"><div className="h-10 w-10 rounded-full bg-white/10" /><div className="h-10 w-10 rounded-full bg-white/10" /><div className="h-10 w-10 rounded-full bg-white/10" /></div></Card>
  </div>
}