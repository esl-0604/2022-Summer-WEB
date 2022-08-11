import './posting.css'

function Posting(props) {

    let post = props.post;
    const numPost = post.length;

    /* 얘도 이상하게도 계속 두번씩 찍힌다....*/
    console.log(numPost); 

    const setPost = props.setPost;

    let postNote = [];

    const setPosting = props.posting;

    const newPosting = () => {
        let copy = [...post, {
            index: numPost, 
            title: postNote,
            like: 0
        }];
        setPost(copy);
        setPosting(false);
    }

    return (
        <div className='posting-modal'>
            <table className='posting-table'>
                <th>글을 작성해주세요</th>
                <tr>
                    <td><input type='text' className='input-box' onChange = {(e)=> {
                        postNote = e.target.value;
                        console.log(postNote);}}/>
                    </td>
                    <td style={{textAlign: 'right'}}><button className='input-button' onClick={newPosting}>등록</button></td>
                </tr>
            </table>
        </div>
    )
}

export default Posting;