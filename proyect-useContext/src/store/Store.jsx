import { createContext, useContext, /* useEffect, */ useState } from "react"
import Swal from 'sweetalert2'

const AppContext = createContext({
    items: [],
    createItem: (item) =>{},
    getItem: (id) =>{},
    updateItem: (item) => {},

});

export default function Store({ children }){

    const[items, setItems] = useState([]);

    //METODOS

    function createItem(item){
        const temp = [...items];
        temp.push(item);

        setItems(temp)
    }
    function getItem(id){
        const item = items.find(item => item.id === id);
        return item;
    }
    function updateItem(item){
        const index = items.findIndex((i)=> i.id === item.id)
        const temp = [...items];
        
        temp[index] = {...item}
    }
    function sweetAlert(){

        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'success',
            title: 'Libro cargado :)'
          })
    }
    return(
        <AppContext.Provider value={{
            items,
            createItem,
            getItem,
            updateItem,
            sweetAlert,
        }}>
            {children}
        </AppContext.Provider>
    )
}

export function useAppContext(){
    return useContext(AppContext);
}