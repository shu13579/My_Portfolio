import React from 'react';
import '../styles/Education.css'; // スタイルファイルをインポート

const Education = () => {
  const educationData = [
    {
      date: "2019年3月",
      institution: "さいたま市立浦和高等学校",
      description: "卒業"
    },
    {
      date: "2020年4月",
      institution: "東京工業大学情報理工学院",
      description: "入学"
    },
    {
      date: "2021年4月",
      institution: "東京工業大学情報理工学院情報工学系",
      description: "進学"
    },
    {
      date: "2024年3月",
      institution: "東京工業大学情報理工学院情報工学系",
      description: "卒業"
    },
    {
      date: "2024年4月",
      institution: "東京工業大学大学院情報理工学院情報工学系知能情報コース",
      description: "修士課程 入学"
    },
    {
      date: "2026年3月",
      institution: "東京工業大学大学院情報理工学院情報工学系知能情報コース",
      description: "修士課程 修了予定"
    }
  ];

  return (
    <div className="education">
      <h2>経歴</h2>
      <div className="timeline">
        {educationData.map((item, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-date">{item.date}</div>
            <div className="timeline-content">
              <p>{item.institution} - {item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;
