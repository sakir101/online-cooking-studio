import {useEffect} from 'react';

const useTitle = title =>{
    useEffect(()=>{
        document.title = `${title}-Ranna Banna`;
    },[title])
}

export default useTitle;