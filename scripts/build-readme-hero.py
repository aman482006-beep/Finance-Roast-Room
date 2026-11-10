#!/usr/bin/env python3
"""Build the self-contained 4K Finance Roast Room README image."""
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont, ImageFilter
import sys

ROOT = Path(__file__).resolve().parents[1]
AVATARS = ROOT / "app" / "public" / "avatars"
OUT = ROOT / "docs" / "room.png"
W, H = 3840, 2087

# label, source, portrait height, x-centre, portrait bottom, label y
PEOPLE = [
    ("Warren Buffett", "buffett.webp", 1040, 300, 1390, 1295),
    ("Benjamin Graham", "bgraham.webp", 1130, 800, 1370, 1160),
    ("Charlie Munger", "munger.webp", 1190, 1320, 1360, 1080),
    ("Peter Lynch", "lynch.webp", 1240, 1920, 1350, 1050),
    ("Howard Marks", "marks.webp", 1190, 2520, 1360, 1080),
    ("Ray Dalio", "dalio.webp", 1130, 3040, 1370, 1160),
    ("Aswath Damodaran", "damodaran.webp", 1040, 3540, 1390, 1295),
]
FONT_DIR = Path("/usr/share/fonts/truetype/dejavu")

def get_font(size, bold=False):
    name = "DejaVuSans-Bold.ttf" if bold else "DejaVuSans.ttf"
    p = FONT_DIR / name
    if p.exists():
        return ImageFont.truetype(str(p), size)
    return ImageFont.load_default()

def centered(draw, x, y, value, fnt, fill):
    box = draw.textbbox((0, 0), value, font=fnt)
    draw.text((x - (box[2] - box[0]) / 2, y), value, font=fnt, fill=fill)

def portrait_image(filename, height):
    path = AVATARS / filename
    if not path.exists():
        raise FileNotFoundError(f"Missing advisor portrait: {path}")
    im = Image.open(path).convert("RGBA")
    alpha = im.getchannel("A")
    bbox = alpha.point(lambda v: 255 if v > 8 else 0).getbbox()
    if bbox:
        im = im.crop(bbox)
    width = round(im.width * height / im.height)
    return im.resize((width, height), Image.Resampling.LANCZOS)

def add_portrait(canvas, im, center_x, bottom_y):
    x = round(center_x - im.width / 2)
    y = round(bottom_y - im.height)
    alpha = im.getchannel("A")
    shadow = Image.new("RGBA", im.size, (25, 40, 60, 0))
    shadow.putalpha(alpha.filter(ImageFilter.GaussianBlur(22)).point(lambda v: int(v * .28)))
    canvas.alpha_composite(shadow, (x + 8, y + 18))
    canvas.alpha_composite(im, (x, y))

def main():
    # Light blue-grey gradient background.
    canvas = Image.new("RGB", (W, H), "#f7f9fc")
    d = ImageDraw.Draw(canvas)
    top, bottom = (250, 252, 255), (225, 235, 246)
    for y in range(H):
        t = y / (H - 1)
        col = tuple(round(top[i] * (1 - t) + bottom[i] * t) for i in range(3))
        d.line((0, y, W, y), fill=col)
    canvas = canvas.convert("RGBA")

    # Soft light halo behind the portraits.
    halo = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    ImageDraw.Draw(halo).ellipse((120, -430, 3720, 1390), fill=(255, 255, 255, 115))
    canvas.alpha_composite(halo.filter(ImageFilter.GaussianBlur(100)))

    # Use the exact portrait assets shipped with the application.
    for _, filename, height, cx, bottom_y, _ in PEOPLE:
        add_portrait(canvas, portrait_image(filename, height), cx, bottom_y)

    # The curved conference-room surface masks the lower portrait edges.
    panel = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    ImageDraw.Draw(panel).ellipse(
        (-150, 930, 3990, 3250),
        fill=(220, 231, 243, 250),
        outline=(255, 255, 255, 250),
        width=10,
    )
    canvas.alpha_composite(panel)

    draw = ImageDraw.Draw(canvas)

    # Subtle globe mark behind the title.
    cx, cy = 1920, 1250
    globe = (91, 118, 149, 35)
    draw.ellipse((cx-180, cy-180, cx+180, cy+180), outline=globe, width=20)
    draw.ellipse((cx-76, cy-180, cx+76, cy+180), outline=globe, width=16)
    draw.arc((cx-180, cy-180, cx+180, cy+180), 0, 180, fill=globe, width=15)
    draw.arc((cx-180, cy-180, cx+180, cy+180), 180, 360, fill=globe, width=15)
    draw.line((cx-175, cy, cx+175, cy), fill=globe, width=14)

    # White name chips, positioned along the curved table edge.
    tag_font = get_font(43, True)
    for label, _, _, tag_cx, _, tag_y in PEOPLE:
        box = draw.textbbox((0, 0), label, font=tag_font)
        tw, th = box[2] - box[0], box[3] - box[1]
        tw += 76
        left, top_y, height = round(tag_cx - tw / 2), tag_y, 96
        shadow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
        sd = ImageDraw.Draw(shadow)
        sd.rounded_rectangle((left, top_y+8, left+tw, top_y+height+8), radius=34, fill=(35, 51, 72, 48))
        canvas.alpha_composite(shadow.filter(ImageFilter.GaussianBlur(12)))
        draw = ImageDraw.Draw(canvas)
        draw.rounded_rectangle((left, top_y, left+tw, top_y+height), radius=34,
                               fill=(255, 255, 255, 252), outline=(228, 235, 243, 255), width=3)
        centered(draw, tag_cx, top_y+23, label, tag_font, (20, 34, 54, 255))

    draw = ImageDraw.Draw(canvas)
    draw.ellipse((1657, 1110, 1681, 1134), fill=(0, 136, 205, 255))
    centered(draw, 1932, 1092, "THE ROOM IS OPEN", get_font(38, True), (99, 120, 145, 255))

    # Headline with a blue product-name accent.
    title_font = get_font(112, True)
    first, accent = "Bring a decision to the ", "Roast Room"
    b1, b2 = draw.textbbox((0, 0), first, font=title_font), draw.textbbox((0, 0), accent, font=title_font)
    x = (W - ((b1[2]-b1[0]) + (b2[2]-b2[0]))) / 2
    draw.text((x, 1220), first, font=title_font, fill=(16, 27, 44, 255))
    draw.text((x + b1[2]-b1[0], 1220), accent, font=title_font, fill=(19, 102, 177, 255))

    centered(draw, 1920, 1400, "In Claude Code, type the line below with your decision. The",
             get_font(54), (74, 93, 116, 255))
    centered(draw, 1920, 1472, "council shows up here and argues it out live.",
             get_font(54), (74, 93, 116, 255))

    cmd = "/roast-room should I ..."
    cmd_font = get_font(43, True)
    cmd_box = draw.textbbox((0, 0), cmd, font=cmd_font)
    cmd_w, cmd_h = cmd_box[2] - cmd_box[0] + 100, 108
    cmd_x, cmd_y = round((W-cmd_w)/2), 1575
    draw.rounded_rectangle((cmd_x+3, cmd_y+7, cmd_x+cmd_w+3, cmd_y+cmd_h+7), radius=30, fill=(65, 84, 105, 28))
    draw.rounded_rectangle((cmd_x, cmd_y, cmd_x+cmd_w, cmd_y+cmd_h), radius=30,
                           fill=(250, 252, 255, 252), outline=(193, 207, 223, 255), width=4)
    centered(draw, 1920, cmd_y+28, cmd, cmd_font, (24, 38, 58, 255))

    button_font = get_font(35, True)
    for label, left in [("What to put in your question", 1010), ("Watch a past council", 1990)]:
        width, y = 840, 1760
        draw.rounded_rectangle((left, y, left+width, y+112), radius=56,
                               fill=(235, 241, 248, 245), outline=(184, 199, 216, 255), width=4)
        centered(draw, left+width/2, y+35, label, button_font, (61, 79, 101, 255))

    draw.rounded_rectangle((10, 10, W-10, H-10), radius=26, outline=(230, 236, 243, 220), width=6)
    OUT.parent.mkdir(parents=True, exist_ok=True)
    canvas.convert("RGB").save(OUT, format="PNG", optimize=True, dpi=(300, 300))
    print(f"Created {OUT}: {W}x{H}, {OUT.stat().st_size:,} bytes")

if __name__ == "__main__":
    try:
        main()
    except Exception as exc:
        print(f"Hero generation failed: {exc}", file=sys.stderr)
        raise
