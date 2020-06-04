// The purpose of this function is to reverse a list of geographic coordinates.

const reversing_coordinate = (geo_obj) => { 
    let new_geobj = geo_obj
    if (!new_geobj){ 

            throw new Error('the object must not be empty or null', new_geobj)
    } else { 
        
        for (let i = 0; i < new_geobj.length; i++){ 
            let coordinates_obj = new_geobj[i].features[0].geometry.coordinates;
            let typeof_geobj = new_geobj[i].features[0].geometry.type;
            
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
    return new_geobj;

}
