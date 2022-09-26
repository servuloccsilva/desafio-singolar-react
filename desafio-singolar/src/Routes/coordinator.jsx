export const goToFeed = (navigate) =>{
    navigate('/')
}

export const goToPostDetails = (navigate, id) =>{
    navigate(`/${id}`)
}

export const goToEditPage = (navigate, id) =>{
    navigate(`/edit/${id}`)
}