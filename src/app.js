const express = require("express");
const cors = require("cors");
const { uuid } = require("uuidv4");
const { isUuid } = require("uuidv4");

const app = express();

app.use(express.json());
app.use(cors());

const repositories = [];

app.get("/repositories", (request, response) => {
  const {title} =  request.query;

  const results = title
  ? repositories.filter(repository => repository.title.includes(title))
  : repositories;

  return response.json(results);
});

app.post("/repositories", (request, response) => {
  const {url,title, techs} = request.body;

  const repository = {
    id: uuid(),
    url: "https://github.com/Rocketseat/umbriel",
    title: "Umbriel",
    techs: ["Node", "Express", "TypeScript"],
    likes: 0,
  };

  repositories.push(repository);
  return response.json(repository);
});

app.put("/repositories/:id", (request, response) => {
  const {id} = request.params;
  const {url, title, techs} = request.body;

  const reposIndex = repositories.findIndex(repository => repository.id === id);
  
  if (reposIndex < 0){
    return response.status(400).json({error: 'Repositorio Not Found'})
  }

  const repository = {
    url,
    title,
    techs
  };

  repositories[reposIndex] = repository;

  return response.json(repository);
});

app.delete("/repositories/:id", (request, response) => {
  const {id} = request.params;

  const reposIndex = repositories.findIndex(repository => repository.id === id);
  
  if (reposIndex < 0){
    return response.status(400).json({error: 'Repository Not Found'})
  }

  repositories.splice(reposIndex, 1);

  return response.status(204).send();
});

app.post("/repositories/:id/like", (request, response) => {
  const{id} = request.params;

  const repository = repositories.find(repository => repository.id === id);

  if(!repository){
    return response.status(400).send();
  }

  repository.likes++;

  return response.json(repository);
});

module.exports = app;
