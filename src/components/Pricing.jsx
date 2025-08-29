import React from 'react'
import { motion } from 'framer-motion'
import { Check, Star, Crown, Gift, Zap } from 'lucide-react'

const Pricing = () => {
  // Function to get tier icon based on plan name
  const getTierIcon = (planName) => {
    switch (planName) {
      case 'Gratuito':
        return <Gift size={40} color="#ffffff" />;
      case 'VIP Semanal':
        return <Zap size={40} color="#ffffff" />;
      case 'VIP Mensual':
        return <Crown size={40} color="#ffffff" />;
      default:
        return <Star size={40} color="#ffffff" />;
    }
  };

  const plans = [
    {
      name: "Gratuito",
      price: "€0",
      period: "/mes",
      description: "Perfecto para principiantes",
      features: [
        "Surebets & Valuebets FREE",
        "Créditos para apuestas VIP",
        "Calculadora de ganancias",
        "Soporte por Telegram",
      ],
      popular: false
    },
    {
      name: "VIP Semanal",
      price: "€9",
      period: "/semana", 
      description: "Estupendo para probar",
      features: [
        "Surebets & Valuebets FREE",
        "Apuestas VIP ilimitadas",
        "Limpiador de Freebets",
        "ChatBot de IA",
        "Filtros avanzados",
        "Alertas en tiempo real",
        "Soporte prioritario",
      ],
      popular: true
    },
    {
      name: "VIP Mensual",
      price: "€29",
      period: "/mes",
      description: "Para inversores serios",
      features: [
        "Un 20% más barato",
        "Surebets & Valuebets FREE",
        "Apuestas VIP ilimitadas",
        "Limpiador de Freebets",
        "ChatBot de IA",
        "Filtros avanzados",
        "Alertas en tiempo real",
        "Soporte prioritario",
      ],
      popular: false
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section className="section section-overlay">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Elige tu plan</h2>
          <p className="section-subtitle">
            Comienza a generar ganancias garantizadas con SureWinBot hoy
          </p>
        </motion.div>

        <motion.div
          className="features-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ maxWidth: '1100px', margin: '0 auto' }}
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="glass"
              style={{
                padding: '50px 35px',
                textAlign: 'center',
                position: 'relative',
                border: plan.popular ? '3px solid #FF6B35' : '1px solid rgba(255,255,255,0.18)',
                transform: plan.popular ? 'scale(1.1)' : 'scale(1)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '580px'
              }}
              whileHover={{ 
                scale: plan.popular ? 1.07 : 1.02,
                transition: { duration: 0.2 }
              }}
            >
              {plan.popular && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  style={{
                    position: 'absolute',
                    top: '-20px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'linear-gradient(45deg, #FF6B35, #F7931E)',
                    color: '#ffffff',
                    padding: '8px 20px',
                    borderRadius: '25px',
                    fontSize: '11px',
                    fontWeight: 'bold',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    boxShadow: '0 4px 15px rgba(255, 107, 53, 0.4)',
                    border: '2px solid rgba(255, 255, 255, 0.2)',
                    whiteSpace: 'nowrap'
                  }}
                >
                  <Star size={12} />
                  MOST POPULAR
                </motion.div>
              )}

              <div style={{ 
                marginBottom: '35px', 
                paddingTop: plan.popular && window.innerWidth <= 768 ? '25px' : '10px' 
              }}>
              {plan.name === 'Enterprise' ? (
                <Crown size={40} color="#FF6B35" style={{ marginBottom: '15px' }} />
              ) : (
                <div
                  style={{
                    width: '70px',
                    height: '70px',
                    margin: '0 auto 15px',
                    borderRadius: '50%',
                    background: 'linear-gradient(45deg, #FF6B35, #F7931E)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff',
                    fontSize: '1.8rem',
                    fontWeight: 'bold',
                    boxShadow: '0 8px 25px rgba(255, 107, 53, 0.3)',
                    border: '3px solid rgba(255, 255, 255, 0.2)'
                  }}
                >
                  {getTierIcon(plan.name)}
                </div>
              )}
                
                <h3 style={{ 
                  color: '#ffffff', 
                  fontSize: '1.8rem', 
                  marginBottom: '5px',
                  fontWeight: '600'
                }}>
                  {plan.name}
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1rem' }}>
                  {plan.description}
                </p>
              </div>

              <div style={{ marginBottom: '30px' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: '5px' }}>
                  <span style={{ 
                    color: '#ffffff', 
                    fontSize: '3rem', 
                    fontWeight: '700'
                  }}>
                    {plan.price}
                  </span>
                  <span style={{ 
                    color: 'rgba(255,255,255,0.7)', 
                    fontSize: '1.2rem'
                  }}>
                    {plan.period}
                  </span>
                </div>
              </div>

              <ul style={{ 
                listStyle: 'none', 
                padding: 0, 
                marginBottom: '40px',
                textAlign: 'left',
                flex: 1
              }}>
                {plan.features.map((feature, featureIndex) => (
                  <motion.li
                    key={featureIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: featureIndex * 0.1 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      marginBottom: '12px',
                      color: 'rgba(255,255,255,0.9)'
                    }}
                  >
                    <Check size={20} color="#FF6B35" style={{
                      padding: '2px',
                      backgroundColor: 'rgba(255, 107, 53, 0.1)',
                      borderRadius: '50%',
                      border: '1px solid rgba(255, 107, 53, 0.3)'
                    }} />
                    {feature}
                  </motion.li>
                ))}
              </ul>

              <motion.a
                href="https://t.me/SureWinSportsBot"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ 
                  width: '100%',
                  background: 'linear-gradient(45deg, #FF6B35, #F7931E)',
                  marginTop: 'auto',
                  fontSize: '16px',
                  fontWeight: '700',
                  padding: '15px 24px',
                  boxShadow: '0 8px 25px rgba(255, 107, 53, 0.4)',
                  border: '2px solid rgba(255, 255, 255, 0.2)',
                }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 12px 35px rgba(255, 107, 53, 0.6)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                Empieza ahora
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Pricing
