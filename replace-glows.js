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
  const content = fs.readFileSync(file, "utf8");
  let newContent = content;
  if (newContent.includes("theme('colors.purple.")) {
    newContent = newContent.replace(
      /theme\('colors\.purple\./g,
      "theme('colors.primary.",
    );
  }
  if (newContent.includes("rgba(147,51,234")) {
    newContent = newContent.replace(
      /rgba\(147,51,234,([0-9.]+)\)/g,
      "theme('colors.primary.600/$1')",
    );
  }

  if (newContent !== content) {
    fs.writeFileSync(file, newContent, "utf8");
    console.log(`Updated glows in ${file}`);
  }
}
console.log("Done replacing glow colors.");
