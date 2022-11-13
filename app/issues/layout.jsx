import React from 'react';
import IssuesList from './IssueList'

export default function IssuesLayout({children}) {
  return (
    <div>
        <aside>
            <IssuesList issues={[]} />
        </aside>
        {children}
    </div>
  )
}
