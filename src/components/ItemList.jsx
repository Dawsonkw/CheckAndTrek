import { initialItems } from "../lib/constants";
import { useState } from "react";




export default function ItemList({ items, handleDeleteItem, handleToggleItem }) {

    return (
        <ul>
            {
                items.map(item => {
                    return <Item key={item.id} item={item} handleDeleteItem={handleDeleteItem} handleToggleItem={handleToggleItem} />;
                })
            }
        </ul>
    );
}

function Item({ item, handleDeleteItem, handleToggleItem }) {
    return <li className="item">
                <label onChange={() => handleToggleItem(item.id)}>
                <input checked={item.packed}  type="checkbox" />
                {item.name}    
                </label>
                <button onClick={() => handleDeleteItem(item.id)}>❌</button>
            </li>
}

