import "materialize-css/dist/css/materialize.min.css";
import ItemCount from "./ItemCount";

const ItemListContainer = (props) => {
  return (
    <>
    <div className="center">
    <h1>{props.greeting}</h1>
    </div>
    <div className="center">
      <ItemCount/>
    </div>
    </>
  );
};

export default ItemListContainer;