import React, { useState } from 'react';
import '../styles/TestPage.css';

interface DiaryEntry {
  date: string;
  title: string;
  content: string;
}

const Test: React.FC = () => {
  const [diaryEntries, setDiaryEntries] = useState<DiaryEntry[]>([]);
  const [newEntry, setNewEntry] = useState<DiaryEntry>({ date: '', title: '', content: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setDiaryEntries([...diaryEntries, newEntry]);
    setNewEntry({ date: '', title: '', content: '' });
  };

  return (
    <div>
      <h1>ここはテストページです。</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="date"
          value={newEntry.date}
          onChange={(e) => setNewEntry({ ...newEntry, date: e.target.value })}
        />
        <input
          type="text"
          value={newEntry.title}
          placeholder="タイトル"
          onChange={(e) => setNewEntry({ ...newEntry, title: e.target.value })}
        />
        <textarea
          value={newEntry.content}
          placeholder="日記の内容"
          onChange={(e) => setNewEntry({ ...newEntry, content: e.target.value })}
        />
        <button type="submit">追加</button>
      </form>
      <section>
        {diaryEntries.map((entry, index) => (
          <div key={index}>
            <h2>{entry.title} ({entry.date})</h2>
            <p>{entry.content}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Test;