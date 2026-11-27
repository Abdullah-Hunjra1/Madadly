// (function () {
//     const api_Url = 'https://madadly-website.vercel.app/api/chat';

//     const scriptTag = document.currentScript;
//     const ownerId = scriptTag.getAttribute('data-owner-id')

//     if (!ownerId) {
//         console.log('Owner Id is not found')
//     }

//     const button = document.createElement('div')
//     button.innerHTML = '🗨️'


//     Object.assign(button.style, {
//         position: 'fixed',
//         bottom: '24px',
//         right: '24px',
//         width: '56px',
//         height: '56px',
//         borderRadius: '50%',
//         background: '#000',
//         color: '#fff',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         cursor: 'pointer',
//         fontSize: '22px',
//         boxShadow: '0 15px 40px rgba(0,0,0,0.35)',
//         zIndex: '999999',
//     })
//     document.body.appendChild(button)

//     const box = document.createElement("div")
//     Object.assign(box.style, {
//         position: "fixed",
//         bottom: "90px",
//         right: "24px",
//         width: "320px",
//         height: "420px",
//         background: "#fff",
//         borderRadius: "14px",
//         boxShadow: "0 25px 60px rgba(0,0,0,0.25)",
//         display: "none",
//         flexDirection: "column",
//         overflow: "hidden",
//         zIndex: "999999",
//         fontFamily: "Inter, system-ui, sans-serif",
//     })

//     box.innerHTML = `<div style="
//     background:#000;
//     color:#fff;
//     padding:12px 14px;
//     font-size:14px;
//     display:flex;
//     justify-content:space-between;
//     align-items:center;
//     ">
//   <span>Customer Support</span>
//   <span id="chat-close" style="cursor:pointer;font-size:16px">✕</span>

//   <div id="chat-messages" style="
//         flex:1;
//         padding:12px;
//         overflow-y:auto;
//         background:#f9fafb;
//         display:flex;
//         flex-direction:column;
//    "></div>

//     <div style="
//     display:flex;
//     border-top:1px solid #e5e7eb;
//     padding:8px;
//     gap:6px;
//     ">
//   <input id=""chat-input type="text" placeholder="Type a message" 
//      style="
//       flex:1;
//       border:1px solid #d1d5db;
//       border-radius:8px;
//       padding:8px 10px;
//       font-size:13px;
//       outline:none;
//   "/>
//   <button id=""chat-send style="
//       background:#000;
//       color:#fff;
//       border:none;
//       border-radius:8px;
//       padding:8px 14px;
//       font-size:13px;
//       cursor:pointer;
//   ">Send</button>
// </div>

//       </div>`


//     document.body.appendChild(box)

//     button.onclick = () => {
//         box.style.display = box.style.display === 'none' ? 'flex' : 'none'
//     }

//     document.querySelector('#chat-close').onclick = () => {
//         box.style.display = 'none'
//     }

//     const input = document.querySelector('#chat-input')
//     const sendBtn = document.querySelector('#chat-send')
//     const messageArea = document.querySelector('#chat-messages')


//     function addMessage(text, from) {
//         const bubble = document.createElement("div")
//         bubble.innerHTML = text
//         Object.assign(bubble.style, {
//             maxWidth: "78%",
//             padding: "8px 12px",
//             borderRadius: "14px",
//             fontSize: "13px",
//             lineHeight: "1.4",
//             marginBottom: "8px",
//             alignSelf: from === "user" ? "flex-end" : "flex-start",
//             background: from === "user" ? "#000" : "#e5e7eb",
//             color: from === "user" ? "#fff" : "#111",

//             /* bubble direction polish */
//             borderTopRightRadius: from === "user" ? "4px" : "14px",
//             borderTopLeftRadius: from === "user" ? "14px" : "4px",
//         })
//         messageArea.appendChild(bubble)
//         messageArea.scrollTop = messageArea.scrollHeight
//     }

//     sendBtn.onclick = async () => {
//         const text = input.value.trim()
//         if (!text) {
//             return
//         }
//         addMessage(text, 'user')
//         input.value('')

//         const typing = document.createElement('div')
//         typing.innerHTML = 'Typing...'

//         Object.assign(typing.style, {
//             fontSize: "12px",
//             color: "#6b7280",
//             marginBottom: "8px",
//             alignSelf: "flex-start",
//         })
//         messageArea.appendChild(typing)
//         messageArea.scrollTop = messageArea.scrollHeight

//         try {
//             const response = await fetch(api_Url, {
//                 method: 'POST',
//                 headers: { 'content-Type': 'application/json' },
//                 body: JSON.stringify({
//                     ownerId, message: text
//                 })
//             })

//             const data = await response.json()
//             messageArea.removeChild(typing)
//             addMessage(data || 'Something went wrong', 'ai')
//         } catch (error) {
//             console.log(error)
//             messageArea.removeChild(typing)
//             addMessage(data || 'Something went wrong', 'ai')
//         }
//     }



// })()











// (function () {
//     const api_Url = 'http://localhost:3000/api/chat';

//     const scriptTag = document.currentScript;
//     const ownerId = scriptTag.getAttribute('data-owner-id')

//     if (!ownerId) {
//         console.log('Owner Id is not found')
//     }

//     // The widget lives in a Shadow DOM so the host website's CSS cannot break it
//     // (and ours cannot leak into the host website).
//     const host = document.createElement('div')
//     host.id = 'madadly-chat-widget'
//     document.body.appendChild(host)
//     const root = host.attachShadow({ mode: 'open' })

//     root.innerHTML = `
// <style>
//   :host { all: initial; }
//   *, *::before, *::after { box-sizing: border-box; }

//   .launcher {
//     position: fixed; bottom: 24px; right: 24px;
//     width: 56px; height: 56px; padding: 0; border: none; border-radius: 50%;
//     background: #0F5C54; color: #fff; cursor: pointer;
//     display: flex; align-items: center; justify-content: center;
//     box-shadow: 0 10px 30px rgba(15,92,84,.35), 0 2px 6px rgba(0,0,0,.12);
//     z-index: 999999;
//     transition: transform .2s cubic-bezier(.22,1,.36,1), background-color .2s;
//     animation: launcherIn .5s .3s cubic-bezier(.22,1,.36,1) backwards;
//   }
//   .launcher:hover { transform: scale(1.06); background: #0B4A44; }
//   .launcher:active { transform: scale(.96); }
//   .launcher svg {
//     position: absolute; width: 24px; height: 24px;
//     transition: transform .3s cubic-bezier(.22,1,.36,1), opacity .2s;
//   }
//   .launcher .ic-close { opacity: 0; transform: rotate(-90deg) scale(.6); }
//   .launcher.open .ic-chat { opacity: 0; transform: rotate(90deg) scale(.6); }
//   .launcher.open .ic-close { opacity: 1; transform: none; }

//   .box {
//     position: fixed; bottom: 92px; right: 24px;
//     width: 360px; height: 520px; max-height: calc(100vh - 120px);
//     display: flex; flex-direction: column; overflow: hidden;
//     background: #fff; border: 1px solid #E4E0D8; border-radius: 16px;
//     box-shadow: 0 24px 60px -12px rgba(27,31,30,.28), 0 4px 12px rgba(27,31,30,.08);
//     font-family: Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif;
//     color: #1B1F1E; z-index: 999999;
//     opacity: 0; visibility: hidden; transform: translateY(16px) scale(.96);
//     transform-origin: bottom right;
//     transition: opacity .22s ease, transform .3s cubic-bezier(.22,1,.36,1), visibility 0s linear .3s;
//   }
//   .box.open {
//     opacity: 1; visibility: visible; transform: none;
//     transition: opacity .22s ease, transform .3s cubic-bezier(.22,1,.36,1), visibility 0s;
//   }

//   .head {
//     display: flex; align-items: center; gap: 10px;
//     padding: 14px 14px 14px 16px; background: #0F5C54; color: #fff;
//   }
//   .avatar {
//     width: 36px; height: 36px; flex: none; border-radius: 50%;
//     background: rgba(255,255,255,.16);
//     display: flex; align-items: center; justify-content: center;
//     font-weight: 700; font-size: 15px;
//   }
//   .title { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 2px; }
//   .name { font-size: 14px; font-weight: 600; line-height: 1.2; }
//   .status { display: flex; align-items: center; gap: 6px; font-size: 11.5px; color: rgba(255,255,255,.75); }
//   .status i { width: 6px; height: 6px; border-radius: 50%; background: #6ee7a8; }
//   .close {
//     width: 32px; height: 32px; flex: none; padding: 0; border: none; border-radius: 8px;
//     background: transparent; color: rgba(255,255,255,.8); cursor: pointer;
//     display: flex; align-items: center; justify-content: center;
//     transition: background-color .15s, color .15s;
//   }
//   .close:hover { background: rgba(255,255,255,.14); color: #fff; }

//   .messages {
//     flex: 1; padding: 16px; overflow-y: auto; background: #F7F5F1;
//     display: flex; flex-direction: column; gap: 8px; scroll-behavior: smooth;
//   }
//   .messages:empty::before {
//     content: "Ask a question to get started";
//     margin: auto; font-size: 13px; color: #8A908D; text-align: center;
//   }
//   .msg {
//     max-width: 82%; padding: 9px 13px; border-radius: 16px;
//     font-size: 14px; line-height: 1.5; word-wrap: break-word;
//     animation: pop .28s cubic-bezier(.22,1,.36,1);
//   }
//   .msg.user { align-self: flex-end; background: #0F5C54; color: #fff; border-top-right-radius: 4px; }
//   .msg.ai { align-self: flex-start; background: #fff; color: #1B1F1E; border: 1px solid #E4E0D8; border-top-left-radius: 4px; }

//   .typing {
//     align-self: flex-start; display: flex; gap: 4px; padding: 12px 14px;
//     background: #fff; border: 1px solid #E4E0D8; border-radius: 16px; border-top-left-radius: 4px;
//     animation: pop .28s cubic-bezier(.22,1,.36,1);
//   }
//   .typing i { width: 6px; height: 6px; border-radius: 50%; background: #8A908D; animation: bounce 1s infinite; }
//   .typing i:nth-child(2) { animation-delay: .15s; }
//   .typing i:nth-child(3) { animation-delay: .3s; }

//   .composer { display: flex; gap: 8px; padding: 12px; border-top: 1px solid #E4E0D8; background: #fff; }
//   .composer input {
//     flex: 1; min-width: 0; height: 42px; padding: 0 12px;
//     border: 1px solid #E4E0D8; border-radius: 10px; background: #fff;
//     font: inherit; font-size: 14px; color: #1B1F1E; outline: none;
//     transition: border-color .15s, box-shadow .15s;
//   }
//   .composer input::placeholder { color: #8A908D; }
//   .composer input:focus { border-color: #2E8F83; box-shadow: 0 0 0 3px rgba(46,143,131,.2); }
//   .composer button {
//     width: 42px; height: 42px; flex: none; padding: 0; border: none; border-radius: 10px;
//     background: #0F5C54; color: #fff; cursor: pointer;
//     display: flex; align-items: center; justify-content: center;
//     transition: background-color .15s, transform .15s;
//   }
//   .composer button:hover { background: #0B4A44; }
//   .composer button:active { transform: scale(.94); }
//   .powered { padding: 0 0 10px; background: #fff; text-align: center; font-size: 11px; color: #8A908D; }

//   svg { fill: none; stroke: currentColor; stroke-width: 1.9; stroke-linecap: round; stroke-linejoin: round; }

//   @keyframes pop { from { opacity: 0; transform: translateY(8px) scale(.98); } to { opacity: 1; transform: none; } }
//   @keyframes bounce { 0%, 60%, 100% { transform: translateY(0); opacity: .5; } 30% { transform: translateY(-3px); opacity: 1; } }
//   @keyframes launcherIn { from { opacity: 0; transform: scale(.6); } to { opacity: 1; transform: none; } }

//   @media (max-width: 480px) {
//     .launcher { bottom: 16px; right: 16px; }
//     .box { left: 12px; right: 12px; bottom: 84px; width: auto; height: min(560px, calc(100vh - 110px)); }
//     .composer input { font-size: 16px; }
//   }
//   @media (prefers-reduced-motion: reduce) {
//     *, *::before, *::after { animation-duration: .01ms !important; transition-duration: .01ms !important; }
//   }
// </style>

// <button id="chat-toggle" class="launcher" aria-label="Open chat" aria-expanded="false">
//   <svg class="ic-chat" viewBox="0 0 24 24"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>
//   <svg class="ic-close" viewBox="0 0 24 24"><path d="M18 6 6 18M6 6l12 12"/></svg>
// </button>

// <div id="chat-box" class="box" role="dialog" aria-label="Customer Support chat">
//   <div class="head">
//     <div class="avatar">M</div>
//     <div class="title">
//       <span class="name">Customer Support</span>
//       <span class="status"><i></i>Online</span>
//     </div>
//     <button id="chat-close" class="close" aria-label="Close chat">
//       <svg width="16" height="16" viewBox="0 0 24 24"><path d="M18 6 6 18M6 6l12 12"/></svg>
//     </button>
//   </div>

//   <div id="chat-messages" class="messages"></div>

//   <div class="composer">
//     <input id="chat-input" type="text" placeholder="Type a message" />
//     <button id="chat-send" aria-label="Send message">
//       <svg width="18" height="18" viewBox="0 0 24 24"><path d="m5 12 7-7 7 7M12 19V5"/></svg>
//     </button>
//   </div>
//   <div class="powered">Powered by Madadly</div>
// </div>`

//     const button = root.querySelector('#chat-toggle')
//     const box = root.querySelector('#chat-box')

//     button.onclick = () => {
//         const isOpen = box.classList.toggle('open')
//         button.classList.toggle('open', isOpen)
//         button.setAttribute('aria-expanded', String(isOpen))
//     }

//     root.querySelector('#chat-close').onclick = () => {
//         box.classList.remove('open')
//         button.classList.remove('open')
//         button.setAttribute('aria-expanded', 'false')
//     }

//     const input = root.querySelector('#chat-input')
//     const sendBtn = root.querySelector('#chat-send')
//     const messageArea = root.querySelector('#chat-messages')


//     function addMessage(text, from) {
//         const bubble = document.createElement("div")
//         bubble.textContent = text
//         bubble.className = 'msg ' + (from === "user" ? 'user' : 'ai')
//         messageArea.appendChild(bubble)
//         messageArea.scrollTop = messageArea.scrollHeight
//     }

//     sendBtn.onclick = async () => {
//         const text = input.value.trim()
//         if (!text) {
//             return
//         }
//         addMessage(text, 'user')
//         input.value = ''

//         const typing = document.createElement('div')
//         typing.className = 'typing'
//         typing.innerHTML = '<i></i><i></i><i></i>'
//         messageArea.appendChild(typing)
//         messageArea.scrollTop = messageArea.scrollHeight

//         try {
//             const response = await fetch(api_Url, {
//                 method: 'POST',
//                 headers: { 'content-Type': 'application/json' },
//                 body: JSON.stringify({
//                     ownerId, message: text
//                 })
//             })

//             const data = await response.json()
//             messageArea.removeChild(typing)
//             if (!response.ok) {
//                 throw new Error(data.error || 'Failed to get response')
//             }

//             addMessage(data.reply || 'No response received', 'ai')
//         } catch (error) {
//             console.log(error)
//             if (typing.parentNode) messageArea.removeChild(typing)
//             addMessage('Something went wrong', 'ai')
//         }
//     }



// })()


















(function () {
    const api_Url = 'http://localhost:3000/api/chat';

    const markedScript = document.createElement('script')
    markedScript.src = 'https://cdn.jsdelivr.net/npm/marked/marked.min.js'
    document.head.appendChild(markedScript)

    const purifyScript = document.createElement('script')
    purifyScript.src = 'https://cdn.jsdelivr.net/npm/dompurify/dist/purify.min.js'
    document.head.appendChild(purifyScript)

    const scriptTag = document.currentScript;
    const ownerId = scriptTag.getAttribute('data-owner-id')


    if (!ownerId) {
        console.log('Owner Id is not found')
    }

    // The widget lives in a Shadow DOM so the host website's CSS cannot break it
    // (and ours cannot leak into the host website).
    const host = document.createElement('div')
    host.id = 'madadly-chat-widget'
    document.body.appendChild(host)
    const root = host.attachShadow({ mode: 'open' })

    root.innerHTML = `
<style>
  :host { all: initial; }
  *, *::before, *::after { box-sizing: border-box; }

  .launcher {
    position: fixed; bottom: 24px; right: 24px;
    width: 56px; height: 56px; padding: 0; border: none; border-radius: 50%;
    background: #0F5C54; color: #fff; cursor: pointer;
    display: flex; align-items: center; justify-content: center;
    box-shadow: 0 10px 30px rgba(15,92,84,.35), 0 2px 6px rgba(0,0,0,.12);
    z-index: 999999;
    transition: transform .2s cubic-bezier(.22,1,.36,1), background-color .2s;
    animation: launcherIn .5s .3s cubic-bezier(.22,1,.36,1) backwards;
  }
  .launcher:hover { transform: scale(1.06); background: #0B4A44; }
  .launcher:active { transform: scale(.96); }
  .launcher svg {
    position: absolute; width: 24px; height: 24px;
    transition: transform .3s cubic-bezier(.22,1,.36,1), opacity .2s;
  }
  .launcher .ic-close { opacity: 0; transform: rotate(-90deg) scale(.6); }
  .launcher.open .ic-chat { opacity: 0; transform: rotate(90deg) scale(.6); }
  .launcher.open .ic-close { opacity: 1; transform: none; }

  .tip {
    position: fixed; bottom: 36px; right: 92px; z-index: 999999;
    padding: 7px 12px; border-radius: 8px; background: #1B1F1E; color: #fff;
    font-family: Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif;
    font-size: 12.5px; font-weight: 500; line-height: 1.2; white-space: nowrap;
    box-shadow: 0 6px 18px rgba(27,31,30,.25); pointer-events: none;
    opacity: 0; transform: translateX(6px);
    transition: opacity .18s ease, transform .22s cubic-bezier(.22,1,.36,1);
  }
  .tip::after {
    content: ""; position: absolute; top: 50%; right: -4px; width: 8px; height: 8px;
    background: #1B1F1E; transform: translateY(-50%) rotate(45deg); border-radius: 1px;
  }
  .launcher:hover ~ .tip, .launcher:focus-visible ~ .tip { opacity: 1; transform: none; }
  .launcher.open ~ .tip { opacity: 0; }

  .box {
    position: fixed; bottom: 92px; right: 24px;
    width: 360px; height: 520px; max-height: calc(100vh - 120px);
    display: flex; flex-direction: column; overflow: hidden;
    background: #fff; border: 1px solid #E4E0D8; border-radius: 16px;
    box-shadow: 0 24px 60px -12px rgba(27,31,30,.28), 0 4px 12px rgba(27,31,30,.08);
    font-family: Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif;
    color: #1B1F1E; z-index: 999999;
    opacity: 0; visibility: hidden; transform: translateY(16px) scale(.96);
    transform-origin: bottom right;
    transition: opacity .22s ease, transform .3s cubic-bezier(.22,1,.36,1), visibility 0s linear .3s;
  }
  .box.open {
    opacity: 1; visibility: visible; transform: none;
    transition: opacity .22s ease, transform .3s cubic-bezier(.22,1,.36,1), visibility 0s;
  }

  .head {
    display: flex; align-items: center; gap: 10px;
    padding: 14px 14px 14px 16px; background: #0F5C54; color: #fff;
  }
  .avatar {
    width: 36px; height: 36px; flex: none; border-radius: 50%;
    background: rgba(255,255,255,.16);
    display: flex; align-items: center; justify-content: center;
    font-weight: 700; font-size: 15px;
  }
  .title { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 2px; }
  .name { font-size: 14px; font-weight: 600; line-height: 1.2; }
  .status { display: flex; align-items: center; gap: 6px; font-size: 11.5px; color: rgba(255,255,255,.75); }
  .status i { width: 6px; height: 6px; border-radius: 50%; background: #6ee7a8; }
  .close {
    width: 32px; height: 32px; flex: none; padding: 0; border: none; border-radius: 8px;
    background: transparent; color: rgba(255,255,255,.8); cursor: pointer;
    display: flex; align-items: center; justify-content: center;
    transition: background-color .15s, color .15s;
  }
  .close:hover { background: rgba(255,255,255,.14); color: #fff; }

  .messages {
    flex: 1; padding: 16px; overflow-y: auto; background: #F7F5F1;
    display: flex; flex-direction: column; gap: 8px; scroll-behavior: smooth;
  }
  .msg {
    max-width: 82%; padding: 9px 13px; border-radius: 16px;
    font-size: 14px; line-height: 1.5; word-wrap: break-word;
    animation: pop .28s cubic-bezier(.22,1,.36,1);
  }
  .msg.user { align-self: flex-end; background: #0F5C54; color: #fff; border-top-right-radius: 4px; }
  .msg.ai { align-self: flex-start; background: #fff; color: #1B1F1E; border: 1px solid #E4E0D8; border-top-left-radius: 4px; }

  .typing {
    align-self: flex-start; display: flex; gap: 4px; padding: 12px 14px;
    background: #fff; border: 1px solid #E4E0D8; border-radius: 16px; border-top-left-radius: 4px;
    animation: pop .28s cubic-bezier(.22,1,.36,1);
  }
  .typing i { width: 6px; height: 6px; border-radius: 50%; background: #8A908D; animation: bounce 1s infinite; }
  .typing i:nth-child(2) { animation-delay: .15s; }
  .typing i:nth-child(3) { animation-delay: .3s; }

  .composer { display: flex; gap: 8px; padding: 12px; border-top: 1px solid #E4E0D8; background: #fff; }
  .composer input {
    flex: 1; min-width: 0; height: 42px; padding: 0 12px;
    border: 1px solid #E4E0D8; border-radius: 10px; background: #fff;
    font: inherit; font-size: 14px; color: #1B1F1E; outline: none;
    transition: border-color .15s, box-shadow .15s;
  }
  .composer input::placeholder { color: #8A908D; }
  .composer input:focus { border-color: #2E8F83; box-shadow: 0 0 0 3px rgba(46,143,131,.2); }
  .composer button {
    width: 42px; height: 42px; flex: none; padding: 0; border: none; border-radius: 10px;
    background: #0F5C54; color: #fff; cursor: pointer;
    display: flex; align-items: center; justify-content: center;
    transition: background-color .15s, transform .15s;
  }
  .composer button:hover { background: #0B4A44; }
  .composer button:active { transform: scale(.94); }
  .powered { padding: 0 0 10px; background: #fff; text-align: center; font-size: 11px; color: #8A908D; }

  svg { fill: none; stroke: currentColor; stroke-width: 1.9; stroke-linecap: round; stroke-linejoin: round; }

  @keyframes pop { from { opacity: 0; transform: translateY(8px) scale(.98); } to { opacity: 1; transform: none; } }
  @keyframes bounce { 0%, 60%, 100% { transform: translateY(0); opacity: .5; } 30% { transform: translateY(-3px); opacity: 1; } }
  @keyframes launcherIn { from { opacity: 0; transform: scale(.6); } to { opacity: 1; transform: none; } }

  @media (max-width: 480px) {
    .launcher { bottom: 16px; right: 16px; }
    .tip { bottom: 28px; right: 84px; }
    .box { left: 12px; right: 12px; bottom: 84px; width: auto; height: min(560px, calc(100vh - 110px)); }
    .composer input { font-size: 16px; }
  }
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after { animation-duration: .01ms !important; transition-duration: .01ms !important; }
  }
</style>

<button id="chat-toggle" class="launcher" aria-label="Open chat" aria-expanded="false">
  <svg class="ic-chat" viewBox="0 0 24 24"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>
  <svg class="ic-close" viewBox="0 0 24 24"><path d="M18 6 6 18M6 6l12 12"/></svg>
</button>
<span class="tip" role="tooltip">AI Assistant</span>

<div id="chat-box" class="box" role="dialog" aria-label="Customer Support chat">
  <div class="head">
    <div class="avatar">M</div>
    <div class="title">
      <span class="name">Customer Support</span>
      <span class="status"><i></i>Online</span>
    </div>
    <button id="chat-close" class="close" aria-label="Close chat">
      <svg width="16" height="16" viewBox="0 0 24 24"><path d="M18 6 6 18M6 6l12 12"/></svg>
    </button>
  </div>

  <div id="chat-messages" class="messages"></div>

  <div class="composer">
    <input id="chat-input" type="text" placeholder="Type a message" />
    <button id="chat-send" aria-label="Send message">
      <svg width="18" height="18" viewBox="0 0 24 24"><path d="m5 12 7-7 7 7M12 19V5"/></svg>
    </button>
  </div>
  <div class="powered">Powered by Madadly</div>
</div>`

    const button = root.querySelector('#chat-toggle')
    const box = root.querySelector('#chat-box')

    // Default greeting, shown once the first time the chat is opened
    let greeted = false

    button.onclick = () => {
        const isOpen = box.classList.toggle('open')
        if (isOpen && !greeted) {
            greeted = true
            setTimeout(() => {
                addMessage("Hi there! I'm your AI assistant. How can I help you today?", 'ai')
            }, 350)
        }
        button.classList.toggle('open', isOpen)
        button.setAttribute('aria-expanded', String(isOpen))
    }

    root.querySelector('#chat-close').onclick = () => {
        box.classList.remove('open')
        button.classList.remove('open')
        button.setAttribute('aria-expanded', 'false')
    }

    const input = root.querySelector('#chat-input')
    const sendBtn = root.querySelector('#chat-send')
    const messageArea = root.querySelector('#chat-messages')


    function addMessage(text, from) {
        const bubble = document.createElement("div")

        if (from === "ai" && window.marked && window.DOMPurify) {
            const html = window.marked.parse(text)
            bubble.innerHTML = window.DOMPurify.sanitize(html)
        } else {
            bubble.textContent = text
        }

        bubble.className = 'msg ' + (from === "user" ? 'user' : 'ai')
        messageArea.appendChild(bubble)
        messageArea.scrollTop = messageArea.scrollHeight
    }

    sendBtn.onclick = async () => {
        const text = input.value.trim()
        if (!text) {
            return
        }
        addMessage(text, 'user')
        input.value = ''

        const typing = document.createElement('div')
        typing.className = 'typing'
        typing.innerHTML = '<i></i><i></i><i></i>'
        messageArea.appendChild(typing)
        messageArea.scrollTop = messageArea.scrollHeight

        try {
            const response = await fetch(api_Url, {
                method: 'POST',
                headers: { 'content-Type': 'application/json' },
                body: JSON.stringify({
                    ownerId, message: text
                })
            })

            const data = await response.json()
            messageArea.removeChild(typing)
            if (!response.ok) {
                throw new Error(data.error || 'Failed to get response')
            }

            addMessage(data.reply || 'No response received', 'ai')
        } catch (error) {
            console.log(error)
            if (typing.parentNode) messageArea.removeChild(typing)
            addMessage('Something went wrong', 'ai')
        }
    }

    input.onkeydown = (e) => {
        if (e.key === 'Enter' && !e.isComposing) {
            e.preventDefault()
            sendBtn.click()
        }
    }



})()


