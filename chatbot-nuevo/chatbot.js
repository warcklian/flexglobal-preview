// Chatbot Inteligente - FlexGlobal
// Reemplazo del servicio externo con Q&A mejorado

class FlexGlobalChatbot {
    constructor() {
        this.conversation = [];
        this.currentContext = null;
        this.knowledgeBase = this.initializeKnowledgeBase();
        this.init();
    }

    initializeKnowledgeBase() {
        return {
            planes: {
                keywords: ['planes', 'seguros', 'obamacare', 'aca', 'cobertura médica'],
                response: {
                    text: `🩺 **Planes de Salud FlexGlobal**

Seguros médicos completos bajo ACA:
• Cobertura médica integral sin límites anuales
• Red nacional de hospitales y médicos especializados
• Medicamentos recetados con descuentos significativos
• Atención preventiva sin costo adicional
• Servicios de emergencia 24/7

<button class="btn-contactar-asesor btn btn-sm btn-primary mt-2">💬 Contactar Asesor</button>`,
                    related: ['ver_cobertura', 'costos', 'preexistentes', 'familia']
                }
            },
            contactar: {
                keywords: ['contactar', 'asesor', 'hablar con alguien', 'ayuda personalizada'],
                response: {
                    text: `🤝 **¿Listo para hablar con un asesor?**

Nuestros asesores están disponibles para ayudarte a elegir el plan perfecto para ti y tu familia.

**Opciones de contacto:**
📞 **Línea directa:** 1-800-FLEXGLOBAL (1-800-353-9462)
💬 **Chat en vivo:** Disponible 24/7
📧 **Correo:** info@flexglobal.com
📅 **Agendar cita:** flexglobal.com/citas`,
                    related: ['planes', 'aplicar', 'costos']
                }
            },
            ver_cobertura: {
                keywords: ['ver_cobertura', 'detalles cobertura', 'qué incluye'],
                response: {
                    text: `📋 **Cobertura Completa**

Nuestros planes incluyen:
• Consultas médicas y especialistas
• Hospitalización y cirugías
• Medicamentos recetados
• Servicios de emergencia
• Maternidad y bienestar
• Salud mental y conductual

<button class="btn-contactar-asesor btn btn-sm btn-primary mt-2">💬 Contactar Asesor</button>`,
                    related: ['red', 'medicamentos', 'dental', 'vision']
                }
            },
            cobertura: {
                keywords: ['cobertura', 'qué cubre', 'beneficios', 'servicios'],
                response: {
                    text: `📋 **Cobertura Completa**

• Consultas médicas y especialistas
• Hospitalización y cirugías
• Medicamentos recetados
• Servicios de emergencia
• Maternidad y bienestar
• Salud mental y conductual
• Red nacional de 500,000+ proveedores

<button class="btn-contactar-asesor btn btn-sm btn-primary mt-2">💬 Contactar Asesor</button>`,
                    related: ['red', 'medicamentos', 'dental', 'vision']
                }
            },
            red: {
                keywords: ['red', 'hospitales', 'doctores', 'proveedores', 'dónde atienden'],
                response: {
                    text: `🏥 **Red Nacional de Proveedores**

500,000+ médicos y hospitales en todo EE.UU. Incluye hospitales principales, especialistas certificados y clínicas cercanas.

<button class="btn-contactar-asesor btn btn-sm btn-primary mt-2">💬 Contactar Asesor</button>`,
                    related: ['planes', 'cobertura', 'especialistas']
                }
            },
            preexistentes: {
                keywords: ['preexistente', 'enfermedad', 'condición', 'diabetes', 'asma', 'cáncer'],
                response: {
                    text: `💙 **Condiciones Preexistentes**

¡Todas cubiertas por ley! Diabetes, hipertensión, cáncer, enfermedades del corazón y más. Sin período de espera ni cargos extras.

<button class="btn-contactar-asesor btn btn-sm btn-primary mt-2">💬 Contactar Asesor</button>`,
                    related: ['planes', 'costos', 'cobertura']
                }
            },
            familia: {
                keywords: ['familia', 'esposo', 'esposa', 'hijos', 'dependientes', 'cobertura familiar'],
                response: {
                    text: `👨‍👩‍👧‍👦 **Cobertura Familiar**

Protege a cónyuge, hijos hasta 26 años y dependientes. Descuentos familiares, cobertura pediátrica completa y beneficios maternidad.

<button class="btn-contactar-asesor btn btn-sm btn-primary mt-2">💬 Contactar Asesor</button>`,
                    related: ['planes', 'dental', 'vision', 'costos']
                }
            },
            dental: {
                keywords: ['dental', 'dentista', 'odontología', 'dientes', 'limpieza'],
                response: {
                    text: `🦷 **Cobertura Dental**

Limpiezas, rayos X, empastes incluidos. Planes premium con ortodoncia, implantes y más. 100,000+ dentistas disponibles.

<button class="btn-contactar-asesor btn btn-sm btn-primary mt-2">💬 Contactar Asesor</button>`,
                    related: ['vision', 'planes', 'cobertura']
                }
            },
            vision: {
                keywords: ['vision', 'ojos', 'óptica', 'gafas', 'lentes', 'oftalmólogo'],
                response: {
                    text: `👓 **Cobertura de Visión**

Exámenes anuales, gafas completas, lentes de contacto y descuentos LASIK. 30,000+ especialistas en red.

<button class="btn-contactar-asesor btn btn-sm btn-primary mt-2">💬 Contactar Asesor</button>`,
                    related: ['dental', 'planes', 'cobertura']
                }
            },
            costos: {
                keywords: ['costo', 'precio', 'cuánto cuesta', 'pago', 'dinero', 'subsidio'],
                response: {
                    text: `💰 **Costos y Subsidios**

Desde $0/mes con subsidios. Precio según plan (Bronce, Plata, Oro, Platino), ingresos y tamaño familiar. La mayoría califica para ayuda.

<button class="btn-contactar-asesor btn btn-sm btn-primary mt-2">💬 Contactar Asesor</button>`,
                    related: ['planes', 'aplicar', 'subsidios']
                }
            },
            aplicar: {
                keywords: ['aplicar', 'inscribirse', 'solicitud', 'cómo empezar', 'registro', 'comenzar'],
                response: {
                    text: `🚀 **¿Listo para Comenzar?**

Proceso simple en 3 pasos: información básica, cálculo de subsidios, selección de plan. Cobertura activa en 24-48 horas. Asesores en español disponibles.

<button class="btn-contactar-asesor btn btn-sm btn-primary mt-2">💬 Contactar Asesor</button>`,
                    related: ['costos', 'planes', 'contacto']
                }
            }
        };
    }

    init() {
        this.bindEvents();
        this.loadWelcomeMessage();
    }

    bindEvents() {
        const btnChatbot = document.getElementById('btnChatbot');
        const btnCerrarChat = document.getElementById('btnCerrarChat');
        const btnEnviar = document.getElementById('btnEnviar');
        const inputMensaje = document.getElementById('inputMensaje');

        btnChatbot.addEventListener('click', () => this.openChat());
        btnCerrarChat.addEventListener('click', () => this.closeChat());
        btnEnviar.addEventListener('click', () => this.sendMessage());
        inputMensaje.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.sendMessage();
        });

        // Eventos para botones de opciones
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('btn-opcion')) {
                const opcion = e.target.dataset.opcion;
                this.handleOption(opcion);
            }
            if (e.target.classList.contains('btn-relacionada')) {
                const tema = e.target.dataset.tema;
                this.handleRelatedQuestion(tema);
            }
            if (e.target.classList.contains('btn-contactar-asesor')) {
                this.contactarAsesor();
            }
        });
    }

    openChat() {
        document.getElementById('btnChatbot').classList.add('d-none');
        document.getElementById('contenedorChatbot').classList.remove('d-none');
    }

    closeChat() {
        document.getElementById('btnChatbot').classList.remove('d-none');
        document.getElementById('contenedorChatbot').classList.add('d-none');
    }

    loadWelcomeMessage() {
        // Ya está en HTML, no necesita cargar dinámicamente
    }

    handleOption(opcion) {
        if (this.knowledgeBase[opcion]) {
            this.addUserMessage(this.getOptionText(opcion));
            this.addBotMessage(this.knowledgeBase[opcion].response);
        }
    }

    getOptionText(opcion) {
        const texts = {
            planes: 'Quiero conocer los planes de salud',
            cobertura: '¿Qué incluye la cobertura?',
            preexistentes: '¿Cubre enfermedades preexistentes?',
            familia: '¿Puedo incluir a mi familia?'
        };
        return texts[opcion] || opcion;
    }

    sendMessage() {
        const input = document.getElementById('inputMensaje');
        const message = input.value.trim();
        
        if (!message) return;

        this.addUserMessage(message);
        input.value = '';

        // Buscar respuesta en base de conocimientos
        const response = this.findResponse(message);
        setTimeout(() => {
            this.addBotMessage(response);
        }, 600);
    }

    findResponse(message) {
        const lowerMessage = message.toLowerCase();
        
        for (const [key, data] of Object.entries(this.knowledgeBase)) {
            if (data.keywords.some(keyword => lowerMessage.includes(keyword))) {
                return data.response;
            }
        }

        // Respuesta por defecto
        return {
            text: `🤔 **Entiendo tu pregunta**

Lamento no tener una respuesta específica para eso en este momento. Permíteme conectarte con uno de nuestros asesores expertos que podrá ayudarte personalmente.

**¿Prefieres que te llamemos o prefieres agendar una consulta?**

📞 **Línea directa:** (800) 555-0123
📅 **Agendar consulta:** Disponible 24/7

Nuestros asesores hablan español y están listos para resolver todas tus dudas.`,
            related: ['planes', 'aplicar', 'costos']
        };
    }

    addUserMessage(text) {
        const messagesContainer = document.getElementById('chatMessages');
        const messageDiv = document.createElement('div');
        messageDiv.className = 'mensaje-usuario mensaje-entrada';
        messageDiv.innerHTML = text;
        messagesContainer.appendChild(messageDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    addBotMessage(response) {
        const messagesContainer = document.getElementById('chatMessages');
        
        // Mensaje principal
        const messageDiv = document.createElement('div');
        messageDiv.className = 'mensaje-bot mensaje-entrada';
        messageDiv.innerHTML = response.text;
        messagesContainer.appendChild(messageDiv);

        // Preguntas relacionadas
        if (response.related && response.related.length > 0) {
            const relatedDiv = document.createElement('div');
            relatedDiv.className = 'respuestas-relacionadas';
            
            response.related.forEach(tema => {
                if (this.knowledgeBase[tema]) {
                    const btn = document.createElement('button');
                    btn.className = 'btn-relacionada';
                    btn.dataset.tema = tema;
                    btn.textContent = this.getRelatedButtonText(tema);
                    relatedDiv.appendChild(btn);
                }
            });
            
            messagesContainer.appendChild(relatedDiv);
        }

        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    getRelatedButtonText(tema) {
        const texts = {
            planes: 'Ver Planes',
            cobertura: 'Detalles de Cobertura',
            preexistentes: 'Preexistentes',
            familia: 'Plan Familiar',
            dental: 'Dental y Visión',
            costos: 'Ver Precios',
            aplicar: 'Cómo Aplicar'
        };
        return texts[tema] || tema;
    }

    handleRelatedQuestion(tema) {
        if (this.knowledgeBase[tema]) {
            this.addUserMessage(`Más información sobre: ${this.getRelatedButtonText(tema)}`);
            this.addBotMessage(this.knowledgeBase[tema].response);
        }
    }

    contactarAsesor() {
        this.addUserMessage('Quiero hablar con un asesor');
        this.addBotMessage(this.knowledgeBase.contactar.response);
    }
}

// Inicializar el chatbot cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    new FlexGlobalChatbot();
});