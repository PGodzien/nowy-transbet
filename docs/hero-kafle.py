#!/usr/bin/env python3
"""Hero column loops: public/hero-kafel-*.mp4 and their first-frame posters (*.jpg).

Usage: python3 docs/hero-kafle.py public <out-dir>      (needs Pillow, numpy and ffmpeg)

Each tile is a sharp photo turned into an 8 s loop that reads like footage rather than a still:
a smooth pull-back (the photo slowly moves away from the viewer), a soft light sweep, film grain and a light
vignette. The pull-back dissolves into its own start in the last second, so the loop restarts without a jump.
Colours stay natural; the orange wash on top is CSS in src/components/Hero.tsx.
"""
import math
import subprocess
import sys

import numpy as np
from PIL import Image

W, H, FPS, SECONDS = 540, 1080, 25, 8
N = FPS * SECONDS
FADE = 30  # frames of the dissolve that closes the loop
ZOOM_FROM, ZOOM_TO = 1.16, 1.0

# name, photo in public/, crop (x, y, width) in photo pixels with height = 2 * width,
# point the pull-back is centred on (fractions of the crop), random seed
TILES = [
    ("betoniarnie", "betoniarz.jpg", (690, 0, 480), (0.5, 0.55), 1),
    ("prefabrykacja", "prefabrykaty.jpg", (461, 0, 478), (0.5, 0.6), 2),
    ("zbrojenia", "zbrojarz.jpg", (330, 0, 633), (0.45, 0.6), 3),  # the rebar and the bender, not the wrist
    ("tunele", "tunele.jpg", (625, 0, 491), (0.5, 0.35), 4),
]


def render(name, photo, crop, focus, seed, pub, out):
    rng = np.random.default_rng(seed)
    x0, y0, cw = crop
    ch = 2 * cw
    still = Image.open(f"{pub}/{photo}").convert("RGB").crop((x0, y0, x0 + cw, y0 + ch))
    fx, fy = focus[0] * cw, focus[1] * ch

    def shot(g):
        """Frame g of the continuous pull-back, which runs over N + FADE frames."""
        t = g / (N + FADE - 1)
        zoom = ZOOM_TO + (ZOOM_FROM - ZOOM_TO) * (1 - t) ** 1.4  # eases out towards the full frame
        s = (cw / zoom) / W
        cx = fx + (cw / 2 - fx) / zoom
        cy = fy + (ch / 2 - fy) / zoom
        view = still.transform((W, H), Image.Transform.AFFINE, (s, 0, cx - s * W / 2, 0, s, cy - s * H / 2),
                               resample=Image.Resampling.BICUBIC)
        return np.asarray(view, dtype=np.float32) / 255

    yy, xx = np.mgrid[0:H, 0:W].astype(np.float32)
    rr = ((xx - W / 2) / (W / 2)) ** 2 * 0.6 + ((yy - H / 2) / (H / 2)) ** 2 * 0.6
    vignette = (1 - 0.22 * np.clip(rr, 0, 1.4))[..., None]
    angle = math.radians(28)
    along = (xx * math.cos(angle) + yy * math.sin(angle)) / (W * math.cos(angle) + H * math.sin(angle))
    warm = np.array([1.0, 0.93, 0.85], dtype=np.float32)

    ffmpeg = subprocess.Popen(
        ["ffmpeg", "-v", "error", "-y", "-f", "rawvideo", "-pix_fmt", "rgb24", "-s", f"{W}x{H}", "-r", str(FPS), "-i", "-",
         "-c:v", "libx264", "-preset", "slow", "-crf", "23", "-pix_fmt", "yuv420p", "-movflags", "+faststart", "-an",
         f"{out}/hero-kafel-{name}.mp4"],
        stdin=subprocess.PIPE,
    )
    for i in range(N):
        p = i / N
        frame = shot(i + FADE)
        if i >= N - FADE:  # dissolve into the start of the pull-back, so the loop has no jump
            alpha = (i - (N - FADE) + 1) / (FADE + 1)
            frame = frame * (1 - alpha) + shot(i - (N - FADE)) * alpha

        # soft light sweep crossing once per loop, clear of the closing dissolve
        q = (p - 0.12) / 0.62
        if 0 < q < 1:
            pos = -0.25 + 1.5 * (0.5 - 0.5 * math.cos(math.pi * q))
            strength = 0.16 * math.sin(math.pi * q)
            band = np.exp(-((along - pos) ** 2) / (2 * 0.09**2))[..., None] * strength
            frame = 1 - (1 - frame) * (1 - band * warm)

        frame = frame * vignette
        frame = frame + rng.normal(0, 0.008, (H, W, 1)).astype(np.float32)  # film grain
        out_frame = (np.clip(frame, 0, 1) * 255 + 0.5).astype(np.uint8)
        if i == 0:
            Image.fromarray(out_frame).save(f"{out}/hero-kafel-{name}.jpg", quality=82)
        ffmpeg.stdin.write(out_frame.tobytes())
    ffmpeg.stdin.close()
    ffmpeg.wait()


if __name__ == "__main__":
    pub, out = sys.argv[1], sys.argv[2]
    only = set(sys.argv[3:])
    for tile in TILES:
        if not only or tile[0] in only:
            render(*tile, pub, out)
            print("rendered", tile[0])
