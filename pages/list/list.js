
import styles from '../../styles/List.module.css'

export const getStaticProps=async()=>{
    const res=await fetch('https://jsonplaceholder.typicode.com/users');
    const data=await res.json();

    return {
        props: { users:data }
    }
}

const List = ({users}) => {
    return ( 
        <div>
            <h1>User List</h1>
            <table id={styles.users}>
                <thead>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Website</th>
                </thead>
                <tbody>
                    {users.map(user=>(
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>{user.website}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
     );
}
 
export default List;