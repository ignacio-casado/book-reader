import { useState } from "react"
import { useAppContext } from "../store/store";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";

export default function Create(){
    const [tittle, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [cover, setCover] = useState('');
    const [intro, setIntro] = useState('');
    const [completed, setCompleted] = useState(false);
    const [review, setReview] = useState("");

    const store = useAppContext();
    function handleChange(e){
        const value = e.target.value;
        const name = e.target.name;

        switch(name){
            case "tittle":
                setTitle(value);
                break;
            case "author":
                setAuthor(value);
                break;
            case "intro":
                setIntro(value);
                break;
            case "completed":
                setCompleted(e.target.checked);
                break;
            case "review":
                setReview(value);
                break;
            

        }
    }
   
   function handleSubmit(e){
        e.preventDefault();

        const newBook = {
            id: crypto.randomUUID(),
            tittle: tittle,
            author: author,
            cover: cover,
            completed: completed,
            review: review
        };
        store.createItem(newBook);
   }
    function handleOnChangeFile(e){
        e.preventDefault();
        const element = e.target;
        const file = element.files[0];
        const reader = new FileReader();

        reader.readAsDataURL(file);

        reader.onload = () => {
            setCover(reader.result.toString())
        }
    }
    return (
       
        <Layout>
<div className="Create">
          
            <form onSubmit={handleSubmit}>
                <div>
                    <div>Title</div>
                    <input
                     type="text" 
                     name="tittle"
                    placeholder="Tittle" 
                    onChange={handleChange}
                    value={tittle}
                     />
                </div>

                <div>
                    <div>Autor</div>
                <input
                     type="text" 
                    placeholder="author" 
                    name="author"
                    onChange={handleChange}
                    value={author}
                     />
                </div>

             <div>
                    <div>Cover</div>
                <input
                     type="file" 
                    name="cover"
                    onChange={handleOnChangeFile}
                     />
                     <div>{ !!cover ? < img src={cover} width="200" alt="preview"/>: ""}</div>
                </div> */
                <div>
                    <div>Introduccion</div>
                <input
                     type="text" 
                    placeholder="introduccion" 
                    name="intro"
                    onChange={handleChange}
                    value={intro}
                     />
                </div>

                <div>
                    <div>Completed</div>
                <input
                     type="checkbox" 
                    onChange={handleChange}
                    name="completed"
                    value={completed}
                     />
                </div>

                <div>
                    <div>Review</div>
                <input
                     type="text" 
                    placeholder="review" 
                    name="review"
                    onChange={handleChange}
                    value={review}
                     />
                </div>

                <div>
                    <input type="submit" value="Register Book" />
                </div>
            </form>
        </div>
        </Layout>
        
    )
}