
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

     let myMap, myMapView, color;
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
   zoom: 21 , // Sets zoom level based on level of detail (LOD)
   center: [-75.38338611,  6.35115278] // Sets center point of view using longitude,latitude
 });
 
 
//2-
for (const property in treesPosition){
    
   

    const arbol_monitoreados= monitor.filter(arbol =>  console.log("monitor id = ",arbol.Id_Arbol," siempbre id =  " ,treesPosition[property].Id_Arbol))

   // const arbol_monitoreados= monitor.filter(arbol => arbol.Id_Arbol === treesPosition[property].Id_Arbol)
    
  if(arbol_monitoreados.length >= 0){
     // console.log(arbol_monitoreados.length)
     // if(arbol_monitoreados[property].Estado === "Abierto"){
     //console.log(arbol_monitoreados[property].Estado )
      //   color_status= "yellow"
     // }
      // console.log(arbol_monitoreados[0])
      
  }
   
    let myPoint = new Point({
    x: treesPosition[property].Longitud,
    y: treesPosition[property].Latitud
    });
 
//2-
 let myMarkerSymbol = new SimpleMarkerSymbol({
    size: 5,
  //  color: arbol_monitoreados[property].Estado === "Abierto"  ? [184, 4, 84]: [249,237,159],  
    outline: {
    color: [219, 219, 219],
    width: 1
    }
 });
 //3-
 let myGraphic = new Graphic({
    geometry: myPoint,
    symbol: myMarkerSymbol
    });
 //4-
 myMapView.graphics.add(myGraphic);
}
});

