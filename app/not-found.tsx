import Link from "next/link";
import { Button } from "@/components/ui/button";
export default function NotFound(){
  return <div className="text-center space-y-4 py-24">
    <h1 className="text-white text-3xl">Page non trouvée</h1>
    <Link href="/"><Button>Retour à la Marketplace</Button></Link>
  </div>
}