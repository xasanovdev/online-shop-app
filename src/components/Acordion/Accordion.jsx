import React, { useState } from 'react';
import AccordionItem from './AccordionItem';
import { questionsData } from './questions';

export default function Accordion() {

  return (
    <div className="accordion">
      <div className="accordion__content">
        {questionsData.map((accordion) => (
          <AccordionItem
            key={accordion.id}
            accordion={accordion}
          />
        ))}
      </div>
    </div>
  );
}
