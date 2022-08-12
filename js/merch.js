const shopShirtPrice = 45;
const coffeeCupPrice = 25;
const form = document.querySelector('form');
let total = 0;

// Get the modal
let modalShopShirt = document.getElementById("modal-shopShirt");
let modalCoffeeCup = document.getElementById("modal-coffeeCup");
// let modalStickerPack = document.getElementById("modal-stickerPack");

// Get the button that opens the modal
let btnShopShirt = document.getElementById("merch-shopShirt-container");
let btnCoffeeCup = document.getElementById("merch-coffeeCup-container");
// let modalStickerPack = document.getElementById("modal-stickerPack");

document.getElementById('orderFormTotal').innerHTML = total;
form.addEventListener('input', updateTotal);

// Get the modal
// let modalShopShirt = document.getElementById("modal-shopShirt");
// let modalCoffeeCup = document.getElementById("modal-coffeeCup");
// // let modalStickerPack = document.getElementById("modal-stickerPack");

// // Get the button that opens the modal
// let btnShopShirt = document.getElementById("merch-shopShirt-container");
// let btnCoffeeCup = document.getElementById("merch-coffeeCup-container");
// let btnStickerPack = document.getElementById("merch-stickerPack-container");

// Get the <span> element that closes the modal
let spanShopShirt = document.getElementsByClassName("close")[0];
let spanCoffeeCup = document.getElementsByClassName("close")[1];
// let spanStickerPack = document.getElementsByClassName("close")[2];

// When the user clicks on the button, open the modal
btnShopShirt.onclick = function() {
  modalShopShirt.style.display = "block";
}
btnCoffeeCup.onclick = function() {
  modalCoffeeCup .style.display = "block";
}
// btnStickerPack.onclick = function() {
//   modalStickerPack.style.display = "block";
// }

// When the user clicks on <span> (x), close the modal
spanShopShirt.onclick = function() {
  modalShopShirt.style.display = "none";
}

spanCoffeeCup.onclick = function() {
  modalCoffeeCup.style.display = "none";
}
// spanStickerPack.onclick = function() {
//   modalStickerPack.style.display = "none";
// }

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalShopShirt || event.target == modalCoffeeCup) {
    modalShopShirt.style.display = "none";
    modalCoffeeCup.style.display = "none";
    modalStickerPack.style.display = "none";
  }
}

//Order Form - Determine which form item to add
function addItem(element) {
  switch (element.value) {
    case 'shopShirt':
      createShopShirtItem();
      break;
    case 'stickerPack':
      createStickerPackItem();
      break;
    case 'coffeeCup':
      createCoffeeCupItem();
      break;
  }
  element.value = 0;
}


function createShopShirtItem() {
  let outerContainer = document.createElement('div')
  outerContainer.classList.add('mb-3', 'orderFormItem', 'flexCenterV', 'flexSpaceBetweenH')
  let p = document.createElement('p')
  p.classList.add('orderFormElement','itemLabel')
  p.innerHTML = `Shop Shirt - ${shopShirtPrice}`
  let select = document.createElement('select')
  const arr = ['- size -', 'Small', 'Medium', 'Large']
  for (const [index, a] of arr.entries()) {
    const opt = document.createElement('option');
    opt.value = a;
    opt.innerHTML = a;
    select.appendChild(opt);
  }
  select.classList.add('orderFormElement', 'itemOption')
  select.required = true;
  let qtyContainer = document.createElement('div')
  let qtyLabel = document.createElement('label')
  qtyLabel.innerHTML = 'Qty'
  qtyLabel.setAttribute('for', 'qty')
  let qty = document.createElement('input')
  qty.classList.add('itemQuantity')
  qtyLabel.setAttribute('for', 'qty')
  Object.assign(qty, {
    type: 'number',
    id: '',
    name: 'shopShirtQty',
    min: '1',
    max: '10',
    value: '1',
    step: '1'
  })
  qty.required = true
  let close = document.createElement('span')
  close.classList.add('close')
  close.innerHTML='&times;'
  close.setAttribute('onclick','removeItem(event)')
  document.getElementById('orderForm').appendChild(outerContainer)
  outerContainer.appendChild(p)
  outerContainer.appendChild(select)
  outerContainer.appendChild(qtyContainer)
  qtyContainer.appendChild(qtyLabel)
  qtyContainer.appendChild(qty)
  outerContainer.appendChild(close)
  modalShopShirt.style.display = "none"
  updateTotal()
  // addEventListers()
}

function createCoffeeCupItem() {
  let outerContainer = document.createElement('div')
  outerContainer.classList.add('mb-3', 'orderFormItem', 'flexCenterV', 'flexSpaceBetweenH')
  let p = document.createElement('p')
  p.classList.add('orderFormElement','itemLabel')
  p.innerHTML = `Coffee Cup - ${coffeeCupPrice}`
  let select = document.createElement('select')
  const arr = ['- color -', 'Black', 'White']
  for (const [index, a] of arr.entries()) {
    const opt = document.createElement('option');
    opt.value = a;
    opt.innerHTML = a;
    select.appendChild(opt);
  }
  select.classList.add('orderFormElement', 'itemOption')
  let qtyContainer = document.createElement('div')
  let qtyLabel = document.createElement('label')
  qtyLabel.innerHTML = 'Qty'
  qtyLabel.setAttribute('for', 'qty')
  let qty = document.createElement('input')
  qty.classList.add('itemQuantity')
  qtyLabel.setAttribute('for', 'qty')
  Object.assign(qty, {
    type: 'number',
    id: '',
    name: 'coffeeCupQty',
    min: '1',
    max: '10',
    value: '1',
    step: '1'
  })
  let close = document.createElement('span')
  close.classList.add('close')
  close.innerHTML='&times;'
  close.setAttribute('onclick','removeItem(event)')
  document.getElementById('orderForm').appendChild(outerContainer)
  outerContainer.appendChild(p)
  outerContainer.appendChild(select)
  outerContainer.appendChild(qtyContainer)
  qtyContainer.appendChild(qtyLabel)
  qtyContainer.appendChild(qty)
  outerContainer.appendChild(close)
  modalCoffeeCup.style.display = "none"
  updateTotal()
  // addEventListers()
}

function createStickerPackItem() {
  let outerContainer = document.createElement('div')
  outerContainer.classList.add('mb-3', 'orderFormItem', 'flexCenterV', 'flexSpaceBetweenH')
  let p = document.createElement('p')
  p.classList.add('orderFormElement','itemLabel')
  p.innerHTML = `Sticker Pack - ${stickerPackPrice}`
  let qtyContainer = document.createElement('div')
  let qtyLabel = document.createElement('label')
  qtyLabel.innerHTML = 'Qty'
  qtyLabel.setAttribute('for', 'qty')
  let qty = document.createElement('input')
  qty.classList.add('itemQuantity')
  Object.assign(qty, {
    type: 'number',
    id: '',
    name: 'stickerPackQty',
    min: '1',
    max: '10',
    class: 'qty',
    value: '1',
    step: '1'
  })
  qty.required = true
  let close = document.createElement('span')
  close.classList.add('close')
  close.innerHTML='&times;'
  close.setAttribute('onclick','removeItem(event)')
  document.getElementById('orderForm').appendChild(outerContainer)
  outerContainer.appendChild(p)
  outerContainer.appendChild(qtyContainer)
  qtyContainer.appendChild(qtyLabel)
  qtyContainer.appendChild(qty)
  outerContainer.appendChild(close)
  modalStickerPack.style.display = "none"
  updateTotal()
}


// document.addEventListener('click', updateTotal);

// function addEventListers() {
//   let inputs = document.getElementsByClassName('itemQuantity')
//   inputs.addEventListener('input', updateTotal)
// }


function removeItem(e) {
  let target = e.target;
  target.parentNode.remove();
  updateTotal();
}


function updateTotal() {
  console.log('fired')
  let items = document.getElementsByClassName('orderFormItem')
  let increment = 0;
  total = 0
  for (let i = 0; i < items.length; i++) {
    let item = items[i]
    console.log(item)
    let qty = item.querySelector('.itemQuantity').value
    let input
    switch (item.querySelector('.itemQuantity').name) {
      case (`shopShirtQty`):
        increment = shopShirtPrice
        total += qty * increment 
        let size = item.querySelector('.itemOption').value;
        switch (size) {
          case ('Small'):
            input = document.getElementById('hiddenShopShirtS');
            input.value = qty;
            // console.log(input)
            break;
          case ('Medium'):
            input = document.getElementById('hiddenShopShirtM');
            input.value = qty;
            break;
          case ('Large'):
            input = document.getElementById('hiddenShopShirtL');
            input.value = qty;
            break;
            // case ('- size -'):
            //   return alert('Please select a size for your shop shirt(s)')
        }
      break;
      case (`coffeeCupQty`):
        let color = item.querySelector('.itemOption').value;
        increment = coffeeCupPrice
        total += qty * increment
        switch (color) {
          case ('Black'):
            input = document.getElementById('hiddenCoffeeCupBlack');
            input.value = qty;
            // console.log(input)
            break;
          case ('White'):
            input = document.getElementById('hiddenCoffeeCupWhite');
            input.value = qty;
            break;
          // case ('- color -'):
          //   return alert('Please select a color for your coffee cup(s)')
        }
      break;

    }
    document.getElementById('orderFormTotal').innerHTML = total
    document.getElementById('hiddenOrderFormTotal').value = total
  }
  
  
  
  
//   let quantities = document.getElementsByTagName("input");
//   console.log(quantities.length)
//   let total = 0;
//   let increment = 0;
//   let qty = 0
//   for (let i = 0; i < quantities.length; i++) {
//     switch (quantities[i].name) {
//         case 'shopShirtQty':
//           increment = shopShirtPrice
//           qty = quantities[i].value
//           total += qty * increment
//           break;
//         case 'coffeeCupQty':
//           increment = coffeeCupPrice
//           qty = quantities[i].value
//           total += qty * increment

//           break;
//         // case 'stickerPackQty':
//         //   increment = stickerPackPrice
//         //   qty = quantities[i].value
//         //   total += qty * increment
//         //   break;
//       }
//   }
//   console.log(shopShirtPrice)
//   document.getElementById('orderFormTotal').innerHTML = total
};

function submitForm() {
  let items = document.getElementsByClassName('orderFormItem')
  let shirtSize = true;
  let coffeeColor = true;
  for (let i = 0; i < items.length; i++) {
    let item = items[i];
    let option = item.querySelector('.itemOption').value;
    if (option == '- size -') {
      shirtSize = false;
    } else if (option == '- color -') {
      coffeeColor = false;
    }
  }
  if (shirtSize == false) {
    alert('Please select a size for your shop shirt(s)')
  } else if (coffeeColor == false) {
    alert('Please select a color for your coffee cup(s)')
  } else if (total == 0) {
    alert('Please add something to your order form before submitting')
  } else {
    document.getElementById('submitBtn').click();
  }
}