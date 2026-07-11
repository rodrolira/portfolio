import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Stars } from '@react-three/drei'
import * as THREE from 'three'

const PARTICLES_COUNT = 300
const particlePositions = (() => {
  const positions = new Float32Array(PARTICLES_COUNT * 3)
  for (let i = 0; i < PARTICLES_COUNT * 3; i += 3) {
    positions[i] = (Math.random() - 0.5) * 10
    positions[i + 1] = (Math.random() - 0.5) * 6
    positions[i + 2] = (Math.random() - 0.5) * 8
  }
  return positions
})()

/**
 * Geometría central sutil (wireframe)
 */
const FloatingGeometry = () => {
  const meshRef = useRef<THREE.Mesh>(null!)

  // Rotación lenta en cada frame
  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.1
      meshRef.current.rotation.y += delta * 0.15
    }
  })

  // Geometría de icosaedro con detalle bajo para pocos polígonos
  const geometry = new THREE.IcosahedronGeometry(1.5, 1)

  return (
    <mesh ref={meshRef} geometry={geometry}>
      <meshBasicMaterial color="#1E90FF" wireframe transparent opacity={0.15} />
    </mesh>
  )
}

/**
 * Partículas de fondo personalizadas con movimiento suave
 */
const ParticleField = () => {
  const pointsRef = useRef<THREE.Points>(null!)

  const particlesCount = PARTICLES_COUNT
  const positions = particlePositions

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.02
    }
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={particlesCount}
          itemSize={3}
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#00FFFF"
        size={0.03}
        sizeAttenuation
        transparent
        opacity={0.6}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  )
}

/**
 * Escena completa
 */
export const Scene3D = () => {
  return (
    <Canvas
      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
      camera={{ position: [0, 0, 5], fov: 60, near: 0.1, far: 20 }}
      dpr={[1, 1.5]} // Limita la densidad de píxeles para mejorar rendimiento
      gl={{ antialias: false, powerPreference: 'high-performance' }}
    >
      {/* Iluminación ambiental sin sombras */}
      <ambientLight intensity={0.3} />

      {/* Componentes de la escena */}
      <FloatingGeometry />
      <ParticleField />

      {/* También podemos usar el componente Stars de Drei para más partículas */}
      <Stars radius={5} depth={10} count={200} factor={4} saturation={0} fade speed={0.5} />
    </Canvas>
  )
}
