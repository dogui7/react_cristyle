import React from 'react';
import SmallCard from './DataNumbersSmallCard';


class DataNumbers extends React.Component{
    constructor(){
        super()
        this.state = {
            productLength : 0,
            usersLength : 0,
            categories : 0
        }
    }

    componentDidMount(){
        let cantProductos = fetch('api/productos').then(respuesta =>{return respuesta.json()});
        let cantUsuarios = fetch('api/usuarios').then(respuesta =>{return respuesta.json()});
        Promise.all ([cantProductos,cantUsuarios])
        .then (([cantProductos,cantUsuarios]) =>{
            this.setState ({productLength: cantProductos.count})
            this.setState ({usersLength: cantUsuarios.total})
            this.setState ({categories:cantProductos.categoriesCount})
        })
    }

    render (){
        let valor;
        let cardProps;
        
        if (this.state.productLength == ' ') {
            valor = <p>Cargando</p>
        } else {
            let productInDataBase = {
                color: "dark",
                titulo: "Cantidad de productos",
                valor: this.state.productLength,
                icono: "fas fa-shopping-cart",
            }
            
            let amount ={
                color: "dark",
                titulo: "Cantidad de usuarios",
                valor: this.state.usersLength,
                icono: "fas fa-user",
            }
            
            let user = {
                color: "dark",
                titulo: "Cantidad de categorías",
                valor: this.state.categories,
                icono: "fas fa-tshirt",
            }
            
            cardProps = [productInDataBase, amount, user];

            valor = cardProps.map((producto,index)=>{
                return <SmallCard  {...producto} key= {index}/>
            }) 
        }

        return (
            <React.Fragment>
            <div className="row">
                {valor}
            </div>
            </React.Fragment>
        )
    }
};

export default DataNumbers;