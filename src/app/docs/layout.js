'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { usePathname } from 'next/navigation'

const DocsLayout = ({ children }) => {
  const pathname = usePathname()
  const [openMenus, setOpenMenus] = useState({
    gettingStarted: false,
    features: false
  })

  const toggleMenu = (menu) => {
    setOpenMenus(prev => ({
      ...prev,
      [menu]: !prev[menu]
    }))
  }

  return (
    <main className='bg-[#161618] min-h-screen'>
      <div className='fixed left-0 top-0 bottom-0 bg-[#1c1c1e] w-[280px] border-r border-[#2c2c2e] overflow-y-auto'>
        <nav className='px-6 py-6'>
          <h1 className='text-white text-xl font-medium mb-8 tracking-tight'>
            <div className='flex items-center gap-2.5'>
              <Icon icon="ph:stack-simple-bold" 
                    className="w-5 h-5 text-[#0A84FF]" />
              Docify
            </div>
          </h1>
          
          <div className='mb-8'>
            <div className='relative'>
              <input 
                type="text"
                placeholder="Quick search..."
                className='w-full bg-[#2c2c2e] text-[#ffffff] text-sm rounded-lg
                          pl-9 pr-4 py-2 outline-none
                          border border-[#3a3a3c] focus:border-[#0A84FF]
                          transition-colors duration-150'
              />
              <Icon 
                icon="ph:magnifying-glass-bold"
                className='absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#64748b]'
              />
              <div className='absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1'>
                <kbd className='text-[10px] text-[#64748b] px-1.5 py-0.5 rounded border border-[#334155]'>⌘</kbd>
                <kbd className='text-[10px] text-[#64748b] px-1.5 py-0.5 rounded border border-[#334155]'>K</kbd>
              </div>
            </div>
          </div>

          <div className='mb-8 space-y-0.5'>
            <h2 className='text-[#98989d] text-xs font-medium uppercase mb-2 px-3'>
              Guides
            </h2>
            <ul className='space-y-0.5'>
              <li>
                <button
                  onClick={() => toggleMenu('gettingStarted')}
                  className='w-full flex items-center justify-between px-3 py-2 text-sm text-[#ffffff]
                           hover:bg-[#2c2c2e] rounded-md
                           transition-all duration-200 ease-in-out'
                >
                  <div className='flex items-center gap-2.5'>
                    <Icon icon="ph:book-open-bold" 
                          className="w-4 h-4 text-[#0A84FF]" />
                    Getting Started
                  </div>
                  <Icon icon="ph:caret-right-bold" 
                        className={`w-3.5 h-3.5 text-[#64748b] transition-transform duration-200 ease-in-out
                                 ${openMenus.gettingStarted ? 'rotate-90' : ''}`} />
                </button>
                <ul className={`overflow-hidden transition-all duration-200 ease-in-out
                             ${openMenus.gettingStarted ? 'max-h-[500px] mt-1' : 'max-h-0'}`}>
                  {['Installation', 'Quickstart', 'Configuration'].map((item) => (
                    <li key={item}>
                      <Link
                        href={`/docs/guides/${item.toLowerCase()}`}
                        className={`flex items-center px-3 py-2 text-sm 
                                   hover:bg-[#2c2c2e] rounded-md ml-6
                                   transition-all duration-150 ease-in-out
                                   ${pathname === `/docs/guides/${item.toLowerCase()}` 
                                     ? 'bg-[#2c2c2e] text-white' 
                                     : 'text-[#ffffff]'}`}
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>

              <li>
                <button
                  onClick={() => toggleMenu('features')}
                  className='w-full flex items-center justify-between px-3 py-2 text-sm text-[#ffffff]
                           hover:bg-[#2c2c2e] rounded-md
                           transition-all duration-200 ease-in-out'
                >
                  <div className='flex items-center gap-2.5'>
                    <Icon icon="ph:stack-simple-bold" 
                          className="w-4 h-4 text-[#0A84FF]" />
                    Features
                  </div>
                  <Icon icon="ph:caret-right-bold" 
                        className={`w-3.5 h-3.5 text-[#64748b] transition-transform duration-200 ease-in-out
                                 ${openMenus.features ? 'rotate-90' : ''}`} />
                </button>
                <ul className={`overflow-hidden transition-all duration-200 ease-in-out
                             ${openMenus.features ? 'max-h-[500px] mt-1' : 'max-h-0'}`}>
                  {['Authentication', 'Database', 'Storage'].map((item) => (
                    <li key={item}>
                      <Link
                        href={`/docs/guides/${item.toLowerCase()}`}
                        className={`flex items-center px-3 py-2 text-sm 
                                   hover:bg-[#2c2c2e] rounded-md ml-6
                                   transition-all duration-150 ease-in-out
                                   ${pathname === `/docs/guides/${item.toLowerCase()}` 
                                     ? 'bg-[#2c2c2e] text-white' 
                                     : 'text-[#ffffff]'}`}
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>

          <div className='space-y-0.5'>
            <h2 className='text-[#98989d] text-xs font-medium uppercase mb-2 px-3'>
              References
            </h2>
            <ul>
              <li>
                <Link 
                  href="/docs/api/reference" 
                  className={`flex items-center gap-2.5 px-3 py-2 text-sm
                              hover:bg-[#2c2c2e] rounded-md
                              transition-colors duration-150
                              ${pathname === '/docs/api/reference' 
                                ? 'bg-[#2c2c2e] text-white' 
                                : 'text-[#ffffff]'}`}>
                  <Icon icon="ph:code-bold" 
                        className="w-4 h-4 text-[#0A84FF]" />
                  API Reference
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <div className='ml-[280px] min-h-screen'>
        <header className='sticky top-0 z-10 bg-[#1c1c1e]/95 border-b border-[#2c2c2e] backdrop-blur-sm'>
          <div className='flex items-center justify-between px-8 h-16'>
            <div className='flex items-center gap-4'>
              <h2 className='text-[#ffffff] text-lg font-medium'>Documentation</h2>
              <span className='px-2 py-1 text-xs font-medium text-[#0A84FF] bg-[#0A84FF]/10 rounded-full'>v1.0.0</span>
            </div>
            <div className='flex items-center gap-4'>
              <a href="https://github.com" 
                 className='flex items-center gap-2 text-sm text-[#98989d] hover:text-[#ffffff] transition-colors duration-150'>
                <Icon icon="ph:github-logo-bold" className="w-5 h-5" />
                Star on GitHub
              </a>
              <button className='flex items-center gap-2 text-sm text-[#ffffff] bg-[#2c2c2e] px-3 py-1.5 rounded-lg
                               hover:bg-[#3a3a3c] transition-colors duration-150'>
                <Icon icon="ph:moon-bold" className="w-4 h-4" />
                Theme
              </button>
            </div>
          </div>
        </header>

        <div className='p-8'>
          {children}
        </div>
      </div>
    </main>
  )
}

export default DocsLayout 