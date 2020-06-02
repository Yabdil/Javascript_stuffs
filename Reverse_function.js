// This function is aiming to reverse a list of geographical objects 

const reversing_coordinate = (geo_obj) => { 
    let new_coordinates = geo_obj
    if (!new_coordinates){ 

            throw new Error('the object must not be empty or null', new_coordinates)
    } else { 
        
        for (let i = 0; i < new_coordinates.length; i++){ 
            let coordinates_obj = new_coordinates[i].features[0].geometry.coordinates;
            let typeof_geobj = new_coordinates[i].features[0].geometry.type;
            
            if (typeof_geobj === "Polygon" || typeof_geobj === "LineString"){ 
                // case when we have a multiple coordinates or and Array of coordinates
                for (let j = 0; j < coordinates_obj.length; j++){ 
                    coordinates_obj[j] = coordinates_obj[j].reverse()
                }
            } else {
                // when we have a Point objet, we dont need to iterate
                    coordinates_obj = coordinates_obj.reverse()

            }
        }
    }
    return new_coordinates;

}
