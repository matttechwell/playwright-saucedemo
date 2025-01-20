import inventory from '../../data/inventory.json';

// Define the function
function formatName(name: string): string {
  return name.toLowerCase().replace(/\s+/g, '-');
}

// Use the function
const formattedName = formatName(inventory[5].name);
console.log(formattedName);
