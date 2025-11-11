import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Competences() {
  const technicalSkills = [
    { domain: "Cybersécurité", skills: "Pentesting, audit de sécurité, CVSS scoring, Wazuh & Caldera", level: "Avancé" },
    { domain: "Réseaux", skills: "Configuration IPv4/IPv6, NAT, VLAN, OSPF, pare-feux pfSense", level: "Avancé" },
    { domain: "Systèmes", skills: "Linux, Windows Server, Active Directory, scripts Bash/Python", level: "Avancé" },
    { domain: "Développement", skills: "Python (Flask, API, ML), Java (JPA/Hibernate), HTML/CSS", level: "Intermédiaire" },
    { domain: "Cloud & DevOps", skills: "AWS (EC2, S3), Git, Docker, Virtualisation VMware", level: "Intermédiaire" }
  ];

  const businessSkills = [
    { category: "Gestion de projet", skills: "Planification, reporting, méthodologie agile", level: "Avancé" },
    { category: "Communication technique", skills: "Rédaction de rapports d'audit, vulgarisation technique", level: "Avancé" },
    { category: "Analyse de risques", skills: "Évaluation de vulnérabilités, priorisation, recommandations", level: "Intermédiaire" },
    { category: "Documentation", skills: "Création de fiches projet, guides techniques et procédures", level: "Avancé" }
  ];

  const softSkills = [
    { quality: "Travail en équipe", description: "Collaboration efficace avec des équipes pluridisciplinaires", level: "Avancé" },
    { quality: "Adaptabilité", description: "Capacité à m'intégrer dans des environnements variés", level: "Avancé" },
    { quality: "Rigueur & précision", description: "Respect des consignes et contrôle qualité dans chaque mission", level: "Avancé" },
    { quality: "Esprit d'analyse", description: "Capacité à identifier les causes profondes et proposer des solutions", level: "Avancé" },
    { quality: "Leadership & communication", description: "Prise d'initiative et aisance dans la transmission d'informations", level: "Intermédiaire" }
  ];

  const getLevelColor = (level: string) => {
    switch(level) {
      case "Avancé":
        return "bg-emerald-500/20 text-emerald-300 border-emerald-500/50";
      case "Intermédiaire":
        return "bg-blue-500/20 text-blue-300 border-blue-500/50";
      default:
        return "bg-slate-500/20 text-slate-300 border-slate-500/50";
    }
  };

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
            <Link href="/competences" className="text-blue-400 font-semibold">Compétences</Link>
            <Link href="/engagements" className="text-slate-300 hover:text-blue-400 transition">Engagements</Link>
            <Link href="/cv" className="text-slate-300 hover:text-blue-400 transition">CV</Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="py-16 px-4 border-b border-slate-700/50">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold text-white mb-4">Mes Compétences</h1>
          <p className="text-xl text-slate-300">Analyse des compétences développées et en lien avec le métier visé</p>
        </div>
      </section>

      {/* Technical Skills */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
              <span className="text-2xl">💻</span>
              Compétences Techniques
            </h2>
            <p className="text-slate-400 mb-8">Domaines d'expertise et technologies maîtrisées</p>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-700/50">
                    <th className="text-left py-4 px-4 text-slate-300 font-semibold">Domaine</th>
                    <th className="text-left py-4 px-4 text-slate-300 font-semibold">Compétences</th>
                    <th className="text-center py-4 px-4 text-slate-300 font-semibold">Niveau</th>
                  </tr>
                </thead>
                <tbody>
                  {technicalSkills.map((skill, idx) => (
                    <tr key={idx} className="border-b border-slate-700/30 hover:bg-slate-700/20 transition">
                      <td className="py-4 px-4 text-white font-semibold">{skill.domain}</td>
                      <td className="py-4 px-4 text-slate-300">{skill.skills}</td>
                      <td className="py-4 px-4 text-center">
                        <span className={`px-3 py-1 rounded-full text-sm border ${getLevelColor(skill.level)}`}>
                          {skill.level}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Business Skills */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
              <span className="text-2xl">🏢</span>
              Compétences Métiers
            </h2>
            <p className="text-slate-400 mb-8">Expertise professionnelle et gestion de projet</p>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-700/50">
                    <th className="text-left py-4 px-4 text-slate-300 font-semibold">Catégorie</th>
                    <th className="text-left py-4 px-4 text-slate-300 font-semibold">Compétences</th>
                    <th className="text-center py-4 px-4 text-slate-300 font-semibold">Niveau</th>
                  </tr>
                </thead>
                <tbody>
                  {businessSkills.map((skill, idx) => (
                    <tr key={idx} className="border-b border-slate-700/30 hover:bg-slate-700/20 transition">
                      <td className="py-4 px-4 text-white font-semibold">{skill.category}</td>
                      <td className="py-4 px-4 text-slate-300">{skill.skills}</td>
                      <td className="py-4 px-4 text-center">
                        <span className={`px-3 py-1 rounded-full text-sm border ${getLevelColor(skill.level)}`}>
                          {skill.level}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Soft Skills */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
              <span className="text-2xl">🤝</span>
              Compétences Humaines (Soft Skills)
            </h2>
            <p className="text-slate-400 mb-8">Qualités personnelles et relationnelles</p>

            <div className="grid md:grid-cols-2 gap-6">
              {softSkills.map((skill, idx) => (
                <div key={idx} className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-6 hover:border-blue-500/50 transition">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-white font-semibold text-lg">{skill.quality}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm border ${getLevelColor(skill.level)}`}>
                      {skill.level}
                    </span>
                  </div>
                  <p className="text-slate-300">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Summary */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Résumé des Compétences</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-600/20 to-blue-600/10 border border-blue-500/30 rounded-lg p-8 text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-white font-semibold text-lg mb-3">Spécialisation</h3>
              <p className="text-slate-300">Cybersécurité, Réseaux, Cloud et Infrastructure</p>
            </div>
            <div className="bg-gradient-to-br from-cyan-600/20 to-cyan-600/10 border border-cyan-500/30 rounded-lg p-8 text-center">
              <div className="text-4xl mb-4">⚙️</div>
              <h3 className="text-white font-semibold text-lg mb-3">Polyvalence</h3>
              <p className="text-slate-300">Développement, DevOps, Administration Systèmes</p>
            </div>
            <div className="bg-gradient-to-br from-emerald-600/20 to-emerald-600/10 border border-emerald-500/30 rounded-lg p-8 text-center">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-white font-semibold text-lg mb-3">Leadership</h3>
              <p className="text-slate-300">Communication, Gestion de projet, Adaptabilité</p>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Buttons */}
      <section className="py-12 px-4 border-t border-slate-700/50">
        <div className="max-w-6xl mx-auto flex justify-between">
          <Link href="/experiences">
            <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700">
              <ArrowLeft className="mr-2" size={18} />
              Expériences
            </Button>
          </Link>
          <Link href="/engagements">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Engagements
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
