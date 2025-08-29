import React, { useMemo } from 'react'
import { motion } from 'framer-motion'
import { MessageCircle, Search, DollarSign, Repeat, Settings } from 'lucide-react'

const HowItWorks = () => {
  const steps = useMemo(() => [
    {
      icon: MessageCircle,
      number: "01",
      title: "Conecta con Telegram",
      description: "Simplemente inicia nuestro bot en Telegram - sin instalación de software complejo."
    },
    {
      icon: Settings,
      number: "02", 
      title: "Configura el Bot",
      description: "Establece tus casas de apuestas, deportes favoritos, filtros personalizados y alertas en tiempo real."
    },
    {
      icon: Search,
      number: "03",
      title: "Busca Apuestas Estratégicas",
      description: "Busca Surebets o Valuebets con nuestro Bot y comienza a generar ganancias seguras."
    },
    {
      icon: DollarSign,
      number: "04",
      title: "Recoge las Ganancias",
      description: "Observa cómo tus retornos garantizados se acumulan con cada ciclo de arbitraje completado."
    },
    {
			icon: Repeat,
			number: "05",
			title: "Repite la Estrategia",
			description: "Vuelve a buscar nuevas oportunidades de arbitraje y repite el proceso."
    }
  ], [])

  const containerVariants = useMemo(() => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }), [])

  const stepVariants = useMemo(() => ({
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4
      }
    }
  }), [])

  return (
    <section className="section section-divider section-overlay">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="section-title">Cómo Funciona SureWinBot</h2>
          <p className="section-subtitle">
            Genera ganancias garantizadas en solo 5 pasos simples
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          style={{ maxWidth: '800px', margin: '0 auto' }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={stepVariants}
              className="glass"
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '25px',
                marginBottom: '20px',
                textAlign: 'left'
              }}
              whileHover={{ 
                scale: 1.01,
                transition: { duration: 0.2 }
              }}
            >
              <motion.div
                style={{
                  minWidth: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  background: 'linear-gradient(45deg, #FF6B35, #F7931E)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '20px',
                  position: 'relative'
                }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
              >
                <step.icon size={25} color="#ffffff" />
                <div
                  style={{
                    position: 'absolute',
                    top: '-8px',
                    right: '-8px',
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    background: '#ffffff',
                    color: '#FF6B35',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '10px',
                    fontWeight: 'bold'
                  }}
                >
                  {step.number}
                </div>
              </motion.div>

              <div style={{ flex: 1 }}>
                <h3 style={{ 
                  color: '#ffffff', 
                  fontSize: '1.3rem', 
                  marginBottom: '8px',
                  fontWeight: '600'
                }}>
                  {step.title}
                </h3>
                <p style={{ 
                  color: 'rgba(255,255,255,0.9)', 
                  fontSize: '0.95rem',
                  lineHeight: 1.5,
                  margin: 0
                }}>
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          style={{ marginTop: '40px', textAlign: 'center' }}
        >
          <div className="glass" style={{ padding: '25px', display: 'inline-block' }}>
            <h3 style={{ color: '#ffffff', fontSize: '1.3rem', marginBottom: '12px' }}>
              ⚡ ¿Listo para Empezar?
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.9)', marginBottom: '20px', fontSize: '0.95rem' }}>
              Únete a SureWinBot hoy y comienza tu viaje de ganancias garantizadas
            </p>
            <motion.a
              href="https://t.me/SureWinSportsBot"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Comenzar Ahora
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HowItWorks
