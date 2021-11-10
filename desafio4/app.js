function Taxi (auto) { //modificar el código para que generar un alert que diga:

    alert(`Se ha creado un Taxi con un motor tipo ${auto.motor} y con una capacidad de ${auto.capacidad}`);
    

    }
    function ejemploObjetos() {
    let taxi = {
        motor:'Diesel',
        capacidad:'40 Litros'
    }

    let taxi2={
        motor:'Gasolina',
        capacidad:'35 Litros'
    }
    
    if (Math.random()<0.5){
        Taxi(taxi)
    }else{
        Taxi(taxi2)
    }
                

    }