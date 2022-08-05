"use strict";

/** Write a function, hasPath, that takes in an object representing the adjacency list of a directed acyclic graph and two nodes (src, dst). The function should return a boolean indicating whether or not there exists a directed path between the source and destination nodes.
 */

//DFS

// const hasPath = (graph, src, dst) => {
//   const stack = [src];

//   while (stack.length) {
//     const current = stack.pop();

//     if (current === dst) return true;

//     for (let neighbor of graph[current]) {
//       stack.push(neighbor);
//     }
//   }
//   return false;
// };

//recursive

const hasPath = (graph, src, dst, visited = new Set()) => {
  // if(visited.has(src)) return false;
  if (src === dst) return true;

  visited.add(src);

  for (let neighbor of graph[src]) {
    if (!visited.has(neighbor)) {
      if (hasPath(graph, neighbor, dst, visited)) return true;
    }
  }
  return false;
};

//BFS

// const hasPath = (graph, src, dst) => {
//   const queue = [src];

//   while (queue.length) {
//     const current = queue.shift();

//     if (current === dst) return true;

//     for (let neighbor of graph[current]) {
//       queue.push(neighbor);
//     }
//   }
//   return false;
// };
