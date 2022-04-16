const template = document.querySelector('#template');
const fragment = document.createDocumentFragment();
const buttons = document.querySelectorAll('.card-btn');
const list = document.querySelector('.list');

const cart = []; // Carrito

//Add item to the cart then print
const addItem = (e) => {
    const item = {
        name: e.target.value,
        amount: 1
    }

    const exist = cart.findIndex( (fItem) => fItem.name === item.name)
    
    if(exist === -1) {
        cart.push(item);
    }else {
        cart[exist].amount++;
    }

    printCart();
};

// Print the cart's item on the list element
const printCart = () => {
    
    list.textContent = " "; // Limpiamos la lista
    cart.forEach( (item) => {
        const clone = template.content.firstElementChild.cloneNode(true);
        
        clone.querySelector('.itemName').textContent = item.name;
        clone.querySelector('.itemAmount').textContent = item.amount;

        fragment.appendChild(clone);
        list.appendChild(fragment);
    } );


};

buttons.forEach( (btn) => btn.addEventListener("click", addItem ))

// probar con otros metodos el array