import './../Portfolio/ChildPortfolio.css'
export default function ChildPortfolio({ images,showPopup, selectedImage, togglePopup }) {
    return (
        <>
        <div className="size mb-4">
            <div className="title text-center mt-5 pt-5">
                <h2 className="text-uppercase mb-3 fs-1 fw-bolder">portfolio components</h2>
                <div className="star d-flex justify-content-center align-items-center mb-3 ">
                    <div className="line bgColor me-3"></div>
                    <i className="fa-solid fa-star "></i>
                    <div className="line bgColor ms-3"></div>
                </div>
            </div>
            <div className="container ">
                <div className="row g-5">
                    {images.map((image, i) => (
                        <div className="col-lg-4 col-md-6 "  key={i} onClick={() => togglePopup(image)}>
                            <div className='rounded-3 overflow-hidden position-relative'>
                                <img className="w-100 rounded-3 " src={image.src} alt="image" />
                                <div className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                                    <i className="text-white fa-solid fa-plus fa-6x"></i>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {showPopup && (
        <div className="modal position-fixed start-0 w-100 top-0 h-100 bg-primary bg-opacity-25 d-flex justify-content-center align-items-center" onClick={() => togglePopup(null)}>
          <img alt="image" src={selectedImage?.src} width={"40%"} />
        </div>
      )}
            </div>
        </>
    )
}
