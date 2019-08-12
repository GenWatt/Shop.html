var number=0;
function swipeLeft(){
  number--;
  if(number>=1){
    number=1;
  } 
  if(number<0){
    number=0;
  } 
  switchImage();
}
function swipeRight(){
  number++;
  if(number>=1){
    number=1;
  } 
  if(number<0){
    number=0;
  }  
  switchImage();
}
function switchImage(){
    var swipeLeft=document.querySelector(".product");
    var path=`<img src="img/image${number}.jpg"alt="laptop">`;
    swipeLeft.innerHTML=path; 
  }
  var text=`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam, libero omnis. Dolorum tenetur sit hic animi repellat impedit esse.
  Perspiciatis libero incidunt vitae, obcaecati doloremque maxime eveniet ut excepturi! Reiciendis?
  Corrupti fuga est in repellat? Iusto cum, soluta vero aliquid fuga eius cupiditate mollitia fugiat reiciendis. Veniam vel magni labore, animi praesentium quam 
  pariatur maxime, mollitia corrupti atque fugit quia.
  Fugit alias delectus vitae ipsam. Nulla excepturi nesciunt, voluptatibus quam, blanditiis doloribus nemo enim beatae voluptatem, nihil mollitia quisquam sunt 
  consequuntur. Sequi numquam quidem aperiam delectus, asperiores esse autem debitis!`;
var counter=0;
  function showContent(){
    var modulo=counter%2;
    var content=document.querySelector("#more-info");
    var content1=document.querySelector(".box-content");
    if(modulo==0){
    content1.style.height="150px";
    content.innerHTML=text;
    content.style.opacity="1";;
    }
    else{
    content1.style.height="0";
    content.innerHTML="";
    content.style.opacity="0";
    }
    counter++;
  }
 
  var counter1=0;
  function showGwarantion(){
    var modulo=counter1%2;
    var content=document.querySelector("#gwarantion");
    var content1=document.querySelector(".box-gwarantion");

    if(modulo==0){
    content1.style.height="150px";
    content.innerHTML=text;
    content.style.opacity="1";
    }
    else{
    content1.style.height="0";
    content.innerHTML="";
    content.style.opacity="0";
    }
    counter1++;
  }
  var counter2=0;
  function showContact(){
    var modulo=counter2%2;
    var content=document.querySelector("#contact");
    var content1=document.querySelector(".box-contact");
    if(modulo==0){
    content1.style.height="150px";
    content.innerHTML=text;
    content.style.opacity="1";
    }
    else{
    content1.style.height="0";
    content.innerHTML="";
    content.style.opacity="0";
    }
    counter2++;
  }
  
  let products = 0;

function addToCart() {
  products = 1;
  CountProducts();
}
counter = 0;

function showCart() {
  const cart = document.querySelector(".cart");
  if (counter == 0) {
    cart.style.display = "grid";
    counter++;
  } else {
    cart.style.display = "none";
    counter = 0;
  }
  if (products == 0) {
    const cartEmpty = document.querySelector(".cart-empty");
    const cartItems = document.querySelector(".cart-items");
    cartItems.style.display = "none";
    cartEmpty.textContent = "Cart is empty";
    cartEmpty.classList.add("center");
  } else {
    const cartEmpty = document.querySelector(".cart-empty");
    const cartItems = document.querySelector(".cart-items");
    cartItems.style.display = "grid";
    cartEmpty.textContent = "";
    cartEmpty.classList.remove("center");
  }
}

function increase() {

  if (products > 0) {
    products++;
    calculation(products);
    CountProducts();
  }
}


function countdown() {
  products--;
  if (products <= 0) {
    products = 1;
  }
  calculation(products);
  CountProducts();
}

function CountProducts() {
  let numberProducts = document.getElementById("counter-products").value = products;
}

function calculation() {
  let priceElement = document.querySelector(".price").innerHTML;
  let price = products * parseFloat(priceElement);
  finalPrice(price);
}

function finalPrice(price) {
  let finalPrice = document.querySelector(".final-price");
  finalPrice.textContent = price + "zł";

}

function removeIteam() {
  const cartEmpty = document.querySelector(".cart-empty");
  const cartItems = document.querySelector(".cart-items");
  cartItems.style.display = "none";
  cartEmpty.textContent = "Cart is empty";
  cartEmpty.classList.add("center");
}
  

