import { useRef } from 'react';
import { AuditForm } from './components/AuditForm';
import {
  ArrowRight,
  CheckCircle2,
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
      <nav className="sticky top-0 z-40 backdrop-blur-sm border-b border-slate-800 bg-slate-950/80">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Workflow className="w-6 h-6 text-blue-500" />
            <span className="font-semibold text-lg">Automation Works</span>
          </div>
          <button
            onClick={scrollToContact}
            className="px-4 py-2 text-sm rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors font-medium"
          >
            Request Audit
          </button>
        </div>
      </nav>

      <main>
        <section className="relative pt-32 pb-24 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6 px-4 py-2 rounded-full border border-slate-700 bg-slate-900/50">
              <p className="text-sm text-slate-300">
                For founders and operators with operational friction
              </p>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Stop Wasting Time on{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Manual Work
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              Your team spends hours on repetitive tasks that don't require
              thought. Disconnected tools. Manual handoffs. Data entry that
              wastes everyone's time. We help you build systems that actually
              work—not magic buttons, but real automation that fits your
              business.
            </p>

            <button
              onClick={scrollToContact}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors font-semibold text-lg group"
            >
              Request an Automation Audit
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </section>

        <section className="py-24 px-6 bg-slate-900/30 border-t border-slate-800">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-16 text-center">
              Who This Is For (and Who It Isn't)
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="p-8 rounded-xl border border-slate-700 bg-slate-900/50">
                <h3 className="text-xl font-semibold mb-6 text-green-400 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6" />
                  This is for you if:
                </h3>
                <ul className="space-y-4 text-slate-300">
                  <li className="flex gap-3">
                    <span className="text-blue-400 font-bold">•</span>
                    <span>
                      Your team spends real time on repetitive, manual work
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-400 font-bold">•</span>
                    <span>
                      You're using disconnected tools and doing manual handoffs
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-400 font-bold">•</span>
                    <span>
                      You want clarity on what automation can actually do for
                      your business
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-400 font-bold">•</span>
                    <span>
                      You're ready to invest in systems, not looking for a
                      quick fix
                    </span>
                  </li>
                </ul>
              </div>

              <div className="p-8 rounded-xl border border-slate-700 bg-slate-900/50">
                <h3 className="text-xl font-semibold mb-6 text-slate-400 flex items-center gap-2">
                  <Users className="w-6 h-6" />
                  This probably isn't right now if:
                </h3>
                <ul className="space-y-4 text-slate-400">
                  <li className="flex gap-3">
                    <span className="text-slate-600 font-bold">•</span>
                    <span>
                      You're looking for a "magic button" to replace your whole
                      team
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-slate-600 font-bold">•</span>
                    <span>
                      You want results before understanding what's possible
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-slate-600 font-bold">•</span>
                    <span>Your workflows are still being figured out</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-slate-600 font-bold">•</span>
                    <span>
                      Automation isn't a priority right now—that's fine, reach
                      out later
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 px-6 border-t border-slate-800">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-16 text-center">
              How It Works
            </h2>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="relative">
                <div className="absolute -left-4 top-8 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm">
                  1
                </div>
                <div className="ml-8">
                  <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <MessageSquare className="w-5 h-5 text-blue-400" />
                    Understand
                  </h3>
                  <p className="text-slate-400">
                    We learn about your actual operations—where time gets spent,
                    what frustrates your team, where errors happen.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -left-4 top-8 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm">
                  2
                </div>
                <div className="ml-8">
                  <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-blue-400" />
                    Identify
                  </h3>
                  <p className="text-slate-400">
                    We map where automation creates real value—faster workflows,
                    fewer errors, better data, clearer insights.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -left-4 top-8 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm">
                  3
                </div>
                <div className="ml-8">
                  <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <Workflow className="w-5 h-5 text-blue-400" />
                    Design
                  </h3>
                  <p className="text-slate-400">
                    We show you specific, practical recommendations—what to
                    automate, how it would work, what it costs.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -left-4 top-8 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm">
                  4
                </div>
                <div className="ml-8">
                  <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <Headphones className="w-5 h-5 text-blue-400" />
                    Decide
                  </h3>
                  <p className="text-slate-400">
                    You decide what moves forward. We're here to answer
                    questions and help, but the choice is always yours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 px-6 border-t border-slate-800">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-16 text-center">
              What Gets Better
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 rounded-xl border border-slate-700 bg-slate-900/50 hover:border-blue-500/30 transition-colors">
                <TrendingUp className="w-10 h-10 text-green-400 mb-4" />
                <h3 className="font-semibold text-lg mb-3">Faster Operations</h3>
                <p className="text-slate-300">
                  Tasks that took hours now complete in minutes. No more waiting for manual work to be done.
                </p>
              </div>

              <div className="p-8 rounded-xl border border-slate-700 bg-slate-900/50 hover:border-blue-500/30 transition-colors">
                <AlertCircle className="w-10 h-10 text-blue-400 mb-4" />
                <h3 className="font-semibold text-lg mb-3">Fewer Errors</h3>
                <p className="text-slate-300">
                  Automation eliminates typos, missed steps, and inconsistencies. Better data, better decisions.
                </p>
              </div>

              <div className="p-8 rounded-xl border border-slate-700 bg-slate-900/50 hover:border-blue-500/30 transition-colors">
                <Clock className="w-10 h-10 text-cyan-400 mb-4" />
                <h3 className="font-semibold text-lg mb-3">Your Team's Time Back</h3>
                <p className="text-slate-300">
                  Stop spending mental energy on repetitive work. Your team focuses on what actually matters.
                </p>
              </div>
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
                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>That time becomes available for strategy and growth</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Fewer errors mean better data and faster decisions</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Workflows run while your team sleeps</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Everything connected, integrated, and synchronized</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 px-6 border-t border-slate-800">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-16 text-center">
              Our Track Record
            </h2>

            <div className="grid md:grid-cols-3 gap-12 text-center">
              <div>
                <div className="text-4xl font-bold text-blue-400 mb-2">
                  10+
                </div>
                <p className="text-slate-300">
                  Years building automation systems
                </p>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-400 mb-2">
                  250+
                </div>
                <p className="text-slate-300">
                  Automations actively running across industries
                </p>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-400 mb-2">
                  6+ Industries
                </div>
                <p className="text-slate-300">
                  Real operations, from retail to professional services
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 px-6 border-t border-slate-800">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              What's a Free Automation Audit?
            </h2>

            <div className="bg-slate-900/50 border border-slate-700 rounded-xl p-8 space-y-6">
              <p className="text-lg text-slate-300 leading-relaxed">
                An audit is a no-pressure conversation where we understand your
                operations and identify where automation creates real value. It's
                not a sales pitch. It's clarity.
              </p>

              <div className="space-y-4">
                <h3 className="font-semibold text-lg">What happens:</h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>
                      Initial call: You tell us about your workflows, what's
                      working, what isn't (30–45 minutes)
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>
                      We dive into specifics: Where time gets wasted, what
                      frustrates your team, where errors happen
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>
                      We deliver: A written summary of 2–4 specific automation
                      opportunities, what they'd do, realistic costs
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>
                      You decide: No pressure to move forward. We answer
                      questions. You evaluate. Simple as that.
                    </span>
                  </li>
                </ul>
              </div>

              <p className="text-slate-400 italic">
                The audit has real value whether you work with us or not. You
                get clarity on what's possible—that's the whole point.
              </p>
            </div>
          </div>
        </section>

        <section className="py-24 px-6 bg-slate-900/30 border-t border-slate-800">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              What Happens After You Request an Audit
            </h2>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-blue-600/20 border border-blue-500/40 flex items-center justify-center">
                    <span className="font-bold text-blue-400">1</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    We Reach Out (1–2 business days)
                  </h3>
                  <p className="text-slate-300">
                    One of our team members will contact you to schedule a call.
                    We're straightforward about who we help and confirm this is
                    worth your time.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-blue-600/20 border border-blue-500/40 flex items-center justify-center">
                    <span className="font-bold text-blue-400">2</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    The Audit Call (30–45 minutes)
                  </h3>
                  <p className="text-slate-300">
                    We learn. No pitch. No deck. Just real questions about how
                    your operations actually work. We take notes, we listen, we
                    understand.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-blue-600/20 border border-blue-500/40 flex items-center justify-center">
                    <span className="font-bold text-blue-400">3</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    Written Recommendations (1 week)
                  </h3>
                  <p className="text-slate-300">
                    You get a detailed summary: 2–4 specific opportunities, what
                    each would do, estimated complexity and cost. Clear,
                    practical, honest.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-blue-600/20 border border-blue-500/40 flex items-center justify-center">
                    <span className="font-bold text-blue-400">4</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    Your Decision (No Pressure)
                  </h3>
                  <p className="text-slate-300">
                    Review the recommendations, ask us questions, think it over.
                    Move forward with us, implement it yourself, or decide it's
                    not a priority. We respect all outcomes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          ref={contactRef}
          className="py-32 px-6 border-t border-slate-800"
        >
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold mb-4 text-center">
              Start a Conversation
            </h2>

            <p className="text-center text-slate-300 mb-12 text-lg">
              Request a free automation audit. No commitment, no surprise sales
              call. Just clarity on what's possible.
            </p>

            <div className="flex justify-center">
              <AuditForm />
            </div>
          </div>
        </section>

        <footer className="py-12 px-6 border-t border-slate-800 bg-slate-900/50">
          <div className="max-w-6xl mx-auto text-center text-slate-500 text-sm">
            <p>
              © {new Date().getFullYear()} Automation Works. Building systems
              that actually work.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
