import os from 'os'
import util from 'util'
import sizeFormatter from 'human-readable'
import MessageType from '@adiwajshing/baileys'
import fs from 'fs'
import { performance } from 'perf_hooks'
let handler = async (m, { conn, usedPrefix }) => {
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime) 
let totalreg = Object.keys(global.db.data.users).length
const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats)
const groupsIn = chats.filter(([id]) => id.endsWith('@g.us'))
const groups = chats.filter(([id]) => id.endsWith('@g.us'))
const used = process.memoryUsage()
const { restrict } = global.db.data.settings[conn.user.jid] || {}
const { autoread } = global.opts
const grup = './Menu2.jpg'
let old = performance.now()
let neww = performance.now()
let speed = (neww - old).toFixed(5)
let text = `


┌──⭓ 𝐌𝐄𝐃𝐈𝐀
│⭔ .attp (txt)
│⭔ .ttp (txt)
│⭔ .gtts (txt)
│⭔ .dado
│⭔ .sticker / s (foto/video)
│⭔ .wm (sticker)
│⭔ .emojimix (emoji+emoji)
│⭔ .play (canzone)
│⭔ .playdoc (canzone)
│⭔ .playlist (canzone)
│⭔ .pinterest / cerca 
│⭔ .whatmusic (audio)
│⭔ .qrcode (txt)
│⭔ .leggi (foto)
│⭔ .styletext (txt)
│⭔ .destrava
│⭔ .tovideo (sticker)
│⭔ .togif (sticker)
│⭔ .togifaud (video)
│⭔ .tomp3 (video/audio)
│⭔ .toaudio (video/audio)
│⭔ .toptt (video)
│⭔ .tourl (foto/video)
└───────⭓
𝐕𝐄𝐋𝐎𝐂𝐈𝐓𝐀': ${speed} 𝐬𝐞𝐜𝐨𝐧𝐝𝐢
✦✧✧𝐁Ꮻ𝐓 ✧✧✦ 
`.trim() 
conn.sendFile(m.chat, grup, 'errop.jpg', text, m, false, )
}
handler.help = ['menu']
handler.tags = ['menu']
handler.command = /^(menumedia)$/i
export default handler

function clockString(ms) {
let h = Math.floor(ms / 3600000)
let m = Math.floor(ms / 60000) % 60
let s = Math.floor(ms / 1000) % 60
console.log({ms,h,m,s})
return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')}