import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Heart, Globe, Mic } from "lucide-react";

export default function Engagements() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            YOHANN
          </Link>
          <div className="flex gap-6 items-center">
            <Link href="/experiences" className="text-slate-300 hover:text-blue-400 transition">Expériences</Link>
            <Link href="/competences" className="text-slate-300 hover:text-blue-400 transition">Compétences</Link>
            <Link href="/engagements" className="text-blue-400 font-semibold">Engagements</Link>
            <Link href="/cv" className="text-slate-300 hover:text-blue-400 transition">CV</Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="py-16 px-4 border-b border-slate-700/50">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-white mb-4">Mes Engagements & Valeurs</h1>
          <p className="text-xl text-slate-300">Parce que la technologie doit aussi servir l'humain</p>
        </div>
      </section>

      {/* Engagement 1: COP1 Angers */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg overflow-hidden hover:border-emerald-500/50 transition">
            <div className="bg-gradient-to-r from-emerald-600/20 to-emerald-600/10 p-8 border-b border-slate-700/50">
              <div className="flex items-start gap-4">
                <Heart className="w-10 h-10 text-emerald-400 flex-shrink-0" />
                <div>
                  <h2 className="text-3xl font-bold text-white mb-2">Engagement associatif – COP1 Angers</h2>
                  <p className="text-emerald-300 text-lg">Solidarité et entraide envers les étudiants en difficulté</p>
                </div>
              </div>
            </div>

            <div className="p-8">
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                En tant que <strong className="text-emerald-300">membre actif de l'association COP1 Angers</strong>, je participe à des actions de solidarité 
                en faveur des étudiants en difficulté. Cette expérience m'a permis de développer des valeurs essentielles 
                telles que l'empathie, la collaboration et le sens du collectif.
              </p>

              <div className="mb-6">
                <h3 className="text-white font-semibold mb-4">Activités et responsabilités</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3 text-slate-300">
                    <span className="text-emerald-400 font-bold flex-shrink-0">✓</span>
                    <span>Distribution alimentaire et vestimentaire pour les étudiants</span>
                  </li>
                  <li className="flex gap-3 text-slate-300">
                    <span className="text-emerald-400 font-bold flex-shrink-0">✓</span>
                    <span>Organisation d'événements de collecte et de sensibilisation</span>
                  </li>
                  <li className="flex gap-3 text-slate-300">
                    <span className="text-emerald-400 font-bold flex-shrink-0">✓</span>
                    <span>Encadrement de bénévoles et gestion d'activités sur le terrain</span>
                  </li>
                </ul>
              </div>

              <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-6">
                <h3 className="text-white font-semibold mb-3">Compétences développées</h3>
                <div className="flex flex-wrap gap-2">
                  {["Leadership", "Communication interpersonnelle", "Gestion du stress et du temps", "Sens de la responsabilité"].map((skill, idx) => (
                    <span key={idx} className="px-3 py-1 bg-emerald-500/20 border border-emerald-500/50 text-emerald-300 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement 2: Civic Engagement */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg overflow-hidden hover:border-cyan-500/50 transition">
            <div className="bg-gradient-to-r from-cyan-600/20 to-cyan-600/10 p-8 border-b border-slate-700/50">
              <div className="flex items-start gap-4">
                <Globe className="w-10 h-10 text-cyan-400 flex-shrink-0" />
                <div>
                  <h2 className="text-3xl font-bold text-white mb-2">Engagement citoyen & éthique</h2>
                  <p className="text-cyan-300 text-lg">Responsabilité sociale et impact technologique</p>
                </div>
              </div>
            </div>

            <div className="p-8">
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                Conscient des enjeux sociaux et environnementaux, j'accorde une importance particulière à l'impact 
                de la technologie sur la société. À travers mes études et projets, je m'efforce de promouvoir une 
                approche <strong className="text-cyan-300">éthique et durable</strong> de la cybersécurité et du numérique.
              </p>

              <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-6 italic">
                <p className="text-cyan-200 text-lg mb-3">
                  « La technologie est au service de l'humain, et non l'inverse. »
                </p>
                <p className="text-cyan-300 font-semibold">— Yohann EKAMBIE SOUAMY</p>
              </div>

              <div className="mt-6">
                <h3 className="text-white font-semibold mb-3">Principes directeurs</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex gap-3">
                    <span className="text-cyan-400 text-xl">🌱</span>
                    <div>
                      <h4 className="text-white font-semibold">Durabilité</h4>
                      <p className="text-slate-300 text-sm">Promouvoir des solutions technologiques durables</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-cyan-400 text-xl">🛡️</span>
                    <div>
                      <h4 className="text-white font-semibold">Sécurité inclusive</h4>
                      <p className="text-slate-300 text-sm">Rendre la cybersécurité accessible à tous</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-cyan-400 text-xl">🤝</span>
                    <div>
                      <h4 className="text-white font-semibold">Collaboration</h4>
                      <p className="text-slate-300 text-sm">Travailler ensemble pour un impact positif</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-cyan-400 text-xl">💡</span>
                    <div>
                      <h4 className="text-white font-semibold">Innovation responsable</h4>
                      <p className="text-slate-300 text-sm">Innover en tenant compte des implications éthiques</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement 3: Academic Excellence */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg overflow-hidden hover:border-amber-500/50 transition">
            <div className="bg-gradient-to-r from-amber-600/20 to-amber-600/10 p-8 border-b border-slate-700/50">
              <div className="flex items-start gap-4">
                <Mic className="w-10 h-10 text-amber-400 flex-shrink-0" />
                <div>
                  <h2 className="text-3xl font-bold text-white mb-2">Engagement académique & concours</h2>
                  <p className="text-amber-300 text-lg">Excellence et expression intellectuelle</p>
                </div>
              </div>
            </div>

            <div className="p-8">
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                J'ai participé à des <strong className="text-amber-300">concours d'éloquence</strong> au sein de l'ESAIP, 
                où j'ai remporté le <strong className="text-amber-300">1er prix et le prix coup de cœur</strong> avec le sujet : 
                <em className="text-amber-200"> « Socrate face aux géants du numérique »</em>. 
                Cette expérience m'a permis de renforcer ma capacité à défendre des idées, 
                à convaincre et à inspirer.
              </p>

              <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-6 mb-6">
                <h3 className="text-white font-semibold mb-4">Récompenses</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🏆</span>
                    <div>
                      <p className="text-white font-semibold">1er Prix – Concours d'Éloquence ESAIP</p>
                      <p className="text-slate-300 text-sm">« Socrate face aux géants du numérique »</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">💝</span>
                    <div>
                      <p className="text-white font-semibold">Prix Coup de Cœur</p>
                      <p className="text-slate-300 text-sm">Pour la qualité et l'originalité de la présentation</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-6">
                <h3 className="text-white font-semibold mb-3">Valeurs mises en avant</h3>
                <div className="flex flex-wrap gap-2">
                  {["Expression", "Esprit critique", "Engagement intellectuel", "Créativité", "Réflexion philosophique"].map((value, idx) => (
                    <span key={idx} className="px-3 py-1 bg-amber-500/20 border border-amber-500/50 text-amber-300 rounded-full text-sm">
                      {value}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Summary */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Mes Valeurs Fondamentales</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-6">
              <h3 className="text-white font-semibold mb-3 text-lg">Humanité</h3>
              <p className="text-slate-300">
                Je crois que la technologie doit avant tout servir l'humain et contribuer au bien-être collectif.
              </p>
            </div>
            <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-6">
              <h3 className="text-white font-semibold mb-3 text-lg">Intégrité</h3>
              <p className="text-slate-300">
                Agir avec honnêteté et transparence, en respectant les principes éthiques dans tous mes projets.
              </p>
            </div>
            <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-6">
              <h3 className="text-white font-semibold mb-3 text-lg">Collaboration</h3>
              <p className="text-slate-300">
                Travailler ensemble, partager les connaissances et créer un environnement inclusif et bienveillant.
              </p>
            </div>
            <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-6">
              <h3 className="text-white font-semibold mb-3 text-lg">Excellence</h3>
              <p className="text-slate-300">
                Poursuivre l'excellence dans mes études, mes projets et mes engagements personnels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Buttons */}
      <section className="py-12 px-4 border-t border-slate-700/50">
        <div className="max-w-4xl mx-auto flex justify-between">
          <Link href="/competences">
            <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700">
              <ArrowLeft className="mr-2" size={18} />
              Compétences
            </Button>
          </Link>
          <Link href="/cv">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              CV & Contact
              <ArrowRight className="ml-2" size={18} />
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
