import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Terminal, 
  Code2, 
  Cpu, 
  Layers, 
  Database, 
  Globe, 
  Mail, 
  Github, 
  Linkedin, 
  MapPin, 
  Phone,
  ExternalLink,
  ChevronRight,
  Monitor,
  Layout,
  Server,
  Zap,
  BarChart3,
  CheckCircle2,
  Moon,
  Sun,
  Download
} from 'lucide-react'

// --- Types ---
interface SectionProps {
  isDarkMode: boolean
  toggleTheme: () => void
}

// --- Components ---

const Navbar = ({ isDarkMode, toggleTheme }: SectionProps) => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-4 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600"
        >
          ALISHAN.
        </motion.div>
        
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
          {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-gray-400 hover:text-purple-400 transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0)
  const roles = [
    "Odoo Developer",
    "ERP Systems Engineer",
    "Python Backend Developer",
    "Business Automation Specialist"
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden animated-grid">
      {/* Blurred purple glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-900/20 rounded-full blur-[120px] animate-pulse-slow delay-1000"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full glass mb-6 border-purple-500/20">
            <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
            <span className="text-xs font-semibold uppercase tracking-widest text-purple-400">Available for Remote Work</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight dark:text-white text-gray-900">
            Alishan <br/>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-purple-600 to-purple-800">
              Adrees
            </span>
          </h1>

          <div className="h-12 mb-8">
            <AnimatePresence mode="wait">
              <motion.p
                key={roles[roleIndex]}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-2xl md:text-3xl font-light text-gray-400"
              >
                {roles[roleIndex]}
              </motion.p>
            </AnimatePresence>
          </div>

          <p className="text-lg text-gray-500 dark:text-gray-400 mb-10 max-w-lg leading-relaxed">
            Architecting scalable enterprise solutions and automating business workflows with precision. 
            Senior Odoo Developer at Dysin Automobiles Limited.
          </p>

          <div className="flex flex-wrap gap-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-purple-600 text-white rounded-xl font-bold shadow-lg shadow-purple-600/20 hover:bg-purple-700 transition-all flex items-center gap-2"
            >
              View Projects <ChevronRight size={20} />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 glass dark:text-white text-gray-900 rounded-xl font-bold hover:bg-purple-600/10 transition-all flex items-center gap-2"
            >
              Download Resume <Download size={20} />
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 w-full aspect-square rounded-3xl overflow-hidden glass border-purple-500/30 p-2">
            <div className="w-full h-full rounded-2xl bg-gray-900 overflow-hidden relative">
              {/* Terminal Background Animation */}
              <div className="absolute inset-0 p-6 font-mono text-[10px] text-purple-400/30 overflow-hidden leading-relaxed select-none">
                {`[INIT] Booting Odoo v16.0 Enterprise...
[OK] Database connected: dysin_production
[OK] Registry initialized
[INFO] Loading module: sale_management
[INFO] Loading module: purchase
[INFO] Loading module: accounting_extension
[INFO] API Gateway active: https://api.dysin.com/v1
[CMD] python manage.py migrate
[DONE] 42 migrations applied
[SYSTEM] High performance mode active
[AUTH] User: alishan_adrees (Superuser)
[SYNC] Real-time dashboard sync started...`}
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-gray-900 via-transparent to-transparent">
                 <div className="text-center">
                    <div className="w-32 h-32 mx-auto rounded-full border-2 border-purple-500/50 p-1 mb-4">
                      <div className="w-full h-full rounded-full bg-purple-600/20 flex items-center justify-center">
                        <Cpu size={48} className="text-purple-400" />
                      </div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
          {/* Decorative elements */}
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-purple-600/40 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-purple-900/40 rounded-full blur-3xl"></div>
        </motion.div>
      </div>
    </section>
  )
}

const About = () => (
  <section id="about" className="py-24 relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-4xl font-bold dark:text-white text-gray-900">
            Pioneering Enterprise <br/>
            <span className="text-purple-500">Excellence.</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            With a focus on building scalable, secure, and highly efficient ERP systems, I bridge the gap between complex business requirements and robust technical implementations. My approach is rooted in senior-level software architecture and a deep understanding of business automation.
          </p>
          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: <Zap size={20} />, title: "Scalable ERPs" },
              { icon: <Layers size={20} />, title: "Custom Modules" },
              { icon: <Globe size={20} />, title: "API Integrations" },
              { icon: <CheckCircle2 size={20} />, title: "Process Auto" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-gray-300">
                <div className="p-2 rounded-lg bg-purple-600/10 text-purple-500">
                  {item.icon}
                </div>
                <span className="text-sm font-semibold">{item.title}</span>
              </div>
            ))}
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-8 border-purple-500/20"
        >
          <h3 className="text-xl font-bold mb-4 text-purple-400">Technical Ethos</h3>
          <p className="text-gray-400 mb-6 italic">
            "Software should not just solve a problem; it should empower a business to scale without friction."
          </p>
          <ul className="space-y-4">
            <li className="flex items-start gap-4">
              <div className="mt-1 text-purple-500"><Terminal size={16} /></div>
              <p className="text-sm text-gray-300">Clean, maintainable Python backend architectures for mission-critical systems.</p>
            </li>
            <li className="flex items-start gap-4">
              <div className="mt-1 text-purple-500"><Layout size={16} /></div>
              <p className="text-sm text-gray-300">User-centric dashboards designed for data-driven executive decision making.</p>
            </li>
            <li className="flex items-start gap-4">
              <div className="mt-1 text-purple-500"><Database size={16} /></div>
              <p className="text-sm text-gray-300">Optimized PostgreSQL workflows handling complex enterprise data structures.</p>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  </section>
)

const Experience = () => (
  <section id="experience" className="py-24 bg-gray-900/50">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 dark:text-white text-gray-900">Professional Journey</h2>
        <p className="text-gray-500 tracking-widest uppercase text-sm">Experience & Evolution</p>
      </div>

      <div className="space-y-12">
        {[
          {
            company: "Eusol Lahore, PB, Pakistan",
            role: "Odoo Developer",
            period: "Since November 2023",
            tasks: [
              "Designing and developing Odoo applications, including new module creation and customization.",
              "Analyzing project scope and requirements.",
              "Preparing detailed technical documents in collaboration with various teams (when required).",
              "Writing clean, readable, and maintainable code following software development best practices.",
              "Leveraging existing Odoo features to achieve project goals efficiently.",
              "Developing custom Odoo modules tailored to specific business needs.",
              "Managing and maintaining code using Git version control with proper commit practices.",
              "Ensuring secure and reliable software development processes.",
              "Building and maintaining code quality."
            ]
          },
          {
            company: "Dysin Automobiles Limited",
            role: "Odoo Developer",
            period: "Current",
            tasks: [
              "End-to-end Odoo module development & ERP customization",
              "REST API integrations & business process automation",
              "PostgreSQL performance optimization & high-volume data handling",
              "Building advanced XML/QWeb reporting systems",
              "Implementing secure Git-based development workflows"
            ]
          }
        ].map((job, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="relative pl-8 md:pl-12 border-l-2 border-purple-600/30 group"
          >
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-purple-600 shadow-[0_0_15px_rgba(147,51,234,0.5)] group-hover:scale-125 transition-transform"></div>
            
            <div className="glass rounded-2xl p-8 border-purple-500/10 hover:border-purple-500/30 transition-all">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white">{job.role}</h3>
                  <p className="text-purple-400 font-medium">{job.company}</p>
                </div>
                <div className="mt-2 md:mt-0 px-4 py-1 rounded-full glass border-purple-500/20 text-xs text-purple-300">
                  {job.period}
                </div>
              </div>
              <ul className="grid md:grid-cols-2 gap-4">
                {job.tasks.map((task, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-400 text-sm">
                    <CheckCircle2 size={16} className="text-purple-500 mt-0.5 shrink-0" />
                    {task}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
)

const Projects = () => {
  const projects = [
    { name: "Alif Holdings ERP", desc: "Comprehensive enterprise resource planning customization.", tech: ["Odoo", "Python", "XML"], special: false },
    { name: "Altech ERP", desc: "Automated business workflows for technical operations.", tech: ["Odoo", "PostgreSQL"], special: false },
    { name: "SJ Construction ERP", desc: "Project management and inventory tracking for construction.", tech: ["Odoo", "QWeb"], special: false },
    { name: "AI Plant Disease Detection", desc: "Deep learning system for agricultural health monitoring.", tech: ["Python", "PyTorch", "AI"], special: true },
    { name: "Mu Store", desc: "Customized retail management and POS integration.", tech: ["Odoo", "JS"], special: false },
    { name: "AlifX API", desc: "High-throughput REST API gateway for enterprise data.", tech: ["Python", "FastAPI"], special: false }
  ]

  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl font-bold dark:text-white text-gray-900 mb-2">Featured Projects</h2>
            <p className="text-gray-500 uppercase tracking-widest text-xs">Innovation in Action</p>
          </div>
          <button className="hidden md:block text-purple-400 hover:text-purple-300 transition-colors font-semibold">View Archive →</button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className={`relative overflow-hidden rounded-3xl glass p-8 border-purple-500/10 group ${project.special ? 'ring-2 ring-purple-500/40 bg-purple-900/10' : ''}`}
            >
              {project.special && (
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-purple-500 text-[10px] font-bold text-white uppercase tracking-tighter">AI Focused</div>
              )}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">{project.name}</h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">{project.desc}</p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((t, index) => (
                  <span key={index} className="text-[10px] px-2 py-1 rounded bg-white/5 text-gray-300 font-mono">{t}</span>
                ))}
              </div>

              <button className="flex items-center gap-2 text-xs font-bold text-white group-hover:gap-4 transition-all">
                VIEW DETAILS <ExternalLink size={14} />
              </button>
              
              <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-purple-600/5 rounded-full group-hover:bg-purple-600/20 transition-colors"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const Skills = () => {
  const groups = [
    { title: "Backend", items: ["Python", "Odoo", "PostgreSQL", "REST APIs"] },
    { title: "Frontend", items: ["HTML5", "CSS3", "JavaScript", "XML", "QWeb"] },
    { title: "Tools", items: ["Git", "GitHub", "Bitbucket", "Postman"] },
    { title: "Other", items: ["WordPress", "Elementor", "Business Analytics"] }
  ]

  return (
    <section id="skills" className="py-24 bg-gray-900/30">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16 text-center dark:text-white text-gray-900">Technical Arsenal</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {groups.map((group, i) => (
            <div key={i} className="space-y-6">
              <h3 className="text-purple-500 font-bold uppercase tracking-widest text-xs">{group.title}</h3>
              <div className="flex flex-wrap gap-3">
                {group.items.map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(139, 92, 246, 0.2)' }}
                    className="px-4 py-3 rounded-xl glass border-purple-500/10 text-sm font-medium text-gray-300 w-full"
                  >
                    {item}
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const Metrics = () => (
  <section className="py-24 bg-purple-600/5">
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
      {[
        { val: "25+", label: "ERP Projects" },
        { val: "100+", label: "Custom Modules" },
        { val: "50+", label: "APIs Developed" },
        { val: "10k+", label: "Lines of Python" }
      ].map((stat, i) => (
        <div key={i}>
          <div className="text-5xl font-black text-purple-500 mb-2">{stat.val}</div>
          <div className="text-gray-500 uppercase tracking-widest text-[10px] font-bold">{stat.label}</div>
        </div>
      ))}
    </div>
  </section>
)

const Contact = () => (
  <section id="contact" className="py-24">
    <div className="max-w-7xl mx-auto px-6">
      <div className="glass rounded-3xl p-12 border-purple-500/20 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 rounded-full blur-[100px]"></div>
        
        <div className="grid md:grid-cols-2 gap-16 relative z-10">
          <div>
            <h2 className="text-4xl font-bold mb-6 dark:text-white text-gray-900">Let's build the <br/><span className="text-purple-500">future together.</span></h2>
            <p className="text-gray-400 mb-10 leading-relaxed">
              Open for senior-level Odoo development roles, architectural consulting, and remote enterprise collaborations.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-gray-300">
                <div className="p-3 rounded-xl glass text-purple-500"><Mail size={20} /></div>
                <span>waqaradrees29@gmail.com</span>
              </div>
              <div className="flex items-center gap-4 text-gray-300">
                <div className="p-3 rounded-xl glass text-purple-500"><Phone size={20} /></div>
                <span>03249408478</span>
              </div>
              <div className="flex items-center gap-4 text-gray-300">
                <div className="p-3 rounded-xl glass text-purple-500"><MapPin size={20} /></div>
                <span>Lahore, Pakistan</span>
              </div>
            </div>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <input type="text" placeholder="Full Name" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-purple-500 transition-all" />
              <input type="email" placeholder="Email Address" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-purple-500 transition-all" />
            </div>
            <input type="text" placeholder="Subject" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-purple-500 transition-all" />
            <textarea placeholder="Your Message" rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-purple-500 transition-all"></textarea>
            <button className="w-full py-4 bg-purple-600 text-white rounded-xl font-bold hover:bg-purple-700 transition-all shadow-lg shadow-purple-600/20">
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
)

const Footer = () => (
  <footer className="py-12 border-t border-white/5">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="text-xl font-bold text-purple-500">ALISHAN.</div>
      <div className="text-gray-500 text-sm">© 2024 Alishan Adrees. All rights reserved.</div>
      <div className="flex gap-6">
        <a href="https://github.com/Ali-shan-Adrees" target="_blank" rel="noopener noreferrer"><Github size={20} className="text-gray-500 hover:text-white cursor-pointer transition-colors" /></a>
          <a href="https://www.linkedin.com/in/alishan-adrees-4376aa271/" target="_blank" rel="noopener noreferrer"><Linkedin size={20} className="text-gray-500 hover:text-white cursor-pointer transition-colors" /></a>
      </div>
    </div>
  </footer>
)

// --- Main Page ---

export default function Home({ isDarkMode, toggleTheme }: SectionProps) {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-gray-100 font-sans selection:bg-purple-500 selection:text-white">
      <Head>
        <title>Alishan Adrees | Senior Odoo & ERP Engineer</title>
        <meta name="description" content="Senior Odoo Developer and ERP Solutions Engineer specializing in business automation and Python backend systems." />
      </Head>

      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Metrics />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
