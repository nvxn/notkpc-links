"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { BadgeCheck } from "lucide-react"

export function ProfileHeader({ name, tagline, location, avatar, verified }: ProfileHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center text-center"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.4 }}
        className="relative mb-6"
      >
        <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden bg-card border border-border">
          <Image
            src={avatar || "/placeholder.svg"}
            alt={name}
            width={112}
            height={112}
            className="w-full h-full object-cover"
            priority
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        className="flex items-center gap-2 mb-3 justify-center"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-foreground">
          {name}
        </h1>
        
        {verified && (
          <BadgeCheck 
            className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500 fill-blue-500/10 shrink-0" 
            aria-label="Verified Account"
          />
        )}
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.4 }}
        className="text-sm sm:text-base text-primary font-medium mb-2"
      >
        {tagline}
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.4 }}
        className="text-sm text-muted-foreground"
      >
        {location}
      </motion.p>
    </motion.div>
  )
}