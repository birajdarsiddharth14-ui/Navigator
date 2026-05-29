import json
with open('india_geom.json') as f:
    geom = json.load(f)

# Find bounding box
coords = []
def extract(arr):
    if type(arr[0]) in (int, float):
        coords.append(arr)
    else:
        for a in arr: extract(a)
extract(geom['coordinates'])

min_lon = min(c[0] for c in coords)
max_lon = max(c[0] for c in coords)
min_lat = min(c[1] for c in coords)
max_lat = max(c[1] for c in coords)

width = 500
height = 550

def project(lon, lat):
    # Simple equirectangular projection fit to bounds
    x = (lon - min_lon) / (max_lon - min_lon) * width
    y = (max_lat - lat) / (max_lat - min_lat) * height
    return x, y

path = ""
def make_path(poly):
    global path
    for i, ring in enumerate(poly):
        for j, c in enumerate(ring):
            x, y = project(c[0], c[1])
            if j == 0:
                path += f"M{x:.1f},{y:.1f} "
            else:
                path += f"L{x:.1f},{y:.1f} "
        path += "Z "

if geom['type'] == 'Polygon':
    make_path(geom['coordinates'])
elif geom['type'] == 'MultiPolygon':
    for poly in geom['coordinates']:
        make_path(poly)

with open('india_svg.txt', 'w') as f:
    f.write(path)
    f.write("\n")
    f.write(f"{min_lon},{max_lon},{min_lat},{max_lat}")
