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

function createShopShirtItem() {
  let outerContainer = document.createElement('div')
  outerContainer.classList.add('mb-3', 'orderFormItem', 'flexCenterV', 'flexSpaceBetweenH')
  let p = document.createElement('p')
  p.classList.add('orderFormElement')
  p.innerHTML = 'Shop Shirt - $45'
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
    // id: 'qty',
    name: 'qty',
    min: '1',
    max: '10',
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
}

function createCoffeeCupItem() {
  let outerContainer = document.createElement('div')
  outerContainer.classList.add('mb-3', 'orderFormItem', 'flexCenterV', 'flexSpaceBetweenH')
  let p = document.createElement('p')
  p.classList.add('orderFormElement')
  p.innerHTML = 'Coffee Cup - $25'
  let qtyContainer = document.createElement('div')
  let qtyLabel = document.createElement('label')
  qtyLabel.innerHTML = 'Qty'
  qtyLabel.setAttribute('for', 'qty')
  let qty = document.createElement('input')
  qtyLabel.setAttribute('for', 'qty')
  Object.assign(qty, {
    type: 'number',
    // id: 'qty',
    name: 'qty',
    min: '1',
    max: '10',
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
}

function createStickerPackItem() {
  let outerContainer = document.createElement('div')
  outerContainer.classList.add('mb-3', 'orderFormItem', 'flexCenterV', 'flexSpaceBetweenH')
  let p = document.createElement('p')
  p.classList.add('orderFormElement')
  p.innerHTML = 'Sticker Pack - $5'
  let qtyContainer = document.createElement('div')
  let qtyLabel = document.createElement('label')
  qtyLabel.innerHTML = 'Qty'
  qtyLabel.setAttribute('for', 'qty')
  let qty = document.createElement('input')
  qtyLabel.setAttribute('for', 'qty')
  Object.assign(qty, {
    type: 'number',
    // id: 'qty',
    name: 'qty',
    min: '1',
    max: '10',
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
}

function removeItem(e) {
  let target = e.target
  target.parentNode.remove()
}