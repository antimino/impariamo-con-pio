"""Genera le voci neurali (edge-tts) per tutte le frasi dell'app -> audio/*.mp3 + audio/index.json
Uso: python genera_audio.py"""
import asyncio, json, hashlib, os, sys
import edge_tts
from playwright.sync_api import sync_playwright

HERE = os.path.dirname(os.path.abspath(__file__))
VOICE, RATE, PITCH = "it-IT-IsabellaNeural", "-8%", "+3Hz"

def frasi():
    with sync_playwright() as p:
        b = p.chromium.launch(); pg = b.new_page()
        pg.goto("file:///" + HERE.replace("\\", "/") + "/index.html")
        d = pg.evaluate("""()=>({L:LETTERS,N:LNAME,W:NUMW,WO:WORDS,P:PRAISE})""")
        b.close()
    out = set(d["P"]) | {"Riprova!", "Ciao! Io sono Pio. Giochiamo insieme?", "Ripassa solo sulla lettera!",
                         "Quanti sono?", "Leggi la parola", "Hai vinto un nuovo adesivo!", "Scrivi lo zero", "Colora il disegno!"}
    for c, w, e in d["L"]:
        n = d["N"][c]
        out |= {f"{n}. {n} come {w}.", f"Trova la {n}", f"Scrivi la {n}", n}
    for i, w in enumerate(d["W"]):
        out |= {w, f"Scrivi il {w}"} if i else {w}
        if i: out.add(f"Sono {w}!")
    for word, sy, _ in d["WO"]:
        out |= {word.lower(), f"Con quale lettera inizia {word.lower()}?"} | {s.lower() for s in sy}
    return sorted(out)

async def main(fr):
    os.makedirs(HERE + "/audio", exist_ok=True)
    idx = {}
    for t in fr:
        f = hashlib.sha1(t.lower().encode()).hexdigest()[:10] + ".mp3"
        idx[t.lower()] = f
        path = f"{HERE}/audio/{f}"
        if os.path.exists(path): continue
        for k in range(3):
            try:
                await edge_tts.Communicate(t, VOICE, rate=RATE, pitch=PITCH).save(path); break
            except Exception as e:
                print("retry", t, e); await asyncio.sleep(2)
    json.dump(idx, open(HERE + "/audio/index.json", "w", encoding="utf-8"), ensure_ascii=False, indent=0)
    print(len(idx), "frasi")

asyncio.run(main(frasi()))
