import style from './index.module.css'

export default function SearchBard({ setTitle, title }){
    const handleSubmit = ()=>{
        
    }
    const handleChange = ()=>{

    }
    return(
        <form onSubmit={(e) => handleSubmit(e)}>
        <input
            type="text"
            id="title"
            className={style.Bar}
            onChange={(e) => handleChange(e)}
            placeholder='Search breed'
            value={title}
        />
    </form>
    )
    
}