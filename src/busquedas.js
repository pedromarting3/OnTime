/**
 * Clase que toma las conexiones de infotramo.js y uando un algoritmo dijkstra devuelve el camino óptimo
 */

class Busqueda 
{  
  /**
     * Constructor de la clase Ruta
     * @param {String} origen Punto de partida de la ruta
     * @param {String} destino Final de la ruta
  */
  constructor(origen, destino)
  {
      if(origen && origen.trim().length != 0)
      {
        this.origen = origen;
      }
      else
      {
        throw new Error("El origen de la ruta es imprescindible");
      }
      if(destino && destino.trim().length != 0)
      {
        this.destino = destino;
      }
      else
      {
        throw new Error("El destino de la ruta es imprescindible");
      }

  }

}

function nodo_minimo(costs, processed)
{
    return Object.keys(costs).reduce((lowest, node) => {
      if (lowest === null || costs[node] < costs[lowest]) 
      {
        if (!processed.includes(node)) 
        {
          lowest = node;
        }
      }
      return lowest;
    }, null);
  };

//Funcion que implementa la lógica de negocio
function dijkstra(graph) 
{
  
  //Toma el costo mínimo para alcanzar cada nodo
  const costs = Object.assign({finish: Infinity}, graph.start);

  const parents = {finish: null};
  for (let child in graph.start) 
  {
    parents[child] = 'start';
  }

  // Selecciona los nodos que han sido visitados
  const processed = [];

  let node = nodo_minimo(costs, processed);

  while (node)
  {
    let cost = costs[node];
    let children = graph[node];
    for (let n in children) 
    {
      let newCost = cost + children[n];
      if (!costs[n]) 
      {
        costs[n] = newCost;
        parents[n] = node;
      }
      if (costs[n] > newCost) 
      {
        costs[n] = newCost;
        parents[n] = node;
      }
    }
    processed.push(node);
    node = nodo_minimo(costs, processed);
  }

  let optimalPath = ['finish'];
  let parent = parents.finish;
  while (parent) 
  {
    optimalPath.push(parent);
    parent = parents[parent];
  }
  optimalPath.reverse();

  const results = {
    distance: costs.finish,
    path: optimalPath
  };

  return results;
}

function contar_elementos(objeto)
{
  var length = 0;
    for(var key in objeto) 
    {
        if( objeto.hasOwnProperty(key) ) 
        {
          ++length;
        }
    }
    return length;
}

module.exports = {Busqueda,dijkstra,contar_elementos};
