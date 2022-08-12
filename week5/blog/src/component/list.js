import './list.css'
import { IoCloseOutline } from "react-icons/io5";


function List(props) {
    const posts = props.post;
    const setPost = props.postChange;
    
    const setLike = (index) => {
        let copyPost = [...posts];
        copyPost[index].like += 1;
        setPost(copyPost);
    }

    const deleteList = (index) => {
        const copyPost = posts.filter((post) => (post.index !== index));
        let i = 0;
        copyPost.map(function(){
            copyPost[i].index = i;
            i+=1;
        })
        setPost(copyPost);
    }

    const postMain = posts.map(function(v) {
        return (
        <div key={v.index} className='list'>
            <h3> 
                {(v.index+1) + '. '+ v.title} 
                <span className='icon' onClick={() => setLike(v.index)}>  👍{ v.like }</span>
                <span className='icon' onClick={() => deleteList(v.index)}><IoCloseOutline/> </span>                        
            </h3>
            <p></p>
            <hr />
        </div>
        );
    });

    return (
        <>{postMain}</>
    )
}

export default List;