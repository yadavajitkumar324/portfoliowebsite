from PIL import Image, ImageDraw, ImageFont
import os

# Paths
cert_dir = r'c:\Users\ACER\OneDrive\Desktop\portfolioweb\client\public\certificates'
proj_dir = r'c:\Users\ACER\OneDrive\Desktop\portfolioweb\client\public\projects'

# Create certificate images
certificates = [
    ('infosys-generative-ai-certificate.jpg', 'Infosys\nGenerative AI & LLM', (255, 140, 63)),
    ('aws-cloud-architecting-badge.jpg', 'AWS Academy\nCloud Architecting', (255, 153, 85)),
    ('coursera-networking-certificate.jpg', 'Coursera\nComputer Networking', (255, 163, 102)),
]

for filename, title, color in certificates:
    img = Image.new('RGB', (800, 600), color=color)
    draw = ImageDraw.Draw(img)
    draw.text((100, 250), title, fill='white', font=None)
    draw.text((100, 400), 'Professional Certificate', fill='white', font=None)
    img.save(os.path.join(cert_dir, filename))
    print(f'Created: {filename}')

# Create project images
projects = [
    ('result-management.jpg', 'Student Result\nManagement System', (255, 140, 63)),
    ('cloud-drive.jpg', 'Cloud Storage &\nFile Sharing', (255, 153, 85)),
]

for filename, title, color in projects:
    img = Image.new('RGB', (600, 400), color=color)
    draw = ImageDraw.Draw(img)
    draw.text((80, 150), title, fill='white', font=None)
    draw.text((80, 280), 'Cloud Project', fill='white', font=None)
    img.save(os.path.join(proj_dir, filename))
    print(f'Created: {filename}')

print('All images created successfully!')
