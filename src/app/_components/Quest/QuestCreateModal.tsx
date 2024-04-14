import React, { useState } from 'react'

interface QuestBoxProps {
  handleAddQuest: (type: string, title: string, content: string) => void
  handleCloseCreateQuest: React.MouseEventHandler<HTMLButtonElement>
}

const QuestCreateModal: React.FC<QuestBoxProps> = ({ handleAddQuest, handleCloseCreateQuest }) => {
  const [title, setTitle] = useState<string>('')
  const [content, setContent] = useState<string>('')
  const [type, setType] = useState<string>('기본')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (title.trim() !== '' && content.trim() !== '') {
      handleAddQuest(type, title, content)
      setType('기본')
      setTitle('')
      setContent('')
    }
  }

  return (
    <div
      id="authentication-modal"
      aria-hidden="true"
      className="ml-64 overflow-y-auto fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
      <div className="relative p-4 w-full max-w-md max-h-full">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">일일 퀘스트 생성</h3>
            <button
              type="button"
              className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="authentication-modal"
              onClick={handleCloseCreateQuest}>
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
            </button>
          </div>
          <div className="p-4 md:p-5">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="questType" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  타입
                </label>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="default"
                    name="questType"
                    value="default"
                    checked={type === '기본'}
                    onChange={() => setType('기본')}
                    className="mr-2"
                  />
                  <label htmlFor="daily" className="mr-4">
                    기본
                  </label>
                  <input
                    type="radio"
                    id="repeat"
                    name="questType"
                    value="repeat"
                    checked={type === '반복'}
                    onChange={() => setType('반복')}
                    className="mr-2"
                  />
                  <label htmlFor="weekly">반복</label>
                </div>
              </div>
              <div>
                <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  제목
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  required
                />
              </div>
              <div>
                <label htmlFor="content" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  메모
                </label>
                <textarea
                  id="content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  rows={4}
                />
              </div>
              <button
                type="submit"
                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                생성
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuestCreateModal
