export type PlatformSize = {
  id: string
  label: string
  platform: string
  width: number
  height: number
}

export const PLATFORM_SIZES: PlatformSize[] = [
  {
    id: 'ig-post',
    label: 'منشور إنستغرام',
    platform: 'Instagram',
    width: 1080,
    height: 1080,
  },
  {
    id: 'ig-story',
    label: 'ستوري إنستغرام',
    platform: 'Instagram',
    width: 1080,
    height: 1920,
  },
  {
    id: 'x-header',
    label: 'غلاف X',
    platform: 'X (Twitter)',
    width: 1500,
    height: 500,
  },
  {
    id: 'linkedin-cover',
    label: 'غلاف LinkedIn',
    platform: 'LinkedIn',
    width: 1584,
    height: 396,
  },
]
