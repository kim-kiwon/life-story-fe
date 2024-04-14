'use client'

import React, { useState } from 'react'

import QuestBox from '@/src/app/_components/Quest/QuestBox'
import QuestCreateButton from '@/src/app/_components/Quest/QuestCreateButton'
import QuestCreateModal from '@/src/app/_components/Quest/QuestCreateModal'

const QuestPage: React.FC = () => {
  const [quests, setQuests] = useState<{ type: string; title: string; content: string }[]>([])
  // const [newQuestTitle, setNewQuestTitle] = useState<string>('')
  // const [newQuestContext, setNewQuestContext] = useState<string>('')
  const [showCreateQuestModal, setShowCreateQuestModal] = useState<boolean>(false)

  const handleAddQuest = (type: string, title: string, content: string) => {
    if (title.trim() !== '' && content.trim() !== '') {
      setQuests([...quests, { type, title, content }])
      setShowCreateQuestModal(false)
    }
  }

  const handleOpenCreateQuest = () => {
    setShowCreateQuestModal(true)
  }

  const handleCloseCreateQuest = () => {
    setShowCreateQuestModal(false)
  }

  return (
    <div className="flex h-screen">
      <div className="ml-64 flex-1 p-8 overflow-y-auto">
        <h1 className="text-3xl font-bold mb-8">퀘스트 목록</h1>
        <QuestCreateButton onClick={handleOpenCreateQuest} />
        {showCreateQuestModal && (
          <QuestCreateModal handleAddQuest={handleAddQuest} handleCloseCreateQuest={handleCloseCreateQuest} />
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {quests.map((quest, index) => (
            <QuestBox key={index} type={quest.type} title={quest.title} context={quest.content} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default QuestPage
