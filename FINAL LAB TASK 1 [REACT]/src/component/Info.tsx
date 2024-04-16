interface Props{
    username: string,
    id: number,
    email: string,
}

function Info ({username, email, id}: Props){

    return(
        <>
            <div>
                <h3>Name: {username}</h3>
                <h3>ID: {id}</h3>
                <h3>Email: {email}</h3>
            </div>
        </>
    )
}

export default Info;