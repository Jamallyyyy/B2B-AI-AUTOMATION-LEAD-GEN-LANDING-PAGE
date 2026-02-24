import { useRef } from 'react';
import { AuditForm } from './components/AuditForm';
import {
  ArrowRight,
  CheckCircle,
  MessageSquare,
  Workflow,
  Zap,
  Users,
  Headphones,
  TrendingUp,
  Clock,
  AlertCircle,
} from 'lucide-react';

function App() {
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 overflow-hidden">
      <nav className="sticky top-0 z-50 glass-dark border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="p-2 rounded-lg bg-accent-primary/10 border border-accent-primary/20 group-hover:bg-accent-primary/20 transition-colors">
              <Workflow className="w-6 h-6 text-accent-primary" />
            </div>
            <span className="font-display font-bold text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
              Automation Works
            </span>
          </div>
          <button
            onClick={scrollToContact}
            className="button-primary !py-2 !px-5 !text-sm"
          >
            Request Audit
          </button>
        </div>
      </nav>

      <main>
        <section className="relative pt-32 pb-32 px-6 overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none"></div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-accent-primary/20 via-transparent to-transparent blur-[120px] pointer-events-none"></div>

          <div className="max-w-5xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full glass border border-white/10 animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-secondary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-secondary"></span>
              </span>
              <p className="text-sm font-medium text-slate-300">
                Premium AI Operations for B2B Founders
              </p>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-[1.1] tracking-tight animate-slide-up">
              Stop Wasting Time on <br />
              <span className="text-gradient">Manual Work</span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-up [animation-delay:200ms]">
              Your team spends hours on repetitive tasks that don't require
              thought. We help you build robust AI systems that fit your
              business—not magic buttons, but real automation.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-slide-up [animation-delay:400ms]">
              <button
                onClick={scrollToContact}
                className="button-primary group w-full sm:w-auto"
              >
                Request an Automation Audit
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
                className="button-secondary w-full sm:w-auto"
              >
                How It Works
              </button>
            </div>
          </div>
        </section>

        <section className="py-24 px-6 relative bg-slate-900/20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center tracking-tight">
              Who This Is For <span className="text-slate-500">(And Who It Isn't)</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="group p-8 rounded-2xl glass-dark border-white/5 hover:border-accent-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-accent-primary/10">
                <div className="w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold mb-6 text-white">
                  This Is For You If:
                </h3>
                <ul className="space-y-4">
                  {[
                    "Your team spends real time on repetitive, manual work",
                    "You're using disconnected tools and doing manual handoffs",
                    "You want clarity on what automation can actually do",
                    "You're ready to invest in systems, not quick fixes"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 text-slate-400 group-hover:text-slate-300 transition-colors">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-primary flex-shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="group p-8 rounded-2xl glass-dark border-white/5 hover:border-slate-700 transition-all duration-500">
                <div className="w-12 h-12 rounded-xl bg-slate-500/10 border border-slate-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Users className="w-6 h-6 text-slate-400" />
                </div>
                <h3 className="text-2xl font-bold mb-6 text-slate-300">
                  This Isn't For You If:
                </h3>
                <ul className="space-y-4">
                  {[
                    "You want a 'magic button' to replace your whole team",
                    "You want results before understanding what's possible",
                    "Your workflows are still being figured out",
                    "Automation isn't a priority right now"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 text-slate-500 group-hover:text-slate-400 transition-colors">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-700 flex-shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="py-24 px-6 relative overflow-hidden">
          <div className="max-w-6xl mx-auto relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-20 text-center tracking-tight">
              The Path to <span className="text-gradient">Efficiency</span>
            </h2>

            <div className="grid md:grid-cols-4 gap-12">
              {[
                {
                  step: 1,
                  title: "Understand",
                  icon: MessageSquare,
                  desc: "We learn about your actual operations—where time gets spent, what frustrates your team."
                },
                {
                  step: 2,
                  title: "Identify",
                  icon: Zap,
                  desc: "We map where automation creates real value—faster workflows, fewer errors, better data."
                },
                {
                  step: 3,
                  title: "Design",
                  icon: Workflow,
                  desc: "We show you specific, practical recommendations—what to automate, how it would work."
                },
                {
                  step: 4,
                  title: "Decide",
                  icon: Headphones,
                  desc: "You decide what moves forward. We're here to help, but the choice is always yours."
                }
              ].map((item, i) => (
                <div key={i} className="relative group">
                  {i < 3 && (
                    <div className="hidden md:block absolute top-12 left-full w-full h-[2px] bg-gradient-to-r from-accent-primary/50 to-transparent -translate-x-4 z-0" />
                  )}
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-white/5 flex items-center justify-center mb-8 group-hover:border-accent-primary/50 transition-all duration-500 shadow-xl group-hover:shadow-accent-primary/5">
                      <item.icon className="w-8 h-8 text-accent-primary group-hover:scale-110 transition-transform" />
                      <div className="absolute -top-3 -right-3 w-8 h-8 rounded-lg bg-accent-primary text-white flex items-center justify-center font-bold text-sm shadow-lg">
                        {item.step}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-accent-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 px-6 relative bg-slate-900/10">
          <div className="max-w-6xl mx-auto relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center tracking-tight">
              What Gets <span className="text-gradient">Better</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: TrendingUp,
                  title: "Faster Operations",
                  desc: "Tasks that took hours now complete in minutes. No more waiting for manual work to be done.",
                  color: "text-green-400",
                  bg: "bg-green-400/10"
                },
                {
                  icon: AlertCircle,
                  title: "Fewer Errors",
                  desc: "Automation eliminates typos, missed steps, and inconsistencies. Better data, better decisions.",
                  color: "text-blue-400",
                  bg: "bg-blue-400/10"
                },
                {
                  icon: Clock,
                  title: "Your Team's Time Back",
                  desc: "Stop spending mental energy on repetitive work. Your team focuses on what actually matters.",
                  color: "text-cyan-400",
                  bg: "bg-cyan-400/10"
                }
              ].map((item, i) => (
                <div key={i} className="group p-8 rounded-2xl glass-dark border-white/5 hover:border-accent-primary/50 transition-all duration-500">
                  <div className={`w-14 h-14 rounded-xl ${item.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <item.icon className={`w-7 h-7 ${item.color}`} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">{item.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 px-6 bg-slate-900/30 border-t border-slate-800">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-16 text-center">
              The Real Cost of Doing Nothing
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 rounded-xl border border-red-900/50 bg-red-950/20">
                <h3 className="font-semibold text-lg mb-4 text-red-300">
                  Every month your team is doing this:
                </h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex gap-3">
                    <span className="text-red-400">•</span>
                    <span>Spending 40+ hours on manual, repetitive work</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-400">•</span>
                    <span>Making data entry mistakes that take time to catch</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-400">•</span>
                    <span>Waiting for workflows to complete without automation</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-400">•</span>
                    <span>
                      Losing context switching between disconnected tools
                    </span>
                  </li>
                </ul>
              </div>

              <div className="p-8 rounded-xl border border-green-900/50 bg-green-950/20">
                <h3 className="font-semibold text-lg mb-4 text-green-300">
                  With automation in place:
                </h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>That time becomes available for strategy and growth</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Fewer errors mean better data and faster decisions</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Workflows run while your team sleeps</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Everything connected, integrated, and synchronized</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 px-6 relative border-t border-white/5">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-20 text-center tracking-tight">
              Our <span className="text-gradient">Track Record</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-12 text-center">
              {[
                { label: "Years building systems", value: "10+" },
                { label: "Active automations", value: "250+" },
                { label: "Core Industries", value: "6+" }
              ].map((stat, i) => (
                <div key={i} className="group cursor-default">
                  <div className="text-6xl md:text-7xl font-extrabold text-white mb-4 group-hover:text-accent-primary transition-colors duration-500">
                    {stat.value}
                  </div>
                  <div className="text-slate-500 font-display font-medium text-lg uppercase tracking-widest group-hover:text-slate-300 transition-colors duration-500">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 px-6 border-t border-white/5 bg-slate-900/20">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                What's a Free <span className="text-gradient">Automation Audit?</span>
              </h2>
              <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                No pressure. No sales pitch. Just hard-won clarity on how to scale your operations.
              </p>
            </div>

            <div className="glass-dark border-white/5 rounded-3xl p-8 md:p-12 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent-primary/10 blur-[80px] -mr-32 -mt-32 rounded-full"></div>

              <div className="grid md:grid-cols-2 gap-12 relative z-10">
                <div className="space-y-6">
                  <p className="text-xl text-slate-300 leading-relaxed font-medium">
                    An audit is a focused conversation where we understand your operations and identify high-value automation opportunities.
                  </p>
                  <p className="text-slate-400 italic">
                    "The audit has real value whether you work with us or not. You get clarity on what's possible."
                  </p>
                </div>

                <div className="space-y-6">
                  <h3 className="font-display font-bold text-2xl text-white">What Happens:</h3>
                  <ul className="space-y-4">
                    {[
                      "Initial call: Deep dive into your workflows (45m)",
                      "Specific analysis: Where time and money are leaking",
                      "The Deliverable: 2–4 verified automation paths",
                      "The Choice: You decide if/how to proceed"
                    ].map((step, i) => (
                      <li key={i} className="flex gap-4 items-start">
                        <CheckCircle className="w-6 h-6 text-accent-secondary flex-shrink-0" />
                        <span className="text-slate-300 font-medium leading-tight">{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 px-6 relative bg-slate-900/10 overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none"></div>
          <div className="max-w-4xl mx-auto relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center tracking-tight">
              The <span className="text-gradient">Process</span>
            </h2>

            <div className="space-y-6">
              {[
                {
                  step: 1,
                  title: "We Reach Out (1–2 business days)",
                  desc: "One of our team members will contact you to schedule a call. We're straightforward about who we help."
                },
                {
                  step: 2,
                  title: "The Audit Call (45 minutes)",
                  desc: "We learn. No pitch. No deck. Just real questions about how your operations actually work. We listen."
                },
                {
                  step: 3,
                  title: "Written Recommendations (1 week)",
                  desc: "You get a detailed summary: 2–4 verified opportunities, estimated complexity and honest costs."
                },
                {
                  step: 4,
                  title: "Your Decision (No Pressure)",
                  desc: "Review the plan, ask questions. Move forward with us, implement it yourself, or wait. We respect all outcomes."
                }
              ].map((item, i) => (
                <div key={i} className="group flex gap-8 p-8 rounded-2xl glass-dark border-white/5 hover:border-accent-primary/30 transition-all duration-500">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-accent-primary/10 border border-accent-primary/20 flex items-center justify-center group-hover:bg-accent-primary text-accent-primary group-hover:text-white transition-all duration-500">
                      <span className="font-bold text-xl">{item.step}</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-accent-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-400 text-lg leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          ref={contactRef}
          className="py-32 px-6 relative"
        >
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-accent-primary/10 blur-[150px] pointer-events-none"></div>

          <div className="max-w-4xl mx-auto relative z-10">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-center tracking-tight">
              Start a <span className="text-gradient">Conversation</span>
            </h2>

            <p className="text-center text-slate-400 mb-16 text-xl max-w-2xl mx-auto leading-relaxed">
              Request a free automation audit. No commitment, no surprise sales
              call. Just clarity on what's possible for your business.
            </p>

            <div className="flex justify-center">
              <AuditForm />
            </div>
          </div>
        </section>

        <footer className="py-20 px-6 border-t border-white/5 relative bg-slate-900/50">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-2">
              <Workflow className="w-5 h-5 text-accent-primary" />
              <span className="font-display font-bold text-lg text-white">Automation Works</span>
            </div>

            <div className="text-slate-500 text-sm">
              <p>© {new Date().getFullYear()} Automation Works. Building systems that actually work.</p>
            </div>

            <div className="flex gap-6 text-slate-500 text-sm">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
