import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

// Hook to detect mobile devices
export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return isMobile
}

// Optimized motion component for mobile
export const MobileOptimizedMotion = ({ children, reducedMotion = false, ...props }) => {
  const isMobile = useIsMobile()
  
  // Reduce animations on mobile for better performance
  const optimizedProps = isMobile ? {
    ...props,
    transition: {
      ...props.transition,
      duration: (props.transition?.duration || 0.5) * 0.7, // Faster animations
      ease: 'easeOut'
    },
    // Disable complex animations on mobile if reducedMotion is true
    ...(reducedMotion && {
      initial: props.animate,
      animate: props.animate,
      whileHover: undefined,
      whileTap: undefined
    })
  } : props

  return <motion.div {...optimizedProps}>{children}</motion.div>
}

// Lazy loading component for images
export const LazyImage = ({ src, alt, className, style, ...props }) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById(`lazy-${src}`)
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [src])

  return (
    <div 
      id={`lazy-${src}`}
      className={className}
      style={{
        ...style,
        background: !isLoaded ? 'linear-gradient(90deg, #f0f0f0 25%, transparent 37%, #f0f0f0 63%)' : 'none',
        backgroundSize: '400% 100%',
        animation: !isLoaded ? 'skeleton-loading 1.5s ease-in-out infinite' : 'none'
      }}
    >
      {isInView && (
        <img
          src={src}
          alt={alt}
          onLoad={() => setIsLoaded(true)}
          style={{
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 0.3s ease',
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
          {...props}
        />
      )}
    </div>
  )
}

// Mobile performance tips component
const MobilePerformanceTips = () => {
  const isMobile = useIsMobile()
  const [showTips, setShowTips] = useState(false)

  if (!isMobile) return null

  return (
    <div style={{
      position: 'fixed',
      top: '10px',
      left: '10px',
      zIndex: 9999
    }}>
      <button
        onClick={() => setShowTips(!showTips)}
        style={{
          background: '#f093fb',
          color: '#ffffff',
          border: 'none',
          borderRadius: '50%',
          width: '40px',
          height: '40px',
          fontSize: '16px',
          cursor: 'pointer'
        }}
      >
        📱
      </button>
      
      {showTips && (
        <div style={{
          position: 'absolute',
          top: '50px',
          left: '0',
          background: 'rgba(0,0,0,0.9)',
          color: '#ffffff',
          padding: '15px',
          borderRadius: '8px',
          width: '280px',
          fontSize: '12px'
        }}>
          <h4 style={{ margin: '0 0 10px 0', color: '#f093fb' }}>📱 Mobile Performance Tips</h4>
          <ul style={{ margin: 0, paddingLeft: '15px' }}>
            <li>Enable "Reduce Motion" in device settings for better performance</li>
            <li>Close other browser tabs to free up memory</li>
            <li>Use WiFi instead of cellular data for faster loading</li>
            <li>Clear browser cache if experiencing slow loading</li>
          </ul>
          <button
            onClick={() => setShowTips(false)}
            style={{
              background: '#667eea',
              color: '#ffffff',
              border: 'none',
              borderRadius: '4px',
              padding: '5px 10px',
              marginTop: '10px',
              fontSize: '10px'
            }}
          >
            Close
          </button>
        </div>
      )}
    </div>
  )
}

export default MobilePerformanceTips
