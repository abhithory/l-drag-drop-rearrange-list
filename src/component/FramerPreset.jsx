import React, { useState } from 'react'
import { Reorder, AnimatePresence } from "framer-motion"

export default function FramerPreset() {
    const initialItems = [" Tomato", "Cucumber", "Cheese", " Lettuce"];

    const [items, setItems] = useState(initialItems);

    return (
        <div className="box-container">
            <h1>animate presence</h1>
            <Reorder.Group values={items} onReorder={()=>{}}>

                <AnimatePresence>
                    {items.map(item => (
                        <Reorder.Item
                        key={item}
                        value={item}
                        id={item}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                                                        className="drag-box">
                                {item}
                            </Reorder.Item>
                    ))}
                </AnimatePresence>
            </Reorder.Group>

        </div>
    )
}
