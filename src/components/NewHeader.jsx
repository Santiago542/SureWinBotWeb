import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Bot, 
  Calculator, 
  Scale, 
  Phone, 
  HelpCircle, 
  ChevronDown,
  Home,
  Star,
  Cog,
  DollarSign,
  Menu,
  X,
  FileText,
  Shield
} from 'lucide-react'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [isCalculadoraOpen, setIsCalculadoraOpen] = useState(false)
  const [isLegalOpen, setIsLegalOpen] = useState(false)
  const [isContactoOpen, setIsContactoOpen] = useState(false)
  const [isNavegacionOpen, setIsNavegacionOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1400)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    const handleClickOutside = (event) => {
      // Close all dropdowns if clicking outside their respective containers
      if (!event.target.closest('[data-dropdown="navegacion"]')) {
        setIsNavegacionOpen(false)
      }
      if (!event.target.closest('[data-dropdown="calculadora"]')) {
        setIsCalculadoraOpen(false)
      }
      if (!event.target.closest('[data-dropdown="legal"]')) {
        setIsLegalOpen(false)
      }
      if (!event.target.closest('[data-dropdown="contacto"]')) {
        setIsContactoOpen(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)
    document.addEventListener('click', handleClickOutside)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
      document.removeEventListener('click', handleClickOutside)
    }
  }, [windowWidth])

  const closeAllDropdowns = () => {
    setIsCalculadoraOpen(false)
    setIsLegalOpen(false)
    setIsContactoOpen(false)
    setIsNavegacionOpen(false)
    setIsMobileMenuOpen(false)
  }

  const toggleDropdown = (dropdownName) => {
    closeAllDropdowns()
    switch (dropdownName) {
      case 'calculadora':
        setIsCalculadoraOpen(true)
        break
      case 'legal':
        setIsLegalOpen(true)
        break
      case 'contacto':
        setIsContactoOpen(true)
        break
      case 'navegacion':
        setIsNavegacionOpen(true)
        break
      default:
        break
    }
  }

  const handleScroll = (e, href) => {
    e.preventDefault()
    e.stopPropagation()
    
    // Small delay to ensure menu closes first
    setTimeout(() => {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
  }

  const navegacionItems = [
    { name: 'Inicio', href: '#hero', icon: Home, type: 'scroll' },
    { name: 'Características', href: '#features', icon: Star, type: 'scroll' },
    { name: 'Cómo Funciona', href: '#how-it-works', icon: Cog, type: 'scroll' },
    { name: 'Precio', href: '#pricing', icon: DollarSign, type: 'scroll' }
  ]

  const calculadoraItems = [
    { name: 'Calculadora Surebets', href: '/surebet-calculator', icon: Calculator },
    { name: 'Calculadora Valuebets', href: '/valuebet-calculator', icon: Calculator }
  ]

  const legalItems = [
    { name: 'Términos de Servicio', href: '/terms', icon: FileText },
    { name: 'Política de Privacidad', href: '/privacy', icon: Shield }
  ]

  const contactoItems = [
    { name: 'FAQ', href: '/faq', icon: HelpCircle },
    { name: 'Contacto', href: '#footer', type: 'scroll', icon: Phone }
  ]

  return (
    <>
      {/* Mobile Header for viewports < 1100px */}
      {windowWidth < 1100 && (
        <motion.header
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
            background: scrolled 
              ? 'rgba(1, 4, 64, 0.75)' 
              : 'linear-gradient(180deg, rgba(1, 4, 64, 0.65) 0%, rgba(1, 4, 64, 0.45) 100%)',
            backdropFilter: 'blur(10px)',
            borderBottom: scrolled ? '1px solid rgba(255, 107, 53, 0.2)' : 'none',
            transition: 'all 0.3s ease'
          }}
        >
          <nav style={{
            padding: '0 20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '60px',
            position: 'relative'
          }}>
            
            {/* Logo */}
            <motion.a
              href="/"
              style={{
                display: 'flex',
                alignItems: 'center',
                textDecoration: 'none',
                color: '#ffffff',
                fontSize: '1.2rem',
                fontWeight: '700',
                gap: '8px',
              }}
              whileHover={{ scale: 1.05 }}
            >
              <Bot size={24} color="#FF6B35" />
              SureWinBot
            </motion.a>

            {/* Hamburger Menu Button */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              style={{
                background: 'none',
                border: 'none',
                color: '#ffffff',
                cursor: 'pointer',
                padding: '8px',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              whileHover={{ backgroundColor: 'rgba(255, 107, 53, 0.1)' }}
              whileTap={{ scale: 0.95 }}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </nav>

          {/* Mobile Menu Overlay */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                style={{
                  background: 'rgba(1, 4, 64, 0.85)',
                  backdropFilter: 'blur(10px)',
                  borderTop: '1px solid rgba(255, 107, 53, 0.2)',
                  maxHeight: 'calc(100vh - 60px)',
                  overflowY: 'auto'
                }}
              >
                <div style={{ padding: '20px' }}>
                  
                  {/* Navegacion Section */}
                  <div style={{ marginBottom: '24px' }}>
                    <h3 style={{
                      color: '#FF6B35',
                      fontSize: '1rem',
                      fontWeight: '600',
                      marginBottom: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}>
                      <Home size={18} />
                      Navegación
                    </h3>
                    {navegacionItems.map((item) => (
                      <button
                        key={item.name}
                        onClick={(e) => {
                          if (item.type === 'scroll') {
                            handleScroll(e, item.href)
                            setIsMobileMenuOpen(false)
                          } else {
                            setIsMobileMenuOpen(false)
                            window.location.href = item.href
                          }
                        }}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '12px',
                          padding: '12px 16px',
                          color: '#ffffff',
                          textDecoration: 'none',
                          fontSize: '0.95rem',
                          borderRadius: '8px',
                          margin: '4px 0',
                          transition: 'all 0.2s ease',
                          background: 'none',
                          border: 'none',
                          cursor: 'pointer',
                          width: '100%',
                          textAlign: 'left'
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.backgroundColor = 'rgba(255, 107, 53, 0.1)'
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.backgroundColor = 'transparent'
                        }}
                      >
                        <item.icon size={16} />
                        {item.name}
                      </button>
                    ))}
                  </div>

                  {/* Herramientas Section */}
                  <div style={{ marginBottom: '24px' }}>
                    <h3 style={{
                      color: '#FF6B35',
                      fontSize: '1rem',
                      fontWeight: '600',
                      marginBottom: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}>
                      <Calculator size={18} />
                      Herramientas
                    </h3>
                    {calculadoraItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '12px',
                          padding: '12px 16px',
                          color: '#ffffff',
                          textDecoration: 'none',
                          fontSize: '0.95rem',
                          borderRadius: '8px',
                          margin: '4px 0',
                          transition: 'all 0.2s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.backgroundColor = 'rgba(255, 107, 53, 0.1)'
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.backgroundColor = 'transparent'
                        }}
                      >
                        <item.icon size={16} />
                        {item.name}
                      </a>
                    ))}
                  </div>

                  {/* Legal Section */}
                  <div style={{ marginBottom: '24px' }}>
                    <h3 style={{
                      color: '#FF6B35',
                      fontSize: '1rem',
                      fontWeight: '600',
                      marginBottom: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}>
                      <Scale size={18} />
                      Legal
                    </h3>
                    {legalItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '12px',
                          padding: '12px 16px',
                          color: '#ffffff',
                          textDecoration: 'none',
                          fontSize: '0.95rem',
                          borderRadius: '8px',
                          margin: '4px 0',
                          transition: 'all 0.2s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.backgroundColor = 'rgba(255, 107, 53, 0.1)'
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.backgroundColor = 'transparent'
                        }}
                      >
                        <item.icon size={16} />
                        {item.name}
                      </a>
                    ))}
                  </div>

                  {/* Contacto Section */}
                  <div style={{ marginBottom: '24px' }}>
                    <h3 style={{
                      color: '#FF6B35',
                      fontSize: '1rem',
                      fontWeight: '600',
                      marginBottom: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}>
                      <Phone size={18} />
                      Contacto
                    </h3>
                    {contactoItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        onClick={(e) => {
                          if (item.type === 'scroll') {
                            handleScroll(e, item.href)
                          }
                          setIsMobileMenuOpen(false)
                        }}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '12px',
                          padding: '12px 16px',
                          color: '#ffffff',
                          textDecoration: 'none',
                          fontSize: '0.95rem',
                          borderRadius: '8px',
                          margin: '4px 0',
                          transition: 'all 0.2s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.backgroundColor = 'rgba(255, 107, 53, 0.1)'
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.backgroundColor = 'transparent'
                        }}
                      >
                        <item.icon size={16} />
                        {item.name}
                      </a>
                    ))}
                  </div>

                  {/* Empezar Ahora Button */}
                  <div style={{ textAlign: 'center', margin: '12px 0' }}>
                    <motion.a
                      href="https://t.me/SureWinSportsBot"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsMobileMenuOpen(false)}
                      style={{
                        display: 'inline-block',
                        textAlign: 'center',
                        textDecoration: 'none',
                        padding: '12px 20px',
                        background: 'linear-gradient(45deg, #FF6B35, #F7931E)',
                        color: '#ffffff',
                        borderRadius: '10px',
                        fontWeight: '600',
                        fontSize: '0.9rem',
                        transition: 'all 0.3s ease',
                      }}
                      whileHover={{ 
                        scale: 1.02,
                        boxShadow: '0 4px 15px rgba(255, 107, 53, 0.4)'
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Empezar Ahora
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.header>
      )}

      {/* Desktop Header for viewports >= 1100px */}
      {windowWidth >= 1100 && (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: scrolled 
          ? 'rgba(1, 4, 64, 0.75)' 
          : 'linear-gradient(180deg, rgba(1, 4, 64, 0.65) 0%, rgba(1, 4, 64, 0.45) 100%)',
        backdropFilter: 'blur(10px)',
        borderBottom: scrolled ? '1px solid rgba(255, 107, 53, 0.2)' : 'none',
        transition: 'all 0.3s ease'
      }}
    >
      <nav style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '70px',
        position: 'relative'
      }}>
        
        {/* Left - Logo and Brand */}
        <motion.a
          href="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
            color: '#ffffff',
            fontSize: '1.8rem',
            fontWeight: '700',
            gap: '10px',
          }}
          whileHover={{ scale: 1.05 }}
        >
          <Bot size={32} color="#FF6B35" />
          SureWinBot
        </motion.a>

        {/* Center - Navigation */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '32px'
        }}>
          
          {/* Navegación Dropdown */}
          <div 
            style={{ position: 'relative' }}
            data-dropdown="navegacion"
          >
            <motion.div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                color: '#ffffff',
                fontSize: '1rem',
                fontWeight: '500',
                cursor: 'pointer',
                transition: 'color 0.3s ease'
              }}
              onClick={() => {
                if (isNavegacionOpen) {
                  closeAllDropdowns()
                } else {
                  toggleDropdown('navegacion')
                }
              }}
              whileHover={{ color: '#FF6B35' }}
            >
              <Home size={16} />
              Navegación
              <ChevronDown 
                size={14} 
                style={{
                  transform: isNavegacionOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.3s ease'
                }} 
              />
            </motion.div>
            
            <AnimatePresence>
              {isNavegacionOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  style={{
                    position: 'absolute',
                    top: '100%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    marginTop: '10px',
                    background: 'rgba(1, 4, 64, 0.8)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '12px',
                    border: '1px solid rgba(255, 107, 53, 0.2)',
                    minWidth: '180px',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
                    zIndex: 9999,
                    overflow: 'hidden'
                  }}
                >
                  {navegacionItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={(e) => {
                        if (item.type === 'scroll') {
                          handleScroll(e, item.href)
                        }
                        setIsNavegacionOpen(false)
                      }}
                      style={{
                        display: 'block',
                        padding: '14px 20px',
                        color: '#ffffff',
                        textDecoration: 'none',
                        fontSize: '0.9rem',
                        borderBottom: navegacionItems.indexOf(item) !== navegacionItems.length - 1 
                          ? '1px solid rgba(255, 255, 255, 0.1)' 
                          : 'none',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = 'rgba(255, 107, 53, 0.15)'
                        e.target.style.color = '#FF6B35'
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = 'transparent'
                        e.target.style.color = '#ffffff'
                      }}
                    >
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                      }}>
                        <item.icon size={16} />
                        {item.name}
                      </div>
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Calculadora Dropdown - Always visible */}
          <div 
            style={{ position: 'relative' }}
            data-dropdown="calculadora"
          >
            <motion.div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                color: '#ffffff',
                fontSize: '1rem',
                fontWeight: '500',
                cursor: 'pointer',
                transition: 'color 0.3s ease'
              }}
              onClick={() => {
                if (isCalculadoraOpen) {
                  closeAllDropdowns()
                } else {
                  toggleDropdown('calculadora')
                }
              }}
              whileHover={{ color: '#FF6B35' }}
            >
              <Calculator size={16} />
              Herramientas
              <ChevronDown 
                size={14} 
                style={{
                  transform: isCalculadoraOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.3s ease'
                }} 
              />
            </motion.div>
            
            <AnimatePresence>
              {isCalculadoraOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  style={{
                    position: 'absolute',
                    top: '100%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    marginTop: '10px',
                    background: 'rgba(1, 4, 64, 0.8)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '12px',
                    border: '1px solid rgba(255, 107, 53, 0.2)',
                    minWidth: '220px',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
                    zIndex: 9999,
                    overflow: 'hidden'
                  }}
                >
                  {calculadoraItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      style={{
                        display: 'block',
                        padding: '14px 20px',
                        color: '#ffffff',
                        textDecoration: 'none',
                        fontSize: '0.9rem',
                        borderBottom: calculadoraItems.indexOf(item) !== calculadoraItems.length - 1 
                          ? '1px solid rgba(255, 255, 255, 0.1)' 
                          : 'none',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = 'rgba(255, 107, 53, 0.15)'
                        e.target.style.color = '#FF6B35'
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = 'transparent'
                        e.target.style.color = '#ffffff'
                      }}
                    >
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                      }}>
                        <item.icon size={16} />
                        {item.name}
                      </div>
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Legal Dropdown - Always visible */}
          <div 
            style={{ position: 'relative' }}
            data-dropdown="legal"
          >
            <motion.div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                color: '#ffffff',
                fontSize: '1rem',
                fontWeight: '500',
                cursor: 'pointer',
                transition: 'color 0.3s ease'
              }}
              onClick={() => {
                if (isLegalOpen) {
                  closeAllDropdowns()
                } else {
                  toggleDropdown('legal')
                }
              }}
              whileHover={{ color: '#FF6B35' }}
            >
              <Scale size={16} />
              Legal
              <ChevronDown 
                size={14} 
                style={{
                  transform: isLegalOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.3s ease'
                }} 
              />
            </motion.div>
            
            <AnimatePresence>
              {isLegalOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  style={{
                    position: 'absolute',
                    top: '100%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    marginTop: '10px',
                    background: 'rgba(1, 4, 64, 0.8)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '12px',
                    border: '1px solid rgba(255, 107, 53, 0.2)',
                    minWidth: '200px',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
                    zIndex: 9999,
                    overflow: 'hidden'
                  }}
                >
                  {legalItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      style={{
                        display: 'block',
                        padding: '14px 20px',
                        color: '#ffffff',
                        textDecoration: 'none',
                        fontSize: '0.9rem',
                        borderBottom: legalItems.indexOf(item) !== legalItems.length - 1 
                          ? '1px solid rgba(255, 255, 255, 0.1)' 
                          : 'none',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = 'rgba(255, 107, 53, 0.15)'
                        e.target.style.color = '#FF6B35'
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = 'transparent'
                        e.target.style.color = '#ffffff'
                      }}
                    >
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                      }}>
                        <item.icon size={16} />
                        {item.name}
                      </div>
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Contacto Dropdown - Always visible */}
          <div 
            style={{ position: 'relative' }}
            data-dropdown="contacto"
          >
            <motion.div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                color: '#ffffff',
                fontSize: '1rem',
                fontWeight: '500',
                cursor: 'pointer',
                transition: 'color 0.3s ease'
              }}
              onClick={() => {
                if (isContactoOpen) {
                  closeAllDropdowns()
                } else {
                  toggleDropdown('contacto')
                }
              }}
              whileHover={{ color: '#FF6B35' }}
            >
              <Phone size={16} />
              Contacto
              <ChevronDown 
                size={14} 
                style={{
                  transform: isContactoOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.3s ease'
                }} 
              />
            </motion.div>
            
            <AnimatePresence>
              {isContactoOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  style={{
                    position: 'absolute',
                    top: '100%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    marginTop: '10px',
                    background: 'rgba(1, 4, 64, 0.8)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '12px',
                    border: '1px solid rgba(255, 107, 53, 0.2)',
                    minWidth: '140px',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
                    zIndex: 9999,
                    overflow: 'hidden'
                  }}
                >
                  {contactoItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={item.type === 'scroll' ? (e) => handleScroll(e, item.href) : null}
                      style={{
                        display: 'block',
                        padding: '14px 20px',
                        color: '#ffffff',
                        textDecoration: 'none',
                        fontSize: '0.9rem',
                        borderBottom: contactoItems.indexOf(item) !== contactoItems.length - 1 
                          ? '1px solid rgba(255, 255, 255, 0.1)' 
                          : 'none',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = 'rgba(255, 107, 53, 0.15)'
                        e.target.style.color = '#FF6B35'
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = 'transparent'
                        e.target.style.color = '#ffffff'
                      }}
                    >
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                      }}>
                        <item.icon size={16} />
                        {item.name}
                      </div>
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Right - CTA Button */}
        <motion.a
          href="https://t.me/SureWinSportsBot"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
          style={{
            textDecoration: 'none',
            padding: '12px 24px',
            background: 'linear-gradient(45deg, #FF6B35, #F7931E)',
            color: '#ffffff',
            borderRadius: '25px',
            fontWeight: '600',
            fontSize: '0.95rem',
            border: 'none',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
          }}
          whileHover={{ 
            scale: 1.05,
            boxShadow: '0 4px 15px rgba(255, 107, 53, 0.4)'
          }}
          whileTap={{ scale: 0.95 }}
        >
          Empezar Ahora
        </motion.a>
      </nav>
    </motion.header>
      )}
    </>
  )
}

export default Header
