// export async function readUsers(signal) {
//     return []
// };


// const API_BASE_URL = process.env.API_BASE_URL || "http://localhost:5000";

// const headers = new Headers();
// headers.append("Content-Type","application/json");


// async function fetchJson(url, options){
//     try {
//         const response = await fetch(url, options);
//         console.log(response);
//         if ( response.status === 204 ) return null;

//         const payload = await response.json();
//         console.log(payload);
//         if ( payload.error ) return Promise.reject({message: payload.error});

//         return payload.data;

//     } catch(error) {
//         if (error.name !== "AbortError") {
//             console.log(error.stack)
//             return Promise.reject({message : error.message })
//         }
//     }
// }


const API_BASE_URL = process.env.API_BASE_URL || "http://localhost:5000"

const headers = new Headers();
headers.append("Content-Type", "application/json");

async function fetchJson(url, options) {
    try {
        const response = await fetch(url, options);
        console.log(response);
        if (response.status === 204) return null;

        const payload = await response.json();
        console.log(payload)
        if (payload.error) return Promise.reject({message: payload.error});

        return payload.data
    } catch(error) {
        if (error.name !== "AbortError") {
            console.log(error.stack);
            return Promise.reject({message: error.message})
        }
    }
}



export async function createUser(user, signal){
    const url = `${API_BASE_URL}/accounts/signup`;
    const create = {
        method: "POST",
        headers,
        signal,
        body: JSON.stringify({data:user})
    };
    return await fetchJson(url,create);
}


export async function readUsers(signal) {
    const url = `${API_BASE_URL}`;
    const read = {
        headers,
        signal
    }
    return await fetchJson(url,read);
}