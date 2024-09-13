import React from 'react'

function ChatToFilePage( {
     params: { id},
    }: {
        params: {
            id: String
        }
    }) {
  return (
    <div>
      CharRoFilePage : {id}
    </div>
  )
}

export default ChatToFilePage
