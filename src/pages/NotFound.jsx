import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Bot, Home } from 'lucide-react'

const NotFound = () => {
  const [countdown, setCountdown] = useState(5)

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          window.location.href = '/'
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="animated-gradient" style={{ 
      minHeight: '100vh',
      color: '#ffffff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ textAlign: 'center', maxWidth: '600px' }}
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          style={{ marginBottom: '30px' }}
        >
          <Bot size={80} color="#FF6B35" />
        </motion.div>

        <h1 style={{ 
          fontSize: 'clamp(3rem, 8vw, 6rem)', 
          fontWeight: '900', 
          marginBottom: '20px',
          textShadow: '0 4px 8px rgba(0,0,0,0.3)'
        }}>
          404
        </h1>

        <h2 style={{ 
          fontSize: '2rem', 
          fontWeight: '700', 
          marginBottom: '20px',
          color: 'rgba(255,255,255,0.9)'
        }}>
          Página No Encontrada
        </h2>

        <div className="glass" style={{ padding: '30px', marginBottom: '30px' }}>
          <p style={{ fontSize: '1.2rem', lineHeight: 1.6, marginBottom: '20px' }}>
            Oops! La página que estás buscando no existe.
          </p>
          <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.8)' }}>
            Redirigiendo a la página de inicio en <span style={{ 
              color: '#FF6B35', 
              fontWeight: 'bold',
              fontSize: '1.2rem' 
            }}>{countdown}</span> segundos...
          </p>
        </div>

        <motion.a
          href="/"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            background: 'linear-gradient(45deg, #FF6B35, #F7931E)',
            color: '#ffffff',
            padding: '15px 30px',
            borderRadius: '25px',
            textDecoration: 'none',
            fontSize: '1.1rem',
            fontWeight: '600',
            gap: '10px'
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Home size={20} />
          Ir a Inicio
        </motion.a>

        <div style={{ marginTop: '40px' }}>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>
            ¿Necesitas ayuda? Contáctanos en Telegram: 
            <a 
              href="https://t.me/SureWinSportsBot" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: '#FF6B35', textDecoration: 'none', marginLeft: '5px' }}
            >
              @SureWinBot
            </a>
          </p>
        </div>
      </motion.div>
    </div>
  )
}

export default NotFound
