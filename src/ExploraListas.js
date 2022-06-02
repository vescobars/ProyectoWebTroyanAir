import "./App.css"
import categories from "./categories.json"


const categorias = categories.categorias

const ExploraListas = ({category, setCategory}) => {

    const onSelectedCategory = (selectedCategory)=>{
        if(selectedCategory === category){
            setCategory(null)
        }else{
            setCategory(selectedCategory)
        }
    }

    return(
        <div className="yellow-card p-1">
            <h2 className="fw-bold ml-2 mt-3">Explora las listas</h2>
            <div className="row pl-4 row-cols-2 row-cols-sm-3 row-cols-xl-6 g-0">
                {categorias.slice(0,4).map(c=>
                    <div className="col" key={c.name} style={{cursor:"pointer"}} 
                            onClick={()=>onSelectedCategory(c.name)}>
                        <p className="text-center">{c.name}</p>
                        <img src={c.imagen} alt="" className="listContentImage"/>
                    </div>
                )}
            </div>
        </div>
    )
}
export default ExploraListas
