import "./App.css"

const ExploraListas = () => {
    return(
        <div className="yellow-card p-1">
            <h2 className="fw-bold ml-2 mt-3">Explora las listas</h2>
            <div className="row pl-4 row-cols-2 row-cols-sm-3 row-cols-xl-6 g-0">
                {["Politicos", "Celebridades", "Tecnologia", "Instituciones", "Cantantes", "Criminales"].map((categoria)=>
                    <div className="col" key={categoria}>
                        <p className="text-center">{categoria}</p>
                        <img src="/resources/templateProfile.png" alt="" className="listContentImage"/>
                    </div>
                )}
            </div>
        </div>
    )
}
export default ExploraListas
