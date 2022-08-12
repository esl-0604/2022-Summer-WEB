import './posting.css'

function Posting(props) {

    let post = props.post;
    const numPost = post.length;

    const setPost = props.setPost;
    const setPosting = props.posting;
    let postNote = [];

    const newPosting = () => {
        let copy = [...post, {
            index: numPost, 
            title: postNote,
            like: 0
        }];
        setPost(copy);
        setPosting(false);
    }

    const postText = '글을 작성해주세요';
    return (
        <div className='posting-modal'>
            <table className='posting-table'>
                <thead>
                <tr><th> {postText} </th></tr>
                </thead>

                <tbody>
                <tr>
                    <td><input type='text' className='input-box' onChange = {(e)=> {
                        postNote = e.target.value;
                        console.log(postNote);}}/>
                    </td>
                    <td style={{textAlign: 'right'}}><button className='input-button' onClick={newPosting}>등록</button></td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Posting;