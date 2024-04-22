import { initialItems } from "../lib/constants";
import { useState } from "react";




function ItemList() {
    const [items, setItems] = useState(initialItems);

    return (
        <ul>
            {
                items.map(item => {
                    return <Item key={item.id} item={item} />;
                })
            }
        </ul>
    );
}

function Item( { item } ) {
    return <li className="item">
                <label >
                <input  type="checkbox" />
                {item.name}
                </label>
                <button>❌</button>
            </li>
}

export default (ItemList, Item);