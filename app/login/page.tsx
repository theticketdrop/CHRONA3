import { Button } from "@/components/ui/button";
export default function Login(){
  return <div className="max-w-md mx-auto card animate-fadeIn">
    <h1 className="text-white text-2xl mb-4">Connexion</h1>
    <form className="space-y-3">
      <input placeholder="Email" className="w-full bg-white/5 rounded-xl p-3 border border-white/10"/>
      <input type="password" placeholder="Mot de passe" className="w-full bg-white/5 rounded-xl p-3 border border-white/10"/>
      <Button className="w-full">Connexion</Button>
      <div className="flex justify-between text-sm text-white/60">
        <a href="#" className="hover:text-white">Mot de passe oublié</a>
        <a href="/join" className="hover:text-white">Créer un compte</a>
      </div>
    </form>
  </div>
}