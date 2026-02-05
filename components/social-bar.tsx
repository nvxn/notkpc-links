"use client"

import React from "react"

import { motion } from "framer-motion"
import { FaXTwitter, FaYoutube, FaInstagram, FaSpotify, FaGithub, FaSoundcloud, FaDiscord, FaTwitch, FaSteam, FaEnvelope } from "react-icons/fa6"
import { SiKick, SiMixcloud } from "react-icons/si"

const socialIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  instagram: FaInstagram,
  twitter: FaXTwitter,
  kick: SiKick,
  discord: FaDiscord,
  twitch: FaTwitch,
  steam: FaSteam,
  youtube: FaYoutube,
  spotify: FaSpotify,
  soundcloud: FaSoundcloud,
  mixcloud: SiMixcloud,
  contact: FaEnvelope,
  github: FaGithub,
}

const socialColorMap: Record<string, string> = {
  instagram: "hover:text-white hover:bg-gradient-to-br hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#F77737]",
  twitter: "hover:text-white hover:bg-black",
  kick: "hover:text-black hover:bg-[#53FC18]",
  discord: "hover:text-white hover:bg-[#5865F2]",
  twitch: "hover:text-white hover:bg-[#9146FF]",
  steam: "hover:text-white hover:bg-[#171A21]",
  youtube: "hover:text-white hover:bg-[#FF0000]",
  spotify: "hover:text-white hover:bg-[#1DB954]",
  soundcloud: "hover:text-white hover:bg-[#FF5500]",
  mixcloud: "hover:text-white hover:bg-[#5000FF]",
  contact: "hover:text-white hover:bg-primary",
  github: "hover:text-white hover:bg-[#333]",
}

export function SocialBar({ socials }: SocialBarProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.4 }}
      className="flex items-center justify-center gap-3"
    >
      {socials.map((social, index) => {
        const IconComponent = socialIconMap[social.platform]
        const colorClass = socialColorMap[social.platform] || "hover:text-foreground hover:bg-secondary"
        
        return (
          <motion.a
            key={social.platform}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 + index * 0.1, duration: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-border bg-card text-muted-foreground transition-all duration-300 ${colorClass}`}
            aria-label={`Visit ${social.platform}`}
          >
            {IconComponent && <IconComponent className="w-5 h-5" />}
          </motion.a>
        )
      })}
    </motion.div>
  )
}
