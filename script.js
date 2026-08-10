const products=[
{id:1,name:"Strawberry Croissant",category:"food",meta:"buttery · sweet · fresh",price:22000,img:"https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=700&q=85",tag:"BEST SELLER"},
{id:2,name:"Pink Berry Drink",category:"drink",meta:"fresh · creamy · pretty",price:18000,img:"https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=700&q=85",tag:"NEW"},
{id:3,name:"Cute Desk Decor",category:"aesthetic",meta:"korean style · cute",price:35000,img:"https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=700&q=85",tag:"AESTHETIC"},
{id:4,name:"Sweet Donut Box",category:"food",meta:"soft · fluffy · 6 pcs",price:28000,img:"https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=700&q=85",tag:"FAVORITE"},
{id:5,name:"Mini Gift Set",category:"gift",meta:"pretty · ready to gift",price:45000,img:"https://images.unsplash.com/photo-1512909006721-3d6018887383?auto=format&fit=crop&w=700&q=85",tag:"GIFT"},
{id:6,name:"Pastel Cake Slice",category:"food",meta:"soft · creamy · indulgent",price:25000,img:"https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=700&q=85",tag:"YUMMY"},
{id:7,name:"Ribbon Hair Clip",category:"aesthetic",meta:"korean style · pink",price:19000,img:"https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=700&q=85",tag:"CUTE"},
{id:8,name:"Iced Coffee",category:"drink",meta:"smooth · chilled · cozy",price:20000,img:"https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=700&q=85",tag:"COZY"}
];
let cart=[];
const grid=document.getElementById("productGrid"),empty=document.getElementById("emptyState");
const rupiah=n=>new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR",maximumFractionDigits:0}).format(n);
function renderProducts(list=products){
 grid.innerHTML=list.map(p=>`<article class="product-card">
 <div class="product-image"><img loading="lazy" src="${p.img}" alt="${p.name}"><span class="product-tag">${p.tag}</span><button class="heart" aria-label="favorite">♡</button></div>
 <div class="product-info"><h3>${p.name}</h3><div class="product-meta">${p.meta}</div><div class="product-bottom"><span class="price">${rupiah(p.price)}</span><button class="add-btn" onclick="addCart(${p.id})">+</button></div></div></article>`).join("");
 empty.style.display=list.length?"none":"block";
}
function addCart(id){const p=products.find(x=>x.id===id);cart.push(p);renderCart();document.getElementById("cartDrawer").classList.add("open");document.getElementById("overlay").classList.add("show")}
function renderCart(){
 document.getElementById("cartCount").textContent=cart.length;
 const box=document.getElementById("cartItems");
 box.innerHTML=cart.length?cart.map((p,i)=>`<div class="cart-row"><img src="${p.img}" alt=""><div style="flex:1"><h4>${p.name}</h4><p>${rupiah(p.price)}</p><button onclick="removeCart(${i})">hapus</button></div></div>`).join(""):`<p class="cart-empty">Keranjangmu masih kosong ♡</p>`;
 document.getElementById("cartTotal").textContent=rupiah(cart.reduce((s,p)=>s+p.price,0));
 const names=cart.map(p=>p.name).join(", ");
 document.getElementById("checkoutBtn").href="https://wa.me/62895393044401?text="+encodeURIComponent("Halo kak aku mau pesan "+(names||"produk")+" ya;");
}
function removeCart(i){cart.splice(i,1);renderCart()}
renderProducts();
document.querySelectorAll(".category").forEach(b=>b.onclick=()=>{document.querySelectorAll(".category").forEach(x=>x.classList.remove("active"));b.classList.add("active");renderProducts(b.dataset.filter==="all"?products:products.filter(p=>p.category===b.dataset.filter))});
document.getElementById("searchBtn").onclick=()=>{document.getElementById("searchPanel").classList.toggle("open");document.getElementById("searchInput").focus()};
document.getElementById("closeSearch").onclick=()=>document.getElementById("searchPanel").classList.remove("open");
document.getElementById("searchInput").oninput=e=>{const q=e.target.value.toLowerCase();renderProducts(products.filter(p=>(p.name+" "+p.meta).toLowerCase().includes(q)))};
const drawer=document.getElementById("cartDrawer"),overlay=document.getElementById("overlay");
document.getElementById("cartBtn").onclick=()=>{drawer.classList.add("open");overlay.classList.add("show")};
document.getElementById("closeCart").onclick=()=>{drawer.classList.remove("open");overlay.classList.remove("show")};
overlay.onclick=()=>{drawer.classList.remove("open");overlay.classList.remove("show")};
document.getElementById("language").onchange=e=>{
 const en=e.target.value==="en";
 document.querySelector('[data-id="nav-home"]').textContent=en?"Home":"Home";
 document.querySelector('[data-id="nav-about"]').textContent=en?"About":"About";
 document.querySelector('[data-id="nav-promo"]').textContent=en?"Deals":"Promo";
 document.querySelector('[data-id="nav-products"]').textContent=en?"Shop":"Shop";
 document.querySelector('[data-id="nav-faq"]').textContent="FAQ";
 document.getElementById("searchInput").placeholder=en?"Search food or aesthetic items...":"Cari makanan atau barang aesthetic...";
};
document.getElementById("newsletterForm").onsubmit=e=>{e.preventDefault();alert("Thank you ♡ Kamu sudah bergabung dengan HeyNitara!")};
