import React from 'react';
import '../styles/UpdateHistory.css';

type Update = {
  date: string;
  description: string;
};

const UpdateHistory: React.FC = () => {
  const updates: Update[] = [
    { date: '2023-11-29', description: 'Github Pagesで公開しました。' },
    { date: '2023-11-17', description: '機能を追加しました。' },
    { date: '2023-10-06', description: 'ウェブサイトの作成を開始しました。' }
  ];

  return (
    <div className="update-history-container">
      <h2>Update History</h2>
      {updates.map((update, index) => (
        <div key={index} className="update-history-item">
          <span className="update-date">{update.date}:</span>
          <span className="update-description">{update.description}</span>
        </div>
      ))}
    </div>
  );
};

export default UpdateHistory;