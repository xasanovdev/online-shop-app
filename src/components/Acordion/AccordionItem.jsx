import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
export default function AccordionItem({ accordion }) {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <>
      <div key={accordion.key} className="accordion__item">
        <div className="accordion__header">
          <h2 className="accordion__header-title">{accordion.question}</h2>

          <p className={`accordion__header-button ${isOpened ? 'active' : ''}`}>
            {isOpened ? (
              <RemoveIcon onClick={() => setIsOpened(!isOpened)} />
            ) : (
              <AddIcon onClick={() => setIsOpened(!isOpened)} />
            )}
          </p>
        </div>
        <div className={`accordion__body ${isOpened ? 'active' : ''}`}>
          <p className="accordion__body-text">{accordion.answer}</p>
        </div>
      </div>
    </>
  );
}
