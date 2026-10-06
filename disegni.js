/* Disegni da colorare. Ogni forma e' colorabile con un tocco, tranne:
   class="k" = particolare nero fisso (occhi, naso), fill="none" = solo linea. */
const DRAW=(()=>{
 const sun=()=>{let r='';for(let i=0;i<12;i++){const a=i*Math.PI/6,b=6*Math.PI/180,p=(ang,rad)=>`${(50+rad*Math.cos(ang)).toFixed(1)},${(50+rad*Math.sin(ang)).toFixed(1)}`;r+=`<polygon points="${p(a-b,24)} ${p(a,42)} ${p(a+b,24)}"/>`}
  return r+`<circle cx="50" cy="50" r="25"/><circle class="k" cx="42" cy="46" r="2.8"/><circle class="k" cx="58" cy="46" r="2.8"/><path fill="none" d="M40 56 Q50 66 60 56"/>`};
 const flower=()=>{let r='<rect x="47" y="48" width="6" height="44" rx="3"/><ellipse cx="35" cy="78" rx="11" ry="5" transform="rotate(-30 35 78)"/><ellipse cx="65" cy="70" rx="11" ry="5" transform="rotate(30 65 70)"/>';
  for(let i=0;i<6;i++){const a=i*Math.PI/3;r+=`<circle cx="${(50+19*Math.cos(a)).toFixed(1)}" cy="${(34+19*Math.sin(a)).toFixed(1)}" r="10"/>`}
  return r+'<circle cx="50" cy="34" r="10"/>'};
 return[
 {n:'Ape',i:'🐝',s:`<clipPath id="cb"><ellipse cx="57" cy="60" rx="24" ry="17"/></clipPath>
<ellipse cx="46" cy="36" rx="9" ry="16" transform="rotate(-25 46 36)"/><ellipse cx="66" cy="36" rx="9" ry="16" transform="rotate(25 66 36)"/>
<ellipse cx="57" cy="60" rx="24" ry="17"/><g clip-path="url(#cb)"><rect x="52" y="40" width="9" height="40"/><rect x="68" y="40" width="9" height="40"/></g>
<ellipse cx="57" cy="60" rx="24" ry="17" fill="none"/><path d="M81 60 L92 60 L81 66Z"/>
<circle cx="30" cy="57" r="14"/><circle class="k" cx="25" cy="53" r="2"/><circle class="k" cx="36" cy="53" r="2"/><path fill="none" d="M24 62 Q30 68 37 62"/>
<path fill="none" d="M25 44 Q20 32 14 30 M35 44 Q38 32 44 28"/><circle cx="14" cy="30" r="3"/><circle cx="44" cy="28" r="3"/>`},
 {n:'Elefante',i:'🐘',s:`<path fill="none" d="M82 62 Q92 62 90 72"/><rect x="37" y="72" width="11" height="20" rx="4"/><rect x="62" y="72" width="11" height="20" rx="4"/>
<ellipse cx="56" cy="60" rx="29" ry="22"/><path d="M28 52 C14 54 10 72 14 82 C16 87 24 86 22 80 C19 72 22 66 30 62 Z"/>
<circle cx="31" cy="50" r="17"/><circle cx="42" cy="52" r="11"/><circle class="k" cx="25" cy="45" r="2.2"/><path fill="none" d="M18 60 Q23 64 28 61"/>`},
 {n:'Igloo',i:'🧊',s:`<clipPath id="cd"><path d="M12 80 A38 38 0 0 1 88 80 Z"/></clipPath><path d="M12 80 A38 38 0 0 1 88 80 Z"/>
<g clip-path="url(#cd)" fill="none"><path d="M10 66 H90 M10 52 H90 M10 38 H90"/><path d="M30 66 V80 M50 66 V52 M70 66 V80 M40 52 V38 M60 52 V38 M30 38 V30 M70 38 V30 M50 38 V24"/></g>
<path d="M40 80 V72 A10 10 0 0 1 60 72 V80 Z"/><path fill="none" d="M6 80 H94 M18 90 H34 M52 90 H80"/>`},
 {n:'Orso',i:'🐻',s:`<ellipse cx="50" cy="82" rx="25" ry="16"/><circle cx="26" cy="86" r="8"/><circle cx="74" cy="86" r="8"/>
<circle cx="30" cy="26" r="9"/><circle cx="70" cy="26" r="9"/><circle cx="30" cy="26" r="4"/><circle cx="70" cy="26" r="4"/><circle cx="50" cy="46" r="24"/>
<ellipse cx="50" cy="55" rx="11" ry="8"/><ellipse class="k" cx="50" cy="51" rx="4.5" ry="3"/><circle class="k" cx="40" cy="40" r="2.6"/><circle class="k" cx="60" cy="40" r="2.6"/>
<path fill="none" d="M50 54 V58 M44 60 Q50 64 56 60"/>`},
 {n:'Uva',i:'🍇',s:`<path fill="none" style="stroke-width:3" d="M50 30 C50 20 52 15 58 10"/><path d="M54 20 C62 8 78 10 80 18 C72 26 60 26 54 20Z"/>
<circle cx="50" cy="82" r="8"/><circle cx="42" cy="68" r="8"/><circle cx="58" cy="68" r="8"/><circle cx="34" cy="54" r="8"/><circle cx="50" cy="54" r="8"/><circle cx="66" cy="54" r="8"/>
<circle cx="26" cy="40" r="8"/><circle cx="42" cy="40" r="8"/><circle cx="58" cy="40" r="8"/><circle cx="74" cy="40" r="8"/>`},
 {n:'Casa',i:'🏠',s:`<rect x="66" y="22" width="9" height="22"/><rect x="18" y="46" width="64" height="42"/><polygon points="10,50 50,16 90,50"/>
<rect x="43" y="62" width="15" height="26"/><circle class="k" cx="54" cy="76" r="1.6"/><rect x="24" y="58" width="14" height="14"/><rect x="62" y="58" width="14" height="14"/>
<path fill="none" d="M31 58 V72 M24 65 H38 M69 58 V72 M62 65 H76"/>`},
 {n:'Sole',i:'☀️',s:sun()},
 {n:'Fiore',i:'🌸',s:flower()},
 {n:'Pesce',i:'🐟',s:`<polygon points="70,50 92,32 92,68"/><polygon points="36,36 48,20 62,38"/><ellipse cx="46" cy="50" rx="28" ry="19"/>
<circle class="k" cx="30" cy="45" r="2.8"/><path fill="none" d="M19 54 Q22 57 26 55 M46 40 Q52 50 46 60 M56 42 Q61 50 56 58"/><circle cx="12" cy="34" r="4"/><circle cx="8" cy="20" r="3"/>`},
 {n:'Farfalla',i:'🦋',s:`<ellipse cx="32" cy="36" rx="16" ry="20" transform="rotate(-30 32 36)"/><ellipse cx="68" cy="36" rx="16" ry="20" transform="rotate(30 68 36)"/>
<ellipse cx="38" cy="68" rx="12" ry="15" transform="rotate(25 38 68)"/><ellipse cx="62" cy="68" rx="12" ry="15" transform="rotate(-25 62 68)"/>
<circle cx="30" cy="34" r="6"/><circle cx="70" cy="34" r="6"/><ellipse cx="50" cy="52" rx="4.5" ry="22"/><path fill="none" d="M50 30 Q44 16 36 12 M50 30 Q56 16 64 12"/>`},
 {n:'Gelato',i:'🍦',s:`<polygon points="32,52 68,52 50,94"/><path fill="none" d="M40 60 L54 80 M60 60 L46 80"/>
<ellipse cx="50" cy="52" rx="22" ry="9"/><circle cx="50" cy="38" r="17"/><path fill="none" d="M50 21 Q54 14 58 12"/><circle cx="50" cy="18" r="5"/>`},
 {n:'Gatto',i:'🐱',s:`<ellipse cx="50" cy="88" rx="22" ry="12"/><polygon points="24,40 28,14 46,28"/><polygon points="76,40 72,14 54,28"/><circle cx="50" cy="55" r="27"/>
<circle class="k" cx="40" cy="50" r="3"/><circle class="k" cx="60" cy="50" r="3"/><polygon class="k" points="46,58 54,58 50,63"/>
<path fill="none" d="M50 63 Q45 69 40 65 M50 63 Q55 69 60 65 M20 56 H36 M20 66 L36 62 M80 56 H64 M80 66 L64 62"/>`},
 {n:'Albero',i:'🌳',s:`<rect x="43" y="58" width="14" height="34" rx="3"/><circle cx="30" cy="52" r="17"/><circle cx="70" cy="52" r="17"/><circle cx="50" cy="34" r="23"/>
<circle cx="42" cy="36" r="4.5"/><circle cx="60" cy="42" r="4.5"/><circle cx="34" cy="54" r="4.5"/><circle cx="68" cy="56" r="4.5"/>`},
 {n:'Auto',i:'🚗',s:`<path d="M8 72 V58 Q8 52 14 52 H28 L38 36 H64 L76 52 H86 Q93 52 93 58 V72 Z"/>
<polygon points="35,50 41,40 50,40 50,50"/><polygon points="54,40 63,40 71,50 54,50"/>
<circle cx="28" cy="74" r="11"/><circle cx="28" cy="74" r="4"/><circle cx="74" cy="74" r="11"/><circle cx="74" cy="74" r="4"/><path fill="none" d="M4 88 H96"/>`}
 ];
})();
