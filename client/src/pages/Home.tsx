import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Users, Award, FileText } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            YOHANN
          </div>
          <div className="flex gap-6 items-center">
            <Link href="/experiences" className="text-slate-300 hover:text-blue-400 transition">Expériences</Link>
            <Link href="/competences" className="text-slate-300 hover:text-blue-400 transition">Compétences</Link>
            <Link href="/engagements" className="text-slate-300 hover:text-blue-400 transition">Engagements</Link>
            <Link href="/cv" className="text-slate-300 hover:text-blue-400 transition">CV</Link>
            <Link href="/contact" className="text-slate-300 hover:text-blue-400 transition">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-[calc(100vh-80px)] flex items-center justify-center px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Photo */}
          <div className="mb-8 flex justify-center">
            <div className="relative w-32 h-32 md:w-40 md:h-40">
              <img 
                src="/profile-photo.jpg" 
                alt="Yohann EKAMBIE SOUAMY" 
                className="w-full h-full rounded-full object-cover border-4 border-blue-400 shadow-2xl hover:border-cyan-400 transition"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400/10 to-cyan-400/10"></div>
            </div>
          </div>
          <div className="mb-8 inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full">
            <span className="text-blue-400 text-sm font-medium">Ingénieur en Cybersécurité & Réseaux</span>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
            YOHANN<br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              EKAMBIE SOUAMY
            </span>
          </h1>

          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Étudiant ingénieur à l'<strong>ESAIP</strong>, passionné par la cybersécurité, la data et les infrastructures réseau sécurisées. 
            Découvrez mon parcours, mes compétences et mes engagements.
          </p>

          <div className="flex gap-4 justify-center mb-16">
            <Link href="/experiences">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg">
                Découvrir mon parcours <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
            <Link href="/cv">
              <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700 px-8 py-6 text-lg">
                Télécharger mon CV
              </Button>
            </Link>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-3 gap-6 mt-20">
            <div className="p-6 bg-slate-800/50 border border-slate-700/50 rounded-lg hover:border-blue-500/50 transition">
              <Code2 className="w-8 h-8 text-blue-400 mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">3 Expériences</h3>
              <p className="text-slate-400 text-sm">Stages et jobs étudiants</p>
            </div>
            <div className="p-6 bg-slate-800/50 border border-slate-700/50 rounded-lg hover:border-blue-500/50 transition">
              <Users className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">Engagements</h3>
              <p className="text-slate-400 text-sm">Bénévolat et leadership</p>
            </div>
            <div className="p-6 bg-slate-800/50 border border-slate-700/50 rounded-lg hover:border-blue-500/50 transition">
              <Award className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">Compétences</h3>
              <p className="text-slate-400 text-sm">Techniques et humaines</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">Qui je suis ?</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                Étudiant ingénieur à l'<strong className="text-blue-400">ESAIP</strong>, je me spécialise en 
                <strong className="text-blue-400"> cybersécurité et réseaux</strong>, avec un intérêt particulier pour 
                les infrastructures cloud et les technologies émergentes.
              </p>
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                Mon parcours m'a permis d'explorer plusieurs domaines : déploiement réseau, administration Linux/Windows Server, 
                pentesting, développement web et intégration DevOps.
              </p>
              <p className="text-slate-300 text-lg leading-relaxed">
                Mon objectif est de devenir un <strong className="text-cyan-400">ingénieur cybersécurité polyvalent</strong>, 
                capable d'allier technique, analyse de risque et innovation.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-lg p-8">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-white font-semibold">Spécialisation</h4>
                    <p className="text-slate-300 text-sm">Cybersécurité, Réseaux, Cloud</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-white font-semibold">Formation</h4>
                    <p className="text-slate-300 text-sm">ESAIP ING4 – S7</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-white font-semibold">Approche</h4>
                    <p className="text-slate-300 text-sm">Technique, Analytique, Innovante</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Prêt à en savoir plus ?</h2>
          <p className="text-slate-300 text-lg mb-8">
            Explorez mes expériences, compétences et engagements pour mieux me connaître.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/experiences">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3">
                Mes Expériences
              </Button>
            </Link>
            <Link href="/competences">
              <Button className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3">
                Mes Compétences
              </Button>
            </Link>
            <Link href="/engagements">
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3">
                Mes Engagements
              </Button>
            </Link>
            <Link href="/contact">
              <Button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3">
                Me Contacter
              </Button>
            </Link>
          </div>
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
