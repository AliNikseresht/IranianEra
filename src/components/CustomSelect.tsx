import React from 'react'

const LanguageSelect = () => {
    return (
        <form className="max-w-sm mx-auto">
            <select id="languages"
                className="text-gray-900 text-sm rounded-lg focus:ring-transparent focus:border-transparent cursor-pointer block w-full p-2.5 border-none bg-transparent">
                <option selected>Choose a language</option>
                <option value="fa">Persian</option>
                <option value="en">English</option>
                <option value="fr">French</option>
                <option value="de">German</option>
            </select>
        </form>
    )
}

export default LanguageSelect
