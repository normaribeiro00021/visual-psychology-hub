export function registerAppWorker() {
 if (!('serviceWorker' in navigator)) return;
 const host = window.location.hostname;
 const blocked = !import.meta.env.PROD || window.self !== window.top || host.startsWith('id-preview--') || host.startsWith('preview--') || host === 'lovableproject.com' || host.endsWith('.lovableproject.com') || host === 'lovableproject-dev.com' || host.endsWith('.lovableproject-dev.com') || host === 'beta.lovable.dev' || host.endsWith('.beta.lovable.dev') || new URLSearchParams(location.search).get('sw') === 'off';
 if (blocked) { navigator.serviceWorker.getRegistrations().then(regs => regs.filter(reg => reg.active?.scriptURL.endsWith('/sw.js')).forEach(reg => reg.unregister())); return; }
 navigator.serviceWorker.register('/sw.js').catch(() => {});
}
