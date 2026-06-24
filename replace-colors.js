const fs = require("fs");
const path = require("path");

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function (file) {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      if (file.endsWith(".tsx") || file.endsWith(".ts")) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk(path.join(__dirname, "src"));

for (const file of files) {
  if (
    file.includes("Navbar\\index.tsx") ||
    file.includes("color-theme-dropdown.tsx")
  ) {
    // Navbar was already manually updated.
    // Dropdown also uses purple- explicitly for the selection swatches, we don't want to replace those.
    continue;
  }
  const content = fs.readFileSync(file, "utf8");
  if (content.includes("purple-")) {
    const newContent = content.replace(/purple-/g, "primary-");
    fs.writeFileSync(file, newContent, "utf8");
    console.log(`Updated ${file}`);
  }
}
console.log("Done replacing purple- with primary-");
