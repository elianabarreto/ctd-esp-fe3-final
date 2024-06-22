export const getFavoritosStorage = () => {
    const favoritos = localStorage.getItem("favs");
    return favoritos ? JSON.parse(favoritos) : [];
};

export const setFavoritosStorage = (odontologo) => {
    let favoritos = getFavoritosStorage();
    const nuevoFavoritos = favoritos.filter(fav => {
        return fav.id === odontologo.id
    });

    if(nuevoFavoritos.length === 0){
        favoritos.push(odontologo)
        localStorage.setItem("favs", JSON.stringify(favoritos));
        alert(`El odontólogo ${odontologo.name} se agregó a favoritos`)
    }else{
        alert(`El odontólogo ${odontologo.name} ya está en favoritos`)
    }
}

export const eliminarFavorito = (id, name) => {
    let favoritos = getFavoritosStorage();
    const index = favoritos.findIndex(fav => fav.id === id);
    if(index !== -1){
        favoritos.splice(index, 1);
        localStorage.setItem("favs", JSON.stringify(favoritos));
        alert(`El odontólogo ${name} se eliminó de la lista`)
    }else{
        alert(`El odontólogo ${name} no se pudo eliminar de la lista`)
    }
}

export const esFavorito = (id) => {
    const favoritos = getFavoritosStorage();
    const nuevoFavoritos = favoritos.filter(fav => {
        return fav.id === id
    });
    return nuevoFavoritos.length === 1;
};