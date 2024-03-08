import {Link} from "react-router-dom"

export function Home() {
  return (
    <div className="container my-5">
      <div className="text-center mb-3">
        <div className="p-5 text-center bg-body-tertiary rounded-3">
          <h1 className="text-body-emphasis">Welcome</h1>
          <p className="col-lg-8 mx-auto fs-5 text-muted">
            This project demonstrates basic CRUD (Create, Read, Update, Delete)
            operations using React.js for frontend development and Bootstrap for
            styling. It allows users to manage products, including adding new
            products, viewing existing products, updating product details, and
            deleting products.
          </p>
          <div className="d-inline-flex gap-2 mb-5">
            <Link to="/products">
              <button
                className="d-inline-flex align-items-center btn btn-primary btn-lg px-4 rounded-pill"
                type="button"
              >
                Go to Product Page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
