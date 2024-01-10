import { BadgeCheck, CircleUserRound, KeyRound, LogOut, LucideBadgePlus, LucideFilm, LucideHeart, LucideHome, LucideMessageCircle, LucideSearch, Pencil } from "lucide-react";

export const leftSidebarItems = [
  {
    icon: LucideHome,
    text: 'Home',
    url: '/'
  }, {
    icon: LucideSearch,
    text: 'Search',
    url: '/explore'
  }, {
    icon: LucideFilm,
    text: 'Snaps',
    url: '/snaps'
  }, {
    icon: LucideMessageCircle,
    text: 'Messages',
    url: '/messages'
  }, {
    icon: LucideHeart,
    text: 'Notifications',
    url: '/notifications'
  }, {
    icon: LucideBadgePlus,
    text: 'Create',
    url: '/create'
  }, {
    icon: CircleUserRound,
    text: 'Profile',
    url: '/profile'
  }
];

export const topbarItems = [
  {
    icon: LucideBadgePlus,
    text: 'Create',
    url: '/create'
  }, {
    icon: LucideHeart,
    text: 'Notifications',
    url: '/notifications'
  }
];

export const bottombarItems = [
  {
    icon: LucideHome,
    text: 'Home',
    url: '/'
  }, {
    icon: LucideSearch,
    text: 'Search',
    url: '/explore'
  }, {
    icon: LucideFilm,
    text: 'Snaps',
    url: '/snaps'
  }, {
    icon: LucideMessageCircle,
    text: 'Messages',
    url: '/messages'
  }, {
    icon: CircleUserRound,
    text: 'Profile',
    url: '/profile'
  }
];

export const settingItems = [
  {
    icon: Pencil,
    text: 'Edit Profile',
    url: '/settings/profile'
  }, {
    icon: KeyRound,
    text: 'Change Password',
    url: '/settings/change-password'
  }, {
    icon: BadgeCheck,
    text: 'Get Verified',
    url: '/settings/verification'
  }, {
    icon: LogOut,
    text: 'Sign Out',
    url: '/sign-out'
  }
]