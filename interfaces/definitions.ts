interface LinkCardProps {
  title: string
  url: string
  icon: string
  index: number
}

interface Link {
  id: number
  title: string
  url: string
  icon: string
}

interface Social {
  platform: string
  url: string
}

interface Profile {
  name: string
  tagline: string
  location: string
  avatar: string
  verified?: boolean
}

interface LinktreeData {
  profile: Profile
  links: Link[]
  socials: Social[]
}

interface LinktreePageProps {
  data: LinktreeData
}

interface ProfileHeaderProps {
  name: string
  tagline: string
  location: string
  avatar: string
  verified?: boolean
}

interface Social {
  platform: string
  url: string
}

interface SocialBarProps {
  socials: Social[]
}