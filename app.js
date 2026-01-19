/* ============================================
   ROJO MALBEC BLEND BUILDER - APP LOGIC
   ============================================ */

// Estado de la app
const state = {
    currentScreen: 'home',
    selectedIngredients: [],
    currentFilter: 'todos',
    currentIngredient: null
};

// Número de WhatsApp para pedidos (Rojo Malbec)
const WHATSAPP_NUMBER = '5493544308380';

// ============================================
// DOM Elements
// ============================================
const screens = {
    home: document.getElementById('screen-home'),
    explore: document.getElementById('screen-explore'),
    blend: document.getElementById('screen-blend'),
    order: document.getElementById('screen-order')
};

const elements = {
    ingredientsGrid: document.getElementById('ingredientsGrid'),
    blendList: document.getElementById('blendList'),
    blendEmpty: document.getElementById('blendEmpty'),
    blendSummary: document.getElementById('blendSummary'),
    blendBadge: document.getElementById('blendBadge'),
    btnOrder: document.getElementById('btnOrder'),
    ingredientCount: document.getElementById('ingredientCount'),
    profileTags: document.getElementById('profileTags'),
    selectedList: document.getElementById('selectedList'),
    modal: document.getElementById('ingredientModal')
};

// ============================================
// Navigation
// ============================================
function navigateTo(screenName) {
    // Ocultar todas las pantallas
    Object.values(screens).forEach(s => s.classList.remove('active'));

    // Mostrar la pantalla seleccionada
    screens[screenName].classList.add('active');

    // Actualizar navegación
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.toggle('active', item.dataset.screen === screenName);
    });

    state.currentScreen = screenName;

    // Actualizar contenido si es necesario
    if (screenName === 'explore') {
        renderIngredients();
    } else if (screenName === 'blend') {
        renderBlend();
    } else if (screenName === 'order') {
        renderOrderSummary();
    }
}

// Event listeners para navegación
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', () => navigateTo(item.dataset.screen));
});

document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', () => {
        state.currentFilter = card.dataset.category;
        navigateTo('explore');
    });
});

document.getElementById('btnStartBlend').addEventListener('click', () => navigateTo('explore'));
document.getElementById('btnBackFromExplore').addEventListener('click', () => navigateTo('home'));
document.getElementById('btnBackFromBlend').addEventListener('click', () => navigateTo('explore'));
document.getElementById('btnBackFromOrder').addEventListener('click', () => navigateTo('blend'));
document.getElementById('btnGoExplore').addEventListener('click', () => navigateTo('explore'));
document.getElementById('btnOrder')?.addEventListener('click', () => navigateTo('order'));

// ============================================
// Filters
// ============================================
document.getElementById('filtersRow').addEventListener('click', (e) => {
    if (e.target.classList.contains('filter-chip')) {
        document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
        e.target.classList.add('active');
        state.currentFilter = e.target.dataset.filter;
        renderIngredients();
    }
});

// ============================================
// Render Ingredients
// ============================================
function renderIngredients() {
    const grid = elements.ingredientsGrid;
    let filtered = INGREDIENTES;

    // Aplicar filtro
    if (state.currentFilter !== 'todos') {
        if (['sales', 'hierbas', 'especias', 'citricos', 'flores', 'ahumados', 'tes'].includes(state.currentFilter)) {
            filtered = INGREDIENTES.filter(i => i.categoria === state.currentFilter);
        } else {
            filtered = INGREDIENTES.filter(i => i.perfiles.includes(state.currentFilter));
        }
    }

    grid.innerHTML = filtered.map(ing => {
        const isSelected = state.selectedIngredients.some(s => s.id === ing.id);
        const perfilTag = ing.perfiles[0] ? `${PERFIL_ICONS[ing.perfiles[0]] || ''} ${ing.perfiles[0]}` : '';

        return `
            <div class="ingredient-card ${isSelected ? 'selected' : ''}" data-id="${ing.id}">
                <div class="ingredient-image" style="display:flex;align-items:center;justify-content:center;font-size:3rem;">
                    ${ing.icono}
                </div>
                <div class="ingredient-info">
                    <div class="ingredient-name">${ing.nombre}</div>
                    <div class="ingredient-tag">${perfilTag}</div>
                </div>
            </div>
        `;
    }).join('');

    // Agregar event listeners
    grid.querySelectorAll('.ingredient-card').forEach(card => {
        card.addEventListener('click', () => openIngredientModal(parseInt(card.dataset.id)));
    });
}

// ============================================
// Modal
// ============================================
function openIngredientModal(id) {
    const ing = INGREDIENTES.find(i => i.id === id);
    if (!ing) return;

    state.currentIngredient = ing;

    document.getElementById('modalIcon').textContent = ing.icono;
    document.getElementById('modalTitle').textContent = ing.nombre;
    document.getElementById('modalFamilia').textContent = ing.familia;
    document.getElementById('modalOrigen').textContent = ing.origen;
    document.getElementById('modalDescripcion').textContent = ing.descripcion;

    const perfilTags = ing.perfiles.map(p =>
        `<span class="profile-tag">${PERFIL_ICONS[p] || ''} ${p}</span>`
    ).join('');
    document.getElementById('modalPerfil').innerHTML = perfilTags;

    // Actualizar botón según estado
    const isSelected = state.selectedIngredients.some(s => s.id === ing.id);
    const btn = document.getElementById('modalAddBtn');
    btn.textContent = isSelected ? '✓ Ya está en tu blend' : '+ Agregar a mi blend';
    btn.style.background = isSelected ? '#ccc' : '';

    elements.modal.classList.add('active');
}

function closeModal() {
    elements.modal.classList.remove('active');
    state.currentIngredient = null;
}

document.getElementById('modalClose').addEventListener('click', closeModal);
elements.modal.addEventListener('click', (e) => {
    if (e.target === elements.modal) closeModal();
});

document.getElementById('modalAddBtn').addEventListener('click', () => {
    if (state.currentIngredient) {
        toggleIngredient(state.currentIngredient);
        closeModal();
    }
});

// ============================================
// Blend Management
// ============================================
function toggleIngredient(ing) {
    const index = state.selectedIngredients.findIndex(s => s.id === ing.id);

    if (index > -1) {
        state.selectedIngredients.splice(index, 1);
    } else {
        state.selectedIngredients.push(ing);
    }

    updateBadge();
    renderIngredients();
}

function removeFromBlend(id) {
    state.selectedIngredients = state.selectedIngredients.filter(i => i.id !== id);
    updateBadge();
    renderBlend();
}

function updateBadge() {
    const count = state.selectedIngredients.length;
    elements.blendBadge.textContent = count;
    elements.blendBadge.style.display = count > 0 ? 'flex' : 'none';
}

function renderBlend() {
    const list = elements.blendList;
    const empty = elements.blendEmpty;
    const summary = elements.blendSummary;
    const btnOrder = elements.btnOrder;

    if (state.selectedIngredients.length === 0) {
        empty.style.display = 'block';
        list.innerHTML = '';
        summary.style.display = 'none';
        btnOrder.style.display = 'none';
        return;
    }

    empty.style.display = 'none';
    summary.style.display = 'block';
    btnOrder.style.display = 'flex';

    // Renderizar lista
    list.innerHTML = state.selectedIngredients.map(ing => `
        <div class="blend-item">
            <div class="blend-item-icon">${ing.icono}</div>
            <div class="blend-item-name">${ing.nombre}</div>
            <button class="blend-item-remove" data-id="${ing.id}">×</button>
        </div>
    `).join('');

    // Event listeners para remover
    list.querySelectorAll('.blend-item-remove').forEach(btn => {
        btn.addEventListener('click', () => removeFromBlend(parseInt(btn.dataset.id)));
    });

    // Actualizar resumen
    elements.ingredientCount.textContent = state.selectedIngredients.length;

    // Perfiles únicos
    const allProfiles = [...new Set(state.selectedIngredients.flatMap(i => i.perfiles))];
    elements.profileTags.innerHTML = allProfiles.map(p =>
        `<span class="profile-tag">${PERFIL_ICONS[p] || ''} ${p}</span>`
    ).join('');
}

// ============================================
// Order Form
// ============================================
function renderOrderSummary() {
    elements.selectedList.innerHTML = state.selectedIngredients.map(ing =>
        `<span style="display:inline-block;margin:3px;padding:3px 8px;background:white;border-radius:8px;">${ing.icono} ${ing.nombre}</span>`
    ).join('');
}

document.getElementById('orderForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre = document.getElementById('inputName').value;
    const uso = document.getElementById('inputUso').value;
    const cantidad = document.getElementById('inputCantidad').value;
    const notas = document.getElementById('inputNotas').value;

    // Datos de etiqueta personalizada
    const nombreBlend = document.getElementById('inputLabelName')?.value || '';
    const creadoPor = document.getElementById('inputLabelCreator')?.value || '';

    const ingredientesTexto = state.selectedIngredients
        .map(i => `• ${i.nombre}`)
        .join('\n');

    // Sección de etiqueta personalizada (solo si el cliente la completó)
    let etiquetaTexto = '';
    if (nombreBlend || creadoPor) {
        etiquetaTexto = `

🏷️ *ETIQUETA PERSONALIZADA:*
📦 Nombre del Blend: ${nombreBlend || '(no especificado)'}
✍️ Creado por: ${creadoPor || '(no especificado)'}`;
    }

    const mensaje = `🌶️ *PEDIDO BLEND PERSONALIZADO*
━━━━━━━━━━━━━━━━━━━━━━━━
👤 *Cliente:* ${nombre}
📦 *Uso:* ${uso}
⚖️ *Cantidad:* ${cantidad}

🧪 *Ingredientes seleccionados:*
${ingredientesTexto}${etiquetaTexto}

📝 *Notas:* ${notas || 'Sin notas adicionales'}

━━━━━━━━━━━━━━━━━━━━━━━━
_Enviado desde Rojo Malbec Blend Builder_`;

    const mensajeEncoded = encodeURIComponent(mensaje);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${mensajeEncoded}`;

    window.open(url, '_blank');
});

// ============================================
// Service Worker Registration
// ============================================
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(reg => console.log('Service Worker registrado'))
            .catch(err => console.log('Error SW:', err));
    });
}

// ============================================
// Initialize
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    updateBadge();
    navigateTo('home');
});
