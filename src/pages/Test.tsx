import React, { useState, useEffect } from 'react';
import '../styles/Test.css';  // CSSファイルのインポート
import diaryEntriesData from '../assets/diaryEntries.json';

interface DiaryEntry {
  date: string;
  title: string;
  content: string;
}

const Test: React.FC = () => {
  const [diaryEntries, setDiaryEntries] = useState<DiaryEntry[]>([]);

  useEffect(() => {
    setDiaryEntries(diaryEntriesData);
  }, []);

  return (
    <div className="container">  {/* CSSクラス名を直接使用 */}
      <h1>ここはテストページです。</h1>
      <section className="section">
        {diaryEntries.map((entry, index) => (
          <div key={index} className="sectionDiv">
            <h2 className="sectionH2">{entry.title} ({entry.date})</h2>
            <p className="sectionP">{entry.content}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Test;
