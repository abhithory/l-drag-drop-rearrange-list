import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, Reorder } from 'framer-motion';


export default function NewTry() {
    const initialItems = [" 1.Tomato", "2.Cucumber", "3.Cheese", " 4.Lettuce"];


    const dragItem = useRef(null);
    const dragOverItem = useRef(null);

    const [items, setItems] = useState(initialItems);

    const [dragItemIndex, setDragItemIndex] = useState(null);
    const [dragOverItemIndex, setDragOverItemIndex] = useState(null);


    const onDragEnd = () => {
        // if (dragItem.current === null || dragOverItem.current === null) return;
        dragItem.current = null;
        dragOverItem.current = null;
        setItems(items)

    }



    const onDragStart = (e, i) => {
        // console.log("onDragStart", i);

        setDragItemIndex(i)
        // dragItem.current = i;
    }

    const onDragEnter = (e, i) => {
        if (i === dragOverItem.current) return
        e.preventDefault()
        console.log("onDragEnter", i);
        console.log("onDragStart", dragItemIndex);
        // setDragOverItemIndex(i)
        // dragOverItem.current = i;
        onDragEnterChange(i)
    }

    const onDragEnterChange = (i) => {
        console.log("onDragStart", dragItemIndex);
        console.log("onDragEnter", i);
        // if (!dragItem.current || !dragOverItem.current) return;
        const _items = [...items];
        const draggedItem = _items.splice(dragItemIndex, 1)[0];
        _items.splice(i, 0, draggedItem)
        setDragItemIndex(i)
        // dragItem.current = dragOverItem.current;
        // dragOverItem.current = null;
        setItems(_items)
    }

    return (
        <div >
            <h1>New Try</h1>

            <Reorder.Group drag="y" values={items} onReorder={() => { }} as="div" className="box-container">
                {items.map((item, i) => (
                    <Reorder.Item
                        key={item}
                        value={item}
                        id={item}
                        // dragListener={false}
                        // className="drag-box"
                        as="div"
                    >
                        <div
                            className={dragItem.current === i ? "" : "drag-box"}
                            draggable
                            // key={i}
                            onDragStart={(e) => onDragStart(e, i)}
                            onDragEnter={(e) => onDragEnter(e, i)}
                            onDragEnd={onDragEnd}
                            onDragOver={(e) => e.preventDefault()}
                        >
                            {item}
                        </div>
                    </Reorder.Item>
                ))}
            </Reorder.Group>
        </div>
    );
}


