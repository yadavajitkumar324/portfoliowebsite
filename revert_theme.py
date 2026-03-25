#!/usr/bin/env python3
import re

# Read the CSS file
with open(r'c:\Users\ACER\OneDrive\Desktop\portfolioweb\client\src\index.css', 'r', encoding='utf-8') as f:
    content = f.read()

# Dictionary of replacements (orange -> blue theme)
replacements = {
    # Root variables - dark theme
    '  --accent: #ff8c3f;': '  --accent: #ffb347;',
    '  --accent-strong: #ff6b00;': '  --accent-strong: #ff8c3f;',
    '  --ice: #ffb347;': '  --ice: #87d7ff;',
    
    # Root variables - light theme  
    '  --ice: #ff9955;': '  --ice: #87d7ff;',
    
    # Blue highlight
    '.blue-highlight {\n  color: #ffb347;\n}': '.blue-highlight {\n  color: #63b3ff;\n}',
    ':root[data-theme="light"] .blue-highlight {\n  color: #ff8c3f;\n}': ':root[data-theme="light"] .blue-highlight {\n  color: #0066cc;\n}',
}

# Apply replacements
for old, new in replacements.items():
    content = content.replace(old, new)

# Write back
with open(r'c:\Users\ACER\OneDrive\Desktop\portfolioweb\client\src\index.css', 'w', encoding='utf-8') as f:
    f.write(content)

print('✓ CSS theme reverted from orange to blue!')
