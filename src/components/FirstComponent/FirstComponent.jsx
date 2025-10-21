import React from "react";
import './FirstComponent.css';

const lines = ["Первая строка", "Вторая строка", "Третья строка"];

class FirstComponent extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {lines.map((line, index) => (
            <li key={index}>{line}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default FirstComponent;
