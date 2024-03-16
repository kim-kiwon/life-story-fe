import { SidebarInfo } from '@/src/app/_components/Sidebar/Sidebar'

export default function SidebarElement({ name, link, svg }: SidebarInfo) {
  return (
    <li>
      <a
        href={link}
        className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
        {svg}
        <span className="ms-3">{name}</span>
      </a>
    </li>
  )
}
