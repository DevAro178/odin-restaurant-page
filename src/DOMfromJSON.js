export default function rapist(object){
    let DOMObject=JSON.parse(object);
    console.log(DOMObject);
    Object.entries(DOMObject).forEach(([key, value]) => {
        console.log(`${key}: ${value}`);
    });
}