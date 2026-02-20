import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  LayoutDashboard, 
  Send, 
  HelpCircle, 
  ExternalLink, 
  BookOpen, 
  CheckCircle2, 
  ChevronRight, 
  AlertCircle,
  MessageSquare,
  Globe,
  Settings,
  X,
  Plus,
  Github,
  Award,
  Clock,
  Zap,
  Cpu,
  Terminal,
  Trophy,
  Users,
  Search,
  FileText,
  MousePointer2,
  Compass,
  ArrowRight,
  UserCheck,
  Video,
  Layers,
  Sparkles,
  Eye,
  Package,
  Wrench,
  Monitor,
  Code2,
  TerminalSquare,
  Download,
  Info,
  Circle
} from 'lucide-react';

// --- DATA STRUCTURES ---

const EXPERT_PANEL = [
  { name: 'Ankit Lodha', role: 'Customer Engineering Sr Manager', company: 'BrowserStack' },
  { name: 'Rushabh Shroff', role: 'Lead - Customer Engineering', company: 'BrowserStack' },
  { name: 'Sanket Mali', role: 'Senior Lead, Customer Engineering', company: 'BrowserStack' },
  { name: 'Siddhi Wadetiwar', role: 'SDE | Customer Engineering', company: 'BrowserStack' },
  { name: 'Zenith Mehta', role: 'Senior Customer Engineer', company: 'BrowserStack' },
  { name: 'Hardik Singh', role: 'Senior SDE | Customer Engineering', company: 'BrowserStack' },
  { name: 'Aayushi Singh', role: 'SDE | Customer Engineering', company: 'BrowserStack' },
  { name: 'Shifa Afreen', role: 'SDE - Customer Engineer', company: 'BrowserStack' },
];

const WORKSHOP_PLAN = [
  {
    module: 'Test Case Management (TCM)',
    icon: <FileText className="h-6 w-6 text-indigo-600" />,
    description: 'Master the art of organizing tests and leveraging AI for rapid test design.',
    agenda: [
      { title: 'TCM Overview', detail: 'Explore dashboard navigation, test organization, and traceability.' },
      { title: 'AI Test Case Generator', detail: 'Generate test cases from user stories/requirements instantly.' },
      { title: 'Authoring to LCA', detail: 'Seamlessly convert manual test cases into Low Code Automation starts.' },
      { title: 'Hands-On Exercise', detail: 'Import 3 manual cases and expand them into a suite using AI.' }
    ],
    resources: [
      { name: 'TCM Dashboard', url: 'https://test-management.browserstack.com/' },
      { name: 'AI Generator Docs', url: 'https://www.browserstack.com/docs/test-management/ai-test-case-generator' }
    ]
  },
  {
    module: 'Low Code Automation (LCA)',
    icon: <Zap className="h-6 w-6 text-blue-600" />,
    description: 'Experience rapid automation and self-healing resilience without complex scripting.',
    agenda: [
      { title: 'LCA Interface Walkthrough', detail: 'Understand test creation, recorder tools, and execution flows.' },
      { title: 'AI Smart Interactions', detail: 'Demonstrate AI-based step suggestions and auto-fill data flows.' },
      { title: 'Self-Heal Protocol', detail: 'Watch AI recover tests automatically when locators change.' },
      { title: 'Hands-On Exercise', detail: 'Build and execute an E2E flow using AI-assisted low-code steps.' }
    ],
    resources: [
      { name: 'LCA Studio', url: 'https://low-code.browserstack.com/' },
      { name: 'Self-Healing Guide', url: 'https://www.browserstack.com/docs/low-code-automation/test-recording/browserstack-ai/ai-self-heal' }
    ]
  },
  {
    module: 'Accessibility Testing',
    icon: <Users className="h-6 w-6 text-teal-600" />,
    description: 'Automate inclusivity audits using high-impact AI scanners.',
    agenda: [
      { title: 'A11y Standards & Metrics', detail: 'Intro to WCAG 2.1 and key metrics on the dashboard.' },
      { title: 'Workflow Scanners', detail: 'Run an automated accessibility scan on a login or checkout flow.' },
      { title: 'AI Detection & Remediation', detail: 'Using AI to identify contrast issues and missing alt text.' },
      { title: 'Hands-On Exercise', detail: 'Scan a demo page and conceptualize fixes for detected issues.' }
    ],
    resources: [
      { name: 'A11y Platform', url: 'https://accessibility.browserstack.com/' },
      { name: 'A11y SDK Setup', url: 'https://www.browserstack.com/docs/accessibility/automated-tests/get-started' }
    ]
  },
  {
    module: 'Visual Testing (Percy)',
    icon: <Eye className="h-6 w-6 text-violet-600" />,
    description: 'Catch pixel-level regressions that functional tests miss.',
    agenda: [
      { title: 'Percy Visual Engine', detail: 'Snapshot-based diffing, builds, and approval workflows.' },
      { title: 'Running Sample Builds', detail: 'Execute a Percy build and view snapshots across browsers.' },
      { title: 'Diff Analysis', detail: 'Identifying regressions vs intentional UI changes.' },
      { title: 'Hands-On Exercise', detail: 'Trigger a build and review visual diffs in the dashboard.' }
    ],
    resources: [
      { name: 'Percy Dashboard', url: 'https://percy.io/' },
      { name: 'Percy SDK Docs', url: 'https://www.browserstack.com/docs/percy' }
    ]
  }
];

const DOMAINS = {
  FASHION: {
    id: 'FASHION',
    name: 'Fashion Stack',
    sector: 'E-Commerce',
    url: 'ecommercebs.vercel.app',
    icon: <Zap className="text-pink-600" />,
    color: 'blue',
    accent: 'pink',
    challenges: [
      { id: '01', title: 'AI Test Management & Authoring', stories: ['Verify dynamic hero carousel cycles trends', 'Ensure "Men" category displays correct inventory', "Validate 'Add to Cart' refreshes persistent counter"], deliverable: 'CSV File + Low-Code Build URL', links: [{name: 'Test Management', url: 'https://test-management.browserstack.com/'}, {name: 'Low-Code', url: 'https://low-code.browserstack.com/tests'}] },
      { id: '02', title: 'Pixel-Perfect Visual Guardian', goal: 'Catch "Ghost" visual regressions on Login UI that pass functional tests but degrade UX.', deliverable: 'Percy Visual Dashboard Link', links: [{name: 'Percy Dashboard', url: 'https://percy.io/'}] },
      { id: '03', title: 'Cross-Browser SDK Integration', goal: 'Validate the positive Login flow in the application across Win/Mac/iOS/Android devices.', deliverable: 'Repository Code + Automate Build Link', links: [{name: 'SDK Agent Docs', url: 'https://www.browserstack.com/docs/automate/selenium/set-up-test-env/cross-browser-automation-agent'}] },
      { id: '04', title: 'AI Self-Healing Protocol', goal: 'Run scripts against a shifting DOM. Prove AI can recover the booking flow.', deliverable: 'Execution Build Link (Healed Badge)', links: [{name: 'Self-Heal Docs', url: 'https://www.browserstack.com/docs/automate/selenium/self-healing'}] },
      { id: '05', title: 'Inclusive Engineer (Accessibility)', goal: 'Conduct High-Impact audits using Workflow Scanners across Home, Login, and Cart.', deliverable: 'Public Accessibility Report URL', links: [{name: 'Accessibility SDK', url: 'https://accessibility.browserstack.com/'}] },
      { id: '06', title: 'Test Failure Analysis Agent', goal: 'Pick a failed session and utilize AI RCA to analyze logs and suggested fixes.', deliverable: 'Shareable AI RCA Build URL', links: [{name: 'Failure Agent Docs', url: 'https://www.browserstack.com/docs/test-reporting-and-analytics/agents/test-failure-analysis'}] }
    ]
  },
  FIN: {
    id: 'FIN',
    name: 'Fin Stack',
    sector: 'Fintech',
    url: 'finstack-alpha.vercel.app',
    icon: <Award className="text-emerald-600" />,
    color: 'blue',
    accent: 'emerald',
    challenges: [
      { id: '01', title: 'AI Test Management (Fin-KPIs)', stories: ['Verify market index rendering on Dashboard', 'Ensure balance integrity after transfers', 'Validate Loan Calculator EMI results'], deliverable: 'Exported CSV Suite + Build URL', links: [{name: 'Test Management', url: 'https://test-management.browserstack.com/'}] },
      { id: '02', title: 'Pixel-Perfect Visual Guardian', goal: 'Confirm Red Diff highlights on toggle button interactions.', deliverable: 'Percy Dashboard Link', links: [{name: 'Percy', url: 'https://percy.io/'}] },
      { id: '03', title: 'Cross-Browser SDK Integration', goal: 'Login flow validation across all mobile and desktop OS.', deliverable: 'Build Link', links: [{name: 'Automate', url: 'https://automate.browserstack.com/'}] },
      { id: '04', title: 'AI Self-Healing Protocol', goal: 'Prove AI can recover the transaction flow without manual selector updates.', deliverable: 'Build Link with Healed Badge', links: [{name: 'Self-Heal Docs', url: '#'}] },
      { id: '05', title: 'Inclusive Engineer (Accessibility)', goal: 'WCAG 2.1 Audits across account management pages.', deliverable: 'Public Report URL', links: [{name: 'Accessibility', url: '#'}] },
      { id: '06', title: 'Test Failure Analysis Agent', goal: 'Analyze transaction log failures using AI RCA.', deliverable: 'RCA Build URL', links: [{name: 'Reporting & Analytics', url: '#'}] }
    ]
  },
  MEDI: {
    id: 'MEDI',
    name: 'Medi Stack',
    sector: 'Healthcare',
    url: 'medistack.vercel.app',
    icon: <Shield className="text-red-600" />,
    color: 'blue',
    accent: 'red',
    challenges: [
      { id: '01', title: 'AI Test Management (Vitals)', stories: ['Doctor search specialty filtering', 'Book Appointment modal triggers', 'Patient portal redirect validation'], deliverable: 'CSV Suite', links: [{name: 'Test Management', url: '#'}] },
      { id: '02', title: 'Visual Guardian', goal: 'Ghost regression testing on physician detail modals.', deliverable: 'Percy Link', links: [{name: 'Percy', url: '#'}] },
      { id: '03', title: 'SDK Integration', goal: 'Patient login across varied iOS/Android versions.', deliverable: 'Code Repo', links: [{name: 'Automate', url: '#'}] },
      { id: '04', title: 'Self-Healing', goal: 'Vitals dashboard DOM shift recovery.', deliverable: 'Healed Badge Build', links: [{name: 'Docs', url: '#'}] },
      { id: '05', title: 'Accessibility', goal: 'WCAG 2.1 compliance for healthcare access.', deliverable: 'Report URL', links: [{name: 'Scanner', url: '#'}] },
      { id: '06', title: 'Failure Analysis', goal: 'AI RCA for appointment booking failures.', deliverable: 'RCA URL', links: [{name: 'Analytics', url: '#'}] }
    ]
  },
  WANDER: {
    id: 'WANDER',
    name: 'Wander Stack',
    sector: 'Travel',
    url: 'wanderstack.vercel.app',
    icon: <Globe className="text-orange-600" />,
    color: 'blue',
    accent: 'orange',
    challenges: [
      { id: '01', title: 'AI Test Management (Travel Ops)', stories: ['Destination cards routing', 'Flight selection grid persistence', 'Tax calculation accuracy'], deliverable: 'CSV Suite', links: [{name: 'Test Management', url: '#'}] },
      { id: '02', title: 'Visual Guardian', goal: 'Ghost regressions on flight search results.', deliverable: 'Percy Dashboard', links: [{name: 'Percy', url: '#'}] },
      { id: '03', title: 'SDK Integration', goal: 'Booking flow validation across devices.', deliverable: 'Automate Link', links: [{name: 'Automate', url: '#'}] },
      { id: '04', title: 'Self-Healing', goal: 'Booking flow recovery on shifting flight pricing DOM.', deliverable: 'Healed Badge Build', links: [{name: 'Docs', url: '#'}] },
      { id: '05', title: 'Accessibility', goal: 'Home and PLP accessibility audit.', deliverable: 'Public Report', links: [{name: 'Scanner', url: '#'}] },
      { id: '06', title: 'Failure Analysis', goal: 'RCA on booking session timeouts.', deliverable: 'RCA URL', links: [{name: 'Analytics', url: '#'}] }
    ]
  }
};

const FAQ_DATA = [
  { q: "How many challenges do we need to complete?", a: "To qualify for the hackathon, squads must complete at least four (4) out of the six technical challenges for their selected domain." },
  { q: "Can we change our domain after selection?", a: "Domain selection is final once you submit your first mission progress. Choose wisely!" },
  { q: "What should be included in the submission?", a: "Deliverables vary by mission but generally include exported CSV files, Percy dashboard links, GitHub repository links, or BrowserStack build URLs." }
];

// --- SUB-COMPONENTS ---

const ChallengeCard = ({ challenge, accent }) => (
  <div className="bg-white rounded-[32px] border border-slate-200 p-8 shadow-sm hover:shadow-xl hover:border-indigo-100 transition-all group flex flex-col justify-between h-full relative overflow-hidden">
    <div className={`absolute top-0 right-0 w-24 h-24 bg-${accent}-50/30 rounded-bl-full -mr-8 -mt-8 transition-all group-hover:scale-110`} />
    <div className="relative">
      <div className="flex items-center gap-4 mb-6">
        <span className={`w-12 h-12 rounded-2xl bg-${accent}-50 text-${accent}-600 flex items-center justify-center font-bold text-xl border border-${accent}-100 shadow-sm transition-transform group-hover:scale-110`}>
          {challenge.id}
        </span>
        <h3 className="font-extrabold text-xl text-slate-800 leading-tight group-hover:text-indigo-600 transition-colors tracking-tight">{challenge.title}</h3>
      </div>
      
      <div className="space-y-4 mb-8">
        {challenge.stories ? (
          <div className="space-y-3">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Required Scenarios</p>
            {challenge.stories.map((story, i) => (
              <div key={i} className="flex items-start text-sm text-slate-600 bg-slate-50/50 p-3 rounded-2xl border border-slate-100 group-hover:bg-white transition-colors leading-relaxed">
                <CheckCircle2 className={`h-4 w-4 mr-3 text-${accent}-500 shrink-0 mt-0.5`} />
                {story}
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-slate-50/50 p-4 rounded-2xl border border-slate-100 italic text-sm text-slate-500 leading-relaxed group-hover:bg-white transition-colors">
            {challenge.goal}
          </div>
        )}
      </div>
    </div>

    <div className="pt-6 border-t border-slate-100 relative">
      <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-3">Evidence Required</p>
      <div className="flex items-center text-xs font-bold text-slate-700 bg-white border border-slate-200 px-4 py-3 rounded-2xl mb-4 group-hover:border-indigo-200 transition-colors shadow-sm">
        <FileText className={`h-4 w-4 mr-2 text-${accent}-600`} />
        {challenge.deliverable}
      </div>
      <div className="flex flex-wrap gap-2">
        {challenge.links?.map((link, i) => (
          <a key={i} href={link.url} target="_blank" rel="noreferrer" className="inline-flex items-center text-[10px] font-black uppercase text-indigo-600 hover:text-white hover:bg-indigo-600 transition-all bg-indigo-50 border border-indigo-100 px-3 py-2 rounded-lg">
            {link.name} <ExternalLink className="h-3 w-3 ml-2" />
          </a>
        ))}
      </div>
    </div>
  </div>
);

// --- MAIN PAGES ---

const LandingPage = ({ onStart }) => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 selection:bg-indigo-100 selection:text-indigo-900 font-sans">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-10 py-6 max-w-7xl mx-auto border-b border-slate-200 bg-white/70 backdrop-blur-xl sticky top-0 z-50 shadow-sm animate-in fade-in slide-in-from-top-4 duration-700">
        <div className="flex items-center gap-3">
          <div className="bg-indigo-600 p-2.5 rounded-2xl shadow-lg shadow-indigo-100 transform transition-transform hover:scale-105">
            <Cpu className="h-6 w-6 text-white" />
          </div>
          <span className="font-black text-2xl tracking-tighter text-slate-900 italic">BOOTCAMP<span className="text-indigo-600 not-italic">2026</span></span>
        </div>
        <div className="hidden md:flex gap-10 text-[11px] font-black uppercase tracking-[0.2em] text-slate-400">
          <a href="#tracks" className="hover:text-indigo-600 transition-colors">Tracks</a>
          <a href="#setup" className="hover:text-indigo-600 transition-colors">Setup Kit</a>
          <a href="#workshop" className="hover:text-indigo-600 transition-colors">Workshop</a>
          <a href="#faq" className="hover:text-indigo-600 transition-colors">FAQ</a>
        </div>
        <button 
          onClick={onStart}
          className="bg-indigo-600 text-white px-8 py-3 rounded-2xl font-black hover:bg-indigo-700 transition-all text-sm shadow-xl shadow-indigo-100 uppercase tracking-widest active:scale-95"
        >
          Access Portal
        </button>
      </nav>

      {/* Hero */}
      <section className="relative px-6 py-32 max-w-7xl mx-auto text-center overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-indigo-100/50 to-transparent -z-10 blur-3xl opacity-60" />
        <div className="inline-flex items-center gap-2 bg-white border border-slate-200 px-6 py-2.5 rounded-full text-[11px] font-black text-indigo-600 mb-10 uppercase tracking-[0.2em] shadow-sm animate-in fade-in zoom-in duration-1000">
          <Sparkles className="h-4 w-4" /> BrowserStack AI x Testing BootCamp
        </div>
        <h1 className="text-7xl md:text-[110px] font-black tracking-tight text-slate-900 mb-10 leading-[0.85] uppercase italic animate-in fade-in slide-in-from-bottom-8 duration-700">
          Build <br />
          <span className="text-indigo-600 not-italic">Smarter.</span>
        </h1>
        <p className="max-w-2xl mx-auto text-slate-500 text-lg md:text-xl mb-16 leading-relaxed font-medium animate-in fade-in slide-in-from-bottom-12 duration-1000">
          Experience the next evolution of quality engineering. From self-healing protocols to AI-driven insights—master it all here.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6 animate-in fade-in slide-in-from-bottom-16 duration-1000">
          <button 
            onClick={onStart}
            className="bg-indigo-600 text-white px-12 py-5 rounded-[24px] font-black text-xl hover:bg-indigo-700 transition-all shadow-2xl shadow-indigo-200 flex items-center justify-center gap-4 group active:scale-95"
          >
            Mission Control <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform" />
          </button>
          <a href="#setup" className="bg-white text-indigo-600 border-2 border-indigo-100 px-12 py-5 rounded-[24px] font-black text-xl hover:bg-indigo-50 transition-all flex items-center justify-center gap-3 shadow-sm active:scale-95">
            <Package className="h-6 w-6 text-amber-500" /> Start Setup
          </a>
        </div>
      </section>

      {/* Setup Kit Section */}
      <section id="setup" className="bg-white py-32 border-y border-slate-100 relative">
        <div className="max-w-6xl mx-auto px-10">
          <div className="flex flex-col items-center text-center mb-24 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="bg-amber-50 border border-amber-100 p-5 rounded-[32px] mb-8 shadow-sm">
              <Wrench className="h-12 w-12 text-amber-600" />
            </div>
            <span className="text-xs font-black uppercase tracking-[0.3em] text-amber-600 mb-4">Immediate Actions Required</span>
            <h2 className="text-5xl font-black text-slate-900 mb-8 tracking-tight italic uppercase">Getting-Started Setup Kit</h2>
            <p className="text-slate-500 text-xl max-w-3xl leading-relaxed font-medium">
              Complete this setup guide before the workshop to save time and ensure a smooth experience.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1 space-y-8 animate-in fade-in slide-in-from-left-8 duration-700">
              <div className="bg-slate-50 p-10 rounded-[48px] border border-slate-200 h-full shadow-sm">
                <h3 className="text-2xl font-black flex items-center gap-3 mb-6 tracking-tight uppercase">
                   <Info className="h-6 w-6 text-indigo-500" /> Overview
                </h3>
                <p className="text-slate-600 text-lg leading-relaxed mb-10 font-medium opacity-80 italic">
                  Links and environment prerequisites needed for a seamless hands-on lab.
                </p>
                <div className="space-y-6">
                  <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-1.5 h-full bg-indigo-500" />
                    <h4 className="font-black text-indigo-600 mb-3 text-lg tracking-tight">💡 Why this?</h4>
                    <p className="text-sm text-slate-500 leading-relaxed font-medium italic">
                      "Preparation saves time during the session, allowing you to keep pace with the flow."
                    </p>
                  </div>
                  <div className="bg-indigo-50 p-8 rounded-3xl border border-indigo-100 shadow-sm shadow-indigo-100/50">
                    <h4 className="font-black text-indigo-700 flex items-center gap-2 mb-2 uppercase tracking-widest text-xs">
                      <Trophy className="h-4 w-4 text-indigo-400" /> Competitor Edge
                    </h4>
                    <p className="text-sm text-indigo-600 font-medium leading-relaxed">
                      Completing this early gives you a significant advantage for the testathon phase.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-10 animate-in fade-in slide-in-from-right-8 duration-700">
              <div className="bg-red-50 p-10 rounded-[48px] border border-red-100 flex flex-col md:flex-row items-center gap-8 shadow-sm">
                <div className="bg-white p-5 rounded-3xl shadow-sm border border-red-100 shrink-0">
                  <AlertCircle className="h-10 w-10 text-red-600" />
                </div>
                <div>
                  <h3 className="text-red-700 font-black text-2xl tracking-tight mb-2 uppercase italic">Important</h3>
                  <p className="text-red-600 text-lg font-medium leading-snug">
                    Use a <span className="font-black underline decoration-2 underline-offset-4">new personal email ID</span> for signup. Access will be given live.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { id: 1, title: 'Browser & IDE', icon: <Monitor className="text-indigo-600" />, items: ['Google Chrome (Latest)', 'Visual Studio Code', 'IntelliJ IDEA'] },
                  { id: 2, title: 'Runtime Setup', icon: <TerminalSquare className="text-teal-600" />, items: ['Node.js (Mandatory)', 'Java / C# (.NET)', 'Python SDKs'] },
                  { id: 3, title: 'Automation Tool', icon: <Zap className="text-amber-500" />, items: ['LCA Mac Silicon (M1/M2)', 'LCA Mac Intel Chipset', 'LCA Windows Engine'] },
                  { id: 4, title: 'Accessibility Kit', icon: <Accessibility className="text-violet-600" />, items: ['A11y Extension', 'Git & GitHub Client', 'Terminal Config'] },
                ].map((cat, idx) => (
                  <div key={cat.id} style={{ animationDelay: `${idx * 150}ms` }} className="bg-white p-8 rounded-[40px] border border-slate-200 shadow-sm hover:shadow-xl hover:border-indigo-100 transition-all group animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 bg-slate-50 rounded-2xl group-hover:bg-white transition-colors border border-slate-100 group-hover:border-indigo-100 shadow-sm">
                        {cat.icon}
                      </div>
                      <h4 className="font-black text-xl tracking-tight text-slate-800">{cat.title}</h4>
                    </div>
                    <ul className="space-y-3">
                      {cat.items.map((it, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-sm font-bold text-slate-500">
                          <div className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-indigo-400 transition-colors" /> {it}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="flex flex-col md:flex-row items-center justify-between gap-10 bg-indigo-50 p-10 rounded-[48px] border border-indigo-100 shadow-lg shadow-indigo-100/50">
                <div className="flex items-center gap-5">
                  <div className="bg-white p-4 rounded-3xl border border-indigo-100 shadow-sm">
                    <CheckCircle2 className="h-10 w-10 text-emerald-500" />
                  </div>
                  <div>
                    <p className="text-3xl font-black text-indigo-900 italic tracking-tighter uppercase leading-none">Ready to Go!</p>
                    <p className="text-indigo-400 text-sm font-bold uppercase tracking-[0.2em] mt-1">Setup Complete 🚀</p>
                  </div>
                </div>
                <a 
                  href="https://gist.github.com/sanketsmali03/4d36b231400d362f7043f1590f9a14ef" 
                  target="_blank" 
                  rel="noreferrer"
                  className="bg-indigo-600 text-white px-10 py-5 rounded-[24px] font-black text-lg uppercase tracking-widest hover:bg-indigo-700 transition-all shadow-xl flex items-center gap-3 active:scale-95"
                >
                  <Package className="h-6 w-6" /> Access Setup Gist
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tracks Section */}
      <section id="tracks" className="px-10 py-32 max-w-7xl mx-auto">
        <div className="text-center mb-24 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <span className="text-[11px] font-black uppercase tracking-[0.4em] text-indigo-500 mb-4 block">Selection Stage</span>
          <h2 className="text-5xl font-black text-slate-900 mb-6 tracking-tight italic uppercase">Select Your Industry Stack</h2>
          <p className="text-slate-500 text-xl font-medium max-w-2xl mx-auto">Complete 4+ missions to qualify for final engineering evaluation.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(DOMAINS).map(([key, domain], idx) => (
            <div key={key} style={{ animationDelay: `${idx * 100}ms` }} className="bg-white border border-slate-200 p-12 rounded-[56px] hover:border-indigo-500 hover:shadow-2xl transition-all group cursor-default text-center relative overflow-hidden animate-in fade-in zoom-in duration-700 fill-mode-both">
              <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/0 to-indigo-50/0 group-hover:to-indigo-50/20 transition-all" />
              <div className="w-20 h-20 bg-slate-50 rounded-[32px] flex items-center justify-center mb-10 mx-auto group-hover:scale-110 transition-transform border border-slate-100 group-hover:bg-white group-hover:border-indigo-100 shadow-sm relative z-10">
                {React.cloneElement(domain.icon, { className: 'h-10 w-10' })}
              </div>
              <h3 className="text-2xl font-black mb-3 text-slate-900 relative z-10 tracking-tight">{domain.name}</h3>
              <p className="text-slate-500 text-sm font-bold uppercase tracking-widest relative z-10 opacity-60 leading-none">{domain.sector}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Workshop Section */}
      <section id="workshop" className="bg-gradient-to-b from-indigo-50 to-white py-32 border-y border-indigo-100 overflow-hidden relative">
        <div className="absolute top-0 right-0 p-20 opacity-10 pointer-events-none">
          <Layers className="h-[600px] w-[600px] rotate-45 text-indigo-200" />
        </div>
        <div className="max-w-7xl mx-auto px-10 relative z-10">
          <div className="text-center mb-24 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white border-2 border-indigo-100 rounded-[32px] mb-8 shadow-xl">
              <Video className="h-10 w-10 text-indigo-600" />
            </div>
            <h2 className="text-6xl font-black tracking-tight italic uppercase text-indigo-950 leading-none">Workshop Learning Modules</h2>
            <p className="text-indigo-400 text-2xl max-w-3xl mx-auto mt-8 font-medium">
              4 intensive deep-dives into the BrowserStack AI ecosystems.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {WORKSHOP_PLAN.map((mod, i) => (
              <div key={i} style={{ animationDelay: `${i * 200}ms` }} className="bg-white rounded-[64px] p-12 border border-indigo-100 shadow-xl shadow-indigo-100/30 hover:shadow-2xl hover:border-indigo-300 transition-all group animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both">
                <div className="flex items-center justify-between mb-10">
                  <div className="bg-indigo-50 p-5 rounded-[28px] border border-indigo-100 group-hover:bg-indigo-600 transition-colors shadow-sm">
                    {React.cloneElement(mod.icon, { className: 'h-8 w-8 transition-colors group-hover:text-white' })}
                  </div>
                  <div className="bg-indigo-100 border border-indigo-200 px-6 py-2 rounded-full text-indigo-600 text-xs font-black uppercase tracking-widest">
                    Expert Led
                  </div>
                </div>
                
                <h3 className="text-4xl font-black mb-4 tracking-tight text-slate-900 group-hover:text-indigo-700 transition-colors uppercase italic leading-none">{mod.module}</h3>
                <p className="text-slate-500 text-lg mb-10 font-medium leading-relaxed">{mod.description}</p>
                
                <div className="space-y-8 mb-12">
                  {mod.agenda.map((item, idx) => (
                    <div key={idx} className="flex gap-6 group/item">
                      <div className="flex flex-col items-center pt-2 shrink-0">
                        <div className="w-3 h-3 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.3)] group-hover/item:scale-125 transition-transform" />
                        <div className="w-0.5 h-full bg-indigo-100 my-1" />
                      </div>
                      <div>
                        <p className="font-black text-xl mb-1 tracking-tight text-slate-800 group-hover/item:text-indigo-600 transition-colors leading-none">{item.title}</p>
                        <p className="text-sm text-slate-400 font-medium leading-relaxed italic">
                          {item.detail}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4 pt-8 border-t border-slate-100">
                  {mod.resources.map((res, ridx) => (
                    <a 
                      key={ridx} 
                      href={res.url} 
                      target="_blank" 
                      rel="noreferrer"
                      className="inline-flex items-center gap-3 bg-slate-50 border border-slate-200 text-slate-600 hover:text-indigo-600 hover:bg-white hover:border-indigo-200 px-6 py-3 rounded-2xl text-xs font-black uppercase tracking-widest transition-all shadow-sm active:scale-95"
                    >
                      {res.name} <ExternalLink className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rules Section (Light) */}
      <section id="rules" className="bg-white py-32 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-10 grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
          {[
            { id: 1, title: 'Squad Comms', desc: 'Collaborate in real-time within your assigned virtual squad rooms.', icon: <Users className="h-8 w-8" /> },
            { id: 2, title: 'Qualification', desc: 'Cross the quality gate by completing a minimum of 4 technical missions.', icon: <Trophy className="h-8 w-8" /> },
            { id: 3, title: 'Submission', desc: 'Link your GitHub repo and BrowserStack dashboards for final review.', icon: <FileText className="h-8 w-8" /> }
          ].map((rule, idx) => (
            <div key={rule.id} style={{ animationDelay: `${idx * 200}ms` }} className="flex flex-col items-center animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both">
              <div className="w-16 h-16 bg-indigo-50 rounded-3xl flex items-center justify-center text-indigo-600 border border-indigo-100 mb-8 shadow-sm group-hover:scale-110 transition-transform">
                {rule.icon}
              </div>
              <h3 className="text-2xl font-black text-slate-900 uppercase italic mb-4 tracking-tight leading-none">{rule.title}</h3>
              <p className="text-slate-500 font-medium leading-relaxed">{rule.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-10 text-center bg-slate-50">
        <p className="text-slate-300 text-[11px] font-black uppercase tracking-[0.5em]">
          BrowserStack Inc &copy; 2026 / AI Bootcamp secure
        </p>
      </footer>
    </div>
  );
};

const Dashboard = ({ squadKey, onLogout }) => {
  const [view, setView] = useState('DOMAIN_SELECTION');
  const [selectedDomain, setSelectedDomain] = useState(null);
  const [activeTab, setActiveTab] = useState('challenges');

  const handleDomainSelect = (domainKey) => {
    setSelectedDomain(DOMAINS[domainKey]);
    setView('STACK_DASHBOARD');
  };

  if (view === 'DOMAIN_SELECTION') {
    return (
      <div className="min-h-screen bg-slate-50 py-24 px-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-8 mb-20 animate-in slide-in-from-top duration-700">
            <div className="bg-white p-6 rounded-[32px] shadow-2xl border border-indigo-100 border-b-4">
              <LayoutDashboard className="h-10 w-10 text-indigo-600" />
            </div>
            <div>
              <h1 className="text-5xl font-black text-slate-900 tracking-tight italic uppercase leading-none">Mission Initiation</h1>
              <p className="text-indigo-500 font-bold uppercase tracking-[0.2em] mt-4 flex items-center gap-3">
                <div className="w-8 h-1 bg-indigo-600 rounded-full shadow-sm shadow-indigo-200" /> Select Authorized Stack
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {Object.keys(DOMAINS).map((key, idx) => (
              <div 
                key={key} 
                style={{ animationDelay: `${idx * 100}ms` }}
                onClick={() => handleDomainSelect(key)}
                className="group cursor-pointer bg-white rounded-[56px] border border-slate-200 hover:border-indigo-400 hover:shadow-2xl transition-all p-12 text-center relative overflow-hidden shadow-sm animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both"
              >
                <div className="absolute inset-0 bg-indigo-50/30 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="w-24 h-24 bg-indigo-50 rounded-[36px] mx-auto flex items-center justify-center mb-10 group-hover:bg-white transition-all border border-slate-100 group-hover:border-indigo-100 shadow-sm relative z-10 group-hover:scale-110">
                  {React.cloneElement(DOMAINS[key].icon, { className: 'h-12 w-12' })}
                </div>
                <h3 className="font-black text-2xl mb-2 text-slate-900 relative z-10 tracking-tight">{DOMAINS[key].name}</h3>
                <span className="text-[11px] font-black uppercase tracking-widest text-indigo-600 relative z-10 opacity-70 leading-none">{DOMAINS[key].sector}</span>
                <div className="mt-10 flex justify-center opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0 relative z-10">
                  <div className="bg-indigo-600 text-white px-8 py-3 rounded-2xl text-xs font-black uppercase tracking-widest shadow-xl">Start Mission</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex font-sans">
      {/* Sidebar Navigation */}
      <aside className="w-80 border-r border-slate-200 flex flex-col fixed h-full bg-white z-50 animate-in fade-in slide-in-from-left duration-700">
        <div className="p-10 border-b border-slate-50">
          <div className="flex items-center gap-3 mb-10 group cursor-pointer">
            <div className="bg-indigo-600 p-2.5 rounded-2xl shadow-xl transition-all hover:bg-indigo-700 shadow-indigo-100">
              <Cpu className="h-6 w-6 text-white" />
            </div>
            <span className="font-black text-xl tracking-tighter text-slate-900 uppercase italic">Bootcamp<span className="text-indigo-600 not-italic">26</span></span>
          </div>
          <div className="bg-indigo-50 p-6 rounded-[28px] border border-indigo-100 shadow-sm">
            <p className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.2em] mb-3 leading-none">Live Squad</p>
            <p className="font-mono text-xs font-bold text-indigo-800 break-all select-all leading-tight">{squadKey}</p>
          </div>
        </div>

        <nav className="flex-grow p-8 space-y-3 overflow-y-auto">
          {[
            { id: 'challenges', label: 'Technical Missions', icon: <Terminal className="h-5 w-5" /> },
            { id: 'submit', label: 'Final Submission', icon: <Send className="h-5 w-5" /> },
            { id: 'support', label: 'Expert Support', icon: <UserCheck className="h-5 w-5" /> },
            { id: 'faq', label: 'Resources', icon: <BookOpen className="h-5 w-5" /> },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-5 px-6 py-5 rounded-2xl font-black text-sm transition-all text-left group ${
                activeTab === item.id 
                  ? 'bg-indigo-600 text-white shadow-xl shadow-indigo-200' 
                  : 'text-slate-400 hover:bg-indigo-50 hover:text-indigo-600'
              }`}
            >
              <span className={activeTab === item.id ? 'text-white' : 'text-slate-300 group-hover:text-indigo-400 transition-colors'}>{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>

        <div className="p-8 border-t border-slate-50">
          <button 
            onClick={onLogout}
            className="w-full text-[11px] font-black uppercase text-slate-300 hover:text-red-500 transition-colors flex items-center justify-center gap-3 group active:scale-95"
          >
            <X className="h-4 w-4 group-hover:rotate-90 transition-transform" /> Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-grow ml-80 bg-slate-50/50 p-12 overflow-y-auto min-h-screen">
        <div className="max-w-6xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
          {/* Dashboard Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="px-4 py-1.5 rounded-full bg-white text-indigo-600 text-[10px] font-black uppercase tracking-widest border border-indigo-100 shadow-sm leading-none">
                  {selectedDomain.sector} Track
                </span>
                <span className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 bg-white px-4 py-1.5 rounded-full border border-slate-100 leading-none">
                  <Globe className="h-3 w-3" /> {selectedDomain.url}
                </span>
              </div>
              <h1 className="text-6xl font-black text-slate-900 tracking-tight italic uppercase leading-none">{selectedDomain.name}</h1>
            </div>
            
            <div className="bg-white px-10 py-6 rounded-[40px] border border-indigo-100 shadow-xl shadow-indigo-100/50 flex items-center gap-12">
              <div className="flex flex-col items-center">
                <p className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.2em] mb-2 leading-none">Progress</p>
                <p className="text-3xl font-black text-indigo-600 leading-none">0 / 6</p>
              </div>
              <div className="h-12 w-px bg-indigo-50" />
              <div className="flex flex-col items-center">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2 leading-none">Quality Gate</p>
                <p className="text-3xl font-black text-slate-800 italic leading-none">4 <span className="text-sm font-bold text-slate-300 not-italic uppercase tracking-tighter">Min</span></p>
              </div>
            </div>
          </div>

          {/* Dynamic Views */}
          {activeTab === 'challenges' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 animate-in slide-in-from-bottom-8 duration-700">
              {selectedDomain.challenges.map((challenge, idx) => (
                <div key={challenge.id} style={{ animationDelay: `${idx * 150}ms` }} className="animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both">
                  <ChallengeCard challenge={challenge} accent={selectedDomain.accent} />
                </div>
              ))}
            </div>
          )}

          {activeTab === 'submit' && (
            <div className="bg-white rounded-[64px] p-20 shadow-2xl shadow-indigo-100/30 border border-indigo-100 animate-in zoom-in duration-500 flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-indigo-50 rounded-[36px] border-2 border-indigo-100 flex items-center justify-center shadow-xl transform rotate-12 mb-10">
                <Send className="h-10 w-10 text-indigo-600" />
              </div>
              <h2 className="text-5xl font-black text-slate-900 mb-6 tracking-tight italic uppercase leading-none">Gate Review Required</h2>
              <p className="text-slate-500 text-xl mb-16 font-medium max-w-2xl leading-relaxed italic">
                Ensure all technical missions meet the criteria before submitting for engineering evaluation.
              </p>
              
              <div className="w-full max-w-lg bg-indigo-50/50 rounded-[40px] border border-indigo-100 p-12 relative overflow-hidden group hover:bg-white transition-all hover:border-indigo-300">
                <h3 className="text-2xl font-black text-indigo-950 mb-4 relative z-10 tracking-tight">Consolidated Submission</h3>
                <p className="text-sm text-indigo-400 mb-10 relative z-10 font-bold uppercase tracking-widest">Google Forms Backend</p>
                
                <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLScy6-YourFormID/viewform" 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-full bg-indigo-600 text-white py-6 rounded-3xl font-black text-xl hover:bg-indigo-700 transition-all flex items-center justify-center gap-4 shadow-xl group/btn active:scale-95"
                >
                  Open Official Portal <ExternalLink className="h-6 w-6 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </a>
              </div>
            </div>
          )}

          {activeTab === 'support' && (
            <div className="space-y-16 animate-in slide-in-from-right-12 duration-700">
              <div className="bg-white p-20 rounded-[64px] border-2 border-indigo-100 text-indigo-950 flex flex-col md:flex-row items-center justify-between relative overflow-hidden shadow-xl shadow-indigo-100/20">
                <div className="absolute top-0 right-0 p-20 opacity-40 blur-3xl bg-indigo-50 w-96 h-96 rounded-full" />
                <div className="relative z-10 max-w-xl text-center md:text-left">
                  <h3 className="text-5xl font-black italic tracking-tighter mb-8 uppercase leading-none text-indigo-600">Expert Desk</h3>
                  <p className="text-slate-500 text-2xl font-medium mb-12 leading-relaxed italic">"Stuck on an SDK or AI agent error? Our leads are ready to unblock you."</p>
                  <button className="bg-indigo-600 text-white px-12 py-5 rounded-[24px] font-black text-xl flex items-center gap-4 hover:bg-indigo-700 transition-all shadow-2xl mx-auto md:mx-0 active:scale-95">
                    <MessageSquare className="h-6 w-6" /> Squad Comms Lab
                  </button>
                </div>
                <div className="absolute right-[-40px] bottom-[-40px] opacity-10 hidden lg:block text-indigo-200">
                  <HelpCircle className="h-[400px] w-[400px]" />
                </div>
              </div>

              <div className="space-y-10">
                <div className="flex items-center gap-5">
                  <div className="w-12 h-1 bg-indigo-600 rounded-full" />
                  <h3 className="text-4xl font-black text-slate-900 tracking-tight italic uppercase leading-none">Meet the Experts</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {EXPERT_PANEL.map((expert, i) => (
                    <div key={i} style={{ animationDelay: `${i * 100}ms` }} className="bg-white border border-slate-200 p-10 rounded-[48px] shadow-sm hover:shadow-2xl transition-all group hover:border-indigo-300 relative overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both">
                      <div className="absolute top-0 left-0 w-2 h-full bg-slate-50 group-hover:bg-indigo-600 transition-all" />
                      <div className="flex items-start justify-between mb-6">
                        <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center border border-indigo-100 group-hover:bg-indigo-600 transition-colors shadow-sm">
                          <Users className="h-8 w-8 text-indigo-400 group-hover:text-white transition-colors" />
                        </div>
                        <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest">BrowserStack</span>
                      </div>
                      <h4 className="text-2xl font-black text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors tracking-tight leading-none">{expert.name}</h4>
                      <p className="text-sm font-bold text-slate-400 leading-snug uppercase tracking-tight italic opacity-80">{expert.role}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'faq' && (
            <div className="max-w-4xl mx-auto space-y-8 animate-in slide-in-from-bottom-12 duration-700">
              <div className="text-center mb-16">
                <h3 className="text-5xl font-black italic tracking-tighter uppercase mb-4 text-indigo-600 leading-none">Manuals & FAQ</h3>
                <p className="text-slate-400 font-bold uppercase tracking-[0.2em]">Operational Guidelines</p>
              </div>
              {FAQ_DATA.map((item, idx) => (
                <div key={idx} style={{ animationDelay: `${idx * 150}ms` }} className="bg-white p-12 rounded-[48px] border border-slate-200 shadow-sm hover:shadow-xl hover:border-indigo-200 transition-all group animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both">
                  <h4 className="text-2xl font-black text-slate-900 mb-6 flex items-start gap-5 tracking-tight leading-snug">
                    <span className="bg-indigo-600 text-white w-10 h-10 rounded-2xl flex items-center justify-center text-xs shrink-0 mt-0.5 shadow-xl transform group-hover:rotate-6 transition-transform italic font-black">Q</span>
                    {item.q}
                  </h4>
                  <div className="flex items-start gap-6 text-slate-500 font-medium leading-relaxed">
                    <span className="w-10 h-10 flex items-center justify-center shrink-0" />
                    <p className="border-l-4 border-indigo-100 pl-8 italic text-lg text-slate-500">"{item.a}"</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

const LoginPage = ({ onLogin, onBack }) => {
  const [key, setKey] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (key.length >= 8) onLogin(key);
    else setError('Key must be at least 8 characters');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 selection:bg-indigo-100">
      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-100/40 via-transparent to-transparent opacity-60 pointer-events-none" />
      <div className="max-w-xl w-full bg-white rounded-[72px] shadow-2xl shadow-indigo-100/40 border border-indigo-100 overflow-hidden p-20 animate-in zoom-in duration-700 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-28 h-28 bg-indigo-600 rounded-[44px] mb-10 shadow-2xl transform -rotate-6 shadow-indigo-200">
            <Shield className="h-14 w-14 text-white" />
          </div>
          <h1 className="text-5xl font-black text-slate-900 tracking-tighter uppercase italic leading-none animate-in fade-in slide-in-from-bottom-4 duration-700">Initialize <br /> <span className="text-indigo-600 not-italic">Mission</span></h1>
          <p className="text-indigo-400 font-black text-[10px] uppercase tracking-[0.5em] mt-8 opacity-70">Secured Access Layer</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-10 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="space-y-4">
            <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 pl-4 text-center block">Secret Access Key</label>
            <input 
              type="password"
              value={key}
              onChange={(e) => setKey(e.target.value)}
              placeholder="••••••••••••"
              className="w-full px-10 py-7 rounded-[32px] bg-slate-50 border-2 border-slate-100 focus:border-indigo-600 focus:bg-white focus:ring-8 focus:ring-indigo-50 transition-all outline-none font-mono text-2xl tracking-widest text-slate-900 text-center shadow-inner"
            />
            {error && <p className="text-red-500 text-[11px] font-black uppercase tracking-widest flex items-center justify-center animate-bounce"><AlertCircle className="h-4 w-4 mr-2" /> {error}</p>}
          </div>

          <button type="submit" className="w-full bg-indigo-600 text-white py-7 rounded-[32px] font-black text-2xl hover:bg-indigo-700 transition-all flex items-center justify-center gap-4 shadow-xl active:scale-95 shadow-indigo-200 tracking-widest">
            UNLOCK <ChevronRight className="h-8 w-8" />
          </button>
          
          <button type="button" onClick={onBack} className="w-full text-slate-400 hover:text-indigo-600 transition-colors text-xs font-black uppercase tracking-[0.3em] pt-6 italic">
            Cancel initiation
          </button>
        </form>
      </div>
    </div>
  );
};

export default function App() {
  const [view, setView] = useState('LANDING'); 
  const [session, setSession] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem('squad_session');
    if (saved) {
      setSession(saved);
      setView('DASHBOARD');
    }
  }, []);

  const handleStart = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setView('LOGIN');
  };
  const handleBack = () => setView('LANDING');
  const handleLogin = (key) => {
    localStorage.setItem('squad_session', key);
    setSession(key);
    setView('DASHBOARD');
  };
  const handleLogout = () => {
    localStorage.removeItem('squad_session');
    setSession(null);
    setView('LANDING');
  };

  if (view === 'LANDING') return <LandingPage onStart={handleStart} />;
  if (view === 'LOGIN' && !session) return <LoginPage onLogin={handleLogin} onBack={handleBack} />;
  return <Dashboard squadKey={session} onLogout={handleLogout} />;
}

const Accessibility = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <circle cx="16" cy="4" r="1"/>
    <path d="m18 19 1-7-6 1"/>
    <path d="m5 8 3-3 5.5 3-2.36 3.5"/>
    <path d="M4.24 14.5a5 5 0 0 0 6.88 6"/>
    <path d="M13.76 17.5a5 5 0 0 0-6.88-6"/>
  </svg>
);