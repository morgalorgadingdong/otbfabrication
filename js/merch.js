// Get the modal
var modal = document.getElementById("modal-shopShirt");

// Get the button that opens the modal
var btn = document.getElementById("merch-shopShirt-container");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
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


let total = 0;
const shopShirtPrice = 45;
const coffeeCupPrice = 25;
const stickerPackPrice = 5;

document.getElementById('orderFormTotal').innerHTML = total

function createShopShirtItem() {
  let outerContainer = document.createElement('div')
  outerContainer.classList.add('mb-3', 'orderFormItem', 'flexCenterV', 'flexSpaceBetweenH')
  let p = document.createElement('p')
  p.classList.add('orderFormElement')
  p.innerHTML = `Shop Shirt - $${shopShirtPrice}`
  let select = document.createElement('select')
  const arr = ['- size -', 'Small', 'Medium', 'Large', 'XL']
  for (const [index, a] of arr.entries()) {
    const opt = document.createElement('option');
    opt.value = a;
    opt.innerHTML = a;
    select.appendChild(opt);
  }
  select.classList.add('orderFormElement')
  select.required = true;
  let qtyContainer = document.createElement('div')
  let qtyLabel = document.createElement('label')
  qtyLabel.innerHTML = 'Qty'
  qtyLabel.setAttribute('for', 'qty')
  let qty = document.createElement('input')
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
  modal.style.display = "none"
  updateTotal('Shop Shirt', 1)
}

function createCoffeeCupItem() {
  let outerContainer = document.createElement('div')
  outerContainer.classList.add('mb-3', 'orderFormItem', 'flexCenterV', 'flexSpaceBetweenH')
  let p = document.createElement('p')
  p.classList.add('orderFormElement')
  p.innerHTML = `Coffee Cup - $${coffeeCupPrice}`
  let qtyContainer = document.createElement('div')
  let qtyLabel = document.createElement('label')
  qtyLabel.innerHTML = 'Qty'
  qtyLabel.setAttribute('for', 'qty')
  let qty = document.createElement('input')
  qtyLabel.setAttribute('for', 'qty')
  // qty.value = 1
  Object.assign(qty, {
    type: 'number',
    id: '',
    name: 'coffeeCupQty',
    min: '1',
    max: '10',
    value: '1',
    class: 'qty',
    step: '1'
  })
  // qty.required = true
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
  // qty.setAttribute("onchange", updateTotal('Coffee Cup', this.value))
  updateTotal('Coffee Cup', 1)
}

function createStickerPackItem() {
  let outerContainer = document.createElement('div')
  outerContainer.classList.add('mb-3', 'orderFormItem', 'flexCenterV', 'flexSpaceBetweenH')
  let p = document.createElement('p')
  p.classList.add('orderFormElement')
  p.innerHTML = `Sticker Pack - $${stickerPackPrice}`
  let qtyContainer = document.createElement('div')
  let qtyLabel = document.createElement('label')
  qtyLabel.innerHTML = 'Qty'
  qtyLabel.setAttribute('for', 'qty')
  let qty = document.createElement('input')
  qtyLabel.setAttribute('for', 'qty')
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
  updateTotal('Sticker Pack', 1)
}



function removeItem(e) {
  let target = e.target
  target.parentNode.remove()
}

// function getItemPrice(e) {
//   console.log('tests')
//   let target = e.target
  
//   switch (target.innerHTML) {
//     case 'Shop Shirt':
//       target.innerHTML = `${target.innerHTML} - ${shopShirtPrice}`
      
//       break;
//     case 'Coffee Cup':
//       target.innerHTML = `${target.innerHTML} - ${coffeeCupPrice}`
//       break;
//     case 'Sticker Pack':
//       target.innerHTML = `${target.innerHTML} - ${stickerPackPrice}`
//       break;
//   }
// }



const form = document.querySelector('form');

form.addEventListener('input', updateTotal);

// document.getElementsByClassName('qty').addEventListener('change', updateTotal(this.value))

// let qtyInputs = document.getElementsByClassName('qty')
// qtyInputs.addEventListener('change', updateTotal('Coffee Cup', this.value))

function updateTotal() {
  let quantities = document.getElementsByTagName("input");
  console.log(quantities.length)
  total = 0;
  let increment = 0;
  let qty = 0
  for (let i = 0; i < quantities.length; i++) {
    switch (quantities[i].name) {
        case 'shopShirtQty':
          increment = shopShirtPrice
          qty = quantities[i].value
          total += qty * increment
          break;
        case 'coffeeCupQty':
          increment = coffeeCupPrice
          qty = quantities[i].value
          total += qty * increment

          break;
        case 'stickerPackQty':
          increment = stickerPackPrice
          qty = quantities[i].value
          total += qty * increment
          break;
      }
  }
  document.getElementById('orderFormTotal').innerHTML = total
};