import SideLink from '@/src/app/_components/Sidebar/SideLink'

export default function Sidebar() {
  return (
    <>
      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar">
        <div className="flex flex-col items-center h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <div className="py-10 text-center h-1/4 space-y-1.5 dark:text-white">
            <p className="text-xl">김기원</p>
            <p className="text-sm">Lv. 1</p>
            <p className="text-sm">10 / 10000</p>
            <p className="text-sm">0 / 9 (일일 퀘스트)</p>
          </div>
          <SideLink />
        </div>
      </aside>
    </>
  )
}
