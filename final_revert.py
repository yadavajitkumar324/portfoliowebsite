#!/usr/bin/env python3
import re

# Read the CSS file
filepath = r'c:\Users\ACER\OneDrive\Desktop\portfolioweb\client\src\index.css'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

replacements = [
    ('rgba(255, 140, 63, 0.16)', 'rgba(246, 180, 72, 0.16)'),
    ('rgba(255, 140, 63, 0.12)', 'rgba(49, 118, 232, 0.18)'),
    ('rgba(255, 140, 63, 0.08)', 'rgba(49, 118, 232, 0.08)'),
    ('rgba(255, 140, 63, 0.15)', 'rgba(255, 179, 71, 0.1)'),
    ('rgba(255, 165, 0, 0.1)', 'rgba(135, 215, 255, 0.1)'),
    ('rgba(255, 140, 63, 0.7)', 'rgba(255, 179, 71, 0.6)'),
    ('rgba(255, 165, 0, 0.6)', 'rgba(135, 215, 255, 0.6)'),
]

for old, new in replacements:
    content = content.replace(old, new)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print('✓ Theme completely reverted to blue!')
