"use strict";

/** Given a list of airports(nodes) and a list of routes between them(edges) construct an adjaceny list of all possible flights. Said another way construct a graph represented in code within given inputs. */

const airports = "PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM".split(" ");

const routes = [
  ["PHX", "LAX"],
  ["PHX", "JFK"],
  ["JFK", "OKC"],
  ["JFK", "HEL"],
  ["JFK", "LOS"],
  ["MEX", "LAX"],
  ["MEX", "BKK"],
  ["MEX", "LIM"],
  ["MEX", "EZE"],
  ["LIM", "BKK"],
];

const adjacencyList = new Map();

function addNode(airport) {
  adjacencyList.set(airport, []);
}

function addRoute(origin, destination) {
  adjacencyList.get(origin).push(destination);
  adjacencyList.get(destination).push(origin);
}

airports.forEach(addNode);

routes.forEach((route) => {
  addRoute(...route);
});

console.log(adjacencyList);
