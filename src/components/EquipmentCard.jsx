import React from 'react';
import './EquipmentCard.less'; // 引入样式文件

const EquipmentCard = ({ img, title, description }) => {
  return (
    <div className="equipment-card">
      <img src={img} alt={title} />
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
};

export default EquipmentCard; 