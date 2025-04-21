"use client"

import { useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Text, useGLTF, Environment } from "@react-three/drei"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Gamepad2 } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"
import { useTranslation } from "@/lib/i18n"
import type * as THREE from "three"

function Model(props: any) {
  const { scene } = useGLTF("/assets/3d/duck.glb")
  const ref = useRef<THREE.Group>(null!)

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    ref.current.rotation.y = Math.sin(t / 2) / 4
    ref.current.position.y = (1 + Math.sin(t / 1.5)) / 5
  })

  return <primitive ref={ref} object={scene} scale={1.5} {...props} />
}

export default function Hero() {
  const isMobile = useMobile()
  const containerRef = useRef<HTMLDivElement>(null)
  const { t } = useTranslation()

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return

      const { left, top, width, height } = containerRef.current.getBoundingClientRect()
      const x = (e.clientX - left) / width - 0.5
      const y = (e.clientY - top) / height - 0.5

      containerRef.current.style.transform = `perspective(1000px) rotateY(${x * 5}deg) rotateX(${-y * 5}deg)`
    }

    const container = containerRef.current
    if (container && !isMobile) {
      container.addEventListener("mousemove", handleMouseMove as any)
    }

    return () => {
      if (container && !isMobile) {
        container.removeEventListener("mousemove", handleMouseMove as any)
      }
    }
  }, [isMobile])

  return (
    <section id="home" className="min-h-screen pt-24 relative overflow-hidden">
      <div className="container mx-auto px-4 h-full flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center lg:text-left z-10"
        >
          <div className="inline-block bg-blue-500/10 px-3 py-1 rounded-full text-blue-500 font-medium text-sm mb-4">
            <Gamepad2 className="inline-block mr-1 h-4 w-4" /> {t("hero.adventureMode")}
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            {t("hero.greeting")}{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-400">
              Kauan Eiras
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-muted-foreground">{t("hero.role")}</h2>
          <p className="text-lg mb-8 max-w-xl">{t("hero.description")}</p>
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600"
            >
              {t("hero.downloadCV")}
            </Button>
            <Button size="lg" variant="outline">
              <Github className="mr-2 h-4 w-4" /> GitHub
            </Button>
            <Button size="lg" variant="outline">
              <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
            </Button>
          </div>
        </motion.div>

        <motion.div
          ref={containerRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex-1 h-[400px] lg:h-[600px] w-full max-w-[500px] transition-transform duration-200 ease-out flex items-start"
          style={{ transformStyle: "preserve-3d" }}
        >
          <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <pointLight position={[-10, -10, -10]} />
            <Model position={[0, 0, 0]} /> 
            <Environment preset="city" />
            <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0} />
          </Canvas>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <a href="#about" aria-label="Scroll down">
          <ArrowDown className="h-8 w-8 text-muted-foreground" />
        </a>
      </motion.div>
    </section>
  )
}
