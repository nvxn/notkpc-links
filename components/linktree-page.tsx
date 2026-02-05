"use client"

import { ProfileHeader } from "./profile-header"
import { LinkCard } from "./link-card"
import { SocialBar } from "./social-bar"
import { ThemeToggle } from "./theme-toggle"

export function LinktreePage({ data }: LinktreePageProps) {
  const { profile, links, socials } = data

  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-4 py-12 sm:py-16 relative">
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
        <ThemeToggle />
      </div>

      <div className="w-full max-w-md mx-auto">
        <ProfileHeader
          name={profile.name}
          tagline={profile.tagline}
          location={profile.location}
          avatar={profile.avatar}
          verified={profile.verified}
        />

        <div className="mt-10 space-y-3">
          {links.map((link, index) => (
            <LinkCard
              key={link.id}
              title={link.title}
              url={link.url}
              icon={link.icon}
              index={index}
            />
          ))}
        </div>

        <div className="mt-10">
          <SocialBar socials={socials} />
        </div>

        <footer className="mt-12 text-center">
          <p className="text-xs text-muted-foreground">
            Powered by{" "}
            <span className="text-primary font-medium">notkpc.</span>
          </p>
        </footer>
      </div>
    </main>
  )
}
