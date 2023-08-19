import { getAll, save } from "@/services/blog";

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  if (req.method === "GET") {
    const blogs = getAll();
    return res.status(200).json(blogs);
  } else if (req.method === "POST") {
    const {title, description, formattedDate} = req.body;
    save(title, description, formattedDate);
    return res.status(201).json({});
  }
  return res.status(404).send();
}