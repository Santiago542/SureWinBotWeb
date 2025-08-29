import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Bot, Mail, MessageCircle, AlertTriangle, HelpCircle } from 'lucide-react'

const Footer = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [isVerySmall, setIsVerySmall] = useState(false)

  useEffect(() => {
    const checkViewport = () => {
      setIsMobile(window.innerWidth <= 480)
      setIsVerySmall(window.innerWidth <= 360)
    }
    
    checkViewport()
    window.addEventListener('resize', checkViewport)
    return () => window.removeEventListener('resize', checkViewport)
  }, [])
  return (
    <footer id="footer" style={{ 
      background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
      color: '#ffffff',
      padding: '60px 0 20px 0'
    }}>
      <div className="container">
        {/* Company Info - Moved to top */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          style={{ 
            textAlign: 'center',
            marginBottom: '50px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
            <Bot size={40} color="#FF6B35" style={{ marginRight: '15px' }} />
            <h3 style={{ fontSize: '2rem', fontWeight: '700', margin: 0 }}>
              SureWinBot
            </h3>
          </div>
          <p style={{ 
            color: 'rgba(255,255,255,0.9)', 
            lineHeight: 1.6,
            marginBottom: '20px',
            fontSize: '1.1rem',
            maxWidth: '600px',
            margin: '0 auto 20px auto'
          }}>
            El bot de Telegram definitivo para ganancias garantizadas de arbitraje. 
            Convierte las apuestas en inversión con nuestros software avanzado.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '30px',
            marginBottom: '40px'
          }}
        >
          {/* Legal Sections */}
          <motion.a 
            href="/privacy-policy" 
            style={{ textDecoration: 'none', color: 'inherit' }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div className="glass" style={{ padding: '20px', cursor: 'pointer', transition: 'all 0.3s ease' }}>
                          <h4 style={{ fontSize: '1.3rem', marginBottom: '12px', color: '#FF6B35', fontWeight: '600' }}>
              Política de Privacidad
            </h4>
              <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.4, fontSize: '0.85rem' }}>
                Respetamos tu privacidad. Los datos personales se usan solo para la gestión del servicio y nunca se comparten con terceros. 
                Cumplimos con las regulaciones actuales de protección de datos.
              </p>
            </div>
          </motion.a>

          <motion.a 
            href="/terms-of-service" 
            style={{ textDecoration: 'none', color: 'inherit' }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div className="glass" style={{ padding: '20px', cursor: 'pointer', transition: 'all 0.3s ease' }}>
                          <h4 style={{ fontSize: '1.3rem', marginBottom: '12px', color: '#FF6B35', fontWeight: '600' }}>
              Términos de Servicio
            </h4>
              <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.4, fontSize: '0.85rem' }}>
                Usar SureWinBot implica aceptar nuestros términos. El bot proporciona información de oportunidades de apuestas pero no garantiza resultados. 
                Los usuarios son responsables de sus decisiones.
              </p>
            </div>
          </motion.a>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="glass"
          style={{ padding: '25px', textAlign: 'center', marginBottom: '30px' }}
        >
          <h4 style={{ fontSize: '1.2rem', marginBottom: '15px' }}>
            ¿Necesitas Ayuda o Tienes Preguntas?
          </h4>
          <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '20px', fontSize: '0.9rem' }}>
            Ponte en contacto con nuestro equipo de soporte. Estamos aquí para ayudarte a aprovechar al máximo SureWinBot.
          </p>
          <div style={{ 
            display: 'flex', 
            gap: isMobile ? '6px' : '10px', 
            justifyContent: 'center', 
            flexWrap: 'nowrap',
            flexDirection: isVerySmall ? 'column' : 'row'
          }}>
            <motion.a
              href="/faq"
              className="btn-secondary"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '6px',
                fontSize: isMobile ? '0.8rem' : '0.9rem',
                padding: isMobile ? '8px 12px' : '10px 16px',
                whiteSpace: 'nowrap',
                justifyContent: 'center',
                flex: isVerySmall ? '1' : 'none'
              }}
            >
              <HelpCircle size={16} />
              FAQ
            </motion.a>
            <motion.a
              href="https://t.me/SureWinSportsBot"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '6px',
                fontSize: isMobile ? '0.8rem' : '0.9rem',
                padding: isMobile ? '8px 12px' : '10px 16px',
                whiteSpace: 'nowrap',
                justifyContent: 'center',
                flex: isVerySmall ? '1' : 'none'
              }}
            >
              <MessageCircle size={16} />
              Telegram
            </motion.a>
            <motion.a
              href="mailto:support@surewinbot.com"
              className="btn-secondary"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '6px',
                fontSize: isMobile ? '0.8rem' : '0.9rem',
                padding: isMobile ? '8px 12px' : '10px 16px',
                whiteSpace: 'nowrap',
                justifyContent: 'center',
                flex: isVerySmall ? '1' : 'none'
              }}
            >
              <Mail size={16} />
              Email
            </motion.a>
          </div>
        </motion.div>

        {/* Gambling Disclaimer */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          style={{
            textAlign: 'center',
            padding: '30px 20px',
            background: 'rgba(255, 107, 53, 0.1)',
            borderRadius: '12px',
            border: '1px solid rgba(255, 107, 53, 0.2)',
            marginBottom: '30px',
            maxWidth: '800px',
            margin: '0 auto 30px auto'
          }}
        >
          <h4 style={{ 
            color: '#FF6B35', 
            fontSize: '1.1rem', 
            fontWeight: '600',
            marginBottom: '15px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px'
          }}>
            <AlertTriangle size={20} color="#FF6B35" />
            Aviso Importante
          </h4>
          <p style={{ 
            color: 'rgba(255, 255, 255, 0.9)', 
            fontSize: '0.95rem',
            lineHeight: 1.6,
            margin: '0 0 15px 0'
          }}>
            <strong>Apuesta con responsabilidad.</strong> El juego puede ser adictivo.
            Si sientes que tienes problemas con el juego, busca ayuda profesional.
          </p>
          <div style={{ 
            display: 'flex', 
            gap: '20px', 
            justifyContent: 'center',
            flexWrap: 'wrap',
            fontSize: '0.9rem'
          }}>
            <a 
              href="https://fejar.org/" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ 
                color: '#FF6B35', 
                textDecoration: 'none',
                fontWeight: '500',
                transition: 'opacity 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.opacity = '0.8'}
              onMouseLeave={(e) => e.target.style.opacity = '1'}
            >
              fejar.org
            </a>
            <a 
              href="https://www.begambleaware.org" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ 
                color: '#FF6B35', 
                textDecoration: 'none',
                fontWeight: '500',
                transition: 'opacity 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.opacity = '0.8'}
              onMouseLeave={(e) => e.target.style.opacity = '1'}
            >
              BeGambleAware.org
            </a>
            <a
              href="https://www.selae.es/es/web-corporativa/responsabilidad-social/gestion-responsable-del-juego/proteccion-a-menores"
              style={{
                color: '#FF6B35',
                textDecoration: 'none',
                fontWeight: '500',
                transition: 'opacity 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.opacity = '0.8'}
              onMouseLeave={(e) => e.target.style.opacity = '1'}
            >
              +18 años
            </a>
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          style={{
            textAlign: 'center',
            paddingTop: '20px',
            borderTop: '1px solid rgba(255,255,255,0.1)'
          }}
        >
          <p style={{ color: 'rgba(255,255,255,0.6)', margin: 0, fontSize: '0.85rem' }}>
            © 2025 SureWin. Todos los derechos reservados. SureWinBot - Tu Software de Arbitraje Deportivo.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
