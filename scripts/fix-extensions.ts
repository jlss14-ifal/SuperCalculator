// Import the required modules from Node.js
import * as fs from 'fs';
import * as path from 'path';

// Get the root directory of the project
const rootDir = process.cwd()

// Function to rename file extensions from .js to .mjs
const renameExtensions = (dir: string) => {
  // Read all files and directories within the specified directory
  fs.readdir(dir, (err, files) => {
    if (err) {
      console.error('Error reading directory:', err);
      return;
    }

    // Iterate over each file in the directory
    files.forEach((file) => {
      const fullPath = path.join(dir, file);

      // Check if the current path is a directory
      fs.stat(fullPath, (err, stats) => {
        if (err) {
          console.error('Error getting file stats:', err);
          return;
        }

        if (stats.isDirectory()) {
          // If it's a directory, recursively call the renameExtensions function
          renameExtensions(fullPath);
        } else if (path.extname(fullPath) === '.js') {
          // If it's a .js file, rename it to .mjs
          const newFullPath = fullPath.replace(/\.js$/, '.mjs');
          fs.rename(fullPath, newFullPath, (err) => {
            if (err) {
              console.error('Error renaming file:', err);
            } else {
              console.log(`Renamed: ${fullPath} -> ${newFullPath}`);
            }
          });
        }
      });
    });
  });
};

// Execute the function to rename file extensions
renameExtensions(path.join(rootDir, 'dist'));
