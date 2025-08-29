import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Bot, ArrowLeft, HelpCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

const FAQ = () => {
  const [openItems, setOpenItems] = useState({})

  const toggleItem = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }))
  }

  const faqData = [
    {
      question: "¿Qué es SureWinBot y cómo funciona?",
      answer: "SureWinBot es un bot de Telegram avanzado que encuentra oportunidades de arbitraje deportivo en tiempo real. Analiza múltiples casas de apuestas simultáneamente para identificar diferencias de cuotas que garantizan ganancias sin importar el resultado del evento."
    },
    {
      question: "¿Realmente puedo ganar dinero sin riesgo?",
      answer: "Sí, el arbitraje deportivo es una técnica matemática que aprovecha las diferencias de cuotas entre casas de apuestas. Al apostar en todos los resultados posibles en diferentes casas, garantizas una ganancia del 2-8% independientemente del resultado. SureWinBot automatiza la búsqueda de estas oportunidades."
    },
    {
      question: "¿Cuánto dinero necesito para empezar?",
      answer: "Recomendamos comenzar con al menos €500-1000 para tener suficiente capital distribuido entre diferentes casas de apuestas. Con menos capital también es posible, pero las ganancias serán proporcionalmente menores. La versión gratuita te permite probar el sistema sin compromiso."
    },
    {
      question: "¿Qué casas de apuestas cubre SureWinBot?",
      answer: "SureWinBot monitorea más de 30 casas de apuestas principales incluyendo Bet365, William Hill, Betfair, 1xBet, Betway, y muchas más. Cubrimos eventos de fútbol, tenis, baloncesto, hockey y otros deportes populares."
    },
    {
      question: "¿Con qué frecuencia encuentro oportunidades?",
      answer: "Los usuarios premium reciben entre 50-150 oportunidades diarias dependiendo de la época del año y eventos deportivos. Durante temporadas altas (ligas principales, torneos) hay más oportunidades disponibles."
    },
    {
      question: "¿Es legal el arbitraje deportivo?",
      answer: "Sí, el arbitraje deportivo es completamente legal. Es una estrategia de inversión legítima que aprovecha ineficiencias del mercado. Sin embargo, algunas casas de apuestas pueden limitar cuentas que identifican como arbitrajistas, por lo que recomendamos diversificar entre múltiples operadores."
    },
    {
      question: "¿Necesito conocimientos técnicos para usar SureWinBot?",
      answer: "No, SureWinBot está diseñado para ser extremadamente fácil de usar. Solo necesitas abrir Telegram, iniciar el bot y seguir las instrucciones. Te enviamos alertas claras con todos los detalles: casas de apuestas, cuotas, cantidades exactas a apostar."
    },
    {
      question: "¿Qué diferencia hay entre la versión gratuita y premium?",
      answer: "La versión gratuita te permite probar 3-5 oportunidades diarias con retraso de 30 minutos. Premium ofrece acceso inmediato a todas las oportunidades, filtros avanzados, calculadora integrada y soporte prioritario. Premium Mensual incluye análisis de valor y alertas personalizadas."
    },
    {
      question: "¿Puedo usar SureWinBot desde cualquier país?",
      answer: "SureWinBot funciona globalmente, pero la disponibilidad de casas de apuestas varía por región. El bot se adapta automáticamente a tu ubicación y muestra solo las casas de apuestas accesibles en tu área geográfica."
    },
    {
      question: "¿Qué pasa si una casa de apuestas cambia las cuotas mientras apuesto?",
      answer: "Las cuotas pueden cambiar rápidamente. SureWinBot incluye alertas de tiempo real y recomendamos apostar primero en la cuota más alta o menos estable. Si una cuota cambia antes de completar el arbitraje, el bot te notifica inmediatamente."
    },
    {
      question: "¿Ofrecen soporte al cliente?",
      answer: "Sí, ofrecemos soporte completo vía Telegram y email. Los usuarios premium tienen acceso a soporte prioritario con respuesta en menos de 2 horas. También tenemos una comunidad activa de usuarios que comparten estrategias y consejos."
    },
    {
      question: "¿Puedo cancelar mi suscripción en cualquier momento?",
      answer: "Absolutamente. No hay contratos a largo plazo. Puedes cancelar tu suscripción en cualquier momento y seguirás teniendo acceso hasta el final del período pagado. Los pagos se procesan de forma segura a través de Stripe."
    }
  ]

  return (
    <div style={{ 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #010440 0%, #0f1654 50%, #1a1a6a 100%)',
      color: '#ffffff',
      padding: '100px 0 50px 0'
    }}>
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '50px' }}
        >
          <Link 
            to="/" 
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '8px',
              color: '#FF6B35', 
              textDecoration: 'none',
              marginBottom: '20px',
              fontSize: '1.1rem',
              fontWeight: '500'
            }}
          >
            <ArrowLeft size={20} />
            Volver al Inicio
          </Link>
          
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
            <HelpCircle size={50} color="#FF6B35" style={{ marginRight: '15px' }} />
            <h1 style={{ 
              fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
              fontWeight: '700',
              margin: 0,
              background: 'linear-gradient(45deg, #FF6B35, #F7931E)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Preguntas Frecuentes
            </h1>
          </div>
          
          <p style={{ 
            fontSize: '1.2rem', 
            color: 'rgba(255,255,255,0.8)',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: 1.6
          }}>
            Encuentra respuestas a las preguntas más comunes sobre SureWinBot y el arbitraje deportivo
          </p>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ maxWidth: '800px', margin: '0 auto' }}
        >
          {faqData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="glass"
              style={{ 
                marginBottom: '20px',
                border: '1px solid rgba(255, 107, 53, 0.2)',
                borderRadius: '15px',
                overflow: 'hidden'
              }}
            >
              <motion.button
                onClick={() => toggleItem(index)}
                style={{
                  width: '100%',
                  padding: '25px 30px',
                  background: 'none',
                  border: 'none',
                  color: '#ffffff',
                  textAlign: 'left',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  transition: 'all 0.3s ease'
                }}
                whileHover={{ backgroundColor: 'rgba(255, 107, 53, 0.05)' }}
              >
                <span style={{ flex: 1, paddingRight: '20px' }}>
                  {item.question}
                </span>
                <motion.div
                  animate={{ 
                    rotate: openItems[index] ? 180 : 0 
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown size={24} color="#FF6B35" />
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {openItems[index] && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ overflow: 'hidden' }}
                  >
                    <div style={{
                      padding: '0 30px 25px 30px',
                      borderTop: '1px solid rgba(255, 107, 53, 0.1)',
                      backgroundColor: 'rgba(255, 107, 53, 0.02)'
                    }}>
                      <p style={{ 
                        color: 'rgba(255,255,255,0.9)',
                        lineHeight: 1.6,
                        margin: '20px 0 0 0',
                        fontSize: '1rem'
                      }}>
                        {item.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass"
          style={{
            textAlign: 'center',
            padding: '40px 30px',
            marginTop: '50px',
            maxWidth: '600px',
            margin: '50px auto 0 auto',
            border: '1px solid rgba(255, 107, 53, 0.2)'
          }}
        >
          <h3 style={{ 
            color: '#FF6B35', 
            fontSize: '1.5rem', 
            marginBottom: '15px',
            fontWeight: '600'
          }}>
            ¿No encuentras lo que buscas?
          </h3>
          <p style={{ 
            color: 'rgba(255,255,255,0.8)', 
            marginBottom: '25px',
            lineHeight: 1.6
          }}>
            Nuestro equipo está aquí para ayudarte. Contáctanos directamente para resolver cualquier duda específica.
          </p>
          <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <motion.a
              href="https://t.me/SureWinSportsBot"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Contactar por Telegram
            </motion.a>
            <motion.a
              href="mailto:support@surewinbot.com"
              className="btn-secondary"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Enviar Email
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default FAQ
