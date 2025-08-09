import { Button } from "@/components/ui/button";
export default function Subscription(){
  return <div className="max-w-md mx-auto card animate-fadeIn text-center">
    <h1 className="text-white text-2xl">Soyez notifié quand @handle rejoint CHRONA</h1>
    <input placeholder="Votre email" className="w-full bg-white/5 rounded-xl p-3 border border-white/10 mt-4"/>
    <Button className="w-full mt-3">Être notifié</Button>
  </div>
}