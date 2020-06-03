function typeof_geometryJson(obj){ 
    let Geojson_with_type = obj
    if (!Geojson_with_type){ 
           throw new Error('the object is null', Geojson_with_type);
   } else { 
           let features_geom = Geojson_with_type.features 
           for (var i = 0; i < features_geom.length; i++){ 
               let geom = features_geom[i].geometry.coordinates;
               let typeof_geom = features_geom[i].geometry.type;
               if (!typeof_geom) { 
                       let new_type_geom = ''
                       for (let j = 0; j < geom.length; j++){ 
                             let geometries = geom[j]
                              if (typeof(geometries) === "number" || geometries.length === undefined){ new_type_geom = "Point";}
                              else { 
                                   for (let v = 0; v < geometries.length; v++){
                                      if (typeof(geometries[v]) === "number"){ new_type_geom = "LineString";}
                                      else {
                                      let first_geom_coordinates = geometries[0];
                                   let last_geom_index = (geometries.length -1)
                                      let last_geom_coordinates = geometries[last_geom_index]
                                           /*if (first_geom_coordinates[0] === last_geom_coordinates[2] || first_geom_coordinates[1] === last_geom_coordinates[3]){ 
                                                   new_type_geom = "Polygon";
                                           } */ console.log(first_geom_coordinates[0], last_geom_coordinates[2])   

                                      }
                                      
                                  }
                       } features_geom[i].geometry.type = new_type_geom
           
              }
                      
         }
   }
           
 return Geojson_with_type;
   }

}