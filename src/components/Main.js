import React from 'react';
import DataNumbers from './DataNumbers';
import ProductsInDb from './ProductsInDb';

class Main extends React.Component{

	constructor(){
        super()
        this.state = {
			nombre: '',
			descripcion: '',
			imageSrc: ''
        }
    }

    componentDidMount(){
		fetch('api/productos')
		.then(respuesta =>{return respuesta.json()})
		.then (productos => {
			return productos.products [productos.products.length -1]
		})
		.then (product => {
			let parts = product.detailURL.split ('/');
			let url = 'api/productos/' + parts [parts.length -1];
			fetch (url).then (resp => {return resp.json()})
			.then (producto => {
				this.setState ( {nombre:producto.data.productToSend.name});
				this.setState ( {descripcion:producto.data.productToSend.description});
				let parts = producto.data.imageURL.split ('/');
				this.setState ( {imageSrc: '/images/products/' + parts[parts.length-1]});
			})
			.catch (error => {
				return (error)
			})
		}) 
    }

	render () {

		let imageRoute;
		if (this.state.imageSrc == '') {
			imageRoute = '';
		} else {
			imageRoute = this.state.imageSrc;
		}
		return(
			<React.Fragment>
					<div className="container-fluid">
						<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
							<h1 className="h1 mb-0 text-gray-800"><strong>Cristyle Dashboard</strong></h1>
						</div>
						<DataNumbers />
						<div className="row">
							<div className="col-lg-6 mb-4">
								<div className="card shadow mb-4">
									<div className="card-header py-3">
										<h5 className="h1 m-0 font-weight-bold text-gray-800">Último Producto</h5>
									</div>
									<div className="card-body">
										<div className="text-center">
											<img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={imageRoute} />
										</div>
										<p className="h2"> <strong> {this.state.nombre} </strong> </p>
										<p className="h4"> <strong> {this.state.descripcion} </strong> </p>
									</div>
								</div>
							</div>
							<ProductsInDb />
						</div>
					</div>
			</React.Fragment>
		)
	}
}
export default Main;