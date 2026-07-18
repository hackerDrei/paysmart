// Mock Product Data (1-of-1 Thrift Pieces)

const pages = {
        home: `
        <!-- HEADER CONTAINER: Naka-min-h-[85vh] para sakop ang screen at naka-bg-zinc-950 -->
        <header class="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden bg-zinc-950">
           
            <!-- 📸 THE AI-GENERATED MODEL BACKGROUND -->
            <div class="absolute inset-0 z-0">
                <!--
                  I-save mo lang 'yung dinalang image sa itaas, i-drop sa project folder mo,
                  at i-update ang src sa tamang pangalan (halimbawa: hero-bg.png)
                -->
                <img src="hero-bg.png"
                     alt="SoloThrift Hero Model"
                     class="w-full h-full object-cover object-center grayscale opacity-65 scale-105 pointer-events-none select-none transition-all duration-1000">
               
                <!-- ✨ PREMIUM DARK GRADIENT OVERLAY -->
                <!-- Nilagyan natin ng mabigat na overlay para lulubog ang background at lilitaw ang text -->
                <div class="absolute inset-0 bg-gradient-to-t from-[#0f0f11] via-black/85 to-[#0f0f11]/60 z-10"></div>
            </div>

            <!-- CONTENT LAYER: Naka-center para sa cinematic fashion branding look -->
            <div class="max-w-4xl mx-auto px-4 sm:px-6 py-16 text-center relative z-20 space-y-6 md:space-y-8">
                <div>
                    <span class="text-[10px] md:text-xs uppercase tracking-widest text-zinc-400 font-mono bg-zinc-900/80 border border-zinc-800 px-3 py-1.5 rounded-none inline-block backdrop-blur-sm">
                        Curated Vintage & Modern Tailoring
                    </span>
                    <h1 class="text-5xl md:text-7xl font-extrabold text-white mt-4 tracking-tighter leading-none uppercase">
                        DROP 01:<br>
                        <span class="text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 via-zinc-400 to-zinc-600">
                            MONOCHROME
                        </span>
                    </h1>
                </div>

                <p class="text-zinc-400 text-xs md:text-sm leading-relaxed max-w-md mx-auto tracking-wide font-light">
                    Handpicked, washed, and meticulously inspected. One-of-one tailored pieces selected for the modern gentleman who move in silence.
                </p>

                <div class="pt-2">
                    <button onclick="showPage('shop')" class="bg-white text-black cursor-pointer font-bold px-8 py-4 rounded-none hover:bg-zinc-200 hover:scale-[1.02] transition-all text-xs tracking-widest uppercase shadow-2xl w-full sm:w-auto hover:tracking-[0.25em] duration-500">
                        BROWSE DROP
                    </button>
                </div>
            </div>
        </header>
    `,

    shop: `
    <main class="max-w-7xl mx-auto px-4 sm:px-6 py-10 md:py-16">
        <!-- Responsive Filter Container: Naka-swipeable horizontal scroll sa mobile para hindi maging magulo ang mga buttons -->
        <div class="flex overflow-x-auto pb-3 mb-8 gap-2 no-scrollbar md:flex-wrap md:overflow-visible" id="filter-container">
            <button class="filter-btn active-filter bg-white text-black text-[10px] md:text-xs font-semibold px-4 py-2 uppercase tracking-wider cursor-pointer whitespace-nowrap" data-category="all" onclick="renderProducts('all')">All Items</button>
            <button class="filter-btn border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-500 text-[10px] md:text-xs font-semibold px-4 py-2 uppercase tracking-wider cursor-pointer whitespace-nowrap" data-category="tops" onclick="renderProducts('tops')">Tops</button>
            <button class="filter-btn border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-500 text-[10px] md:text-xs font-semibold px-4 py-2 uppercase tracking-wider cursor-pointer whitespace-nowrap" data-category="bottoms" onclick="renderProducts('bottoms')">Bottoms</button>
            <button class="filter-btn border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-500 text-[10px] md:text-xs font-semibold px-4 py-2 uppercase tracking-wider cursor-pointer whitespace-nowrap" data-category="outerwear" onclick="renderProducts('outerwear')">Outerwear</button>
        </div>

        <!-- Responsive Catalog Grid: Saktong-sakto sa 2 columns kapag mobile, 3 sa tablets, at 4 sa malalaking screen -->
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6" id="product-grid"></div>
    </main>
    `,

    about: `
        <section class="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-20 min-h-[85vh] flex items-center">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center w-full">
              
                <div class="space-y-6 md:space-y-8">
                    <div class="space-y-2">
                        <p class="text-[10px] md:text-xs font-mono uppercase tracking-widest text-zinc-500">// OUR MANIFESTO</p>
                        <h2 class="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase leading-none">
                            ARCHIVAL<br>CURATION
                        </h2>
                    </div>
                  
                    <div class="border-l border-zinc-800 pl-4 md:pl-6 space-y-4">
                        <p class="text-zinc-400 leading-relaxed text-xs md:text-sm tracking-wide">
                            We don't just find garments; we source timeless silhouettes. SoloThrift is a dedicated archive for the silent movers-those who understand that sophistication isn;t about loud branding, but the heavy weight of sartorial history, precise fit, and classic construction.
                        </p>
                        <p class="text-zinc-500 leading-relaxed text-[11px] md:text-xs font-mono">
                            Every single piece-from structured blazers to refined trousers-is meticulously hand-picked, thoroughly washed, and inspected to ensure it stands the test of time. 1-of-1 garments for individuals who define themselves.
                        </p>
                    </div>

                    <!-- Responsive Ticker Grid: Siksik at hindi mag-o-overlap ang font sizes kahit maliit na device -->
                    <div class="grid grid-cols-3 gap-2 sm:gap-6 pt-6 border-t border-zinc-900 font-mono">
                        <div>
                            <p class="text-white font-bold text-xl sm:text-3xl md:text-4xl tracking-tighter" id="ticker-exclusivity" data-target="1-OF-1">0-OF-0</p>
                            <p class="text-[8px] sm:text-[9px] md:text-[10px] text-zinc-500 uppercase tracking-widest mt-1 md:mt-2">Exclusivity</p>
                        </div>
                        <div>
                            <p class="text-white font-bold text-xl sm:text-3xl md:text-4xl tracking-tighter" id="ticker-picked" data-target="100%">000%</p>
                            <p class="text-[8px] sm:text-[9px] md:text-[10px] text-zinc-500 uppercase tracking-widest mt-1 md:mt-2">Hand-Picked</p>
                        </div>
                        <div>
                            <p class="text-white font-bold text-xl sm:text-3xl md:text-4xl tracking-tighter" id="ticker-drop" data-target="01">00</p>
                            <p class="text-[8px] sm:text-[9px] md:text-[10px] text-zinc-500 uppercase tracking-widest mt-1 md:mt-2">Current Drop</p>
                        </div>
                    </div>
                </div>

                <!-- Responsive Editorial Images: Binabaan nang konti ang taas sa mobile (h-[300px]) para hindi sumakop sa buong scroll -->
                <div class="grid grid-cols-2 gap-4 h-[300px] sm:h-[400px] md:h-[450px]">
                    <div class="bg-zinc-950 border border-zinc-900 overflow-hidden relative group">
                        <img src="blacksuit-1.jpeg"
                             alt="Thrift Culture"
                             class="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out">
                        <div class="absolute bottom-3 left-3 bg-black/80 border border-zinc-800 text-[8px] md:text-[9px] font-mono tracking-widest text-zinc-400 px-2 py-0.5">[ REF_01 ]</div>
                    </div>
                  
                    <div class="bg-zinc-950 border border-zinc-900 overflow-hidden relative group translate-y-4 md:translate-y-6">
                        <img src="blacksuit-2.jpeg"
                             alt="Streetwear Detail"
                             class="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out">
                        <div class="absolute top-3 right-3 bg-black/80 border border-zinc-800 text-[8px] md:text-[9px] font-mono tracking-widest text-zinc-400 px-2 py-0.5">[ DET_02 ]</div>
                    </div>
                </div>

            </div>
        </section>
    `,

    contact: `
        <section class="max-w-4xl mx-auto py-8 px-4 font-mono animate-fade-in">
            <!-- Header Section -->
            <div class="border-b border-zinc-800 pb-4 mb-6">
                <h2 class="text-white text-xl font-bold tracking-widest uppercase">[ GET IN TOUCH ]</h2>
                <p class="text-zinc-500 text-[11px] mt-1">Connect to the mainframe. State your archival inquiries below.</p>
            </div>

            <!-- Main Content: Saktong Gap at Padding -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            
                <!-- 📜 Left Container: Tight & Structured -->
                <div class="flex flex-col justify-between border border-zinc-800 p-5 rounded bg-[#121214]/30">
                    <div class="space-y-4">
                        <h4 class="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">// TRANSMISSION NOTICE</h4>
                        <p class="text-xs text-zinc-300 leading-relaxed">
                            SoloThrift operates as an independent archival platform. Every clothing piece is curated, measured, and verified with pure raw precision.
                        </p>
                        <p class="text-xs text-zinc-300 leading-relaxed">
                            Whether you are checking specific item measurements, tracking current custom orders, or requesting premium sartorial sourcing, use the dedicated router on the right.
                        </p>
                    </div>
                
                    <div class="pt-4 border-t border-zinc-900 mt-6">
                        <p class="text-[11px] text-zinc-500 leading-relaxed">
                            * Response pipeline is managed under strict focus constraints. Expect logs within 24-48 cycles.
                        </p>
                    </div>
                </div>

                <!-- ✉️ Right Container: Compressed Form Fields -->
                <div class="border border-zinc-800 p-5 rounded bg-[#121214]">
                    <h4 class="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-4">// TRANSMISSION ROUTER</h4>
                
                    <form onsubmit="
                        event.preventDefault();
                        const nameInput = sanitizeInput(this.querySelector('input[type=text]').value);
                        const emailInput = sanitizeInput(this.querySelector('input[type=email]').value);
                        const messageInput = sanitizeInput(this.querySelector('textarea').value);
                        const feedbackInput = sanitizeInput(this.querySelectorAll('input[type=text]')[1]?.value || '');
                    
                        console.log('Sanitized Data:', { nameInput, emailInput, messageInput, feedbackInput });
                        alert('Transmission secured and logged successfully, pare!');
                    " class="space-y-3 text-xs">
                    
                        <!-- 1. NAME -->
                        <div>
                            <label class="block text-zinc-500 mb-1 uppercase tracking-wider text-[10px]">Identifier (Name) *</label>
                            <input type="text" required class="w-full bg-[#0f0f11] border border-zinc-800 text-white p-2.5 rounded focus:outline-none focus:border-zinc-500 font-mono text-xs" placeholder="e.g., Guest User">
                        </div>
                    
                        <!-- 2. EMAIL -->
                        <div>
                            <label class="block text-zinc-500 mb-1 uppercase tracking-wider text-[10px]">Return Route (Email) *</label>
                            <input type="email" required class="w-full bg-[#0f0f11] border border-zinc-800 text-white p-2.5 rounded focus:outline-none focus:border-zinc-500 font-mono text-xs" placeholder="name@domain.com">
                        </div>
                    
                        <!-- 3. MESSAGE -->
                        <div>
                            <label class="block text-zinc-500 mb-1 uppercase tracking-wider text-[10px]">Core Message (Inquiry) *</label>
                            <textarea rows="2" required class="w-full bg-[#0f0f11] border border-zinc-800 text-white p-2.5 rounded focus:outline-none focus:border-zinc-500 font-mono text-xs resize-none" placeholder="State your specifications..."></textarea>
                        </div>

                        <!-- 4. OPTIONAL FEEDBACK -->
                        <div>
                            <label class="block text-zinc-500 mb-1 uppercase tracking-wider text-[10px]">System Feedback (Optional)</label>
                            <input type="text" class="w-full bg-[#0f0f11] border border-zinc-900 text-zinc-400 p-2.5 rounded focus:outline-none focus:border-zinc-700 font-mono text-xs italic" placeholder="Any interface thoughts?">
                        </div>
                    
                        <button type="submit" class="w-full bg-white text-black !textblack  font-bold py-2.5 uppercase tracking-widest hover:bg-zinc-200 transition-colors font-mono text-xs cursor-pointer">
                            [ TRANSMIT MESSAGE ]
                        </button>
                    </form>
                </div>

            </div>

            <!-- 🌐 Bottom Section: Compact Direct Links Row -->
            <div class="border-t border-zinc-800 pt-6">
                <h4 class="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-3">// DIRECT PIPELINES</h4>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                
                    <a href="https://instagram.com/solothrift" target="_blank" class="group flex items-center justify-between border border-zinc-900 p-3 rounded bg-[#121214]/40 hover:border-zinc-700 hover:bg-[#121214] transition-all cursor-pointer">
                        <span class="text-xs text-zinc-400 group-hover:text-white font-bold uppercase tracking-wider">[ Instagram ]</span>
                        <span class="text-xs text-zinc-500 group-hover:text-zinc-300">@solothrift</span>
                    </a>

                    <a href="mailto:japarker2122@gmail.com" class="group flex items-center justify-between border border-zinc-900 p-3 rounded bg-[#121214]/40 hover:border-zinc-700 hover:bg-[#121214] transition-all cursor-pointer">
                        <span class="text-xs text-zinc-400 group-hover:text-white font-bold uppercase tracking-wider">[ Direct Mail ]</span>
                        <span class="text-xs text-zinc-500 group-hover:text-zinc-300 break-all">japarker2122@gmail.com</span>
                    </a>

                </div>
            </div>
        </section>
    `
};

// Function para sa Slot Machine / Rolling Numbers Effect
function runStatsTicker() {
    const tickers = [
        { id: 'ticker-exclusivity', template: 'X-XX-X' }, // Format para sa 1-OF-1
        { id: 'ticker-picked', template: 'XXX%' },       // Format para sa 100%
        { id: 'ticker-drop', template: 'XX' }             // Format para sa 01
    ];

    tickers.forEach(ticker => {
        const el = document.getElementById(ticker.id);
        if (!el) return;

        const finalValue = el.getAttribute('data-target');
        let duration = 1400; // Haba ng spin (600ms)
        let intervalTime = 45; // Bilis ng pagpalit ng frames (40ms)
        let elapsed = 0;

        const interval = setInterval(() => {
            // Gumawa ng random characters habang nag-i-spin base sa format
            let randomStr = ticker.template.split('').map(char => {
                if (char === '%' || char === '-') return char; // Huwag baguhin ang signs
                return Math.floor(Math.random() * 10); // Random number 0-9
            }).join('');

            el.textContent = randomStr;
            elapsed += intervalTime;

            // Kapag tapos na ang oras, ibalik sa totoong numero
            if (elapsed >= duration) {
                clearInterval(interval);
                el.textContent = finalValue;
            }
        }, intervalTime);
    });
}

//Function for rendering page
function showPage(pageName) {
    const content = document.getElementById('main-content');
    if (!content) return;

    // 1. RESET STATE (Fade Out at Ibaba nang konti ang content)
    content.style.transition = 'none';
    content.classList.remove('opacity-100', 'translate-y-0');
    content.classList.add('opacity-0', 'translate-y-6');

    
    // 2. I-inject na ang bagong putahe/HTML
    content.innerHTML = pages[pageName] || pages.home;
    window.scrollTo({ top: 0, behavior: 'instant'});

    if (pageName === 'shop') {
        renderProducts();
    }
    
    // 3. GAMITIN SI REQUEST ANIMATION FRAME (Dito papasok ang swabe factor)
    // Pinapabasa muna natin sa browser ang bagong salpak na HTML bago natin i-animate
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            content.style.transition = '';
            content.classList.remove('opacity-0', 'translate-y-6');
            content.classList.add('opacity-100', 'translate-y-0');

            // BAGONG TWEAK: Pag pumasok sa about page, paganahin ang rolling numbers!
            if (pageName === 'about') {
                setTimeout(() => {
                    runStatsTicker();
                }, 250)
            }
        });
    });
}




const products = [
    { id: 1, name: "Vintage 90s Grey Oversized Hoodie", condition: "9/10 Vintage", p2p: "N/A", length: "32\"", shoulder: "Waist: 32\"", sleeve: "Leg Opening: 9\"", desc: "Heavyweight denim canvas with double-knee panels.",  price: 850, category: "outerwear", size: "XL", img: "HOODIE_IMG" },
    { id: 2, name: "Minimalist Black Boxy Tee", condition: "9.5/10 Pristine", p2p: "23\"", length: "27\"", shoulder: "21\"", sleeve: "9\"", desc: "Thick collar weave rich dropped shoulders, raw charcoal wash.",  price: 450, category: "tops", size: "L", img: "TEE_IMG" },
    { id: 3, name: "Washed Cargo Pants Desert Storm", price: 1200, category: "bottoms", size: "32", img: "CARGO_IMG" },
    { id: 4, name: "Retro Heavyweight Crewneck", price: 750, category: "outerwear", size: "M", img: "CREW_IMG" },
    { id: 5, name: "Vintage Acid-Wash Denim Jeans", price: 1100, category: "bottoms", size: "30", img: "DENIM_IMG" },
    { id: 6, name: "Pro-Club Heavyweight Blank", price: 500, category: "tops", size: "XL", img: "PRO_IMG" }
];

let cart = [];

// DOM Elements

const filterBtns = document.querySelectorAll('.filter-btn');
const cartBtn = document.getElementById('cart-btn');
const closeCart = document.getElementById('close-cart');
const cartSidebar = document.getElementById('cart-sidebar');
const cartItemsContainer = document.getElementById('cart-items');
const cartCount = document.getElementById('cart-count');
const cartTotal = document.getElementById('cart-total');
const emptyCartMsg = document.getElementById('empty-cart-msg');

// 1. Display Products dynamically
function renderProducts(categoryFilter = "all") {
    const productGrid = document.getElementById('product-grid');
    if (!productGrid) return;

    productGrid.innerHTML = "";
   
    const filtered = products.filter(p => categoryFilter === "all" || p.category === categoryFilter);
   
    filtered.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = "bg-[#121214] border border-zinc-900 p-4 flex flex-col justify-between group hover:border-zinc-700 transition-all duration-300";
        productCard.innerHTML = `
            <div>
                <div class="w-full aspect-[3/4] bg-zinc-900 border border-zinc-800 mb-4 flex items-center justify-center relative overflow-hidden">
                    <span class="text-zinc-700 text-xs tracking-mono">[ ${product.img} ]</span>
                    <span class="absolute top-2 left-2 bg-black/60 text-zinc-400 text-[10px] px-2 py-0.5 tracking-wider font-semibold">SIZE ${product.size}</span>
                </div>
                <h4 class="font-semibold text-sm text-zinc-200 group-hover:text-white transition-colors truncate">${product.name}</h4>
                <p class="text-zinc-400 text-sm mt-1">₱${product.price.toLocaleString()}</p>
            </div>
           
            <button onclick="addToCart(${product.id})" class="mt-6 w-full border border-zinc-800 text-zinc-300 hover:bg-white hover:text-black hover:border-white py-2 text-xs uppercase tracking-wider font-semibold transition-all duration-300 cursor-pointer">
                Add To Cart
            </button>

            <button onclick="openQuickView(${product.id})" class="w-full mt-2 border border-zinc-700 text-zinc-400 hover:text-white hover:border-zinc-500 py-2 text-xs font-mono uppercase transition-colors cursor-pointer">
                [ DETAILS ]
            </button>
       
        `;
        productGrid.appendChild(productCard);
    });
}



// 3. Cart Functions
function addToCart(productId) {
    const item = products.find(p => p.id === productId);
    // Dahil thrift shop ito (1-of-1), i-check natin kung nasa cart na
    if (cart.some(cartItem => cartItem.id === productId)) {
        alert("This is a 1-of-1 piece, already in your cart!");
        return;
    }
   
    cart.push(item);
    updateCartUI();
    // Buksan ang sidebar para may visual feedback agad
    cartSidebar.classList.remove('translate-x-full');
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
}

function updateCartUI() {
    // Count Update
    cartCount.textContent = cart.length;
   
    // Items List Render
    cartItemsContainer.innerHTML = "";
    if (cart.length === 0) {
        cartItemsContainer.appendChild(emptyCartMsg);
        cartTotal.textContent = "₱0.00";
        return;
    }

   
    let total = 0;
    cart.forEach(item => {
        total += item.price;
        const itemRow = document.createElement('div');
        itemRow.className = "flex justify-between items-center bg-[#18181c] p-3 border border-zinc-800";
        itemRow.innerHTML = `
            <div class="max-w-[70%]">
                <p class="text-xs text-white font-semibold truncate">${item.name}</p>
                <p class="text-[11px] text-zinc-500 mt-0.5">Size: ${item.size} • ₱${item.price}</p>
            </div>
            <button onclick="removeFromCart(${item.id})" class="text-zinc-500 hover:text-red-400 text-xs cursor-pointer">
                Remove
            </button>
        `;
        cartItemsContainer.appendChild(itemRow);
    });
   
    cartTotal.textContent = `₱${total.toLocaleString()}.00`;
}


// Function para magbukas ng modal at mag-load ng data
function openQuickView(productId) {
    // Hahanapin sa array mo yung product gamit ang ID nito
    const product = products.find(p => p.id === productId);
    if (!product) return;

    // Babatuhan ng saktong values ang mga ID sa HTML modal
    document.getElementById('qv-item-id').innerText = `REF-ID: #00${product.id}`;
    document.getElementById('qv-title').innerText = product.name;
    document.getElementById('qv-price').innerText = `₱${product.price.toLocaleString()}`;
    document.getElementById('qv-condition').innerText = `CONDITION: ${product.condition || "9/10"}`;
    document.getElementById('qv-p2p').innerText = product.p2p || '--';
    document.getElementById('qv-length').innerText = product.length || '--';
    document.getElementById('qv-shoulder').innerText = product.shoulder || '--';
    document.getElementById('qv-sleeve').innerText = product.sleeve || '--';
    document.getElementById('qv-desc').innerText = product.desc || 'No description available.';

    // Dudugtungan ang Add Button ng modal sa existing addToCart function mo
    const addBtn = document.getElementById('qv-add-btn');
    addBtn.onclick = function() {
        addToCart(product.id);
        closeQuickView();
    };

    // Tatanggalin ang 'hidden' class para lumitaw ang modal
    document.getElementById('quickview-modal').classList.remove('hidden');
}

// Function para isara ang modal
function closeQuickView() {
    document.getElementById('quickview-modal').classList.add('hidden');
}

// Function para harangin ang SQL Injection at XSS characters
function sanitizeInput(text) {
    if (!text) return '';
    return text
    .replace(/['"';\-]/g, '') // Tinatanggal ang ', ", `, ;, at - (mga karaniwang karakter sa SQL injection")
    .replace(/</g, '&lt;') // Pinipigilan ang HTML tags (<)
    .replace(/>/g, '&gt;') // Pinipigilan ang HTML tags (>)
    .trim()                // Tinatanggal ang mga extrang spaces
}

// Side Cart Toggle Listeners
cartBtn.addEventListener('click', () => cartSidebar.classList.remove('translate-x-full'));
closeCart.addEventListener('click', () => cartSidebar.classList.add('translate-x-full'));

// Initial Execution
renderProducts();
// Start sa Home
showPage('home');   