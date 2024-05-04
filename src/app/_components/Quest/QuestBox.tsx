import React from 'react'

interface QuestBoxProps {
  isCompleted: boolean
  repetition: string
  type: string
  title: string
  context: string
}

const QuestBox: React.FC<QuestBoxProps> = ({ isCompleted, repetition, type, title, context }) => {
  return (
    <div className="p-4 border border-gray-300 rounded-md shadow-md mb-4">
      <h3 className="text-lg font-thin">{isCompleted ? '완료' : '진행중'}</h3>
      <h3 className="text-lg font-thin">{repetition}</h3>
      <h3 className="text-lg font-thin">{type}</h3>
      <h3 className="text-lg font-medium">{title}</h3>
      <p className="text-gray-600 mt-2">{context}</p>
    </div>
  )
}

export default QuestBox
