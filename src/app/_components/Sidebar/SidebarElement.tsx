import { SidebarInfo } from '@/src/app/_components/Sidebar/Sidebar'

export default function SidebarElement({ name, link, svgPath }: SidebarInfo) {
  return (
    <li>
      <a
        href={link}
        className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
        <svg
          className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2.5"
          stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d={svgPath} />
        </svg>
        <span className="ms-3">{name}</span>
      </a>
    </li>
  )
}
