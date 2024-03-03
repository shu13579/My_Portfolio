import React from 'react';
import '../styles/About.css';

const About: React.FC = () => {
  return (
    <div className="about">
      <h1>About Me</h1>
      <p>こんにちは、私の名前は卜部柊人です。東京工業大学情報理工学院情報工学系の4年生です。</p>

      <h2>現在の焦点</h2>
      <p>現在は、エンジニアインターンでのWebアプリケーションの開発や個人開発によるコーディングスキルの向上、基本情報技術者の資格取得に向けた学習、英語学習に注力しています。</p>

      <p>このサイトでは、私の経験やプロジェクトを共有したいと思っています。ご興味があれば、ぜひ私のスキルセットページもご覧ください。</p>
    </div>
  );
};

export default About;
