import React from 'react';
import '../styles/Home.css';  // スタイリング用の CSS ファイル
import UpdateHistory from '../components/UpdateHistory';
// JSON ファイルからデータをインポート（本来は非同期処理で行う）
// import homeData from './homeData.json';

const Home: React.FC = () => {
  // ここではデモ用に直接データを代入
  const homeData = {
    "intro": "こんにちは、私は卜部柊人です。こちらは私のポートフォリオサイトです。",
    "highlights": [

    ],

  };

  return (
    <div className="home-container">
      <h1>Welcome to My Portfolio</h1>
      <p>{homeData.intro}</p>
      <ul className="highlight-list">
        {homeData.highlights.map((highlight, index) => (
          <li key={index}>{highlight}</li>
        ))}
      </ul>
      {/* 更新履歴を追加 */}
      <UpdateHistory />
      <div className="home-links">

      </div>
    </div>
  );
};

export default Home;