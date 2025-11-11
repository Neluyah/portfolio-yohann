import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Download, Mail, Linkedin, Github } from "lucide-react";

export default function CV() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            YOHANN
          </Link>
          <div className="flex gap-6 items-center">
            <Link href="/experiences" className="text-slate-300 hover:text-blue-400 transition">Expériences</Link>
            <Link href="/competences" className="text-slate-300 hover:text-blue-400 transition">Compétences</Link>
            <Link href="/engagements" className="text-slate-300 hover:text-blue-400 transition">Engagements</Link>
            <Link href="/cv" className="text-blue-400 font-semibold">CV</Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="py-16 px-4 border-b border-slate-700/50">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-white mb-4">Mon CV & Contact</h1>
          <p className="text-xl text-slate-300">Ingénieur en cybersécurité et réseaux – ESAIP ING4</p>
        </div>
      </section>

      {/* CV Download Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-linear-to-br from-blue-600/20 to-blue-600/10 border border-blue-500/30 rounded-lg p-12 text-center">
            <Download className="w-16 h-16 text-blue-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">Télécharger mon CV</h2>
            <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
              Consultez et téléchargez mon CV complet en PDF. Il résume mes compétences, mes expériences et mes projets professionnels.
            </p>
            <a href="/CV_Yohann_EKAMBIE_SOUAMY.pdf" target="_blank" rel="noopener noreferrer">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg">
                <Download className="mr-2" size={20} />
                Télécharger le CV (PDF)
              </Button>
            </a>
            <p className="text-slate-400 text-sm mt-6">
              Format PDF – Optimisé pour l'impression et le partage
            </p>
          </div>
        </div>
      </section>

      {/* Professional Profile */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">Profil Professionnel</h2>
          
          {/* Profile Photo */}
          <div className="mb-12 flex justify-center">
            <div className="relative w-48 h-48">
              <img 
                src="/profile-photo.jpg" 
                alt="Yohann EKAMBIE SOUAMY" 
                className="w-full h-full rounded-lg object-cover border-4 border-blue-400 shadow-2xl hover:border-cyan-400 transition"
              />
              <div className="absolute inset-0 rounded-lg bg-linear-to-br from-blue-400/10 to-cyan-400/10"></div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-8">
              <h3 className="text-white font-semibold text-lg mb-4 flex items-center gap-2">
                <span className="text-2xl">🎓</span>
                Formation
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-white font-semibold">Ingénieur en Cybersécurité & Réseaux</p>
                  <p className="text-blue-400">ESAIP – École Supérieure Angevine d'Informatique et de Productique</p>
                  <p className="text-slate-400 text-sm">ING4 – S7 (2024-2025)</p>
                </div>
                <div>
                  <p className="text-white font-semibold">Spécialisation</p>
                  <p className="text-slate-300">Cybersécurité, Réseaux, Cloud & Infrastructure</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-8">
              <h3 className="text-white font-semibold text-lg mb-4 flex items-center gap-2">
                <span className="text-2xl">🌍</span>
                Expérience Internationale
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-white font-semibold">Parcours Erasmus</p>
                  <p className="text-slate-300">Stages et projets en Europe et Afrique</p>
                </div>
                <div>
                  <p className="text-white font-semibold">Approche</p>
                  <p className="text-slate-300">Internationale, rigoureuse et innovante</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-slate-800/50 border border-slate-700/50 rounded-lg p-8">
            <h3 className="text-white font-semibold text-lg mb-4">Domaines d'Intérêt</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-3">
                <span className="text-blue-400 text-xl">🔒</span>
                <div>
                  <p className="text-white font-semibold">Sécurité des Infrastructures Critiques</p>
                  <p className="text-slate-300 text-sm">Protection des systèmes essentiels</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-cyan-400 text-xl">🚨</span>
                <div>
                  <p className="text-white font-semibold">Gestion des Incidents</p>
                  <p className="text-slate-300 text-sm">Réponse et analyse des menaces</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-emerald-400 text-xl">🔍</span>
                <div>
                  <p className="text-white font-semibold">Analyse de Vulnérabilités</p>
                  <p className="text-slate-300 text-sm">Pentesting et audit de sécurité</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-amber-400 text-xl">📚</span>
                <div>
                  <p className="text-white font-semibold">Transmission du Savoir</p>
                  <p className="text-slate-300 text-sm">Sensibilisation et formation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Me Contacter</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Email */}
            <a href="mailto:yohann.ekambie@esaip.org" className="group">
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-8 hover:border-blue-500/50 transition h-full">
                <Mail className="w-12 h-12 text-blue-400 mb-4 group-hover:scale-110 transition" />
                <h3 className="text-white font-semibold text-lg mb-2">Email</h3>
                <p className="text-slate-300 break-all">yohann.ekambie@esaip.org</p>
                <p className="text-slate-400 text-sm mt-3">Cliquez pour envoyer un email</p>
              </div>
            </a>

            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/yohann-ekambie-souamy" target="_blank" rel="noopener noreferrer" className="group">
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-8 hover:border-blue-500/50 transition h-full">
                <Linkedin className="w-12 h-12 text-blue-400 mb-4 group-hover:scale-110 transition" />
                <h3 className="text-white font-semibold text-lg mb-2">LinkedIn</h3>
                <p className="text-slate-300">Yohann EKAMBIE SOUAMY</p>
                <p className="text-slate-400 text-sm mt-3">Visitez mon profil professionnel</p>
              </div>
            </a>

            {/* GitHub */}
            <a href="https://github.com/Yohann-Nelu" target="_blank" rel="noopener noreferrer" className="group">
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-8 hover:border-blue-500/50 transition h-full">
                <Github className="w-12 h-12 text-blue-400 mb-4 group-hover:scale-110 transition" />
                <h3 className="text-white font-semibold text-lg mb-2">GitHub</h3>
                <p className="text-slate-300">Yohann-Nelu</p>
                <p className="text-slate-400 text-sm mt-3">Découvrez mes projets</p>
              </div>
            </a>

            {/* Website */}
            <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-8">
              <div className="w-12 h-12 text-blue-400 mb-4 text-2xl">🌐</div>
              <h3 className="text-white font-semibold text-lg mb-2">Portfolio</h3>
              <p className="text-slate-300">Vous êtes actuellement sur mon carnet de compétences</p>
              <p className="text-slate-400 text-sm mt-3">Hébergé sur GitHub Pages</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">À Propos de Moi</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-6 text-center">
              <div className="text-4xl mb-3">🎯</div>
              <h3 className="text-white font-semibold mb-2">Objectif</h3>
              <p className="text-slate-300 text-sm">Devenir un ingénieur cybersécurité polyvalent et innovant</p>
            </div>
            
            <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-6 text-center">
              <div className="text-4xl mb-3">💼</div>
              <h3 className="text-white font-semibold mb-2">Expériences</h3>
              <p className="text-slate-300 text-sm">3 stages et jobs étudiants en cybersécurité et tech</p>
            </div>
            
            <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-6 text-center">
              <div className="text-4xl mb-3">🌍</div>
              <h3 className="text-white font-semibold mb-2">Approche</h3>
              <p className="text-slate-300 text-sm">Technique, analytique et orientée impact social</p>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Buttons */}
      <section className="py-12 px-4 border-t border-slate-700/50">
        <div className="max-w-4xl mx-auto flex justify-between">
          <Link href="/engagements">
            <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700">
              <ArrowLeft className="mr-2" size={18} />
              Engagements
            </Button>
          </Link>
          <Link href="/">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Retour à l'accueil 🏠
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700/50 bg-slate-900/50 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-white font-semibold mb-4">Navigation</h3>
              <div className="space-y-2">
                <Link href="/" className="text-slate-400 hover:text-blue-400 transition block">Accueil</Link>
                <Link href="/experiences" className="text-slate-400 hover:text-blue-400 transition block">Expériences</Link>
                <Link href="/competences" className="text-slate-400 hover:text-blue-400 transition block">Compétences</Link>
                <Link href="/engagements" className="text-slate-400 hover:text-blue-400 transition block">Engagements</Link>
              </div>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Contact</h3>
              <div className="space-y-2">
                <a href="mailto:yohann.ekambie@esaip.org" className="text-slate-400 hover:text-blue-400 transition block">
                  ✉️ Email
                </a>
                <a href="https://www.linkedin.com/in/yohann-ekambie-souamy" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition block">
                  💼 LinkedIn
                </a>
                <a href="https://github.com/Yohann-Nelu" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition block">
                  💻 GitHub
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">À propos</h3>
              <p className="text-slate-400 text-sm">
                Carnet de compétences professionnel – ESAIP ING4 S7
              </p>
            </div>
          </div>
          <div className="border-t border-slate-700/50 pt-8 text-center text-slate-400 text-sm">
            <p>© 2025 Yohann EKAMBIE SOUAMY – Tous droits réservés</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
