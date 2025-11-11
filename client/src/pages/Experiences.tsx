import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Briefcase, Calendar, MapPin } from "lucide-react";

export default function Experiences() {
  const experiences = [
    {
      id: 1,
      title: "Stagiaire Pentester (White-box)",
      company: "Global ID SAS",
      location: "France/Suisse",
      period: "Août – Octobre 2025",
      description: "Durant ce stage au sein d'une entreprise spécialisée dans la biométrie veineuse, j'ai réalisé un test d'intrusion white-box sur le dispositif Venoscanner, un scanner d'authentification basé sur le réseau veineux du doigt.",
      tasks: [
        "Analyse du système Dockerisé (serveur + base de données MariaDB)",
        "Scans de vulnérabilité, audits de configuration, et scoring CVSS",
        "Rédaction d'un rapport de pentest complet avec propositions de contre-mesures",
        "Présentation des résultats à l'équipe R&D"
      ],
      skills: ["Sécurité réseau", "Docker", "Linux", "Analyse CVSS", "Reporting", "Communication technique"],
      icon: "🔒"
    },
    {
      id: 2,
      title: "Stagiaire Transformation Digitale & Sécurité",
      company: "Smartdev Africa",
      location: "Dakar, Sénégal",
      period: "Été 2025",
      description: "J'ai contribué à des projets de digitalisation et de cybersécurité communautaire au sein de Smartdev Africa, une startup africaine orientée vers l'innovation technologique durable.",
      tasks: [
        "Mise en place d'un espace communautaire Smartdev Community (cyber et cloud)",
        "Participation à des sessions de sensibilisation sur la cybersécurité",
        "Création de ressources pédagogiques et articles techniques"
      ],
      skills: ["Communication technique", "Gestion de projet", "Cloud computing", "Esprit d'équipe", "Leadership"],
      icon: "🌍"
    },
    {
      id: 3,
      title: "Opérateur de palettisation – Quai d'expédition",
      company: "Elivia",
      location: "Saint-Sylvain-d'Anjou, France",
      period: "Été 2024",
      description: "Travail au sein d'une équipe logistique pour assurer la préparation et la palettisation des produits élaborés frais. Cette expérience m'a permis de renforcer ma rigueur, endurance et capacité d'adaptation dans un environnement industriel exigeant.",
      tasks: [
        "Gestion du flux d'expédition et contrôle qualité",
        "Respect strict des consignes de sécurité et d'hygiène",
        "Travail collaboratif avec les opérateurs et chefs d'équipe"
      ],
      skills: ["Discipline", "Esprit d'équipe", "Gestion du stress", "Précision opérationnelle"],
      icon: "📦"
    }
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            YOHANN
          </Link>
          <div className="flex gap-6 items-center">
            <Link href="/experiences" className="text-blue-400 font-semibold">Expériences</Link>
            <Link href="/competences" className="text-slate-300 hover:text-blue-400 transition">Compétences</Link>
            <Link href="/engagements" className="text-slate-300 hover:text-blue-400 transition">Engagements</Link>
            <Link href="/cv" className="text-slate-300 hover:text-blue-400 transition">CV</Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="py-16 px-4 border-b border-slate-700/50">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-white mb-4">Mes Expériences Professionnelles</h1>
          <p className="text-xl text-slate-300">Analyse de 3 expériences clés – ESAIP ING4</p>
        </div>
      </section>

      {/* Experiences */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="bg-slate-800/50 border border-slate-700/50 rounded-lg overflow-hidden hover:border-blue-500/50 transition group">
              {/* Header */}
              <div className="bg-linear-to-r from-blue-600/20 to-cyan-600/20 p-8 border-b border-slate-700/50">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">{exp.icon}</div>
                    <div>
                      <h2 className="text-2xl font-bold text-white mb-2">{exp.title}</h2>
                      <p className="text-lg text-blue-400 font-semibold">{exp.company}</p>
                    </div>
                  </div>
                  <div className="text-right text-sm">
                    <div className="flex items-center gap-2 text-slate-300 mb-2">
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-300">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <p className="text-slate-300 text-lg leading-relaxed mb-6">
                  {exp.description}
                </p>

                {/* Tasks */}
                <div className="mb-6">
                  <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                    <Briefcase size={18} className="text-blue-400" />
                    Responsabilités et réalisations
                  </h3>
                  <ul className="space-y-3">
                    {exp.tasks.map((task, idx) => (
                      <li key={idx} className="flex gap-3 text-slate-300">
                        <span className="text-blue-400 font-bold shrink-0">✓</span>
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skills */}
                <div>
                  <h3 className="text-white font-semibold mb-4">Compétences développées</h3>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, idx) => (
                      <span key={idx} className="px-3 py-1 bg-blue-500/20 border border-blue-500/50 text-blue-300 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Navigation Buttons */}
      <section className="py-12 px-4 border-t border-slate-700/50">
        <div className="max-w-4xl mx-auto flex justify-between">
          <Link href="/">
            <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700">
              <ArrowLeft className="mr-2" size={18} />
              Retour à l'accueil
            </Button>
          </Link>
          <Link href="/competences">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Compétences
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
