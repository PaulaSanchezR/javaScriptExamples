
// var array = [1,2,3,4];
// var anotherOne = [2,4];
// var filtered = [1, 2, 3, 4].filter(
//     function(e) {
//       return this.indexOf(e) < 0;
//     },
//     [2, 4]
// );
// console.log(filtered);


// var arr = [1,2,3,4],
//     brr = [2,4],
//     res = arr.filter(f => !brr.includes(f));
// console.log(res);

// const arbol_monitoreados = treesPosition
// console.log(treesPosition)

     let myMap, myMapView, color, myMarkerSymbol;
     require([
     "esri/Map",
     "esri/Graphic",
     "esri/geometry/Point",
     "esri/symbols/SimpleMarkerSymbol",
     "esri/views/MapView",
     "dojo/domReady!"
    ],
     function(
     Map,
     Graphic,
     Point,
     SimpleMarkerSymbol,
     MapView
     ) {
     var myMap = new Map({
          basemap: "satellite"
     });

 let myMapView = new MapView({
   container: "viewDiv", // Reference to the scene div created in step 5
   map: myMap, // Reference to the map object created before the scene
   zoom: 22 , // Sets zoom level based on level of detail (LOD)
   center: [-75.38338611,  6.35115278] // Sets center point of view using longitude,latitude
 });
 
//  console.log(treesPosition.length)
//2-
for (const property in treesPosition){
    


    const arbol_monitoreados= monitor.filter(arbol =>  arbol.Id_Arbol === treesPosition[property].Id_Arbol)

    //console.log("monitor id = ",arbol.Id_Arbol," siempbre id =  " ,treesPosition[property].Id_Arbol))
// console.log("trees position", treesPosition[property].Id_Arbol, "arbol monitoreado", arbol_monitoreados[0])
    
// console.log(typeof arbol_monitoreados[0])
// console.log(typeof treesPosition[0])

   
    let myPoint = new Point({
    x: treesPosition[property].Longitud,
    y: treesPosition[property].Latitud
    });
 
//2

if ( arbol_monitoreados[0] === undefined){
    myMarkerSymbol = new SimpleMarkerSymbol({
        color: [39, 174, 96],  
        outline: {
            color: [219, 219, 219],
            width: 1
        }
    });
} else {
    if(arbol_monitoreados[0].Estado==="Abierto"){
        console.log("abierto =====",treesPosition[property].Id_Arbol)
        myMarkerSymbol = new SimpleMarkerSymbol({
            color: [211, 84, 0],  // color rojo  
            outline: {
                color: [211, 84, 0],
                width: 1
            }
        });
    } else{
       
        console.log("cerrado =====",treesPosition[property].Id_Arbol)
        myMarkerSymbol = new SimpleMarkerSymbol({
            color: [244, 208, 63],  
            outline: {
            color: [211, 84, 0],
            width: 1
            }
         });
    }
    
   
} 
 //3-
 let myGraphic = new Graphic({
    geometry: myPoint,
    symbol: myMarkerSymbol
    });
 //4-
 myMapView.graphics.add(myGraphic);
}
});

