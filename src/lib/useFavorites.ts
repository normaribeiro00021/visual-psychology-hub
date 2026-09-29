import { useSyncExternalStore } from 'react';
const listeners=new Set<()=>void>();let snapshot:string[]=[];
function subscribe(fn:()=>void){listeners.add(fn);return()=>{listeners.delete(fn)}}
function getSnapshot(){return snapshot}
function getServerSnapshot(){return [] as string[]}
let loaded=false;
export function useFavorites(){const ids=useSyncExternalStore(subscribe,getSnapshot,getServerSnapshot);if(typeof window!=='undefined'&&!loaded){loaded=true;queueMicrotask(()=>{try{snapshot=JSON.parse(localStorage.getItem('pv-demo-favorites')||'[]')}catch{snapshot=[]}listeners.forEach(fn=>fn())})}return {ids,has:(id:string)=>ids.includes(id),toggle:(id:string)=>{snapshot=ids.includes(id)?ids.filter(x=>x!==id):[...ids,id];localStorage.setItem('pv-demo-favorites',JSON.stringify(snapshot));listeners.forEach(fn=>fn())}}}
