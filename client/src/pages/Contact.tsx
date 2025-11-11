import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Send, Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("https://formspree.io/f/xyzgvkqp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        })
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi:", error);
    } finally {
      setIsLoading(false);
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
            <Link href="/competences" className="text-slate-300 hover:text-blue-400 transition">Compétences</Link>
            <Link href="/engagements" className="text-slate-300 hover:text-blue-400 transition">Engagements</Link>
            <Link href="/cv" className="text-slate-300 hover:text-blue-400 transition">CV</Link>
            <Link href="/contact" className="text-blue-400 font-semibold">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="py-16 px-4 border-b border-slate-700/50">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-white mb-4">Me Contacter</h1>
          <p className="text-xl text-slate-300">Vous avez une question ou une opportunité ? N'hésitez pas à me contacter !</p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Email */}
            <a href="mailto:yohsou90@gmail.com" className="group">
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-8 hover:border-blue-500/50 transition h-full">
                <Mail className="w-12 h-12 text-blue-400 mb-4 group-hover:scale-110 transition" />
                <h3 className="text-white font-semibold text-lg mb-2">Email</h3>
                <p className="text-slate-300 break-all">yohsou90@gmail.com</p>
                <p className="text-slate-400 text-sm mt-3">Réponse rapide</p>
              </div>
            </a>

            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/yohann-ekambie-souamy" target="_blank" rel="noopener noreferrer" className="group">
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-8 hover:border-blue-500/50 transition h-full">
                <Mail className="w-12 h-12 text-cyan-400 mb-4 group-hover:scale-110 transition" />
                <h3 className="text-white font-semibold text-lg mb-2">LinkedIn</h3>
                <p className="text-slate-300">Yohann EKAMBIE SOUAMY</p>
                <p className="text-slate-400 text-sm mt-3">Profil professionnel</p>
              </div>
            </a>

            {/* GitHub */}
            <a href="https://github.com/Yohann-Nelu" target="_blank" rel="noopener noreferrer" className="group">
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-8 hover:border-blue-500/50 transition h-full">
                <Mail className="w-12 h-12 text-emerald-400 mb-4 group-hover:scale-110 transition" />
                <h3 className="text-white font-semibold text-lg mb-2">GitHub</h3>
                <p className="text-slate-300">Yohann-Nelu</p>
                <p className="text-slate-400 text-sm mt-3">Mes projets</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Envoyez-moi un Message</h2>

          {submitted && (
            <div className="mb-6 p-4 bg-emerald-500/20 border border-emerald-500/50 rounded-lg">
              <p className="text-emerald-300 text-center font-semibold">
                ✅ Message envoyé avec succès ! Je vous répondrai bientôt.
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-8 space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-white font-semibold mb-2">
                Votre Nom *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition"
                placeholder="Votre nom complet"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-white font-semibold mb-2">
                Votre Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition"
                placeholder="votre.email@exemple.com"
              />
            </div>

            {/* Subject */}
            <div>
              <label htmlFor="subject" className="block text-white font-semibold mb-2">
                Sujet *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition"
                placeholder="Sujet de votre message"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-white font-semibold mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition resize-none"
                placeholder="Votre message..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-semibold flex items-center justify-center gap-2 disabled:opacity-50"
            >
              <Send size={20} />
              {isLoading ? "Envoi en cours..." : "Envoyer le Message"}
            </Button>

            <p className="text-slate-400 text-sm text-center">
              Les champs marqués d'un * sont obligatoires
            </p>
          </form>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Réponse Rapide Garantie</h2>
          <p className="text-slate-300 text-lg mb-8">
            Je m'efforce de répondre à tous les messages dans les 24 heures. N'hésitez pas à me contacter pour toute question, opportunité ou collaboration !
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/cv">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3">
                Voir mon CV
              </Button>
            </Link>
            <Link href="/experiences">
              <Button className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3">
                Mes Expériences
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Navigation Buttons */}
      <section className="py-12 px-4 border-t border-slate-700/50">
        <div className="max-w-4xl mx-auto flex justify-between">
          <Link href="/cv">
            <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700">
              <ArrowLeft className="mr-2" size={18} />
              CV & Contact
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
                <a href="mailto:yohsou90@gmail.com" className="text-slate-400 hover:text-blue-400 transition block">
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
