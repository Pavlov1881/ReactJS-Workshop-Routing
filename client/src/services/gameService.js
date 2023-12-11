const baseUrl = 'http://localhost:3030/jsonstore'

export const create = (gameData) => {

    fetch(`${baseUrl}/games`, {
        method: 'POST',
        headers: {
            'content-type':'application/json'

        }
    })
}