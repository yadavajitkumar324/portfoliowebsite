from pathlib import Path
from PIL import Image, ImageDraw

out_dir = Path(r"c:\Users\ACER\OneDrive\Desktop\portfolioweb\client\public\projects")
out_dir.mkdir(parents=True, exist_ok=True)

W, H = 1280, 720


def make_gradient(top, bottom):
    img = Image.new("RGB", (W, H), top)
    draw = ImageDraw.Draw(img)
    for y in range(H):
        t = y / max(1, H - 1)
        r = int(top[0] * (1 - t) + bottom[0] * t)
        g = int(top[1] * (1 - t) + bottom[1] * t)
        b = int(top[2] * (1 - t) + bottom[2] * t)
        draw.line([(0, y), (W, y)], fill=(r, g, b))
    return img, draw


def rounded(draw, xy, radius, fill, outline=None, width=1):
    draw.rounded_rectangle(xy, radius=radius, fill=fill, outline=outline, width=width)


def draw_cloud(draw, x, y, s=1.0, fill=(235, 245, 255)):
    r = int(30 * s)
    draw.ellipse((x, y, x + 2 * r, y + 2 * r), fill=fill)
    draw.ellipse((x + r, y - int(0.7 * r), x + 3 * r, y + int(1.3 * r)), fill=fill)
    draw.ellipse((x + 2 * r, y, x + 4 * r, y + 2 * r), fill=fill)
    rounded(draw, (x + int(0.5 * r), y + r, x + int(3.5 * r), y + int(2.2 * r)), 14, fill)


def generate_result_image(path):
    img, draw = make_gradient((8, 26, 52), (13, 66, 126))

    # Header text blocks
    draw.text((70, 48), "Student Result Management", fill=(238, 245, 255))
    draw.text((70, 86), "Role-Based Portal • EC2 • RDS", fill=(172, 209, 242))

    # Dashboard card
    rounded(draw, (90, 150, 760, 610), 26, (238, 246, 255), outline=(112, 183, 240), width=3)
    draw.text((130, 190), "Admin Dashboard", fill=(26, 63, 112))

    # Stat cards
    for i, label in enumerate(["Students", "Results", "Pending", "Published"]):
        x0 = 130 + i * 150
        rounded(draw, (x0, 250, x0 + 130, 330), 14, (222, 238, 252), outline=(133, 188, 233), width=2)
        draw.text((x0 + 20, 280), label, fill=(45, 81, 128))

    # Table area
    rounded(draw, (130, 360, 720, 560), 16, (230, 243, 255), outline=(142, 194, 236), width=2)
    draw.line((150, 410, 700, 410), fill=(126, 181, 224), width=2)
    for y in [450, 490, 530]:
        draw.line((150, y, 700, y), fill=(170, 206, 236), width=1)

    # Cloud services panel
    rounded(draw, (820, 170, 1190, 590), 24, (17, 38, 70), outline=(87, 156, 214), width=2)
    draw.text((860, 210), "Cloud Stack", fill=(234, 243, 255))

    stack = ["Flask App", "AWS EC2", "AWS RDS", "Amazon S3"]
    for i, s in enumerate(stack):
        y = 270 + i * 75
        rounded(draw, (860, y, 1148, y + 52), 12, (34, 64, 108), outline=(101, 167, 222), width=2)
        draw.text((890, y + 18), s, fill=(209, 229, 250))

    img.save(path, format="JPEG", quality=95)


def generate_drive_image(path):
    img, draw = make_gradient((10, 22, 47), (14, 60, 112))

    draw.text((70, 48), "Mini Google Drive", fill=(238, 245, 255))
    draw.text((70, 86), "Secure Uploads • Cloud Storage • Auth APIs", fill=(172, 209, 242))

    # Left nav
    rounded(draw, (70, 140, 300, 640), 22, (6, 20, 45), outline=(77, 141, 202), width=2)
    draw.text((105, 180), "Dashboard", fill=(225, 239, 255))
    draw.text((105, 230), "Upload", fill=(199, 221, 248))
    draw.text((105, 280), "My Files", fill=(199, 221, 248))
    rounded(draw, (95, 520, 275, 610), 14, (28, 47, 80), outline=(82, 145, 206), width=2)
    draw.text((118, 548), "Storage: 45%", fill=(212, 229, 248))

    # Main content
    rounded(draw, (330, 140, 1210, 640), 22, (236, 246, 255), outline=(120, 182, 236), width=3)
    draw.text((370, 180), "Your Files", fill=(25, 63, 108))

    # Upload zone
    rounded(draw, (370, 240, 860, 470), 18, (225, 240, 255), outline=(144, 196, 235), width=2)
    draw.text((500, 300), "Drop file here or click to browse", fill=(61, 96, 140))
    draw.text((525, 340), "Maximum file size: 25 MB", fill=(101, 135, 174))
    rounded(draw, (390, 400, 520, 455), 12, (44, 117, 201), outline=(64, 133, 210), width=2)
    draw.text((430, 420), "Upload", fill=(236, 246, 255))

    # File list table
    rounded(draw, (370, 500, 1170, 610), 16, (228, 242, 255), outline=(150, 200, 238), width=2)
    draw.text((400, 530), "File name", fill=(49, 86, 131))
    draw.text((700, 530), "Size", fill=(49, 86, 131))
    draw.text((840, 530), "Uploaded", fill=(49, 86, 131))
    draw.line((390, 565, 1150, 565), fill=(150, 199, 237), width=2)

    # Cloud icon
    draw_cloud(draw, 980, 250, s=1.3, fill=(213, 231, 250))

    img.save(path, format="JPEG", quality=95)


if __name__ == "__main__":
    generate_result_image(out_dir / "cloud-ai-platform.jpg")
    generate_drive_image(out_dir / "cloud-ai-docker.jpg")
    print("Generated project images:")
    print("- cloud-ai-platform.jpg")
    print("- cloud-ai-docker.jpg")
