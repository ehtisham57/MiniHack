import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), "src", "data", "blogs.json");

export function getAll () {
    const data = fs.readFileSync(filePath);
    return JSON.parse(data);
}

export function getById (id) {
    const data = getAll();
    return data.find(p => p.id === Number(id));
}

export function getByTitle (title) {
    const data = getAll();
    return data.find(p => p.title.toLowerCase() === title.toLowerCase());
}

export async function save (title , description,formattedDate ) {
  
    const data = getAll();
    data.push({
        
        id: data.length + 1,
        title , description, formattedDate
        
    });
    fs.writeFileSync(filePath, JSON.stringify(data));
}