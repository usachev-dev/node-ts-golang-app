import { hello } from "../../shared/hello";
import axios from "axios"

hello();
console.log('client can request api as well')

axios.get('/api/hello').then(r => r.data).then((response: string) => {
    console.log(response)
})
