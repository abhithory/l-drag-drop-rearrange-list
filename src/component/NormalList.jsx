import React, { useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion';

export default function NormalList() {
  const initialItems = [" 1.Tomato", "2.Cucumber", "3.Cheese", " 4.Lettuce"];


  const dragItem = useRef(null);
  const dragOverItem = useRef(null);

  const [items, setItems] = useState(initialItems);




  const onDragEnd = () => {
    const _items = [...items];

    const draggedItem = _items.splice(dragItem.current, 1)[0];
    _items.splice(dragOverItem.current, 0, draggedItem)

    dragItem.current = null;
    dragOverItem.current = null;

    setItems(_items)

  }


  return (
    <div className="box-container">
      <h1>Normal list</h1>
      {items.map((item, i) => (
          <div className="drag-box"
            draggable
            // drag="y"
            onDragStart={(e) => dragItem.current = i}
            onDragEnter={(e) => dragOverItem.current = i}
            onDragEnd={onDragEnd}
          >
            {item}
          </div>
          ))
      }
        </div >
      )
}
