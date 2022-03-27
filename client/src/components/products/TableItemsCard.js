import React from 'react'
import ModalImage from "react-modal-image";
import { useDispatch } from 'react-redux';


const TableItemsCard = ({ p }) => {

    const colors = ["Black", "White", "Silver", "Grey", "Blue"]

    const dispatch = useDispatch()



    //to update the color in local storage
    const handleColorChange = (e) => {
        console.log("Now the Color ==>", e);
        let cart = []
        if (typeof window !== undefined) {
            if (localStorage.getItem("cart")) {
                cart = JSON.parse(localStorage.getItem("cart"))
            }
            cart.map((product, i) => {
                if (product._id === p._id) {
                    cart[i].color = e.target.value
                }
            })
            localStorage.setItem("cart", JSON.stringify(cart))
            dispatch({
                type: "ADD_TO_CART",
                payload: cart
            })
        }
    }



    return (
        <tbody>
            <tr>
                <td>
                    <div style={{ width: "100px", hight: "auto" }}> {p.images.length ? (<ModalImage small={p.images[1].url} large={p.images[1].url} />) : ("No Image")} </div>
                </td>
                <td>{p.title}</td>
                <td>{p.price}</td>
                <td>{p.brand}</td>
                <td>
                    <select
                        name="color"
                        onChange={handleColorChange}
                        className="form-control"
                    >
                        {p.color ? (<option value={p.color}>{p.color}</option>)
                            :
                            (<option>Select Color</option>)
                        }

                        {colors.filter((c) => c !== p.color).map((c) => <option key={c} value={c}>{c}</option>)}

                    </select>
                </td>
                <td>{p.count}</td>
                <td>Shipping Icon</td>
                <td>Rmove</td>
            </tr>
        </tbody>
    )
}

export default TableItemsCard