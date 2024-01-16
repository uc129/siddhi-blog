import React, { useState } from 'react';

const TitleTextEditor = ({ onChange }) => {


    const [titleValue, setTitleValue] = useState('');

    const handleTitleChange = (e) => {
        setTitleValue(e.target.value);
        onChange(e.target.value);
    };

    // onChange(titleValue);

    return (
        <div className="title-text-editor w-[80%] mx-auto h-10 rounded-xl mb-4">
            <input
                type="text"
                className="title-text-editor__input w-full h-full rounded-xl p-4 "
                placeholder="Enter Title"
                value={titleValue}
                onChange={handleTitleChange}
            />
        </div>
    );



};

export default TitleTextEditor;


