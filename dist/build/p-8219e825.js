import{a as n}from"./p-e55c60b3.js";const t={},e={};async function o(n){return await r(`${n}-cell.svg`)}async function a(n){return await r(`${n}.svg`)}async function r(o){if(t[o])return t[o];e[o]||(e[o]=fetch(`${(t=>{if("undefined"!=typeof window&&window.__LD_ASSET_PATH__){let n=t;return t.startsWith("./")&&(n=t.substring(2)),window.__LD_ASSET_PATH__.endsWith("/")||(n="/"+n),window.__LD_ASSET_PATH__+n}return n(t)})("./assets")}/${o}`).then((n=>n.text())).catch((n=>(console.error(`"${o}" could not be fetched`,n),""))));const a=await e[o];return t[o]=a,a}export{a,o as f}