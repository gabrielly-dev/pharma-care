import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.PHARMA_CARE_URL
})

export const buscar = async (url: string, setDados: Function) => {
    const resposta = await api.get(url)
    setDados(resposta.data)
}

