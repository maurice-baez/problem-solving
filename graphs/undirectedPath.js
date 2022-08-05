"use strict";

/** Write a function, undirectedPath, that takes in an array of edges for an undirected graph and two nodes (nodeA, nodeB). The function should return a boolean indicating whether or not there exists a path between nodeA and nodeB. */

const buildGraph = (edges) => {
  const graph = {};

  edges.forEach((edge) => {
    const [a, b] = edge;

    if (!graph[a]) graph[a] = [];
    if (!graph[b]) graph[b] = [];
    graph[a].push(b);
    graph[b].push(a);
  });
  return graph;
};

// const hasPath = (graph, nodeA, nodeB) => {
//   const stack = [nodeA];
//   const visited = new Set();

//   while (stack.length) {
//     const current = stack.pop();

//     if (current === nodeB) return true;

//     visited.add(current);

//     for (let neighbor of graph[current]) {
//       if (!visited.has(neighbor)) stack.push(neighbor);
//     }
//   }
//   return false;
// };

//recursive hasPath

const hasPath = (graph, src, dst, visited = new Set()) => {
  if (src === dst) return true;

  visited.add(src);

  for (let neighbor of graph[src]) {
    if (!visited.has(neighbor)) {
      if (hasPath(graph, neighbor, dst, visited)) return true;
    }
  }
  return false;
};

const undirectedPath = (edges, nodeA, nodeB) => {
  const graph = buildGraph(edges);
  return hasPath(graph, nodeA, nodeB);
};
