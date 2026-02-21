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
  Circle,
  KeyRound,
  UserPlus,
  Target,
  ClipboardList,
  Fingerprint,
  Coffee,
  FileCode,
  Box,
  Wifi,
  Smartphone
} from 'lucide-react';

// --- CONFIGURATION ---
const AUTHORIZED_SECRET_KEY = "BOOTCAMP-2026-AI";
const DISCORD_LINK = "https://discord.gg/zQeXh59F";

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
      { title: 'AI Test Case Generator Agent', detail: 'Generate test cases from user stories/requirements instantly.' },
      { title: 'Test Authoring to LCA', detail: 'Convert a manual test case into a Low Code Automation (LCA) test.' },
      { title: 'Hands-On Exercise', detail: 'Import manual cases and expand them into a suite using AI.' }
    ],
    resources: [
      { name: 'TCM Dashboard', url: 'https://test-management.browserstack.com/' },
      { name: 'AI Generator Docs', url: 'https://www.browserstack.com/docs/test-management/browserstack-ai/ai-generated-test-cases' }
    ]
  },
  {
    module: 'Low Code Automation (LCA)',
    icon: <Zap className="h-6 w-6 text-blue-600" />,
    description: 'Experience rapid automation and self-healing resilience without complex scripting.',
    agenda: [
      { title: 'LCA Overview', detail: 'Understand test creation, recorder tools, and execution flows.' },
      { title: 'AI Smart Interactions', detail: 'Demonstrate AI-based step suggestions and auto-fill data flows.' },
      { title: 'Self-Heal Protocol', detail: 'Watch AI recover tests automatically when locators change.' },
      { title: 'Hands-On Exercise', detail: 'Build and execute an E2E flow using AI-assisted low-code steps.' }
    ],
    resources: [
      { name: 'LCA Studio', url: 'https://low-code.browserstack.com/' },
      { name: 'AI Powered Testing', url: 'https://www.browserstack.com/docs/low-code-automation/test-recording/browserstack-ai' }
    ]
  },
  {
    module: 'Accessibility Testing',
    icon: <Users className="h-6 w-6 text-teal-600" />,
    description: 'Automate inclusivity audits using high-impact AI scanners.',
    agenda: [
      { title: 'Accessibility Overview', detail: 'Intro to WCAG 2.1 and key metrics on the dashboard.' },
      { title: 'Workflow Scanner', detail: 'Run an automated accessibility scan on a login or checkout flow.' },
      { title: 'AI Detection Agent', detail: 'Using AI to identify contrast issues and mis-labeled elements.' },
      { title: 'Hands-On Exercise', detail: 'Scan a demo page and review suggested remediations.' }
    ],
    resources: [
      { name: 'Accessibility Platform', url: 'https://accessibility.browserstack.com/' },
      { name: 'Accessibility Setup', url: 'https://www.browserstack.com/docs/accessibility/get-started' }
    ]
  },
  {
    module: 'Visual Testing (Percy)',
    icon: <Eye className="h-6 w-6 text-violet-600" />,
    description: 'Catch pixel-level regressions that functional tests miss.',
    agenda: [
      { title: 'Percy Overview', detail: 'Snapshot-based visual testing, builds, and approvals.' },
      { title: 'Running Sample Builds', detail: 'Execute a Percy build on a demo app and view snapshots.' },
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
    accent: 'pink',

   
    challenges: [
      { id: '01', title: 'AI Test Management', context: 'Use the AI Agent to bootstrap test case development based on user stories.', stories: ['US-01 Homepage: Verify dynamic hero carousel.', 'US-02 Ensure the “Men” category displays the correct product inventory listings.', 'US-03 Cart: Validate that “Add to Cart” actions refresh the persistent cart counter.', 'US-04 Auth: Validated login scenarios.'], protocol: ['Generate TestCases using BrowserStack TestCase Management AI.', 'Convert Any 2 TestCases into automated scripts using the Low-Code Authoring Agent and execute them on BrowserStack.'], deliverable: 'Exported Test Cases (CSV) + Public Link of Low Code Automation Build Link', links: [{name: 'Test Management', url: 'https://test-management.browserstack.com/'}, {name: 'Low Code Automation', url: 'https://low-code.browserstack.com/'}] },
      { id: '02', title: 'The Pixel-Perfect Guardian', context: 'Functional tests pass, but the UI has changed. Your goal is to use Percy to visually catch a simulated regression in the Fashion Stack Website.', protocol: ['The Baseline (Good State): Run Percy on the Login page.', 'The Changed State: Click the "Toggle Button" on the Login Page.', 'The Capture: Capture a second Percy snapshot.', 'The Proof: Submit the Percy Dashboard link showing the red diffs (Visual Regression).'], deliverable: 'Percy Dashboard Build URL', links: [{name: 'Percy', url: 'https://percy.io/'}] },
      { id: '03', title: 'BrowserStack SDK with Cross-Browser Automation Agent', context: 'Use the AI Agent to bootstrap automation test script development and integrate BrowserStack using the SDK with the Cross-Browser Automation Agent.', protocol: ['Perform the Login Scenario using the Cross-Browser Automation Agent.', 'Execute tests across multiple platforms (Windows, macOS, iOS, Android).', 'Submit GitHub repo and public build link as proof.'], deliverable: 'Github Repo Link + Public Build Link URL', links: [{name: 'Automate', url: 'https://automate.browserstack.com/'}, {name: 'Cross-Browser Automation Agent', url: 'https://automate.browserstack.com/'}] },
      { id: '04', title: 'The AI Self-Heal', context: 'Prove BrowserStack\'s AI Self-Healing capability by running a script against a changed DOM without updating selectors. You can either use Automate or Low Code Automation.', protocol: ['Baseline: Create a functional login automation.', 'Break It: Click the "Toggle Button" on Login Page.', 'Heal It: Enable Self-Healing and re-run and Verify the healed Locator.'], deliverable: 'Public Session Link showing "Healed" badge', links: [{name: 'Automate', url: 'https://automate.browserstack.com/'}, {name: 'Low Code Automation', url: 'https://low-code.browserstack.com/'}, {name: 'Self-Heal Automate', url: 'https://www.browserstack.com/docs/automate/selenium/self-healing'}, {name: 'Self-Heal Low Code', url: 'https://www.browserstack.com/docs/low-code-automation'}] },
      { id: '05', title: 'The Inclusive Engineer', context: 'Run a "High-Impact" Accessibility Audit using the BrowserStack SDK or Manual Workflow Scanner.', protocol: ['Scan multiple pages: Home, Login, Product Listing, and Cart pages.', 'Identify accessibility issues and generate comprehensive reports.', 'Submit a publicly shareable report URL as proof.'], deliverable: 'Publicly Shareable Report URL', links: [{name: 'Accessibility', url: 'https://accessibility.browserstack.com/'},{name: 'Central Scanner', url: 'https://scanner.browserstack.com/'}] },
      { id: '06', title: 'Test Failure Analysis agent', context: 'Use BrowserStack\'s Test Failure Analysis agent to debug and analyze failed test cases with AI-powered root cause analysis.', protocol: ['Trigger a failed test case in your automation suite.', 'Use AI RCA to get detailed failure analysis.', 'Review AI-generated insights including error summary, log evidence, and suggested fixes.', 'Submit publicly shareable report URL showing the AI analysis.'], deliverable: 'Publicly Shareable Report URL', links: [{name: 'Test Reporting & Analytics', url: 'https://automation.browserstack.com/'}, {name: 'Test Failure Agent', url: 'https://www.browserstack.com/docs/test-reporting'}] }
    ]
  },
  FIN: {
    id: 'FIN',
    name: 'Fin Stack',
    sector: 'Fintech',
    url: 'finstack-alpha.vercel.app',
    icon: <Award className="text-emerald-600" />,
    accent: 'emerald',
    challenges: [
      { id: '01', title: 'AI Test Management', context: 'Use the AI Agent to bootstrap test case development based on user stories.', stories: ['US-01 Dashboard: Verify financial dashboard overview and Identify key metrics displayed.', 'US-02 Transactions: Navigate to Accounts page and verify transaction flow from one account to another.', 'US-03 Loan: Verify Loan calculator functionality.', 'US-04 Auth: Validate login scenarios.'], protocol: ['Generate TestCases using BrowserStack TestCase Management AI.', 'Convert Any 2 TestCases into automated scripts using the Low-Code Authoring Agent and execute them on BrowserStack.'], deliverable: 'Exported Test Cases (CSV) + Public Link of Low Code Automation Build Link', links: [{name: 'Test Management', url: 'https://test-management.browserstack.com/'}, {name: 'Low Code Automation', url: 'https://low-code.browserstack.com/'}] },
      { id: '02', title: 'The Pixel-Perfect Guardian', context: 'Functional tests pass, but the UI has changed. Your goal is to use Percy to visually catch a simulated regression in the FinStack Website.', protocol: ['The Baseline (Good State): Run Percy on the Login page.', 'The Changed State: Click the "Toggle Button" on the Login Page.', 'The Capture: Capture a second Percy snapshot.', 'The Proof: Submit the Percy Dashboard link showing the red diffs (Visual Regression).'], deliverable: 'Percy Dashboard Build URL', links: [{name: 'Percy', url: 'https://percy.io/'}] },
      { id: '03', title: 'BrowserStack SDK with Cross-Browser Automation Agent', context: 'Use the AI Agent to bootstrap automation test script development and integrate BrowserStack using the SDK with the Cross-Browser Automation Agent.', protocol: ['Perform the Login Scenario using the Cross-Browser Automation Agent.', 'Execute tests across multiple platforms (Windows, macOS, iOS, Android).', 'Submit GitHub repo and public build link as proof.'], deliverable: 'Github Repo Link + Public Build Link URL', links: [{name: 'Automate', url: 'https://automate.browserstack.com/'}, {name: 'Cross-Browser Automation Agent', url: 'https://automate.browserstack.com/'}] },
      { id: '04', title: 'The AI Self-Heal', context: 'Prove BrowserStack\'s AI Self-Healing capability by running a script against a changed DOM without updating selectors. You can either use Automate or Low Code Automation.', protocol: ['Baseline: Create a functional login automation.', 'Break It: Click the "Toggle Button" on Login Page.', 'Heal It: Enable Self-Healing and re-run and Verify the healed Locator.'], deliverable: 'Public Session Link showing "Healed" badge', links: [{name: 'Automate', url: 'https://automate.browserstack.com/'}, {name: 'Low Code Automation', url: 'https://low-code.browserstack.com/'}, {name: 'Self-Heal Automate', url: 'https://www.browserstack.com/docs/automate/selenium/self-healing'}, {name: 'Self-Heal Low Code', url: 'https://www.browserstack.com/docs/low-code-automation'}] },
      { id: '05', title: 'The Inclusive Engineer', context: 'Run a "High-Impact" Accessibility Audit using the BrowserStack SDK or Manual Workflow Scanner.', protocol: ['Scan multiple pages: Dashboard, Login, Transactions, and Reports pages.', 'Identify accessibility issues and generate comprehensive reports.', 'Submit a publicly shareable report URL as proof.'], deliverable: 'Publicly Shareable Report URL', links: [{name: 'Accessibility', url: 'https://accessibility.browserstack.com/'}, {name: 'Central Scanner', url: 'https://scanner.browserstack.com/'}] },
      { id: '06', title: 'Test Failure Analysis agent', context: 'Use BrowserStack\'s Test Failure Analysis agent to debug and analyze failed test cases with AI-powered root cause analysis.', protocol: ['Trigger a failed test case in your automation suite.', 'Use AI RCA to get detailed failure analysis.', 'Review AI-generated insights including error summary, log evidence, and suggested fixes.', 'Submit publicly shareable report URL showing the AI analysis.'], deliverable: 'Publicly Shareable Report URL', links: [{name: 'Test Reporting & Analytics', url: 'https://automation.browserstack.com/'}, {name: 'Test Failure Agent', url: 'https://www.browserstack.com/docs/test-reporting'}] }
    ]
  },
  MEDI: {
    id: 'MEDI',
    name: 'Medi Stack',
    sector: 'Healthcare',
    url: 'medistack.vercel.app',
    icon: <Shield className="text-red-600" />,
    accent: 'red',
    challenges: [
      { id: '01', title: 'AI Test Management', context: 'Use the AI Agent to bootstrap test case development based on user stories.', stories: ['US-01 Homepage: Verify doctor search functionality and featured specialties display.', 'US-02 Specialties: Navigate to Specialties page, browse different medical specialties, and verify doctor listings.', 'US-03 Appointments: Search for doctors, view availability, and verify appointment booking process.', 'US-04 Auth: Validate login scenarios and patient account management.'], protocol: ['Generate TestCases using BrowserStack TestCase Management AI.', 'Convert Any 2 TestCases into automated scripts using the Low-Code Authoring Agent and execute them on BrowserStack.'], deliverable: 'Exported Test Cases (CSV) + Public Link of Low Code Automation Build Link', links: [{name: 'Test Management', url: 'https://test-management.browserstack.com/'}, {name: 'Low Code Automation', url: 'https://low-code.browserstack.com/'}] },
      { id: '02', title: 'The Pixel-Perfect Guardian', context: 'Functional tests pass, but the UI has changed. Your goal is to use Percy to visually catch a simulated regression in the MediStack Website.', protocol: ['The Baseline (Good State): Run Percy on the login page.', 'The Changed State: Click the "Toggle Button" on the login Page.', 'The Capture: Capture a second Percy snapshot.', 'The Proof: Submit the Percy Dashboard link showing the red diffs (Visual Regression).'], deliverable: 'Percy Dashboard Build URL', links: [{name: 'Percy', url: 'https://percy.io/'}] },
      { id: '03', title: 'BrowserStack SDK with Cross-Browser Automation Agent', context: 'Use the AI Agent to bootstrap automation test script development and integrate BrowserStack using the SDK with the Cross-Browser Automation Agent.', protocol: ['Perform the Login Scenario using the Cross-Browser Automation Agent.', 'Execute tests across multiple platforms (Windows, macOS, iOS, Android).', 'Submit GitHub repo and public build link as proof.'], deliverable: 'Github Repo Link + Public Build Link URL', links: [{name: 'Automate', url: 'https://automate.browserstack.com/'}, {name: 'Cross-Browser Automation Agent', url: 'https://automate.browserstack.com/'}] },
      { id: '04', title: 'The AI Self-Heal', context: 'Prove BrowserStack\'s AI Self-Healing capability by running a script against a changed DOM without updating selectors. You can either use Automate or Low Code Automation.', protocol: ['Baseline: Create a functional login automation.', 'Break It: Click the "Toggle Button" on Login Page.', 'Heal It: Enable Self-Healing and re-run and Verify the healed Locator.'], deliverable: 'Public Session Link showing "Healed" badge', links: [{name: 'Automate', url: 'https://automate.browserstack.com/'}, {name: 'Low Code Automation', url: 'https://low-code.browserstack.com/'}, {name: 'Self-Heal Automate', url: 'https://www.browserstack.com/docs/automate/selenium/self-healing'}, {name: 'Self-Heal Low Code', url: 'https://www.browserstack.com/docs/low-code-automation'}] },
      { id: '05', title: 'The Inclusive Engineer', context: 'Run a "High-Impact" Accessibility Audit using the BrowserStack SDK or Manual Workflow Scanner.', protocol: ['Scan multiple pages: Homepage, Login, Specialties, and Appointments pages.', 'Identify accessibility issues and generate comprehensive reports.', 'Submit a publicly shareable report URL as proof.'], deliverable: 'Publicly Shareable Report URL', links: [{name: 'Accessibility', url: 'https://accessibility.browserstack.com/'},{name: 'Central Scanner', url: 'https://scanner.browserstack.com/'}] },
      { id: '06', title: 'Test Failure Analysis agent', context: 'Use BrowserStack\'s Test Failure Analysis agent to debug and analyze failed test cases with AI-powered root cause analysis.', protocol: ['Trigger a failed test case in your automation suite.', 'Use AI RCA to get detailed failure analysis.', 'Review AI-generated insights including error summary, log evidence, and suggested fixes.', 'Submit publicly shareable report URL showing the AI analysis.'], deliverable: 'Publicly Shareable Report URL', links: [{name: 'Test Reporting & Analytics', url: 'https://automation.browserstack.com/'}, {name: 'Test Failure Agent', url: 'https://www.browserstack.com/docs/test-reporting'}] }
    ]
  },
  WANDER: {
    id: 'WANDER',
    name: 'Wander Stack',
    sector: 'Travel',
    url: 'wanderstack.vercel.app',
    icon: <Globe className="text-orange-600" />,
    accent: 'orange',
    challenges: [
      { id: '01', title: 'AI Test Management', context: 'Use the AI Agent to bootstrap test case development based on user stories.', stories: ['US-01 Homepage: Verify landing page functionality with popular destinations displayed.', 'US-02 Hotels: Navigate to Hotels page, search for hotels, and verify booking flow.', 'US-03 Flights: Search for flights, select dates, and verify flight booking process.', 'US-04 Auth: Validate login scenarios and user account management.'], protocol: ['Generate TestCases using BrowserStack TestCase Management AI.', 'Convert Any 2 TestCases into automated scripts using the Low-Code Authoring Agent and execute them on BrowserStack.'], deliverable: 'Exported Test Cases (CSV) + Public Link of Low Code Automation Build Link', links: [{name: 'Test Management', url: 'https://test-management.browserstack.com/'}, {name: 'Low Code Automation', url: 'https://low-code.browserstack.com/'}] },
      { id: '02', title: 'The Pixel-Perfect Guardian', context: 'Functional tests pass, but the UI has changed. Your goal is to use Percy to visually catch a simulated regression in the WanderStack Website.', protocol: ['The Baseline (Good State): Run Percy on the login page.', 'The Changed State: Click the "Toggle Button" on the login Page.', 'The Capture: Capture a second Percy snapshot.', 'The Proof: Submit the Percy Dashboard link showing the red diffs (Visual Regression).'], deliverable: 'Percy Dashboard Build URL', links: [{name: 'Percy', url: 'https://percy.io/'}] },
      { id: '03', title: 'BrowserStack SDK with Cross-Browser Automation Agent', context: 'Use the AI Agent to bootstrap automation test script development and integrate BrowserStack using the SDK with the Cross-Browser Automation Agent.', protocol: ['Perform the Login Scenario using the Cross-Browser Automation Agent.', 'Execute tests across multiple platforms (Windows, macOS, iOS, Android).', 'Submit GitHub repo and public build link as proof.'], deliverable: 'Github Repo Link + Public Build Link URL', links: [{name: 'Automate', url: 'https://automate.browserstack.com/'}, {name: 'Cross-Browser Automation Agent', url: 'https://automate.browserstack.com/'}] },
      { id: '04', title: 'The AI Self-Heal', context: 'Prove BrowserStack\'s AI Self-Healing capability by running a script against a changed DOM without updating selectors. You can either use Automate or Low Code Automation.', protocol: ['Baseline: Create a functional login automation.', 'Break It: Click the "Toggle Button" on Login Page.', 'Heal It: Enable Self-Healing and re-run and Verify the healed Locator.'], deliverable: 'Public Session Link showing "Healed" badge', links: [{name: 'Automate', url: 'https://automate.browserstack.com/'}, {name: 'Low Code Automation', url: 'https://low-code.browserstack.com/'}, {name: 'Self-Heal Automate', url: 'https://www.browserstack.com/docs/automate/selenium/self-healing'}, {name: 'Self-Heal Low Code', url: 'https://www.browserstack.com/docs/low-code-automation'}] },
      { id: '05', title: 'The Inclusive Engineer', context: 'Run a "High-Impact" Accessibility Audit using the BrowserStack SDK or Manual Workflow Scanner.', protocol: ['Scan multiple pages: Homepage, Login, Hotels, and Flights pages.', 'Identify accessibility issues and generate comprehensive reports.', 'Submit a publicly shareable report URL as proof.'], deliverable: 'Publicly Shareable Report URL', links: [{name: 'Accessibility', url: 'https://accessibility.browserstack.com/'},{name: 'Central Scanner', url: 'https://scanner.browserstack.com/'}] },
      { id: '06', title: 'Test Failure Analysis agent', context: 'Use BrowserStack\'s Test Failure Analysis agent to debug and analyze failed test cases with AI-powered root cause analysis.', protocol: ['Trigger a failed test case in your automation suite.', 'Use AI RCA to get detailed failure analysis.', 'Review AI-generated insights including error summary, log evidence, and suggested fixes.', 'Submit publicly shareable report URL showing the AI analysis.'], deliverable: 'Publicly Shareable Report URL', links: [{name: 'Test Reporting & Analytics', url: 'https://automation.browserstack.com/'}, {name: 'Test Failure Agent', url: 'https://www.browserstack.com/docs/test-reporting'}] }
    ]
  }
};

const FAQ_DATA = [
  { q: "How many challenges do we need to complete?", a: "To qualify for the hackathon, squads must complete at least four (4) out of the six technical challenges for their selected domain." },
  { q: "Can we change our domain after selection?", a: "Domain selection is final once you select a stack. Choose wisely!" },
  { q: "What should be included in the submission?", a: "Ensure you provide GitHub repository links and all BrowserStack Build/Dashboard URLs via the Google Form." }
];

// --- SUB-COMPONENTS ---

const ChallengeCard = ({ challenge, accent }) => {
  // Map accent colors to actual Tailwind classes
  const accentColors = {
    pink: {
      bg: 'bg-pink-100',
      text: 'text-pink-700',
      border: 'border-pink-200',
      gradientFrom: 'from-pink-50',
      gradientTo: 'to-pink-100',
      dot: 'bg-pink-500',
      icon: 'text-pink-600'
    },
    emerald: {
      bg: 'bg-emerald-100',
      text: 'text-emerald-700',
      border: 'border-emerald-200',
      gradientFrom: 'from-emerald-50',
      gradientTo: 'to-emerald-100',
      dot: 'bg-emerald-500',
      icon: 'text-emerald-600'
    },
    red: {
      bg: 'bg-red-100',
      text: 'text-red-700',
      border: 'border-red-200',
      gradientFrom: 'from-red-50',
      gradientTo: 'to-red-100',
      dot: 'bg-red-500',
      icon: 'text-red-600'
    },
    orange: {
      bg: 'bg-orange-100',
      text: 'text-orange-700',
      border: 'border-orange-200',
      gradientFrom: 'from-orange-50',
      gradientTo: 'to-orange-100',
      dot: 'bg-orange-500',
      icon: 'text-orange-600'
    }
  };
  
  const colors = accentColors[accent] || accentColors.pink;
  
  return (
    <div className="bg-white rounded-3xl border-2 border-slate-200 p-8 shadow-sm hover:shadow-2xl hover:border-indigo-300 transition-all duration-300 group flex flex-col justify-between h-full relative overflow-hidden animate-in fade-in slide-in-from-bottom-4">
      <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${colors.gradientFrom}/40 ${colors.gradientTo}/20 rounded-bl-full -mr-10 -mt-10 transition-all group-hover:scale-125 group-hover:opacity-60`} />
      <div className="relative z-10">
        <div className="flex items-start gap-4 mb-6">
          <span className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${colors.gradientFrom} ${colors.gradientTo} ${colors.text} flex items-center justify-center font-extrabold text-xl border-2 ${colors.border} shadow-lg transition-all group-hover:scale-110 group-hover:shadow-xl shrink-0`}>
            {challenge.id}
          </span>
          <div className="flex-1 pt-1">
            <h3 className="font-extrabold text-2xl text-slate-900 leading-tight group-hover:text-indigo-700 transition-colors tracking-tight mb-1">{challenge.title}</h3>
            <div className="h-1 w-12 bg-gradient-to-r from-indigo-500 to-indigo-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
        </div>
        
        <div className="space-y-6 mb-8">
          {challenge.context && (
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Fingerprint className="h-4 w-4 text-indigo-600" />
                <p className="text-[11px] font-extrabold uppercase tracking-widest text-indigo-600">Mission Context</p>
              </div>
              <div className="bg-gradient-to-r from-indigo-50/50 to-transparent p-4 rounded-xl border-l-4 border-indigo-400 shadow-sm">
                <p className="text-sm text-slate-700 font-semibold leading-relaxed">{challenge.context}</p>
              </div>
            </div>
          )}
          {challenge.stories && (
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Target className="h-4 w-4 text-slate-600" />
                <p className="text-[11px] font-extrabold uppercase tracking-widest text-slate-600">Target Scenarios</p>
              </div>
              <div className="space-y-2.5">
                {challenge.stories.map((story, i) => (
                  <div key={i} className="flex items-start gap-3 bg-gradient-to-r from-slate-50 to-white p-3.5 rounded-xl border border-slate-200 group-hover:border-indigo-200 group-hover:shadow-md transition-all">
                    <div className={`mt-0.5 shrink-0 w-5 h-5 rounded-full ${colors.bg} flex items-center justify-center border ${colors.border}`}>
                      <CheckCircle2 className={`h-3 w-3 ${colors.icon}`} />
                    </div>
                    <p className="text-sm text-slate-700 font-medium leading-relaxed flex-1">{story}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
          {challenge.protocol && (
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <ClipboardList className="h-4 w-4 text-slate-600" />
                <p className="text-[11px] font-extrabold uppercase tracking-widest text-slate-600">Execution Protocol</p>
              </div>
              <div className="bg-gradient-to-br from-slate-50/80 to-white p-5 rounded-xl border-2 border-dashed border-slate-200 group-hover:border-indigo-200 transition-colors shadow-inner">
                {Array.isArray(challenge.protocol) ? (
                  <ol className="space-y-3">
                    {challenge.protocol.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className={`mt-1 shrink-0 w-6 h-6 rounded-full ${colors.bg} ${colors.text} flex items-center justify-center text-xs font-extrabold border ${colors.border}`}>
                          {idx + 1}
                        </span>
                        <p className="text-sm text-slate-700 font-semibold leading-relaxed flex-1">{item}</p>
                      </li>
                    ))}
                  </ol>
                ) : (
                  <p className="text-sm text-slate-700 font-semibold leading-relaxed">{challenge.protocol}</p>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="pt-6 border-t-2 border-slate-200 relative z-10">
        <div className="flex items-center gap-2 mb-4">
          <FileText className="h-4 w-4 text-slate-500" />
          <p className="text-[11px] font-extrabold text-slate-600 uppercase tracking-widest">Submission Artifact</p>
        </div>
        <div className="flex items-center gap-3 text-sm font-bold text-slate-800 bg-gradient-to-r from-slate-50 to-white border-2 border-slate-200 px-5 py-3.5 rounded-xl mb-4 group-hover:border-indigo-300 group-hover:shadow-md transition-all">
          <div className={`w-2 h-2 rounded-full ${colors.dot} animate-pulse`}></div>
          <span className="flex-1">{challenge.deliverable}</span>
        </div>
        <div className="flex flex-wrap gap-2.5">
          {challenge.links?.map((link, i) => (
            <a 
              key={i} 
              href={link.url} 
              target="_blank" 
              rel="noreferrer" 
              className="inline-flex items-center gap-2 text-xs font-bold uppercase text-indigo-700 hover:text-white hover:bg-gradient-to-r hover:from-indigo-600 hover:to-indigo-500 transition-all bg-indigo-50 border-2 border-indigo-200 hover:border-indigo-600 px-4 py-2.5 rounded-xl shadow-sm hover:shadow-md active:scale-95"
            >
              {link.name} 
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- MAIN PAGES ---

const LandingPage = ({ onStart }) => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 selection:bg-indigo-100 selection:text-indigo-900 font-sans">
      <nav className="flex justify-between items-center px-6 md:px-10 py-6 max-w-7xl mx-auto border-b border-slate-200 bg-white/70 backdrop-blur-xl sticky top-0 z-50 shadow-sm animate-in fade-in slide-in-from-top-4 duration-700">
        <div className="flex items-center gap-3 group">
          <div className="bg-indigo-600 p-2.5 rounded-2xl shadow-lg shadow-indigo-100 transition-transform group-hover:scale-105">
            <Cpu className="h-6 w-6 text-white" />
          </div>
          <span className="font-bold md:text-2xl tracking-tight text-slate-900">
            BrowserStack AI <span className="text-indigo-600">× Testing Bootcamp 2026</span>
          </span>
        </div>
        <div className="hidden md:flex gap-8 text-[11px] font-bold uppercase tracking-[0.1em] text-slate-600">
        <a href="#workshop" className="hover:text-indigo-600 transition-colors">Workshop</a>
        <a href="#access" className="hover:text-indigo-600 transition-colors">Product Access</a>
           <a href="#setup" className="hover:text-indigo-600 transition-colors">Setup Kit</a>
          <a href="#tracks" className="hover:text-indigo-600 transition-colors">Tracks</a>

       
    
        </div>
        <button onClick={onStart} className="bg-indigo-600 text-white px-6 md:px-8 py-2.5 rounded-2xl font-bold hover:bg-indigo-700 transition-all text-sm shadow-xl uppercase tracking-widest active:scale-95 leading-none">Access Hackathon</button>
      </nav>
      

      <section className="relative px-6 py-24 md:py-32 max-w-7xl mx-auto text-center overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-indigo-100/50 to-transparent -z-10 blur-3xl opacity-60" />
        <div className="inline-flex items-center gap-2 bg-white border border-slate-200 px-6 py-2.5 rounded-full text-[11px] font-bold text-indigo-600 mb-10 uppercase tracking-[0.2em] shadow-sm animate-in fade-in zoom-in duration-1000 leading-none">
          <Sparkles className="h-4 w-4" /> BrowserStack AI × Testing Bootcamp 2026
        </div>
        <h1 className="text-6xl md:text-9xl font-extrabold tracking-tight text-slate-900 mb-8 leading-[0.9] uppercase animate-in fade-in slide-in-from-bottom-8 duration-700 italic">NextGen<br /><span className="text-indigo-600 not-italic">Testing</span></h1>
        <p className="max-w-2xl mx-auto text-slate-700 text-lg md:text-xl mb-12 leading-relaxed font-medium animate-in fade-in slide-in-from-bottom-12 duration-1000">Accelerate AI learning & Adoption. ​Level up your testing expertise and get hands-on with the future of QA.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-5 animate-in fade-in slide-in-from-bottom-16 duration-1000">
         
          <a href="#setup" className="bg-white text-indigo-600 border-2 border-indigo-100 px-10 py-5 rounded-[24px] font-bold text-xl hover:bg-indigo-50 transition-all flex items-center justify-center gap-3 active:scale-95 shadow-sm uppercase tracking-widest leading-none"><Package className="h-6 w-6 text-amber-500" /> WORKSHOP SETUP</a>
          <button onClick={onStart} className="bg-indigo-200 text-white px-10 py-5 rounded-[24px] font-bold text-xl hover:bg-indigo-700 transition-all shadow-2xl flex items-center justify-center gap-4 group active:scale-95 uppercase tracking-widest leading-none italic">HACKATHON <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform" /></button>
        </div>
      </section>


      {/* Troubleshooting Section */}
      <section className="bg-white py-32 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-6 text-center animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-amber-50 border border-amber-200 rounded-[32px] mb-8 shadow-sm">
            <Wifi className="h-10 w-10 text-amber-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight uppercase italic leading-none">Access Troubleshooting</h2>
          <p className="text-slate-600 text-lg md:text-xl mb-12 font-medium leading-relaxed italic">"Facing issues while signing in or accessing products? Let's get you unblocked."</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="bg-gradient-to-br from-white to-slate-50 p-8 rounded-[40px] border border-slate-200 shadow-sm hover:border-amber-200 transition-all group">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-amber-100 rounded-2xl text-amber-700"><Smartphone className="h-6 w-6" /></div>
                <h4 className="font-extrabold text-lg uppercase tracking-tight">Network Collision</h4>
              </div>
              <p className="text-slate-700 text-sm leading-relaxed font-medium">
                Too many users attempting to sign up from the <span className="font-bold text-amber-700 underline decoration-amber-300 underline-offset-4">same WiFi network</span> can trigger security blockers. 
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <div className="flex items-start gap-3 text-xs font-bold text-slate-600">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                  <span>Switch to a Mobile Hotspot</span>
                </div>
                <div className="flex items-start gap-3 text-xs font-bold text-slate-600">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                  <span>Use a different public/private WiFi</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white to-indigo-50/30 p-8 rounded-[40px] border border-slate-200 shadow-sm hover:border-indigo-200 transition-all group">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-indigo-100 rounded-2xl text-indigo-700"><UserCheck className="h-6 w-6" /></div>
                <h4 className="font-extrabold text-lg uppercase tracking-tight">On-Site Assistance</h4>
              </div>
              <p className="text-slate-700 text-sm leading-relaxed font-medium mb-6">
                If network switching doesn't resolve the issue, our dedicated support team is available on the floor.
              </p>
              <div className="bg-white/50 p-5 rounded-2xl border border-indigo-100 italic">
                <p className="text-xs font-extrabold text-indigo-800 uppercase tracking-widest mb-1">Recommended Action</p>
                <p className="text-sm text-indigo-900 font-semibold italic mb-3">Reach out to your nearest BrowserStack SPOC for immediate assistance.</p>
                <a href={DISCORD_LINK} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-xs font-bold text-indigo-600 hover:text-indigo-800 transition-colors uppercase tracking-widest leading-none">
                  <MessageSquare className="h-4 w-4" /> Join Support Discord Channel
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Access Request Section */}
      <section id="access" className="bg-indigo-50/50 py-32 border-y border-indigo-100">
        <div className="max-w-4xl mx-auto px-6 text-center animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white border border-indigo-200 rounded-[32px] mb-8 shadow-sm">
            <UserPlus className="h-10 w-10 text-indigo-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight uppercase italic leading-none">Product Access Request</h2>
          <p className="text-slate-600 text-lg md:text-xl mb-10 font-medium leading-relaxed italic">"To begin your mission, you must first request credentials for the BrowserStack."</p>
          <div className="bg-white p-10 rounded-[48px] border border-indigo-100 shadow-xl relative overflow-hidden text-left">
            <div className="absolute top-0 right-0 p-8 opacity-5"><KeyRound className="h-40 w-40 text-indigo-900" /></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-extrabold text-slate-900 mb-4 tracking-tight uppercase leading-none italic">Access Protocol</h3>
              <ul className="space-y-4 mb-10 text-slate-700">
                <li className="flex items-start gap-4"><CheckCircle2 className="h-6 w-6 text-indigo-600 shrink-0 mt-0.5" /><p className="font-bold text-slate-700">Submit the request form below to get access to the BrowserStack Products.</p></li>
                <li className="flex items-start gap-4"><AlertCircle className="h-6 w-6 text-red-600 shrink-0 mt-0.5" /><p className="font-bold text-slate-800">CRITICAL: Submit only a <span className="underline decoration-red-400 decoration-2 underline-offset-4 text-red-700 font-extrabold">personal email ID</span> that has never been used on BrowserStack.</p></li>
                <li className="flex items-start gap-4"><CheckCircle2 className="h-6 w-6 text-indigo-600 shrink-0 mt-0.5" /><p className="font-bold text-slate-800"> You will receive an email with invitation link to access the products.</p></li>
              </ul>
              <a href="https://forms.gle/kVvfUBFG6mThi6gN7" target="_blank" rel="noreferrer" className="w-full bg-indigo-100 text-white py-6 rounded-3xl font-extrabold text-xl hover:bg-indigo-700 transition-all flex items-center justify-center gap-4 shadow-xl active:scale-95 uppercase tracking-widest leading-none italic shadow-indigo-100">Product Access Form <ChevronRight className="h-6 w-6" /></a>
            </div>
          </div>
        </div>
      </section>
      
       

      {/* Getting Started Setup Kit Section */}
      <section id="setup" className="bg-white py-32 border-b border-slate-100 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex flex-col items-center text-center mb-24 animate-in fade-in slide-in-from-bottom-8 duration-700 text-slate-800">
            <div className="bg-amber-50 border border-amber-100 p-5 rounded-[32px] mb-8 shadow-sm"><Wrench className="h-10 w-10 text-amber-600" /></div>
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-amber-600 mb-4">Preparation Guide</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 tracking-tight uppercase italic leading-none">Getting-Started Setup Kit</h2>
            <p className="text-slate-700 text-lg md:text-xl max-w-3xl leading-relaxed font-medium italic opacity-90 leading-relaxed">Prepare before the workshop to save time and ensure a smooth experience.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 text-slate-700">
            <div className="lg:col-span-1 space-y-8 animate-in fade-in slide-in-from-left-8 duration-700">
              <div className="bg-slate-50 p-8 md:p-10 rounded-[48px] border border-slate-200 h-full shadow-sm">
                <h3 className="text-xl font-bold flex items-center gap-3 mb-6 tracking-tight uppercase text-slate-800"><Info className="h-6 w-6 text-indigo-500" /> Overview</h3>
                <p className="text-slate-700 text-lg leading-relaxed mb-10 font-medium opacity-90 italic text-slate-600 leading-relaxed text-sm">Installation links and prerequisites needed for the workshop. Completing these saves time during sessions.</p>
                <div className="space-y-6">
                  <div className="bg-indigo-50 p-6 rounded-3xl border border-indigo-100 shadow-sm">
                    <h4 className="font-bold text-indigo-800 flex items-center gap-2 mb-2 uppercase tracking-widest text-[10px]"><Trophy className="h-4 w-4 text-indigo-500" /> Bonus Advantage</h4>
                    <p className="text-sm text-indigo-800 font-medium opacity-80 leading-relaxed italic">Early setup gives you a competitive advantage for the hackathon phase.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8 animate-in fade-in slide-in-from-right-8 duration-700">
              <div className="bg-white p-8 rounded-[40px] border border-slate-200 shadow-sm hover:shadow-xl hover:border-indigo-100 transition-all group">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-indigo-50 rounded-2xl border border-indigo-100 text-indigo-600"><Monitor className="h-6 w-6" /></div>
                  <h4 className="font-extrabold text-lg uppercase tracking-tight">1. Browser & IDE</h4>
                </div>
                <div className="space-y-4">
                  <div className="flex flex-col gap-2">
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest leading-none">Google Chrome</p>
                    <a href="https://www.google.com/chrome/" target="_blank" className="flex items-center text-sm font-bold text-indigo-600 hover:underline"><Download className="h-3 w-3 mr-2" /> Download Latest Chrome</a>
                  </div>
                  <div className="flex flex-col gap-2 pt-2 border-t border-slate-50">
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest leading-none">Visual Studio Code</p>
                    <a href="https://code.visualstudio.com/" target="_blank" className="flex items-center text-sm font-bold text-indigo-600 hover:underline"><ExternalLink className="h-3 w-3 mr-2" /> Download & Setup Guide</a>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-[40px] border border-slate-200 shadow-sm hover:shadow-xl hover:border-indigo-100 transition-all group">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-emerald-50 rounded-2xl border border-emerald-100 text-emerald-600"><TerminalSquare className="h-6 w-6" /></div>
                  <h4 className="font-extrabold text-lg uppercase tracking-tight">2. Runtime & Lang</h4>
                </div>
                <div className="space-y-4">
                  <div className="flex flex-col gap-1">
                    <p className="text-[10px] font-bold text-slate-500 uppercase">Node.js (Mandatory)</p>
                    <div className="flex gap-4">
                      <a href="https://nodejs.org/" target="_blank" className="text-xs font-bold text-emerald-600 hover:underline">Download Node</a>
                      <a href="https://nodejs.org/en/download/package-manager" target="_blank" className="text-xs font-bold text-slate-400">Setup Guide</a>
                    </div>
                  </div>
                  <div className="pt-2 border-t border-slate-50 flex flex-wrap gap-2">
                    <span className="text-[9px] font-bold bg-slate-100 px-2 py-1 rounded text-slate-600">JAVA</span>
                    <span className="text-[9px] font-bold bg-slate-100 px-2 py-1 rounded text-slate-600">PYTHON</span>
                    <span className="text-[9px] font-bold bg-slate-100 px-2 py-1 rounded text-slate-600">C# (.NET)</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-[40px] border border-slate-200 shadow-sm hover:shadow-xl hover:border-indigo-100 transition-all group">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-amber-50 rounded-2xl border border-amber-100 text-amber-600"><Zap className="h-6 w-6" /></div>
                  <h4 className="font-extrabold text-lg uppercase tracking-tight">3. Low-Code Tool</h4>
                </div>
                <div className="space-y-3">
                  <a href="https://lcnc-api.browserstack.com/download-updates/browserstack/lcnc-releases/releases/download/3.35.6/Low-Code-Automation-darwin-arm64-3.35.6.dmg" target="_blank" className="block text-xs font-bold text-slate-700 hover:text-amber-600 bg-slate-50 p-3 rounded-xl border border-slate-100">📖 Mac Silicon (M1/M2)</a>
                  <a href="https://lcnc-api.browserstack.com/download-updates/browserstack/lcnc-releases/releases/download/3.35.6/Low-Code-Automation-darwin-x64-3.35.6.dmg" target="_blank" className="block text-xs font-bold text-slate-700 hover:text-amber-600 bg-slate-50 p-3 rounded-xl border border-slate-100">📖 Mac Intel Chipset</a>
                  <a href="https://lcnc-api.browserstack.com/download-updates/browserstack/lcnc-releases/releases/download/3.35.6/BrowserStack.Low.Code.Automation-3.35.6.exe" target="_blank" className="block text-xs font-bold text-slate-700 hover:text-amber-600 bg-slate-50 p-3 rounded-xl border border-slate-100">📖 Windows Engine</a>
                </div>
              </div>

              <div className="bg-white p-8 rounded-[40px] border border-slate-200 shadow-sm hover:shadow-xl hover:border-indigo-100 transition-all group">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-violet-50 rounded-2xl border border-violet-100 text-violet-600"><Accessibility className="h-6 w-6" /></div>
                  <h4 className="font-extrabold text-lg uppercase tracking-tight">4. Accessibility & Git</h4>
                </div>
                <div className="space-y-4">
                  <div className="flex flex-col gap-2">
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest leading-none">Accessibility Extension</p>
                    <a href="https://www.browserstack.com/docs/accessibility/overview/install-browser-extension" target="_blank" className="text-sm font-bold text-violet-600 hover:underline">Installation & Launch Guide</a>
                  </div>
                  <div className="pt-2 border-t border-slate-50 flex items-center gap-3">
                    <Github className="h-4 w-4 text-slate-400" />
                    <a href="https://git-scm.com/downloads" target="_blank" className="text-xs font-bold text-slate-600 hover:underline">Git Installation Guide</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20 flex flex-col md:flex-row items-center justify-between gap-10 bg-indigo-600 p-10 rounded-[48px] shadow-2xl animate-in zoom-in duration-1000">
            <div className="flex items-center gap-6">
              <div className="bg-white p-4 rounded-3xl shadow-lg"><CheckCircle2 className="h-10 w-10 text-indigo-600" /></div>
              <div>
                <p className="text-3xl font-extrabold text-white tracking-tighter leading-none italic uppercase">Ready to Go!</p>
                <p className="text-indigo-100 text-sm font-bold uppercase tracking-[0.2em] mt-2">Setup Complete 🚀</p>
              </div>
            </div>
            <a href="https://gist.github.com/sanketsmali03/4d36b231400d362f7043f1590f9a14ef" target="_blank" rel="noreferrer" className="bg-white text-indigo-600 px-10 py-5 rounded-[24px] font-extrabold text-lg uppercase tracking-widest hover:bg-indigo-50 transition-all shadow-xl active:scale-95 italic">Access Full Gist Kit</a>
          </div>
          <div className="  mt-20 flex flex-col md:flex-row items-center justify-between gap-10 bg-indigo-800 p-10 rounded-[48px] shadow-2xl animate-in zoom-in duration-1000">
            <div className="flex items-center gap-6">
              <div className="bg-white p-4 rounded-3xl shadow-lg"><CheckCircle2 className="h-10 w-10 text-indigo-600" /></div>
              <div>
                <p className="text-3xl font-extrabold text-white tracking-tighter leading-none italic uppercase">Workshop Resources!</p>
                <p className="text-indigo-100 text-sm font-bold uppercase tracking-[0.2em] mt-2">Access the Sample Resources & Artifacts🚀</p>
              </div>
            </div>
            <a href="https://gist.github.com/sanketsmali03/4d36b231400d362f7043f1590f9a14ef" target="_blank" rel="noreferrer" className="bg-white text-indigo-600 px-10 py-5 rounded-[24px] font-extrabold text-lg uppercase tracking-widest hover:bg-indigo-50 transition-all shadow-xl active:scale-95 italic">Access Here</a>
          </div>
        </div>
      </section>

      <section id="tracks" className="px-10 py-32 max-w-7xl mx-auto">
        <div className="text-center mb-24 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-indigo-700 mb-4 block leading-none">Mission Control</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight uppercase leading-none italic">Choose Your industry Stack</h2>
          <p className="text-slate-700 text-xl font-medium max-w-2xl mx-auto opacity-90 font-semibold italic leading-relaxed">Experience the Wokrshop with choice if your domain.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(DOMAINS).map(([key, domain], idx) => (
            <div key={key} style={{ animationDelay: `${idx * 100}ms` }} className="bg-white border border-slate-200 p-12 rounded-[56px] hover:border-indigo-500 hover:shadow-2xl transition-all group cursor-default text-center relative overflow-hidden animate-in fade-in zoom-in duration-700 fill-mode-both shadow-sm">
              <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/0 to-indigo-50/0 group-hover:to-indigo-50/20 transition-all" />
              <div className="w-20 h-20 bg-slate-50 rounded-[32px] flex items-center justify-center mb-10 mx-auto group-hover:scale-110 transition-transform border border-slate-100 group-hover:bg-white group-hover:border-indigo-100 shadow-sm relative z-10">
                {React.cloneElement(domain.icon, { className: 'h-10 w-10' })}
              </div>
              <h3 className="text-xl font-extrabold mb-3 text-slate-900 relative z-10 tracking-tight leading-none uppercase italic leading-none">{domain.name}</h3>
              <p className="text-slate-600 text-sm font-bold uppercase tracking-widest relative z-10 opacity-70 leading-none">{domain.sector}</p>
              <br></br>
              <p className="text-sm">{domain.url}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="workshop" className="bg-gradient-to-b from-indigo-50/50 to-white py-32 border-y border-indigo-100 overflow-hidden relative">
        <div className="absolute top-0 right-0 p-20 opacity-10 pointer-events-none text-indigo-200"><Layers className="h-[600px] w-[600px] rotate-45" /></div>
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
          <div className="text-center mb-24 animate-in fade-in slide-in-from-bottom-8 duration-700 text-slate-800">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white border-2 border-indigo-100 rounded-[32px] mb-8 shadow-xl"><Video className="h-10 w-10 text-indigo-600" /></div>
            <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight uppercase text-indigo-950 leading-none italic">Workshop Learning Modules</h2>
            <p className="text-indigo-800 text-xl md:text-2xl max-w-3xl mx-auto mt-8 font-semibold leading-relaxed italic opacity-80 leading-relaxed text-slate-700">Deep-dive into the AI Agents.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 text-slate-800">
            {WORKSHOP_PLAN.map((mod, i) => (
              <div key={i} style={{ animationDelay: `${i * 200}ms` }} className="bg-white rounded-[64px] p-10 md:p-12 border border-indigo-100 shadow-xl shadow-indigo-100/20 hover:shadow-2xl hover:border-indigo-300 transition-all group animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both">
                <div className="flex items-center justify-between mb-10">
                  <div className="bg-indigo-50 p-5 rounded-[28px] border border-indigo-100 group-hover:bg-indigo-600 transition-colors shadow-sm">{React.cloneElement(mod.icon, { className: 'h-8 w-8 transition-colors group-hover:text-white' })}</div>
               
                </div>
                <h3 className="text-3xl font-extrabold mb-4 tracking-tight text-slate-900 group-hover:text-indigo-700 transition-colors uppercase leading-none">{mod.module}</h3>
                <p className="text-slate-700 text-lg mb-10 font-medium leading-relaxed opacity-90 font-semibold italic leading-relaxed text-slate-600">{mod.description}</p>
                <div className="space-y-8 mb-12">
                  {mod.agenda.map((item, idx) => (
                    <div key={idx} className="flex gap-6 group/item">
                      <div className="flex flex-col items-center pt-2 shrink-0">
                        <div className="w-3 h-3 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.3)] group-hover/item:scale-125 transition-transform" />
                        <div className="w-0.5 h-full bg-indigo-100 my-1" />
                      </div>
                      <div className="text-slate-700">
                        <p className="font-extrabold text-xl mb-1 tracking-tight group-hover/item:text-indigo-600 transition-colors leading-none uppercase">{item.title}</p>
                        <p className="text-sm text-slate-600 font-medium leading-relaxed opacity-90 italic leading-relaxed">{item.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-4 pt-8 border-t border-slate-100">
                  {mod.resources.map((res, rIdx) => (
                    <a key={rIdx} href={res.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 bg-slate-50 border border-slate-200 text-slate-800 hover:text-indigo-700 hover:bg-white hover:border-indigo-200 px-6 py-3 rounded-2xl text-[10px] font-bold uppercase tracking-widest transition-all shadow-sm active:scale-95 leading-none italic">{res.name} <ExternalLink className="h-4 w-4" /></a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-20 px-10 text-center bg-slate-50 border-t border-slate-200">
        <p className="text-slate-500 text-[11px] font-bold uppercase tracking-[0.5em]">BrowserStack Inc &copy; 2026 / AI Bootcamp secure</p>
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
              <h1 className="text-5xl font-extrabold text-slate-900 tracking-tight uppercase leading-none italic">Mission Initiation</h1>
              <div className="text-indigo-700 font-bold uppercase tracking-[0.2em] mt-4 flex items-center gap-3 opacity-90 leading-none">
                <div className="w-8 h-1 bg-indigo-600 rounded-full shadow-sm shadow-indigo-200" /> Select Authorized Stack
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {Object.keys(DOMAINS).map((key, idx) => (
              <div key={key} style={{ animationDelay: `${idx * 100}ms` }} onClick={() => handleDomainSelect(key)} className="group cursor-pointer bg-white rounded-[56px] border border-slate-200 hover:border-indigo-400 hover:shadow-2xl transition-all p-12 text-center relative overflow-hidden shadow-sm animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both">
                <div className="absolute inset-0 bg-indigo-50/30 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="w-24 h-24 bg-indigo-50 rounded-[36px] mx-auto flex items-center justify-center mb-10 group-hover:bg-white transition-all border border-slate-100 group-hover:border-indigo-100 shadow-sm relative z-10 group-hover:scale-110">{React.cloneElement(DOMAINS[key].icon, { className: 'h-12 w-12' })}</div>
                <h3 className="font-extrabold text-2xl mb-2 text-slate-900 relative z-10 tracking-tight uppercase leading-none italic">{DOMAINS[key].name}</h3>
                <span className="text-[11px] font-bold uppercase tracking-widest text-indigo-600 relative z-10 opacity-80 leading-none">{DOMAINS[key].sector}</span>
                <div className="mt-10 flex justify-center opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0 relative z-10">
                  <div className="bg-indigo-600 text-white px-8 py-3 rounded-2xl text-xs font-bold uppercase tracking-widest shadow-xl italic">Start Mission</div>
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
      <aside className="w-80 border-r border-slate-200 flex flex-col fixed h-full bg-white z-50 animate-in fade-in slide-in-from-left duration-700 shadow-sm">
        <div className="p-10 border-b border-slate-50">
          <div className="flex items-center gap-3 mb-10 group cursor-pointer">
            <div className="bg-indigo-600 p-2.5 rounded-2xl shadow-xl transition-all hover:bg-indigo-700 shadow-indigo-100 shadow-indigo-200"><Cpu className="h-6 w-6 text-white" /></div>
            <span className="font-extrabold text-lg md:text-xl tracking-tighter text-slate-900">
              BrowserStack AI <span className="text-indigo-600 italic font-bold">× Testing 2026</span>
            </span>
          </div>
        
        </div>
        <nav className="flex-grow p-8 space-y-3 overflow-y-auto text-slate-100 bg-white">
          {[
            { id: 'challenges', label: 'Technical Missions', icon: <Terminal className="h-5 w-5" /> },
            { id: 'submit', label: 'Final Submission', icon: <Send className="h-5 w-5" /> },
            { id: 'support', label: 'Expert Support', icon: <UserCheck className="h-5 w-5" /> },
            { id: 'faq', label: 'Resources', icon: <BookOpen className="h-5 w-5" /> },
          ].map((item) => (
            <button key={item.id} onClick={() => setActiveTab(item.id)} className={`w-full flex items-center gap-5 px-6 py-5 rounded-2xl font-bold text-sm transition-all text-left group ${activeTab === item.id ? 'bg-indigo-600 text-white shadow-xl shadow-indigo-200 shadow-indigo-100' : 'hover:bg-indigo-50 hover:text-indigo-700'}`}>
              <span className={activeTab === item.id ? 'text-white' : 'text-slate-400 group-hover:text-indigo-500 transition-colors'}>{item.icon}</span>{item.label}
            </button>
          ))}
        </nav>
        <div className="p-8 border-t border-slate-50"><button onClick={onLogout} className="w-full text-[11px] font-bold uppercase text-slate-500 hover:text-red-600 transition-colors flex items-center justify-center gap-3 group active:scale-95 tracking-widest leading-none italic"><X className="h-4 w-4 group-hover:rotate-90 transition-transform" /> Sign Out</button></div>
      </aside>

      <main className="flex-grow ml-80 bg-slate-50/50 p-12 overflow-y-auto min-h-screen text-slate-700">
        <div className="max-w-6xl mx-auto animate-in fade-in duration-500">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
            <div className="space-y-5">
              <div className="flex items-center gap-3 flex-wrap">
                <span className="px-5 py-2 rounded-full bg-gradient-to-r from-indigo-100 to-indigo-50 text-indigo-700 text-xs font-extrabold uppercase tracking-widest border-2 border-indigo-200 shadow-sm">{selectedDomain.sector} Track</span>
                <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-700 bg-white px-5 py-2 rounded-full border-2 border-slate-200 shadow-sm">
                  <Globe className="h-4 w-4 text-indigo-600" /> 
                  <span className="font-mono">{selectedDomain.url}</span>
                </span>
              </div>
              <div>
                <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight uppercase leading-none mb-2 bg-gradient-to-r from-slate-900 via-indigo-900 to-slate-900 bg-clip-text text-transparent">
                  {selectedDomain.name}
                </h1>
                <div className="h-1.5 w-24 bg-gradient-to-r from-indigo-600 to-indigo-400 rounded-full"></div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-white to-indigo-50/30 px-10 py-7 rounded-[40px] border-2 border-indigo-200 shadow-xl shadow-indigo-100/50 flex items-center gap-12">
              <div className="flex flex-col items-center">
                <p className="text-[11px] font-extrabold text-indigo-700 uppercase tracking-[0.2em] mb-2 leading-none">TOTAL MISSIONS</p>
                <p className="text-4xl font-extrabold bg-gradient-to-r from-indigo-600 to-indigo-400 bg-clip-text text-transparent leading-none">0 / 6</p>
              </div>
              <div className="h-14 w-px bg-gradient-to-b from-transparent via-indigo-200 to-transparent" />
              <div className="flex flex-col items-center">
                <p className="text-[11px] font-extrabold text-slate-600 uppercase tracking-[0.2em] mb-2 leading-none">TO QUALIFY</p>
                <p className="text-4xl font-extrabold text-slate-800 leading-none">
                  <span className="bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">4</span>
                  <span className="text-sm font-bold text-slate-400 uppercase tracking-tighter ml-2">Min</span>
                </p>
              </div>
            </div>
          </div>

          {activeTab === 'challenges' && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <Terminal className="h-6 w-6 text-indigo-600" />
                <h2 className="text-2xl font-extrabold text-slate-900 uppercase tracking-tight">Technical Missions</h2>
                <div className="flex-1 h-px bg-gradient-to-r from-indigo-200 via-indigo-100 to-transparent"></div>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest bg-slate-100 px-4 py-1.5 rounded-full">
                  {selectedDomain.challenges.length} Challenges
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 animate-in slide-in-from-bottom-8 duration-700">
                {selectedDomain.challenges.map((challenge, idx) => (
                  <div key={challenge.id} style={{ animationDelay: `${idx * 100}ms` }} className="animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both">
                    <ChallengeCard challenge={challenge} accent={selectedDomain.accent} />
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'submit' && (
            <div className="bg-white rounded-[64px] p-20 shadow-2xl shadow-indigo-100/20 border border-indigo-100 animate-in zoom-in duration-500 flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-indigo-50 rounded-[36px] border-2 border-indigo-100 flex items-center justify-center shadow-xl transform rotate-12 mb-10 text-indigo-600 leading-none animate-bounce"><Send className="h-10 w-10" /></div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight uppercase leading-none italic">Gate Review Initiation</h2>
              <p className="text-slate-700 text-xl mb-16 font-semibold max-w-2xl leading-relaxed opacity-90 italic leading-relaxed text-slate-600">"Verify all technical missions meet criteria before firing final submission."</p>
              <div className="w-full max-w-lg bg-indigo-50/50 rounded-[40px] border border-indigo-100 p-12 relative overflow-hidden group hover:bg-white transition-all hover:border-indigo-300 shadow-sm shadow-indigo-100/50">
                <h3 className="text-2xl font-extrabold text-indigo-950 mb-4 relative z-10 uppercase tracking-tight leading-none italic">Official Portal</h3>
                <p className="text-sm text-indigo-700 mb-10 relative z-10 font-bold uppercase tracking-widest opacity-80 leading-none">Google Submission Form</p>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSdCjQcYj4F2HYKYJWByg4nZqGVgBO2k84ic7w7VznAzH8vciw/viewform" target="_blank" rel="noreferrer" className="w-full bg-indigo-600 text-white py-6 rounded-3xl font-extrabold text-xl hover:bg-indigo-700 transition-all flex items-center justify-center gap-4 shadow-xl group/btn active:scale-95 tracking-widest uppercase leading-none italic">Open Form <ExternalLink className="h-6 w-6 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" /></a>
              </div>
            </div>
          )}

          {activeTab === 'support' && (
            <div className="space-y-16 animate-in slide-in-from-right-12 duration-700">
              <div className="bg-white p-20 rounded-[64px] border-2 border-indigo-100 text-indigo-950 flex flex-col md:flex-row items-center justify-between relative overflow-hidden shadow-xl shadow-indigo-100/20">
                <div className="absolute top-0 right-0 p-20 opacity-40 blur-3xl bg-indigo-50 w-96 h-96 rounded-full" />
                <div className="relative z-10 max-w-xl text-center md:text-left">
                  <h3 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-8 uppercase leading-none text-indigo-600 italic">Expert Desk</h3>
                  <p className="text-slate-600 text-2xl font-bold mb-12 leading-relaxed opacity-90 italic leading-relaxed text-slate-600">"Stuck on SDK config or AI agent logic? Our leads are ready to unblock you."</p>
                  <button className="bg-indigo-600 text-white px-12 py-5 rounded-[24px] font-bold text-xl flex items-center gap-4 hover:bg-indigo-700 transition-all shadow-2xl mx-auto md:mx-0 active:scale-95 tracking-widest uppercase shadow-indigo-200 leading-none italic">
                    <MessageSquare className="h-6 w-6" /> Squad Comms
                  </button>
                </div>
                <div className="absolute right-[-40px] bottom-[-40px] opacity-10 hidden lg:block text-indigo-200 shadow-sm leading-none"><HelpCircle className="h-[400px] w-[400px]" /></div>
              </div>
              <div className="space-y-10 text-slate-800">
                <div className="flex items-center gap-5">
                  <div className="w-12 h-1 bg-indigo-600 rounded-full" />
                  <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight uppercase leading-none italic">Meet the Experts</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {EXPERT_PANEL.map((expert, i) => (
                    <div key={i} style={{ animationDelay: `${i * 100}ms` }} className="bg-white border border-slate-200 p-10 rounded-[48px] shadow-sm hover:shadow-2xl transition-all group hover:border-indigo-300 relative overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both shadow-indigo-50/50">
                      <div className="absolute top-0 left-0 w-2 h-full bg-slate-50 group-hover:bg-indigo-600 transition-all" />
                      <div className="flex items-start justify-between mb-6 text-slate-700 leading-none">
                        <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center border border-indigo-100 group-hover:bg-indigo-600 transition-colors shadow-sm shadow-indigo-100/50 leading-none"><Users className="h-8 w-8 text-indigo-500 group-hover:text-white transition-colors" /></div>
                        <span className="text-[9px] font-bold uppercase tracking-widest opacity-60">BrowserStack</span>
                      </div>
                      <h4 className="text-2xl font-extrabold text-slate-900 mb-2 group-hover:text-indigo-700 transition-colors tracking-tight leading-none uppercase italic">{expert.name}</h4>
                      <p className="text-sm font-bold text-slate-600 leading-snug uppercase tracking-tight opacity-80 italic">{expert.role}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'faq' && (
            <div className="max-w-4xl mx-auto space-y-8 animate-in slide-in-from-bottom-12 duration-700 text-slate-700">
              <div className="text-center mb-16">
                <h3 className="text-4xl md:text-5xl font-extrabold tracking-tighter uppercase mb-4 text-indigo-700 italic leading-none">Manuals & FAQ</h3>
                <p className="text-slate-600 font-bold uppercase tracking-[0.2em]">Operational Guidelines</p>
              </div>
              {FAQ_DATA.map((item, idx) => (
                <div key={idx} style={{ animationDelay: `${idx * 150}ms` }} className="bg-white p-12 rounded-[48px] border border-slate-200 shadow-sm hover:shadow-xl hover:border-indigo-200 transition-all group animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both shadow-indigo-100/30">
                  <h4 className="text-2xl font-extrabold text-slate-900 mb-6 flex items-start gap-5 tracking-tight leading-snug italic uppercase">
                    <span className="bg-indigo-600 text-white w-10 h-10 rounded-2xl flex items-center justify-center text-xs shrink-0 mt-0.5 shadow-xl shadow-indigo-200 transform group-hover:rotate-6 transition-transform font-extrabold not-italic leading-none">Q</span>
                    {item.q}
                  </h4>
                  <div className="flex items-start gap-6 text-slate-700 font-medium leading-relaxed leading-relaxed italic leading-relaxed text-slate-600">
                    <span className="w-10 h-10 flex items-center justify-center shrink-0" />
                    <p className="border-l-4 border-indigo-100 pl-8 italic text-lg text-slate-600 font-semibold opacity-90 leading-relaxed leading-relaxed">"{item.a}"</p>
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
    if (key === AUTHORIZED_SECRET_KEY) {
      onLogin(key);
    } else {
      setError(`Unauthorized Access Code.`);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 selection:bg-indigo-100">
      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-100/40 via-transparent to-transparent opacity-60 pointer-events-none" />
      <div className="max-w-xl w-full bg-white rounded-[72px] shadow-2xl shadow-indigo-100/30 border border-indigo-100 overflow-hidden p-16 md:p-20 animate-in zoom-in duration-700 relative z-10 text-slate-900 text-center">
        <div className="mb-16">
          <div className="inline-flex items-center justify-center w-28 h-28 bg-indigo-600 rounded-[44px] mb-10 shadow-2xl transform -rotate-6 shadow-indigo-300 transition-transform hover:rotate-0 leading-none"><Shield className="h-14 w-14 text-white" /></div>
          <h1 className="text-5xl font-extrabold text-slate-900 tracking-tighter uppercase leading-none animate-in fade-in slide-in-from-bottom-4 duration-700 italic">Initialize <br /> <span className="text-indigo-600 not-italic leading-none">Mission</span></h1>
          <p className="text-indigo-800 font-bold text-[10px] uppercase tracking-[0.5em] mt-10 opacity-80 leading-none">Secured Access Layer 4.0</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-10 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="space-y-4">
            <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-600 pl-4 block leading-none">Secret Access Key</label>
            <input type="password" value={key} onChange={(e) => setKey(e.target.value)} placeholder="SQUAD-XXXX-XXXX" className="w-full px-10 py-7 rounded-[32px] bg-slate-50 border-2 border-slate-100 focus:border-indigo-600 focus:bg-white focus:ring-8 focus:ring-indigo-50 transition-all outline-none font-mono text-2xl tracking-widest text-slate-900 text-center shadow-inner leading-none" />
            {error && <p className="text-red-700 text-[11px] font-bold uppercase tracking-widest flex items-center justify-center animate-bounce leading-none"><AlertCircle className="h-4 w-4 mr-2" /> {error}</p>}
          </div>
          <button type="submit" className="w-full bg-indigo-600 text-white py-7 rounded-[32px] font-extrabold text-2xl hover:bg-indigo-700 transition-all flex items-center justify-center gap-4 shadow-xl active:scale-95 shadow-indigo-300 tracking-widest uppercase leading-none italic">UNLOCK <ChevronRight className="h-8 w-8" /></button>
          <button type="button" onClick={onBack} className="w-full text-slate-500 hover:text-indigo-700 transition-colors text-xs font-bold uppercase tracking-[0.3em] pt-6 font-semibold italic leading-none opacity-60">Cancel initiation</button>
        </form>
      </div>
    </div>
  );
};

const Accessibility = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="16" cy="4" r="1"/><path d="m18 19 1-7-6 1"/><path d="m5 8 3-3 5.5 3-2.36 3.5"/><path d="M4.24 14.5a5 5 0 0 0 6.88 6"/><path d="M13.76 17.5a5 5 0 0 0-6.88-6"/></svg>
);

export default function App() {
  const [view, setView] = useState('LANDING'); 
  const [session, setSession] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem('squad_session');
    if (saved && saved === AUTHORIZED_SECRET_KEY) {
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