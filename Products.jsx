function Product({title, thumbnail, price}) {
  return (
    <div>
      <div className="col">
        <div className="card shadow-sm py-3">
          <img className="bd-placeholder-img card-img-top mx-auto" style={{width:"200px", height:"200px"}} src={thumbnail} alt={title} />
          <div className="card-body">
            <p className="card-title">{title}</p>
            <p className="card-text">{price}</p>

            <div
              className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <button
                  type="button"
                  className="btn btn-sm btn-outline-secondary">
                  Ajouter au panier
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


function Products() {
	const products = [
    {
      id: 1,
      title: "PC Portable Gamer HP VICTUS",
      price: "7490 DH",
      thumbnail: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6499/6499942_sd.jpg;maxHeight=250;maxWidth=380",
    },
    {
      id: 2,
      title: "PC Portable Gamer HP VICTUS",
      price: "2190 DH",
      thumbnail: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6499/6499753_sd.jpg;maxHeight=250;maxWidth=380",
    },
    {
      id: 3,
      title: "Pc Portable Chromebook Acer",
      price: "3640 DH",
      thumbnail: "https://m.media-amazon.com/images/I/418sroJx+hL.jpg",
    },
    {
      id: 4,
      title: "PC Portable - HUAWEI",
      price: "1270 DH",
      thumbnail: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c07958915.png",
    },
  ];
  return (
	<div className="cards d-grid gap-3">
		{products.map((product) => (
		<Product key={product.id} title={product.title}
		price={product.price} thumbnail={product.thumbnail} />
		))}
	</div>
  )
}
ReactDOM.render(<Products />, document.getElementById("app"));
