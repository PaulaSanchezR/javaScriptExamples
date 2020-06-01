
// var array = [1,2,3,4];
// var anotherOne = [2,4];
// var filtered = [1, 2, 3, 4].filter(
//     function(e) {
//       return this.indexOf(e) < 0;
//     },
//     [2, 4]
// );
// console.log(filtered);

     let myMap, myMapView, myMarkerSymbol;
     let colorNewBackgroud = [] 
     let colorNewOutline = []

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
 

for (const property in treesPosition){
    // Generate a new array of objects with undefied if does not existe the Id.Arbol
    const arbol_monitoreados= monitor.filter(arbol =>  arbol.Id_Arbol === treesPosition[property].Id_Arbol)

    let myPoint = new Point({
    x: treesPosition[property].Longitud,
    y: treesPosition[property].Latitud
    });
 
   // If is undefined is because does not exist in siembra table, it is healthy


    if ( arbol_monitoreados[0] === undefined){
            colorNewBackgroud= [39, 174, 96]  // green
            colorNewOutline=[219, 219, 219]  // green
        }else{ // else is the table monitor but the state could be Close or Open
            if(arbol_monitoreados[0].Estado==="Abierto"){
                colorNewBackgroud= [142, 68, 173]
                colorNewOutline=[219, 219, 219] // white
                
            }else{
                colorNewBackgroud=[244, 208, 63]  //amarillo
                colorNewOutline=[211, 84, 0]// rojo
        }    
    }    


        myMarkerSymbol = new SimpleMarkerSymbol({
            color: colorNewBackgroud,  // green
            outline: {
                color: colorNewOutline, // white
                width: 1
            }
        });


 let myGraphic = new Graphic({
    geometry: myPoint,
    symbol: myMarkerSymbol
    });
 //4-
 myMapView.graphics.add(myGraphic);
}
});

