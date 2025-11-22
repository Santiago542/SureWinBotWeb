import React, { useMemo } from 'react'
import { motion } from 'framer-motion'
import { Target, Clock, Shield, TrendingUp, Bot, Zap } from 'lucide-react'

const Features = () => {
  const features = useMemo(() => [
    {
      icon: Target,
      title: "Arbitraje Garantizado",
      description: "Certeza matemática con oportunidades de arbitraje que aseguran ganancias sin importar el resultado."
    },
    {
      icon: Clock,
      title: "Alertas en Tiempo Real",
      description: "Notificaciones instantáneas vía Telegram cuando se detecten oportunidades rentables en múltiples casas de apuestas."
    },
    {
      icon: Shield,
      title: "Riesgo Cero",
      description: "Cubre todos los resultados posibles para garantizar ganancias. Sin apuestas, solo inversión inteligente y matemática."
    },
    {
      icon: TrendingUp,
      title: "Altos Retornos",
      description: "Genera ganancias consistentes con retornos que típicamente van del 2% al 15% por oportunidad."
    },
    {
      icon: Bot,
      title: "Potenciado por IA",
      description: "Algoritmos avanzados escanean miles de mercados de apuestas 24/7 para encontrar las mejores oportunidades."
    },
    {
      icon: Zap,
      title: "Súper Rápido",
      description: "Recibe notificaciones en segundos cuando aparezcan oportunidades, dándote la ventaja competitiva."
    }
  ], [])

  const containerVariants = useMemo(() => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
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

  return (
    <section id="features" className="section section-divider section-overlay">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="section-title">¿Por qué elegir SureWinBot?</h2>
          <p className="section-subtitle">
            Experimenta el poder del arbitraje deportivo con nuestro bot de Telegram de vanguardia
          </p>
        </motion.div>

        <motion.div
          className="features-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="feature-card glass"
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              <motion.div
                className="feature-icon"
                whileHover={{ 
                  rotate: 360,
                  transition: { duration: 0.5 }
                }}
              >
                <feature.icon size={35} />
              </motion.div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          style={{ marginTop: '60px' }}
        >
          <div className="glass" style={{ padding: '30px', maxWidth: '700px', margin: '0 auto' }}>
            <h3 style={{ color: '#ffffff', fontSize: '1.6rem', marginBottom: '15px' }}>
              🚀 Pruébalo de forma gratuita
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1rem', lineHeight: 1.5 }}>
              Genera <strong style={{ color: '#FF6B35' }}>ganancias mensuales</strong> usando SureWinBot. 
              Comienza tu viaje de inversión sin riesgos hoy con el bot de arbitraje más avanzado disponible.
            </p>
            <motion.a
              href="https://t.me/SurebetWinningBot"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ marginTop: '20px' }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Comienza a Generar Ganancias Ahora
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Features
