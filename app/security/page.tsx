import { Card } from "@/components/ui/card";
export default function Security(){
  return <div className="space-y-4 animate-fadeIn">
    <Card><h3 className="text-white mb-2">Sécurité technique</h3><p className="text-white/70">Chiffrement en transit, principe de moindre privilège, revue de code.</p></Card>
    <Card><h3 className="text-white mb-2">Données personnelles (RGPD)</h3><p className="text-white/70">Transparence, droit à l'effacement, minimisation des données.</p></Card>
    <Card><h3 className="text-white mb-2">KYC / AML</h3><p className="text-white/70">Vérifications adaptées au risque, conservation limitée.</p></Card>
  </div>
}