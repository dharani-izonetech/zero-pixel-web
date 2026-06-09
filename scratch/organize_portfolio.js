const fs = require('fs');

const content = fs.readFileSync('e:\\zero-pixel-web\\src\\pages\\Portfolio.jsx', 'utf8');
const lines = content.split('\n');

const imports = [];
const items = [];
let idCounter = 1;

for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const match = line.match(/import\s+(\w+)\s+from\s+'(.+)';/);
    if (match) {
        let variableName = match[1];
        const path = match[2];
        
        // Handle duplicates by appending index if needed
        // Actually, I'll just rewrite them to be image1, image2, ... imageN
    }
}
