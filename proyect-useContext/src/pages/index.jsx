import Book from "../components/Book";
import Layout from "../components/Layout";
import { useAppContext } from "../store/store"

export default function Index (){
    const store = useAppContext();
    return(
        <Layout>
        <div>
            
           {store.items.map((item) =>(
           <Book key={item.id} item={item} />
            ))}
        </div>
        </Layout>

       
    );
}