import { useParams } from 'react-router-dom';

function Profile() {
    const { id } = useParams();
    return(
        <div className='neon-container'>
            <h1 className='type-effect'>This Student ID of user is {id} </h1>
        </div>
    );
}

export default Profile;