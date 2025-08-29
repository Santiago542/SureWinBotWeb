import React, { useEffect, useState, useMemo, useCallback } from 'react'
import { motion } from 'framer-motion'
import { Bot, TrendingUp, Shield, ChevronDown, Zap, Star, Target, Sparkles, Award, DollarSign } from 'lucide-react'

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isMobile, setIsMobile] = useState(false)

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Throttle mouse movement for better performance
  const handleMouseMove = useCallback((e) => {
    requestAnimationFrame(() => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    })
  }, [])

  useEffect(() => {
    let rafId
    const throttledMouseMove = (e) => {
      if (rafId) return
      rafId = requestAnimationFrame(() => {
        handleMouseMove(e)
        rafId = null
      })
    }
    
    window.addEventListener('mousemove', throttledMouseMove, { passive: true })
    return () => {
      window.removeEventListener('mousemove', throttledMouseMove)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [handleMouseMove])

  // Memoize animation variants to prevent re-creation
  const containerVariants = useMemo(() => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  }), [])

  const itemVariants = useMemo(() => ({
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3
      }
    }
  }), [])

  const floatingIconVariants = useMemo(() => ({
    float: {
      y: [-5, 5, -5],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }), [])

  // Reduce particles for better performance
  const particles = useMemo(() => 
    [...Array(8)].map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: `${Math.random() * 3 + 1}px`,
      delay: Math.random() * 2
    }))
  , [])

  return (
    <section className="section section-divider" style={{ 
      minHeight: 'calc(100vh - 50px)', 
      position: 'relative', 
      overflow: isMobile ? 'visible' : 'hidden', 
      display: 'flex', 
      alignItems: 'center', 
      padding: isMobile ? '80px 0 20px 0' : '20px 0 20px 0' 
    }}>
      {/* Reduced animated background elements */}
      <div className="particles">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="particle"
            style={{
              left: particle.left,
              top: particle.top,
              width: particle.size,
              height: particle.size,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.6, 0.2]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: particle.delay
            }}
          />
        ))}
      </div>

      {/* Enhanced floating icons - only show on desktop */}
      {!isMobile && (
        <>
          {/* Original floating icons */}
          <motion.div
            variants={floatingIconVariants}
            animate="float"
            style={{
              position: 'absolute',
              top: '20%',
              left: '10%',
              zIndex: 2
            }}
          >
            <TrendingUp size={30} color="rgba(255, 107, 53, 0.4)" />
          </motion.div>

          <motion.div
            variants={floatingIconVariants}
            animate="float"
            style={{
              position: 'absolute',
              top: '60%',
              right: '15%',
              zIndex: 2,
              animationDelay: '1s'
            }}
          >
            <Shield size={25} color="rgba(255, 107, 53, 0.4)" />
          </motion.div>

          {/* Additional floating elements */}
          <motion.div
            animate={{
              y: [-8, 8, -8],
              rotate: [0, 5, -5, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
            style={{
              position: 'absolute',
              top: '15%',
              right: '20%',
              zIndex: 2
            }}
          >
            <Zap size={24} color="rgba(255, 107, 53, 0.5)" />
          </motion.div>

          <motion.div
            animate={{
              y: [-6, 6, -6],
              x: [-3, 3, -3],
              rotate: [0, 360]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
              delay: 1.5
            }}
            style={{
              position: 'absolute',
              top: '70%',
              left: '8%',
              zIndex: 2
            }}
          >
            <Star size={22} color="rgba(255, 107, 53, 0.3)" />
          </motion.div>

          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
            style={{
              position: 'absolute',
              top: '40%',
              left: '5%',
              zIndex: 2
            }}
          >
            <Target size={20} color="rgba(255, 107, 53, 0.4)" />
          </motion.div>

          <motion.div
            animate={{
              y: [-10, 10, -10],
              rotate: [0, -10, 10, 0]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.8
            }}
            style={{
              position: 'absolute',
              top: '25%',
              right: '8%',
              zIndex: 2
            }}
          >
            <Award size={26} color="rgba(255, 107, 53, 0.4)" />
          </motion.div>

          <motion.div
            animate={{
              y: [-5, 5, -5],
              x: [-2, 2, -2],
              scale: [0.8, 1.1, 0.8]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.2
            }}
            style={{
              position: 'absolute',
              top: '80%',
              right: '25%',
              zIndex: 2
            }}
          >
            <DollarSign size={23} color="rgba(255, 107, 53, 0.4)" />
          </motion.div>

          <motion.div
            animate={{
              rotate: [0, 180, 360],
              scale: [0.9, 1.2, 0.9],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.8
            }}
            style={{
              position: 'absolute',
              top: '50%',
              left: '3%',
              zIndex: 2
            }}
          >
            <Sparkles size={21} color="rgba(255, 107, 53, 0.4)" />
          </motion.div>
        </>
      )}

      <div className="container" style={{ 
        position: 'relative', 
        zIndex: 3, 
        width: '100%', 
        padding: isMobile ? '0px 15px' : '10px 15px' 
      }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Huge SureWin Title */}
          <motion.div variants={itemVariants}>
            <motion.h1 
              style={{
                fontSize: 'clamp(3.5rem, 12vw, 7rem)',
                fontWeight: '900',
                color: '#ffffff',
                textShadow: '0 8px 16px rgba(0,0,0,0.8), 0 4px 8px rgba(1, 4, 64, 0.5), 0 2px 4px rgba(0,0,0,0.6)',
                marginBottom: '15px',
                letterSpacing: '-0.02em',
                lineHeight: '0.9',
                wordBreak: 'break-word',
                filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.7))',
                position: 'relative',
                textAlign: 'center',
                WebkitFontSmoothing: 'antialiased',
                MozOsxFontSmoothing: 'grayscale',
                textRendering: 'optimizeLegibility',
                ...(window.innerWidth <= 768 ? {
                  WebkitTextStroke: 'unset'
                } : {
                  WebkitTextStroke: '0.5px rgba(1, 4, 64, 0.2)'
                })
              }}
              whileHover={{ 
                scale: 1.05,
                textShadow: '0 12px 24px rgba(0,0,0,0.9), 0 6px 12px rgba(1, 4, 64, 0.7), 0 3px 6px rgba(0,0,0,0.8)'
              }}
              animate={{
                textShadow: [
                  '0 8px 16px rgba(0,0,0,0.8), 0 4px 8px rgba(1, 4, 64, 0.5), 0 2px 4px rgba(0,0,0,0.6)',
                  '0 8px 16px rgba(0,0,0,0.8), 0 4px 8px rgba(15, 22, 84, 0.5), 0 2px 4px rgba(0,0,0,0.6)',
                  '0 8px 16px rgba(0,0,0,0.8), 0 4px 8px rgba(26, 28, 106, 0.5), 0 2px 4px rgba(0,0,0,0.6)',
                  '0 8px 16px rgba(0,0,0,0.8), 0 4px 8px rgba(1, 4, 64, 0.5), 0 2px 4px rgba(0,0,0,0.6)'
                ]
              }}
              transition={{ 
                scale: { type: "spring", stiffness: 300, damping: 20 },
                textShadow: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              <span style={{ position: 'relative', display: 'inline-block' }}>
                SureWinBot
                <motion.span
                  style={{
                    position: 'absolute',
                    top: '-5px',
                    right: '-15px',
                    fontSize: '0.3em',
                    background: 'linear-gradient(45deg, #010440, #0f1654)',
                    padding: '2px 6px',
                    borderRadius: '12px',
                    color: '#ffffff',
                    fontWeight: '700',
                    boxShadow: '0 2px 8px rgba(1, 4, 64, 0.4), 0 0 16px rgba(0,0,0,0.8)',
                    border: '1px solid rgba(255,255,255,0.2)'
                  }}
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  PRO
                </motion.span>
              </span>
            </motion.h1>
          </motion.div>

          <motion.div variants={itemVariants}>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              style={{ display: 'inline-block', marginBottom: '15px' }}
            >
              <Bot size={50} color="#FF6B35" />
            </motion.div>
          </motion.div>

          <motion.h1 variants={itemVariants} className="hero-title">
            <span style={{ 
              color: '#ffffff',
              textShadow: '0 2px 4px rgba(0,0,0,0.3)',
              filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))',
              fontWeight: 'bold',
              fontSize: 'clamp(1.6rem, 5vw, 2.4rem)'
            }}>
              Pasa de Apostar a <span style={{ color: '#FF6B35' }}>Invertir</span>
            </span>
          </motion.h1>

          <motion.p variants={itemVariants} className="hero-subtitle">
            <strong>SureWinBot</strong> es el bot de Telegram definitivo que proporciona oportunidades de arbitraje en tiempo real. 
            Obtén ganancias garantizadas con riesgo cero.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '30px' }}
          >
            <motion.a
              href="https://t.me/SureWinSportsBot"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Prueba SureWinBot Ahora
            </motion.a>
            <motion.a
              href="#features"
              className="btn-secondary"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Saber Más
            </motion.a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            style={{ marginBottom: '40px' }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', justifyContent: 'center', maxWidth: '600px', margin: '0 auto' }}>
              <motion.div
                className="glass"
                style={{ 
                  padding: '15px 20px',
                  width: '100%'
                }}
                whileHover={{ scale: 1.02 }}
              >
                <h3 style={{ color: '#ffffff', marginBottom: '8px', fontSize: '1rem' }}>
                  🎯 ¿Por qué pierdes apostando?
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.9)', margin: 0, fontSize: '0.9rem' }}>
                  Las casas tienen ventaja matemática. SureWinBot la elimina con arbitraje.
                </p>
              </motion.div>

              <motion.div
                className="glass"
                style={{ 
                  padding: '15px 20px',
                  width: '100%'
                }}
                whileHover={{ scale: 1.02 }}
              >
                <h3 style={{ color: '#ffffff', marginBottom: '8px', fontSize: '1rem' }}>
                  ⚡ Ganancias garantizadas
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.9)', margin: 0, fontSize: '0.9rem' }}>
                  Cubre todos los resultados. Ganas siempre, sin importar el resultado.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Scroll indicator for mobile */}
          {isMobile && (
            <motion.div
              variants={itemVariants}
              style={{ 
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: '20px'
              }}
            >
              <p style={{ 
                color: 'rgba(255,255,255,0.7)', 
                fontSize: '0.8rem',
                marginBottom: '8px',
                textAlign: 'center'
              }}>
                Desplázate hacia abajo para saber más
              </p>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <ChevronDown size={20} color="rgba(255,255,255,0.7)" />
              </motion.div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
