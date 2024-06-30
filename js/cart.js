

let carts = document.getElementById("carts");
let addshow = document.getElementById('show-item');

const getCart = () => {
    let cartData = JSON.parse(localStorage.getItem('product-item'));
    if (cartData) {
        return cartData;
    } else {
        return [];
    }
};

let Cart = getCart();

const viewCart = () => {
    addshow.innerHTML = "";
    if (Cart.length > 0) {
        Cart.forEach((pr) => {
            addshow.innerHTML += `<tr>
                                    <th>${pr.id}</th>
                                    <td>${pr.name}</td>
                                    <td>${pr.price}</td>
                                    <td>${pr.rating}</td>
                                    <td>
                                        <button class="btn btn-outline-danger p-2"><i class="bi bi-trash3-fill"></i></button>
                                    </td>
                                   </tr>`;
        });
    }
};

viewCart();
