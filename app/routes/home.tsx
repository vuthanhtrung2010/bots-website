import type { Route } from "./+types/home";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

export function meta(): Route.MetaDescriptors {
  return [
    { title: "Bots | Trung" },
    { name: "description", content: "A website with a list of all my public Discord bots." },
    
    // Google / Search Engine Tags
    { name: "itemprop", content: "Bots | Trung" },
    { name: "description", content: "A website with a list of all my public Discord bots." },
    { property: "image", content: "https://bots.trunghsgs.edu.vn/banner.png" },

    // Facebook Meta Tags
    { property: "og:url", content: "https://bots.trunghsgs.edu.vn" },
    { property: "og:type", content: "website" },
    { property: "og:title", content: "Bots | Trung" },
    { property: "og:description", content: "A website with a list of all my public Discord bots." },
    { property: "og:image", content: "https://bots.trunghsgs.edu.vn/banner.png" },

    // Twitter Meta Tags
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Bots | Trung" },
    { name: "twitter:description", content: "A website with a list of all my public Discord bots." },
    { name: "twitter:image", content: "https://bots.trunghsgs.edu.vn/banner.png" },
  ];
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="container mx-auto px-4 py-8 max-w-4xl animate-fade-in">
        <header className="text-center mb-12 animate-slide-up">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
            Trung's Bots
          </h1>
          <p className="text-xl text-slate-300 font-light">Crafting Discord experiences with precision</p>
        </header>

        <main className="mt-12">
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-slate-700/50 animate-slide-up hover:scale-105 transition-all duration-300">
            <div className="text-center">
              <div className="relative inline-block mb-6">
                <img 
                  src="https://img.trunghsgs.edu.vn/mystic.webp" 
                  alt="Mystic Bot Avatar" 
                  className="rounded-full h-40 w-40 mx-auto shadow-2xl border-4 border-purple-500/30 animate-glow" 
                  draggable="false"
                />
                <div className="absolute -top-2 -right-2 bg-green-500 rounded-full p-2">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                </div>
              </div>
              
              <h3 title="Mystic#0869" className="text-3xl font-bold text-white mb-3 flex items-center justify-center gap-2">
                Mystic
                <FontAwesomeIcon icon={faCheckCircle} className="text-blue-500 text-2xl" title="Verified Bot" />
              </h3>
              
              <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-md mx-auto">
                A powerful Discord bot designed to enhance your server with multi-purpose functionality and seamless integration.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center">
                <a 
                  href="https://discord.com/api/oauth2/authorize?client_id=1142278243131592754&permissions=8&scope=bot%20applications.commands" 
                  className="group"
                >
                  <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-8 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-blue-500/25 flex items-center gap-2">
                    <span className="text-xl">🔗</span>
                    <span>Invite to Server</span>
                  </button>
                </a>
                
                <a 
                  href="https://discord.gg/kXPPZ2xWwS" 
                  className="group"
                >
                  <button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold py-3 px-8 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-purple-500/25 flex items-center gap-2">
                    <span className="text-xl">🆘</span>
                    <span>Get Support</span>
                  </button>
                </a>
              </div>
              
              <div className="mt-8 pt-6 border-t border-slate-700/50">
                <div className="flex justify-center gap-8 text-sm text-slate-400">
                  <div className="flex flex-col items-center">
                    <span className="text-2xl font-bold text-green-400">24/7</span>
                    <span>Uptime</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-2xl font-bold text-blue-400">∞</span>
                    <span>Features</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-2xl font-bold text-purple-400">Fast</span>
                    <span>Response</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        <footer className="mt-16 text-center animate-slide-up">
          <div className="bg-slate-800/30 rounded-2xl p-6 backdrop-blur-sm border border-slate-700/30">
            <p className="text-slate-400">
              &copy; {new Date().getFullYear()}{" "}
              <span className="font-semibold text-white">Trung</span> - All Rights Reserved.
            </p>
            <p className="text-sm text-slate-500 mt-2">Made with ❤️ for the Discord community</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
