import { CircleUserRound, LucideBadgePlus, LucideBell, LucideFilm, LucideHome, LucideMessageCircle, LucideSearch } from "lucide-react";

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
    icon: LucideBell,
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

export const leftSidebarMoreItems = [
  {
    key: 1,
    icon: LucideBadgePlus,
    text: 'Create',
    url: '/create'
  }, {
    key: 2,
    icon: LucideBadgePlus,
    text: 'Create',
    url: '/create'
  }
]
