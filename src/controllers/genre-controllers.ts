import { Request, Response } from "express";
import { Genre } from "../protocols/genre-protocols.js";
import { repositoryGenre } from "../repositories/genre-repository.js";

export async function createGenre(req: Request, res: Response) {
    const { genre } = req.body as Genre;
  
    try {
      await repositoryGenre.createGenre(genre);
      return res.sendStatus(201);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  }

  export async function getGenres(req: Request, res: Response) {
    try {
      const genres = await repositoryGenre.getGenres();
      return res.status(200).send(genres.rows);
    } catch (err) {
      return res.status(500).send(err);
    }
  }