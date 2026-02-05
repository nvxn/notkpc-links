"use client"

import React from "react"

import { motion } from "framer-motion"
import { FaSpotify, FaInstagram, FaYoutube, FaDiscord, FaEnvelope, FaLink, FaSoundcloud, FaGithub, FaXTwitter, FaTwitch, FaSteam } from "react-icons/fa6"
import { SiKick, SiMixcloud } from "react-icons/si"

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
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
  mail: FaEnvelope,
  github: FaGithub,
  default: FaLink,
}

const iconColorMap: Record<string, string> = {
  instagram: "group-hover:text-[#E4405F]",
  twitter: "group-hover:text-foreground",
  kick: "group-hover:text-[#53FC18]",
  discord: "group-hover:text-[#5865F2]",
  twitch: "group-hover:text-[#9146FF]",
  steam: "group-hover:text-[#66C0F4]",
  youtube: "group-hover:text-[#FF0000]",
  spotify: "group-hover:text-[#1DB954]",
  soundcloud: "group-hover:text-[#FF5500]",
  mixcloud: "group-hover:text-[#5000FF]",
  mail: "group-hover:text-primary",
  github: "group-hover:text-foreground",
  default: "group-hover:text-primary",
}

export function LinkCard({ title, url, icon, index }: LinkCardProps) {
  const IconComponent = iconMap[icon] || iconMap.default
  const colorClass = iconColorMap[icon] || iconColorMap.default

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 + index * 0.08, duration: 0.4 }}
      whileTap={{ scale: 0.98 }}
      className="group relative flex items-center gap-4 w-full px-5 py-4 bg-card border border-border rounded-xl transition-colors duration-200 hover:bg-secondary hover:border-muted"
    >
      <div className={`flex items-center justify-center w-10 h-10 rounded-lg bg-secondary text-muted-foreground transition-colors duration-200 ${colorClass}`}>
        <IconComponent className="w-5 h-5" />
      </div>
      <span className="text-foreground font-medium text-sm sm:text-base flex-1">
        {title}
      </span>
      <svg
        className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </motion.a>
  )
}