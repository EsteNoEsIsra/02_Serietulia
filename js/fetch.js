// fetch de un  JSON o XML o CSV 
// async : carga al mismo tiempo que el resto de recursos y hacer el uso de *await* 
export async function readFilejson()
{
    let data; 
    let url_file = "json/invitados.json";
    try {
        //espera a cargar los datos de JSON 
        let respuesta  = await fetch(url_file);
        // Espera a leer el contenido del JSON
        // Luego has un parse a esa string a datos que sean iterable por javascript  => objetos / array
        data = await respuesta.json();
        return (data);
    } catch (error) {
        //console.error(error); 
        console.log(error); 
    }
}
