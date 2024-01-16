// import { useEffect, useMemo } from 'react';
import '../styles/editor.css'
import { useEffect, useState } from 'react';

const styles = {
    btn: 'p-2 bg-black text-center text-white rounded-xl font-mono  hover:bg-gray-800 hover:shadow-lg'
}




const TextEditor = ({ border }) => {

    const [editor, setEditor] = useState(null);
    const [windowLoaded, setWindowLoaded] = useState(false);


    //set windowLoaded to true when window is loaded
    useEffect(() => {
        window.addEventListener('load', () => {
            setWindowLoaded(true);
        })
    }, [])

    //set editor content to local storage
    useEffect(() => {
        if (editor) {
            editor.addEventListener('input', () => {
                // localStorage.setItem('content', editor.innerHTML);
                localStorage.setItem('content', editor.outerHTML);

            })
        }
    }, [editor])


    //get editor content from local storage when window is first loaded
    useEffect(() => {
        if (editor && windowLoaded) {
            editor.innerHTML = localStorage.getItem('content');
            setWindowLoaded(false);
        }
    }, [windowLoaded, editor])



    const [buttonClickCount, setButtonClickCount] = useState(0);
    const [currentNode, setCurrentNode] = useState(null);
    const [currentButton, setCurrentButton] = useState(null);
    const [editorTextRange, setEditorTextRange] = useState(null);



    useEffect(() => {
        !editor && setEditor(document.getElementById('editor'));
    }, [editor])



    //process className to remove spaces and convert to array
    const processClassName = (className) => {
        let processedClassName = className.replace(/\s+/g, ' ').trim().split(' ');
        return processedClassName;
    }

    const handleAnchorElementCreate = (node) => {
        let href = prompt('Enter link');
        node.href = href;
        node.target = '_blank';
        node.rel = 'noopener noreferrer';
        node.addEventListener('click', (event) => {
            event.preventDefault();
            window.open(href, '_blank');
        })

        return node;
    }

    const handleInsertImageButtonClick = (e) => {
        e.preventDefault();
        let fileButton = document.getElementById('upload-image-button')
        fileButton.click();
        let img;
        fileButton.addEventListener('change', (event) => {
            let file = event.target.files[0];
            let reader = new FileReader();
            reader.onloadend = () => {
                img = document.createElement('img');
                img.src = reader.result;
                let classes = 'w-full h-auto max-w-[80px]';
                let processedClassName = processClassName(classes);
                processedClassName.forEach((className) => {
                    img.classList.add(className);
                })
                let selectedTextRange = getSelectedText();
                if (selectedTextRange) {
                    selectedTextRange.insertNode(img);
                }
            }
            reader.readAsDataURL(file);
        });
        return img;
    }


    const handleStyleButtonClick = (event) => {
        event.preventDefault();
        console.log(event.target.name);
        setCurrentButton(event.target.id);

        let className = event.target.name;
        let elementType = event.target.id;

        if (!elementType || elementType === 'editor') {
            elementType = 'span';
        }

        setButtonClickCount(buttonClickCount + 1);
        let selectedTextRange = getSelectedText()
        console.log(selectedTextRange);
        if (selectedTextRange) {
            setEditorTextRange(selectedTextRange);
            applyStyle({ range: selectedTextRange, className, elementType, buttonType: event.target.id });
        }
    }



    // Apply style to selected text
    const applyStyle = ({ range, className, elementType = 'span', buttonType }) => {



        if (buttonType !== currentButton) {

            //create new HTML node
            let newNode = document.createElement(elementType);

            // Add class to new node
            let processedClassName = processClassName(className);
            processedClassName.forEach((className) => {
                newNode.classList.add(className);
            })

            // Surround selected text with new node
            range.surroundContents(newNode);

            // If anchor Tag-> Add href and target attributes
            if (elementType === 'a') {
                newNode = handleAnchorElementCreate(newNode);
                console.log('new anchor node', newNode);
            }

            if (elementType === 'img') {
                newNode = handleInsertImageButtonClick();
                editorTextRange.insertNode(newNode)
            }

            setCurrentNode(newNode);
            console.log('class added');
        }
        else if (currentButton === buttonType && currentNode) {
            let processedClassName = processClassName(className);

            processedClassName.forEach((className) => {
                currentNode.classList.remove(className);
            })

            let textContent = currentNode.textContent;
            currentNode.remove();
            range.insertNode(document.createTextNode(textContent));
            setCurrentButton(null);
            setCurrentNode(buttonType);
            console.log('class removed', className);
        }
    }



    const getSelectedText = () => {
        let selection = window.getSelection();
        if (selection.rangeCount === 0) return null;
        let range = selection.getRangeAt(0);
        return range
    }


    return (

        <div id='editor-wrapper' className="editorWrapper bg-black  w-full h-full border-collapse outline - none p - 4 flex flex-col">


            {/* Editor */}
            <div className={`editor-container w-full h-full
            bg-white min-h-[400px] min-w[100px] rounded-lg  
            cursor-text outline-none
            ${border.length > 2 ? border : 'border-black'} border-[1px]
             `}>

                <div id='editor'
                    onMouseUp={getSelectedText}
                    contentEditable
                    className={`w-full h-full  rounded-lg text-sm 
                                cursor-text outline-none p-4 px-4 
                                mx-auto  bg-white text-black`}
                />


            </div>


            {/* Toolbar */}
            <div id='toolbar' className=" row-start-2 toolbar text-md py-2 
            max-h-[200px]  ">

                <div className="row1 flex flex-wrap justify-between px-8">
                    {/* Bold */}
                    <button
                        id='bold-btn'
                        name='font-bold'
                        onClick={handleStyleButtonClick}
                        className={`${styles.btn} hover:-translate-y-1 hover:bg-inherit font-bold`}>B
                    </button>

                    {/* Italic */}
                    <button id='em'
                        name='font-italic'
                        onClick={handleStyleButtonClick}
                        className={`${styles.btn} hover:-translate-y-1 hover:bg-inherit `}>
                        <em className=' pointer-events-none'>I</em>
                    </button>

                    {/* Underline */}
                    <button id='underline-btn'
                        name='underline'
                        onClick={handleStyleButtonClick}
                        className={`${styles.btn} underline hover:-translate-y-1 hover:bg-inherit`}>U
                    </button>

                    {/* Strikethrough */}
                    <button id='strike-btn'
                        name='line-through'
                        onClick={handleStyleButtonClick}
                        className={`${styles.btn} line-through hover:-translate-y-1 hover:bg-inherit`}>S
                    </button>

                    {/* Link */}
                    <button id='a'
                        className={`${styles.btn} w-9 hover:-translate-y-1 hover:bg-inherit`}
                        name='text-sky-400 hover:text-sky-600 hover:underline'
                        onClick={handleStyleButtonClick}
                    >
                        <img src="/assets/icons/link.svg" alt="link" className=' pointer-events-none' />
                    </button>

                    {/* Image ----- name-> used to pass classes through to the buttonClick functions */}
                    <button id='img'
                        className={`${styles.btn} w-7 hover:-translate-y-1 hover:bg-inherit`}
                        name='w-40 max-w-[124px] hover:text-sky-400 hover:underline '
                        onClick={handleInsertImageButtonClick}
                    >
                        <img src="/assets/icons/image.svg" alt="imageIcon" className='pointer-events-none' />
                    </button>

                    {/* Quote */}
                    <button id='blockquote' name='text-gray-700 text-italic'
                        className={`${styles.btn} w-8 hover:-translate-y-1 hover:bg-inherit`}>
                        <img className='pointer-events-none' src="/assets/icons/quote.svg" alt="quote" />
                    </button>



                    <div className=' w-full flex justify-around '>

                        <select id="bullet-list-menu" name="bullet-list-menu" className={`${styles.btn}`}>
                            <option value="bullet-list" className="bullet-list ">
                                Bullet List
                            </option>

                            <option value="square-list" className="square-list "> Squared List </option>
                            <option value="bullet-circle-list" className="circle-list "> Circle List </option>
                        </select>

                        <select id='text-style' name='text-style' className={`${styles.btn} text-center`}>
                            <option value="paragraph" className="body"> Body </option>
                            <option value="mono" className="mono"> Mono </option>
                            <option value="heading1" className="heading1"> Heading 1</option>
                            <option value="heading1" className="heading2"> Heading 2</option>
                            <option value="heading1" className="heading3"> Heading 3</option>
                            <option value="heading1" className="heading4"> Heading 4</option>
                            <option value="heading1" className="heading5"> Heading 5</option>
                            <option value="heading1" className="heading6"> Heading 6</option>

                        </select>


                        <button id='undo' className={`${styles.btn}`}>Undo</button>
                        <button id='redo' className={`${styles.btn}`}>Redo</button>
                        <button id='clear' className={`${styles.btn}`}>Clear</button>

                    </div>



                </div>


                <div className="row2 flex flex-wrap justify-between px-8">
                    <button className={`${styles.btn} hover:underline hover:bg-inherit`}><span className='hidden md:inline'> Align</span> Left</button>
                    <button className={`${styles.btn} hover:underline hover:bg-inherit`}><span className='hidden md:inline' >Align</span> Center</button>
                    <button className={`${styles.btn} hover:underline hover:bg-inherit`}><span className='hidden md:inline' > Align</span> Right</button>
                    <button className={`${styles.btn} hover:underline hover:bg-inherit`}><span className='hidden md:inline' > Align</span> Justify</button>

                </div>



            </div>
        </div >

    )
}


export default TextEditor;