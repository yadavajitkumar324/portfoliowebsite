#!/usr/bin/env python3

# Read the CSS file
with open(r'c:\Users\ACER\OneDrive\Desktop\portfolioweb\client\src\index.css', 'r', encoding='utf-8') as f:
    content = f.read()

# More replacements for backgrounds and other colors
replacements = {
    # Background gradients in :root
    'rgba(255, 140, 63, 0.16)': 'rgba(246, 180, 72, 0.16)',
    'rgba(255, 140, 63, 0.12)': 'rgba(49, 118, 232, 0.18)',
    'rgba(255, 140, 63, 0.08)': 'rgba(49, 118, 232, 0.08)',
    
    # Certificate image colors
    'rgba(255, 140, 63, 0.15)': 'rgba(255, 179, 71, 0.1)',
    'rgba(255, 165, 0, 0.1)': 'rgba(135, 215, 255, 0.1)',
    'rgba(255, 140, 63, 0.7)': 'rgba(255, 179, 71, 0.6)',
    'rgba(255, 165, 0, 0.6)': 'rgba(135, 215, 255, 0.6)',
}

# Apply replacements
for old, new in replacements.items():
    content = content.replace(old, new)

# Write back
with open(r'c:\Users\ACER\OneDrive\Desktop\portfolioweb\client\src\index.css', 'w', encoding='utf-8') as f:
    f.write(content)

print('✓ CSS background colors reverted!')
