import '../styles/tiptap.styles.css'

import { Color } from '@tiptap/extension-color'
import ListItem from '@tiptap/extension-list-item'
import TextStyle from '@tiptap/extension-text-style'
import { useEditor, EditorContent } from '@tiptap/react'
import Highlight from '@tiptap/extension-highlight'
import TextAlign from '@tiptap/extension-text-align'
import StarterKit from '@tiptap/starter-kit'
import CharacterCount from '@tiptap/extension-character-count'
import FontFamily from '@tiptap/extension-font-family'
import Underline from '@tiptap/extension-underline'
import Link from '@tiptap/extension-link'
import Image from '@tiptap/extension-image'
import { isSafari } from '../App'

import React from 'react'

export const fonts = [
    {
        name: 'Apple',
        font: 'BlinkMacSystemFont'
    },
    {
        name: 'Sunset',
        font: 'Sunset'
    },
    {
        name: 'Into Light',
        font: 'Into Light'
    },
    {
        name: 'Roboto',
        font: 'Roboto'
    },
    {
        name: 'Nunito',
        font: 'Nunito'
    },
    {
        name: 'Bebas Neue',
        font: 'Bebas Neue'
    },
    {
        name: 'Chakra Petch',
        font: 'Chakra Petch'
    },
    {
        name: 'Climate Crisis',
        font: 'Climate Crisis'
    },
    {
        name: 'Grape Nuts',
        font: 'Grape Nuts'
    },
    {
        name: 'IBM Devanagari',
        font: 'IBM Devanagari'
    },
    {
        name: 'Lemon',
        font: 'Lemon'
    },
    {
        name: 'Noto Devanagari',
        font: 'Noto Sans Devanagari'
    },
    {
        name: 'Pacifico',
        font: 'Pacifico'
    },
    {
        name: 'Rajdhani',
        font: 'Rajdhani'
    }
]

export const colours = [
    {
        name: 'black',
        hex: '#000000'
    },
    {
        name: 'white',
        hex: '#ffffff'
    },
    {
        name: 'IndianRed',
        hex: '#CD5C5C'
    },
    {
        name: 'LightCoral',
        hex: '#F08080'
    },
    {
        name: 'Salmon',
        hex: '#FA8072'
    },
    {
        name: 'DarkSalmon',
        hex: '#E9967A'
    },
    {
        name: 'LightSalmon',
        hex: '#FFA07A'
    },

    {
        name: 'purple',
        hex: '#958DF1'
    },

    {
        name: 'baby-blue',
        hex: '#89CFF0'

    },

    {
        name: 'blue',
        hex: '#0096FF'
    },

    {
        name: 'pastel-blue',
        hex: '#A7C7E7'
    },

    {
        name: 'sky-blue',
        hex: '#87CEEB'
    },

    {
        name: 'steel-blue',
        hex: '#4682B4'
    },

    {
        name: 'glaucous',
        hex: '#6082B6'
    },

    {
        name: 'teal',
        hex: '#008080'
    },

    {
        name: 'verdigris',
        hex: '#40B5AD'
    },

    {
        name: 'almond',
        hex: '#EADDCA'
    },

    {
        name: 'brown',
        hex: '#A52A2A'
    },

    {
        name: 'burgundy',
        hex: '#800020'
    },

    {
        name: 'camel',
        hex: '#C19A6B'
    },

    {
        name: 'cordovan',
        hex: '#814141'
    },

    {
        name: 'nude',
        hex: '#F2D2BD'
    },

    {
        name: 'oxblood',
        hex: '#4A0404'
    },

    {
        name: 'puce',
        hex: '#A95C68'
    },

    {
        name: 'wine',
        hex: '#722F37'
    },

    {
        name: 'wheat',
        hex: '#F5DEB3'
    },

    {
        name: 'light-gray',
        hex: '#D3D3D3'
    },

    {
        name: 'gunmetal-gray',
        hex: '#818589'
    },

    {
        name: 'blue-green',
        hex: '#088F8F'
    },

    {
        name: 'mint-green',
        hex: '#98FB98'
    },

    {
        name: 'olive-green',
        hex: '#808000'

    },

    {
        name: 'smoke',
        hex: '#848884'
    },

    {
        name: 'army-green',
        hex: '#454B1B'
    },

    {
        name: 'cadmium-green',
        hex: '#097969'
    },

    {
        name: 'dark-green',
        hex: '#023020'
    },

    {
        name: 'light-green',
        hex: '#90EE90'
    },

    {
        name: 'moss-green',
        hex: '#8A9A5B'
    },

]

const MenuBar = ({ editor }) => {

    const [linkButtonClickCount, setLinkButtonClickCount] = React.useState(0)

    if (!editor) {
        return null
    }
    const handleFontFamilyChange = (e) => {
        e.preventDefault()
        let value = e.target.value;
        // console.log(value, 'value');
        editor.chain().focus().setFontFamily(value).run()
    }

    const handleTextStyleChange = (e) => {
        e.preventDefault()
        let value = e.target.value;
        switch (value) {
            case 'p':
                editor.chain().focus().setParagraph().run()
                break;

            case 'h1':
                editor.chain().focus().toggleHeading({ level: 1 }).run()
                break;

            case 'h2':
                editor.chain().focus().toggleHeading({ level: 2 }).run()
                break;

            case 'h3':
                editor.chain().focus().toggleHeading({ level: 3 }).run()
                break;

            case 'h4':
                editor.chain().focus().toggleHeading({ level: 4 }).run()
                break;

            case 'h5':
                editor.chain().focus().toggleHeading({ level: 5 }).run()
                break;

            case 'h6':
                editor.chain().focus().toggleHeading({ level: 6 }).run()
                break;

            case 'mono':
                editor.chain().focus().toggleCode().run()
                break;

            default:
                break;

        }

    }

    const handleListOptionSelect = (e) => {
        e.preventDefault();
        let value = e.target.value;
        switch (value) {
            case 'list-none':
                editor.chain().focus().toggleBulletList().run()
                break;

            case 'list-disc':
                editor.chain().focus().toggleOrderedList({ listType: 'disc' }).run()
                break;

            case 'list-decimal':
                editor.chain().focus().toggleOrderedList({ listType: 'circle' }).run()
                break;

            default:
                break;
        }






    }

    const handleAlignButtonClick = (e) => {
        e.preventDefault();
        let value = e.target.id;
        switch (value) {
            case 'align-left-btn':
                editor.chain().focus().setTextAlign('left').run()
                break;

            case 'align-center-btn':
                editor.chain().focus().setTextAlign('center').run()
                break;

            case 'align-right-btn':
                editor.chain().focus().setTextAlign('right').run()
                break;

            case 'align-justify-btn':
                editor.chain().focus().setTextAlign('justify').run()
                break;

            default:
                break;
        }
    }

    const handleColourChange = (e) => {
        e.preventDefault();
        let value = e.target.value;
        colours.forEach((colour) => {
            if (colour.name === value) {
                editor.chain().focus().setColor(colour.hex).run()
            }
        })


    }



    const handleButtonClick = (e) => {
        e.preventDefault();

        const btnType = e.target.id;

        if (btnType === 'link-btn') {
            if (linkButtonClickCount % 2 === 0) {
                let href = prompt('Enter the link')
                editor.chain().focus().setLink({ href }).run()
                setLinkButtonClickCount(linkButtonClickCount + 1)

            }
            else {
                editor.chain().focus().unsetLink().run()
                setLinkButtonClickCount(0)

            }
            return
        }


        if (btnType === 'insert-image-btn') {
            let src = prompt('Enter the image link')
            editor.chain().focus().setImage({ src }).run()
            return
        }

        switch (btnType) {
            case 'bold-btn':
                editor.chain().focus().toggleBold().run()
                break;
            case 'italic-btn':
                editor.chain().focus().toggleItalic().run()
                break;
            case 'strike-btn':
                editor.chain().focus().toggleStrike().run()
                break;
            case 'underline-btn':
                editor.chain().focus().toggleUnderline().run()
                break;
            case 'code-btn':
                editor.chain().focus().toggleCode().run()
                break;
            case 'clear-marks-btn':
                editor.chain().focus().unsetAllMarks().run()
                break;
            case 'clear-nodes-btn':
                editor.chain().focus().clearNodes().run()
                break;
            case 'code-block-btn':
                editor.chain().focus().toggleCodeBlock().run()
                break;
            case 'blockquote-btn':
                editor.chain().focus().toggleBlockquote().run()
                break;
            case 'hr-btn':
                editor.chain().focus().setHorizontalRule().run()
                break;
            case 'hard-break-btn':
                editor.chain().focus().setHardBreak().run()
                break;
            case 'undo-btn':
                editor.chain().focus().undo().run()
                break;
            case 'redo-btn':
                editor.chain().focus().redo().run()
                break;


            case 'highlight-btn':
                editor.chain().focus().toggleHighlight().run()
                break;



            default:
                break;
        }

    }



    return (
        <div className='tiptap flex flex-col  bg-black p-2  justify-between flex-wrap border-b-2 border-black border-collapse'>
            {/* <button className='hidden'>
            </button> */}

            {/* Row - 1   */}
            <div className='flex w-full flex-wrap justify-between gap-2'>

                <button id='bold-btn' onClick={handleButtonClick}
                    disabled={!editor.can().chain().focus().toggleBold().run()}
                    className={editor.isActive('bold') ? 'is-active font-bold' : 'font-bold'}>  B
                </button>


                <button id='italic-btn' onClick={handleButtonClick} disabled={!editor.can().chain().focus().toggleItalic().run()}
                    className={editor.isActive('italic') ? 'is-active italic font-mono' : 'italic font-mono'}> I
                </button>

                <button id='strike-btn' onClick={handleButtonClick} disabled={!editor.can().chain().focus().toggleStrike().run()}
                    className={editor.isActive('strike') ? 'is-active line-through' : 'line-through'}> S
                </button>

                <button id='underline-btn' onClick={handleButtonClick} className='underline'>
                    U
                </button>

                <button id='link-btn' onClick={handleButtonClick} className=''>
                    link
                </button>

                <button id='insert-image-btn' onClick={handleButtonClick} className=''>
                    image
                </button>

                <button id='highlight-btn'
                    onClick={handleButtonClick}
                    className={editor.isActive('highlight') ? 'is-active' : ''}
                >
                    highlight
                </button>





            </div>

            {/* Row-2 */}
            <div className="flex w-full flex-wrap gap-2 justify-between">

                {/* List Options */}
                <select defaultValue={'none'}
                    onChange={handleListOptionSelect} className={editor.isActive('strike') ? 'is-active text-center ' : 'text-center'}>
                    <option value="none">List</option>
                    <option value="list-none" className="bullet-list "> Bullet List </option>
                    <option value="list-disc" className="disc-list "> Numbered List </option>
                </select>

                {/* Text Style Select */}
                <select id='text-style' name='text-style' onChange={handleTextStyleChange}>
                    <option value="p" className="body"> Body </option>
                    <option value="mono" className="mono"> Mono </option>
                    <option value="h1" className="heading1"> Heading 1</option>
                    <option value="h2" className="heading2"> Heading 2</option>
                    <option value="h3" className="heading3"> Heading 3</option>
                    <option value="h4" className="heading4"> Heading 4</option>
                    <option value="h5" className="heading5"> Heading 5</option>
                    <option value="h6" className="heading6"> Heading 6</option>
                </select>

                <div className='flex gap-2 justify-between items-center '>

                    {/* Colour Options */}
                    <div className="flex gap-2 items-center">

                        <input type="color"
                            onInput={event => event.target.value && editor.chain().focus().setColor(event.target.value).run()}
                            value={editor.getAttributes('textStyle').color}
                            className={`text-center  bg-black outline-none ${isSafari ? 'border-2 border-white' : ''} `}
                        />

                        <select defaultValue={'#000000'} onChange={handleColourChange} className='text-center'>
                            <option value='#000000'>  Colour </option>
                            {colours.map((colour, index) => {
                                return (
                                    <option value={colour.name} key={index} className={colour.name}>
                                        {colour.name}
                                    </option>
                                )
                            })}
                        </select>
                    </div>


                    {/* Font-family */}
                    <select id='font-family' name='font-family' className='font-family'
                        onChange={handleFontFamilyChange}>
                        <option value=''> Font </option>
                        {
                            fonts.map((font, index) => {
                                return (
                                    <option value={font.font} key={index} >
                                        {font.name}
                                    </option>
                                )
                            })
                        }
                    </select>


                </div>



                {/* quote,code block */}

                <div className="flex w-full flex-wrap gap-2  justify-between">

                    <button id='blockquote-btn'
                        onClick={handleButtonClick}
                        className={editor.isActive('blockquote') ? 'is-active' : ''}
                    >
                        quote block
                    </button>


                    {/* spacing */}
                    <div className="flex">
                        <button id='hr-btn' onClick={handleButtonClick}>
                            horizontal rule
                        </button>


                        <button id='hard-break-btn' onClick={handleButtonClick}>
                            hard break
                        </button>

                        <button id='clear-marks-btn' onClick={handleButtonClick}>
                            clear format
                        </button>


                        <button id='clear-nodes-btn' onClick={handleButtonClick}>
                            clear blocks
                        </button>


                    </div>


                    {/* clear, undo etc. */}
                    <div className="flex justify-between w-full ">




                    </div>
                </div>
            </div>


            {/* Row 3 */}
            <div className="flex  w-full flex-wrap justify-between px-8">

                <button id='align-left-btn' onClick={handleAlignButtonClick}
                    // disabled={!editor.can().chain().focus().redo().run()}
                    className={` hover:underline flex gap-1  cursor-grab`}>
                    <span className='hidden md:inline pointer-events-none'> Align</span>
                    <span className='pointer-events-none'>Left</span>
                </button>

                <button id='align-center-btn' onClick={handleAlignButtonClick}
                    // disabled={!editor.can().chain().focus().redo().run()}
                    className={` hover:underline flex gap-1 cursor-grab `}>
                    <span className='hidden md:inline pointer-events-none' >Align</span>
                    <span className='pointer-events-none'> Center</span>
                </button>

                <button id='align-right-btn' onClick={handleAlignButtonClick}
                    // disabled={!editor.can().chain().focus().redo().run()}
                    className={` hover:underline flex gap-1 cursor-grab`}>
                    <span className='hidden md:inline pointer-events-none' > Align</span>
                    <span className='pointer-events-none'> Right</span>
                </button>


                <button id='align-justify-btn' onClick={handleAlignButtonClick}
                    // disabled={!editor.can().chain().focus().redo().run()}
                    className={` hover:underline flex gap-1 cursor-grab `}>
                    <span className='hidden md:inline pointer-events-none' > Align</span>
                    <span className='pointer-events-none'>Justify</span>
                </button>

                <button id='undo-btn' onClick={handleButtonClick}
                    disabled={!editor.can().chain().focus().undo().run()}>
                    undo
                </button>


                <button id='redo-btn' onClick={handleButtonClick}
                    disabled={!editor.can().chain().focus().redo().run()}>
                    redo
                </button>
            </div>

        </div >
    )
}

const extensions = [
    TextAlign.configure({
        alignments: ['left', 'center', 'right', 'justify'],
        types: ['heading', 'paragraph'],
    }),

    Link.configure({
        HTMLAttributes: {
            class: 'underline underline-offset-1 text-sky-400 cursor-grab',
            rel: 'noopener noreferrer',
            target: '_blank',
            // validate: href => /^https?:\/\//.test(href),

        }
    }),

    Image.configure({
        inline: true,
        validate: url => /^https?:\/\//.test(url),
        HTMLAttributes: {
            class: 'my-custom-class',
        },
    }),

    Highlight,
    Underline.configure({
        HTMLAttributes: {
            class: 'underline underline-offset-1',
        },
    }),
    CharacterCount,
    FontFamily.configure({
        types: ['textStyle'],
    }),
    Color.configure({ types: [TextStyle.name, ListItem.name] }),
    TextStyle.configure({ types: [ListItem.name] }),
    StarterKit.configure({
        heading: {
            levels: [1, 2, 3, 4, 5, 6],

        }
    })
]


const InfoBar = ({ editor }) => {
    if (!editor) {
        return null
    }

    return (
        <div className='info-bar flex gap-1 justify-end pr-2 text-xs 2xl:text-sm '>
            <div className='flex gap-1'>
                <span>Characters</span>
                {editor.storage.characterCount.characters()}
                <span></span>
            </div>

            <div className="flex gap-1">
                <span>
                    Words
                </span>
                <span>
                    {editor.storage.characterCount.words()}
                </span>
            </div>

        </div>
    )

}




const Editor = () => {
    // let placeholder = `<p> Start a new post.!!!.. </p>`
    // const [update, setUpdate] = React.useState(false)
    let content = localStorage.getItem('editor-content')
    if (!content) content = '<p> Start a new post.!!!.. </p>'
    const editor = useEditor({
        extensions: extensions,
        content,
        editorProps: {
            attributes: {
                spellcheck: 'false',
                class: 'outline-none p-4  h-full min-h-[400px]'
            },
        },

        onUpdate() {
            localStorage.setItem('editor-content', editor.getHTML())
        },
    })

    // React.useEffect(() => {
    //     if (!editor) return;
    //     localStorage.setItem('editor-content', editor.getHTML())
    // }, [update])




    return (
        <div className='tiptap'>
            <MenuBar editor={editor} />
            <EditorContent editor={editor} />
            <InfoBar editor={editor} />
        </div>
    )
}

export default Editor