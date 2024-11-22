'use client'
import { useState, useEffect } from 'react'
import { Icon } from '@iconify/react'

const InstallationPage = () => {
  const [activeTab, setActiveTab] = useState('cli')
  const [copied, setCopied] = useState(false)
  const [activeStep, setActiveStep] = useState(0)
  const [isTyping, setIsTyping] = useState(true)
  
  const terminalSteps = [
    'npx create-docify-app my-docs',
    'Installing dependencies...',
    'Setting up project structure...',
    'Success! Project is ready 🚀'
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep(prev => {
        if (prev < terminalSteps.length - 1) return prev + 1
        setIsTyping(false)
        clearInterval(timer)
        return prev
      })
    }, 1500)
    return () => clearInterval(timer)
  }, [])

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="max-w-[1000px]">
      <div className="mb-12 bg-[#1c1c1e] rounded-xl overflow-hidden border border-[#2c2c2e]">
        <div className="px-4 py-3 border-b border-[#2c2c2e] flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
            <div className="w-3 h-3 rounded-full bg-[#febc2e]"></div>
            <div className="w-3 h-3 rounded-full bg-[#28c840]"></div>
          </div>
          <span className="text-xs text-[#98989d] font-medium ml-2">Terminal</span>
        </div>
        <div className="p-6 font-mono text-sm">
          <div className="space-y-2">
            {terminalSteps.slice(0, activeStep + 1).map((step, index) => (
              <div key={index} className="flex items-start gap-2">
                <span className="text-[#98989d]">$</span>
                <span className={`text-white ${index === activeStep && isTyping ? 'typing-animation' : ''}`}>
                  {step}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
            Installation Options
            <span className="px-2 py-1 text-xs font-medium bg-[#2c2c2e] text-[#98989d] rounded-full">Choose your path</span>
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {[
              {
                title: "Quick Start",
                description: "Get started quickly with our CLI tool",
                icon: "ph:terminal-window-bold",
                active: activeTab === 'cli',
                id: 'cli'
              },
              {
                title: "Manual Setup",
                description: "Configure everything step by step",
                icon: "ph:gear-six-bold",
                active: activeTab === 'manual',
                id: 'manual'
              }
            ].map((option) => (
              <button
                key={option.id}
                onClick={() => setActiveTab(option.id)}
                className={`p-6 rounded-xl border text-left transition-all duration-300 group
                  ${option.active 
                    ? 'bg-gradient-to-br from-[#2c2c2e] to-[#1c1c1e] border-[#3a3a3c]' 
                    : 'bg-[#1c1c1e] border-[#2c2c2e] hover:border-[#3a3a3c]'}`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center
                    ${option.active ? 'bg-[#3a3a3c]' : 'bg-[#2c2c2e] group-hover:bg-[#3a3a3c]'}`}>
                    <Icon icon={option.icon} className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">{option.title}</h3>
                    <p className="text-[#98989d] text-sm">{option.description}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* Installation Steps */}
        <section className="grid grid-cols-3 gap-8">
          <div className="col-span-2 space-y-4">
            {activeTab === 'cli' ? (
              <div className="space-y-8">
                <div className="bg-[#1c1c1e] rounded-xl p-6 border border-[#2c2c2e]">
                  <h3 className="text-lg font-medium text-white mb-4">One Command Setup</h3>
                  <div className="bg-[#161618] rounded-lg p-4 font-mono text-sm text-white relative group">
                    <button 
                      onClick={() => copyToClipboard('npx create-docify-app my-docs')}
                      className="absolute right-3 top-3 text-[#98989d] hover:text-white opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Icon icon={copied ? "ph:check-bold" : "ph:copy-bold"} className="w-4 h-4" />
                    </button>
                    <code>npx create-docify-app my-docs</code>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: "ph:rocket-launch-bold", title: "Zero Config", desc: "Start coding immediately" },
                    { icon: "ph:tree-structure-bold", title: "Best Practices", desc: "Pre-configured setup" },
                    { icon: "ph:plugin-bold", title: "Plugin Ready", desc: "Extend functionality easily" },
                    { icon: "ph:pencil-line-bold", title: "Templates", desc: "Ready-to-use components" }
                  ].map((feature, i) => (
                    <div key={i} className="bg-[#1c1c1e] rounded-xl p-4 border border-[#2c2c2e] hover:border-[#3a3a3c] transition-colors">
                      <div className="w-8 h-8 rounded-lg bg-[#2c2c2e] flex items-center justify-center mb-3">
                        <Icon icon={feature.icon} className="w-4 h-4 text-white" />
                      </div>
                      <h4 className="text-white font-medium mb-1">{feature.title}</h4>
                      <p className="text-[#98989d] text-sm">{feature.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                {[
                  { 
                    title: "Create Project",
                    command: "mkdir my-docs && cd my-docs",
                    icon: "ph:folder-simple-bold"
                  },
                  {
                    title: "Initialize Package",
                    command: "npm init -y",
                    icon: "ph:package-bold"
                  },
                  {
                    title: "Install Dependencies",
                    command: "npm install @docify/core @docify/theme-default",
                    icon: "ph:download-bold"
                  },
                  {
                    title: "Configure Project",
                    command: `// docify.config.js
{
  title: "My Docs",
  theme: "default",
  plugins: []
}`,
                    icon: "ph:gear-six-bold"
                  }
                ].map((step, i) => (
                  <div key={i} 
                    className="group bg-[#1c1c1e] rounded-xl p-6 border border-[#2c2c2e] hover:border-[#3a3a3c] transition-all duration-200">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-8 h-8 rounded-lg bg-[#2c2c2e] group-hover:bg-[#3a3a3c] flex items-center justify-center transition-colors">
                        <Icon icon={step.icon} className="w-4 h-4 text-white" />
                      </div>
                      <h3 className="text-lg font-medium text-white">{step.title}</h3>
                    </div>
                    <div className="bg-[#161618] rounded-lg p-4 font-mono text-sm text-white">
                      <code>{step.command}</code>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="space-y-6">
            <div className="bg-[#1c1c1e] rounded-xl p-6 border border-[#2c2c2e]">
              <h3 className="text-lg font-medium text-white mb-4">Requirements</h3>
              <ul className="space-y-3">
                {[
                  { name: "Node.js 16+", icon: "ph:nodejs-logo-bold" },
                  { name: "npm or yarn", icon: "ph:package-bold" },
                  { name: "Git (optional)", icon: "ph:git-branch-bold" }
                ].map((req, i) => (
                  <li key={i} className="flex items-center gap-3 text-[#98989d] group">
                    <Icon icon={req.icon} className="w-5 h-5 group-hover:text-white transition-colors" />
                    <span className="group-hover:text-white transition-colors">{req.name}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#2c2c2e] to-[#1c1c1e] rounded-xl p-6 border border-[#3a3a3c]">
              <h3 className="text-lg font-medium text-white mb-4">Get Help</h3>
              <div className="space-y-3">
                <button className="w-full bg-[#2c2c2e] text-white rounded-lg px-4 py-3 text-sm font-medium hover:bg-[#3a3a3c] transition-colors flex items-center justify-center gap-2">
                  <Icon icon="ph:discord-logo-bold" className="w-4 h-4" />
                  Join Discord Community
                </button>
                <button className="w-full bg-[#2c2c2e] text-white rounded-lg px-4 py-3 text-sm font-medium hover:bg-[#3a3a3c] transition-colors flex items-center justify-center gap-2">
                  <Icon icon="ph:github-logo-bold" className="w-4 h-4" />
                  View on GitHub
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <style jsx>{`
        .typing-animation {
          overflow: hidden;
          border-right: 2px solid #98989d;
          white-space: nowrap;
          animation: typing 3.5s steps(40, end), blink-caret .75s step-end infinite;
        }

        @keyframes typing {
          from { width: 0 }
          to { width: 100% }
        }

        @keyframes blink-caret {
          from, to { border-color: transparent }
          50% { border-color: #98989d; }
        }
      `}</style>
    </div>
  )
}

export default InstallationPage