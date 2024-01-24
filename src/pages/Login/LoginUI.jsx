export const LoginUI = ({ identificationCard, password, onInputChange, onSubmit }) => {
  return (
    <main className="container mb-5">
      <div
        className="form-container container-fluid text-bg-secondary p-5 rounded d-flex justify-content-center align-items-center"
        style={
          {
            height: '650px',
            width: '520px'
          }
        }
      >
        <form onSubmit={onSubmit} style={{ width: '100%' }}>
          <h1 className="mb-5">Ingreso</h1>
          <div className="mb-3">
            <label
              htmlFor="exampleInputEmail1"
              className="form-label"
            >NÚMERO DE DOCUMENTO</label>
            <input
              type="number"
              className="form-control"
              name="identificationCard"
              value={identificationCard}
              onChange={onInputChange}
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="exampleInputPassword1"
              className="form-label"
            >PASSWORD</label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={password}
              onChange={onInputChange}
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label
              className="form-check-label"
              htmlFor="exampleCheck1"
            >RECORDAR CONTRASEÑA</label>
          </div>
          <button
            type="submit"
            className="btn btn-primary mt-5"
          >INGRESAR</button>
          <p className="text-end">OLVIDÉ MI CONTRASEÑA</p>
        </form>
      </div>
    </main>
  )
}
