/* a Geojson objet in Javascripts is a define by a geometry and type of geometry and others properties and objects
However if the type of the geometry is missing, i made a function that give us the type of the geom, LineString, Point or Polygon*/

const typeof_geometryJson = (obj) => { 
    let Geojson_with_type = obj
    if (!Geojson_with_type){ 
           throw new Error('the object is null', Geojson_with_type);
   } else { 
           let features_geom = Geojson_with_type.features 
           for (var i = 0; i < features_geom.length; i++){ 
               let geom = features_geom[i].geometry.coordinates;
               let typeof_geom = features_geom[i].geometry.type;
               // When the type of geometry is undefined
               if (!typeof_geom) { 
                       let new_type_geom = ''
                       for (let j = 0; j < geom.length; j++){ 
                             let geometry = geom[j]
                              if (typeof(geometry) === "number" || geometry.length === undefined){ new_type_geom = "Point";}
                              // we will iterate the loop if the new_type_geom is not a Point
                              else { 
                                   for (let v = 0; v < geometry.length; v++){
                                      if (typeof(geometry[v]) === "number"){ new_type_geom = "LineString";}
                                      // the type of the geometry will be a array for 
                                      else { new_type_geom = "Polygon"; } 
                                   }
                                      
                              }
                       }features_geom[i].geometry.type = new_type_geom
     
              }
                      
         }
   }
           
  return Geojson_with_type;
  
  }