import React, { useEffect, useState } from 'react';
import { IoIosBook, IoIosBookmark, IoIosHeart, IoIosHeartDislike, IoIosHeartEmpty, IoLogoFacebook, IoLogoInstagram, IoLogoTwitter } from "react-icons/io";

const styles = {
    toolsButton: ' bg-white border-0 w-14 hover:bg-white  flex  justify-center rounded-[100%] *:pointer-events-none'
}

const PostSidebarTools = ({ getMetaDetails }) => {

    const [meta, setMeta] = useState({
        like: false,
        dislike: false,
        bookmark: false,
        share: {
            twitter: false,
            instagram: false,
            facebook: false,
        },
    });

    const [updated, setUpdated] = useState(false);

    const handleButtonClick = (e) => {
        // console.log('button clicked', e);
        e.preventDefault();
        const button = e.target.id;


        switch (button) {
            case 'like':
                setMeta({ ...meta, like: !meta.like })
                // console.log('like', meta.like);
                break;
            case 'dislike':
                setMeta({ ...meta, dislike: !meta.dislike })
                break;
            case 'bookmark':
                setMeta({ ...meta, bookmark: !meta.bookmark })
                break;
            case 'twitter':
                setMeta({ ...meta, share: { ...meta.share, twitter: !meta.share.twitter } })
                break;
            case 'instagram':
                setMeta({ ...meta, share: { ...meta.share, instagram: !meta.share.instagram } })
                break;
            case 'facebook':
                setMeta({ ...meta, share: { ...meta.share, facebook: !meta.share.facebook } })
                break;
            default:
                break;
        }
        setUpdated(true);
    }

    useEffect(() => {
        if (updated) {
            getMetaDetails(meta);
            setUpdated(false);
        }
        // console.log('updated', meta);
    }, [updated, meta, getMetaDetails, setUpdated]);



    return (
        <div className="tools mx-auto flex lg:flex-col">

            <button id='like' onClick={handleButtonClick}
                className={`${styles.toolsButton} ${meta.like ? 'text-red-500' : 'text-black'}
                `}
            >
                {!meta.like && <IoIosHeartEmpty size={'2em'} color='black' />}
                {meta.like && <IoIosHeart size={'2em'} color='red' />}
            </button>

            <button id='dislike' onClick={handleButtonClick}
                className={`${styles.toolsButton} ${meta.dislike ? 'text-red-500' : 'text-black'}`}>
                {!meta.dislike && <IoIosHeartDislike size={'2em'} color='black' />}
                {meta.dislike && <IoIosHeartDislike size={'2em'} color='red' />}
            </button>

            <button id='bookmark' onClick={handleButtonClick}
                className={`${styles.toolsButton} ${meta.bookmark ? 'text-red-500' : 'text-black'}`}>
                {!meta.bookmark && <IoIosBookmark size={'2em'} color='black' />}
                {meta.bookmark && <IoIosBook size={'2em'} color='red' />}
            </button>

            <button id='twitter' onClick={handleButtonClick}
                className={`${styles.toolsButton} ${meta.share.twitter ? 'text-red-500' : 'text-black'}`}>
                {meta.share.twitter && <IoLogoTwitter size={'2em'} color='#3e9cbf' />}
                {!meta.share.twitter && <IoLogoTwitter size={'2em'} color='#4f6a8f' />}
            </button>


            <button id='instagram' onClick={handleButtonClick}
                className={`${styles.toolsButton} ${meta.share.instagram ? 'text-red-500' : 'text-black'}`}>
                {!meta.share.instagram && <IoLogoInstagram size={'2em'} color='#4f6a8f' />}
                {meta.share.instagram && <IoLogoInstagram size={'2em'} color='#b13254' />}

            </button>

            <button id='facebook' onClick={handleButtonClick}
                className={`${styles.toolsButton} ${meta.share.facebook ? 'text-red-500' : 'text-black'}`}>
                {!meta.share.facebook && <IoLogoFacebook size={'2em'} color='#4f6a8f' />}
                {meta.share.facebook && <IoLogoFacebook size={'2em'} color='#b13254' />}
            </button>



        </div>
    )

}

export default PostSidebarTools;