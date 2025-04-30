import React from "react";
import "./NotFound.css"; // 引入CSS文件

export default function NotFoundPage() {
  const handleBackHome = () => {
    window.location.href = "/";
  };

  return (
    <div className="not-found-container">
      <h1 className="not-found-title">404</h1>
      <p className="not-found-message">页面未找到</p>
      <button className="not-found-button" onClick={handleBackHome}>
        返回首页
      </button>
    </div>
  );
}
