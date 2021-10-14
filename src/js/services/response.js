const getData = async (url)=>{

    const API_KEY = '8c8e1a50-6322-4135-8875-5d40a5420d86';
    
    let res = await fetch(url, {
        headers: {
            "Content-Type": "application/json",
            "X-API-KEY": API_KEY
        },
    });

    if(!res.ok){
        throw new Error(`Could'n fetch ${url}, status${res.status}`)
    }

    return await res.json();
}
export default getData;