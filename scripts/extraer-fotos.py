# ─────────────────────────────────────────────────────────────────────────────
# Extrae las fotos incrustadas en el Excel de camión y las deja en
#   public/productos/cam-<N>.<ext>      (N = número de fila del CSV de origen)
# y escribe el mapa  data/imagenes-camion.json  = { "<N>": "cam-<N>.<ext>" }.
#
# El generador (generar-productos.mjs) lee ese JSON para poner la foto en cada
# referencia. Las fotos son de catálogo del proveedor (fondo blanco).
#
# Requiere el Excel original (NO vive en el repo) y openpyxl. Correr a mano
# cuando cambien las fotos:  python3 scripts/extraer-fotos.py
#
# Nota: en el CSV, la fila del Excel 2..74 corresponde a N = fila + 169.
# ─────────────────────────────────────────────────────────────────────────────
import json
import os
import zipfile
from xml.etree import ElementTree as ET

XLSX = "/Users/juandavidcardozosanchez/Documents/C&C Online /LISTA FAROS CAMION.xlsx"
DEST = os.path.join(os.path.dirname(__file__), "..", "public", "productos")
JSON_OUT = os.path.join(os.path.dirname(__file__), "..", "data", "imagenes-camion.json")

NS = {
    "xdr": "http://schemas.openxmlformats.org/drawingml/2006/spreadsheetDrawing",
    "a": "http://schemas.openxmlformats.org/drawingml/2006/main",
    "r": "http://schemas.openxmlformats.org/officeDocument/2006/relationships",
}
EMBED = "{http://schemas.openxmlformats.org/officeDocument/2006/relationships}embed"

os.makedirs(DEST, exist_ok=True)
z = zipfile.ZipFile(XLSX)

# rId -> ruta del medio (ej. "../media/image1.jpeg")
rels = ET.fromstring(z.read("xl/drawings/_rels/drawing1.xml.rels"))
rmap = {r.get("Id"): r.get("Target") for r in rels}

# Para cada anclaje (imagen), su fila de Excel (0-based → +1) y el medio.
drawing = ET.fromstring(z.read("xl/drawings/drawing1.xml"))
por_fila = {}  # excel_row -> media path (nos quedamos con el primero de cada fila)
for anchor in list(drawing):
    frm = anchor.find("xdr:from", NS)
    if frm is None:
        continue
    excel_row = int(frm.find("xdr:row", NS).text) + 1
    blip = anchor.find(".//a:blip", NS)
    if blip is None:
        continue
    target = rmap[blip.get(EMBED)]  # "../media/imageN.ext"
    por_fila.setdefault(excel_row, target.replace("../", "xl/"))

mapa = {}
for excel_row, media in sorted(por_fila.items()):
    n = excel_row + 169  # fila del CSV de origen
    ext = os.path.splitext(media)[1].lower()  # .jpeg / .png
    nombre = f"cam-{n}{ext}"
    with open(os.path.join(DEST, nombre), "wb") as f:
        f.write(z.read(media))
    mapa[str(n)] = nombre

with open(JSON_OUT, "w", encoding="utf-8") as f:
    json.dump(mapa, f, ensure_ascii=False, indent=2)
    f.write("\n")

print(f"✅ {len(mapa)} fotos extraídas a public/productos/")
print(f"   Mapa escrito en data/imagenes-camion.json")
