import React from 'react'
import lang from '../utils/languageConstants'
import { useSelector } from 'react-redux'

const GptSearchBar = () => {
    const langKey = useSelector(store => store.config.lang)
    console.log('langKey: ', langKey)
    return (
        <div className='pt-[20%] flex justify-center'>
            <form className='w-1/2 bg-black grid grid-cols-9'>
                <input type='text' className='p-4 m-4 col-span-6' placeholder={lang[langKey].gptSearchPlaceholder} />
                <button className='col-span-3 py-2 px-4 bg-red-700 m-4 text-white rounded-lg'>{lang[langKey].search}</button>
            </form>
        </div>
    )
}

export default GptSearchBar