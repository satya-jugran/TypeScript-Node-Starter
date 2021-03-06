import { Request, Response } from "express";
import { route } from "../core/route";
import { HttpMethod } from "../core/http";
export class HomeController {

  @route(HttpMethod.GET, "/")
  get = async (req: Request, res: Response) => {
    res.render("home", {
      title: "Home"
    });
  }
}
