import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, Reorder } from 'framer-motion';


export default function DragDrapList() {
    const initialItems = [{ value: " 1.Tomato", id:"1" }, { value: "2.Cucumber",id:"2" }, { value: "3.Cheese",id:"3" }, { value: " 4.Lettuce",id:"4" }];

    const [items, setItems] = useState(initialItems);

    const [dragItemIndex, setDragItemIndex] = useState(null);


    const onDragEnd = (e) => {
        setDragItemIndex(null)
        e.target.classList.remove("drag-box-hidden");
    }
    const onDragStart = (e, i) => {
        setDragItemIndex(i);
        setTimeout(() => {
            e.target.classList.add("drag-box-hidden");
        }, 0);
    }

    const onDragEnter = (e, i) => {
        if (dragItemIndex === null) return;
        console.log('====================================');
        console.log("onDragStart", dragItemIndex);
        console.log("onDragEnter", i);
        console.log('====================================');
        const _items = [...items];
        const draggedItem = _items.splice(dragItemIndex, 1)[0];
        _items.splice(i, 0, draggedItem)
        setDragItemIndex(i)
        setItems(_items)
    }

    return (
        <div className="">
            <h1>DragDrapList</h1>

            <Reorder.Group drag="y" values={[]} onReorder={() => { }} as="div" className="box-container">
                {items.map((item, i) => (
                    <Reorder.Item
                        key={item.id}
                        as='span'
                    >
                        <div
                            className="drag-box"
                            draggable
                            onDragStart={(e) => onDragStart(e, i)}
                            onDragEnter={(e) => onDragEnter(e, i)}
                            onDragEnd={onDragEnd}
                            onDragOver={(e) => e.preventDefault()}
                        >
                            {item.value}
                        </div>
                    </Reorder.Item>
                ))}
            </Reorder.Group>
        </div>
    );
}


