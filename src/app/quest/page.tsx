'use client'

import React, { useState } from 'react'

import QuestBox from '@/src/app/_components/Quest/QuestBox'

const QuestPage: React.FC = () => {
  const [quests, setQuests] = useState<{ title: string; context: string }[]>([])
  const [showAddForm, setShowAddForm] = useState<boolean>(false)
  const [newQuestTitle, setNewQuestTitle] = useState<string>('')
  const [newQuestContext, setNewQuestContext] = useState<string>('')

  const handleAddQuest = () => {
    if (newQuestTitle.trim() !== '' && newQuestContext.trim() !== '') {
      setQuests([...quests, { title: newQuestTitle, context: newQuestContext }])
      setNewQuestTitle('')
      setNewQuestContext('')
      setShowAddForm(false) // Hide the form after adding quest
    }
  }

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-32 bg-gray-200 p-4">
        {/* Sidebar Content */}
        <h2 className="text-xl font-semibold mb-4">Sidebar</h2>
        {/* Add more sidebar content as needed */}
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-8 overflow-y-auto">
        <h1 className="text-3xl font-bold mb-8">My Quests</h1>

        {/* Plus Button */}
        {!showAddForm && (
          <button
            onClick={() => setShowAddForm(true)}
            className="px-4 py-2 bg-blue-500 text-white rounded-md mb-4 focus:outline-none hover:bg-blue-600">
            Add Quest
          </button>
        )}

        {/* Add Quest Form */}
        {showAddForm && (
          <div className="mb-8">
            <input
              type="text"
              value={newQuestTitle}
              onChange={(e) => setNewQuestTitle(e.target.value)}
              placeholder="Enter quest title..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md mb-2 focus:outline-none"
            />
            <textarea
              value={newQuestContext}
              onChange={(e) => setNewQuestContext(e.target.value)}
              placeholder="Enter quest context..."
              className="w-full h-32 px-4 py-2 border border-gray-300 rounded-md focus:outline-none resize-none"></textarea>
            <div className="flex mt-2">
              <button
                onClick={handleAddQuest}
                className="px-4 py-2 bg-blue-500 text-white rounded-md mr-2 focus:outline-none hover:bg-blue-600">
                Add
              </button>
              <button
                onClick={() => setShowAddForm(false)}
                className="px-4 py-2 bg-gray-500 text-white rounded-md focus:outline-none hover:bg-gray-600">
                Cancel
              </button>
            </div>
          </div>
        )}

        {/* Display Quest Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {quests.map((quest, index) => (
            <QuestBox key={index} title={quest.title} context={quest.context} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default QuestPage
