import React ,{useState} from 'react'
import PropTypes from 'prop-types'

export default function Input({addPost}) {  //pros addPost
    const [input, setInput] = useState(''); // intitial data = emptyString

    function onChange(event){
        setInput(event.target.value);
    }
    function keyDown(event){
        const title = event.target.value;
        if(event.key === "Enter" && title){
            addPost(title); 
            setInput(""); //clear
        }
    }

    return (
        <div className="Input">
            <div className="Input__header">
                CreatePost
            </div>
            <input className="Input__field" type="text" value={input} onChange={onChange} onKeyDown={keyDown}/>
        </div>
    )
}

Input.propTypes={
    addPost : PropTypes.func.isRequired
}
