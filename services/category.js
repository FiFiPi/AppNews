import {api} from '.'

const CategoryService = {
    list({
        offset,
        limit = 10,
        ...restParam
    }={}){
       
        return api.call().get('/categories_news',{
            params:{
                offset,
                limit,
                ...restParam
            }
        })
    }
}
export default CategoryService