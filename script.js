const body = document.body
const form = document.getElementById('form')
const formInput = document.getElementById('formInput')
const formBtn = document.getElementById('formBtn')
const formSelect = document.getElementById('formSelect')
const output = document.getElementById('output')


const API = 'http://api.giphy.com/v1/gifs/search?'
const apiKey = 'api_key=Rx4dneWQnpSwqx5Yxhkyc1zIlhfTqzSg'
const limit = '&limit='
const params = '&q='
const fetchData = async ()=>{
    const url = API+apiKey+params+formInput.value+limit+select()
    const request = await fetch(url)
    console.log(request); 
    const response = await request.json()
    console.log(response.data);
    showUser(response.data) 
}

const select = ()=>{
    const selected = formSelect.selectedIndex
    const valueOfOption = formSelect.options[selected]
    return valueOfOption.text
}


form.addEventListener('submit',(event)=>{
    fetchData()
    event.preventDefault()
})
 
const showUser = (apidata)=>{
    console.log(apidata);
    formInput.value =''
    output.innerHTML = '' 
    apidata.map(element => {
        const imgGifs = document.createElement('iframe')
        const title = document.createElement('p')
        // title.textContent = element.title
        imgGifs.src = element.embed_url
        output.append(imgGifs)
    })   
}

