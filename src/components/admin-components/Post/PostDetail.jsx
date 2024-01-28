import React, { useState } from 'react';
import PostSidebarTools from './postSidebarTools';
import { useQuery } from 'react-query';
import axiosClient from '../../../utils/axiosClient';

import { Carousel } from '../../Carousel';
import CarouselItem from '../../carouselItem';

import { RxHamburgerMenu } from "react-icons/rx";








const PostDetail = ({ post }) => {



    const [showMenu, setShowMenu] = useState(false);
    const imageIds = post.images;
    const [images, setImages] = useState([])
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

    // const [transformedImageUrls, setTransformedImagesUrls] = useState([])

    const handleMenuClick = (e) => {
        e.preventDefault();
        setShowMenu(!showMenu)
    }

    useQuery('images', () => { return imageIds.map(async (id) => { return await fetchImage(id) }) },
        {
            onSuccess: (data) => {
                console.log('image received');
            }
        }
    )

    const fetchImage = async (id) => {
        let data;
        await axiosClient.get(`/blog/images/${id}`)
            .then((res) => { data = res.data; setImages((images) => [...images, data]) })
            .catch((err) => console.log(err))
        return data
    }

    if (!post) return <>Loading.. </>

    let primaryImage;
    if (images && !images.length <= 0) {
        primaryImage = images.find((image) => image.isPrimary === true);
        if (!primaryImage) primaryImage = images[0]
        else if (primaryImage.length === 0) primaryImage = images[0]
        else if (primaryImage.length > 1) primaryImage = images[0]
        else return
    }

    let content = post.content;

    return (
        <div className=' wrapper min-w[100vw] gap-12 pt-12'>

            {/* Toolbar Sm Screen */}
            <div className=' flex lg:hidden'>
                <PostSidebarTools post={post} getMetaDetails={(metaData) => setMeta({ ...meta, ...metaData })} />}
            </div>


            <div className="content flex gap-16">
                {/* <div className="tools flex flex-col items-center  pt-44">
                    {showMenu && <PostSidebarTools post={post} getMetaDetails={(metaData) => setMeta({ ...meta, ...metaData })} />}
                </div> */}
                <div className=" flex flex-col gap-4 w-full">

                    <div className='flex p-4'>
                        {/* Toolbar Lg Screen */}
                        <div className='hidden lg:block'>
                            <button onClick={handleMenuClick} className='menu hover:bg-transparent bg-transparent p-4 border-0'>
                                <RxHamburgerMenu color='black' size={30} className='pointer-events-none' />
                            </button>
                            {showMenu && <PostSidebarTools post={post} getMetaDetails={(metaData) => setMeta({ ...meta, ...metaData })} />}
                        </div>



                        {/* Post Content and Image col-11 */}
                        <div className="w-full flex flex-col-reverse  lg:flex-row">

                            {/* Content */}
                            <div className=" mx-auto pb-24 w-full min-h-[500px] bg-sky-200 pl-10 pt-16">

                                <div className="meta text-xs">
                                    <h1 className='text-2xl md:text-5xl pb-10 font-bebas font-bold text-center tracking-widest' >{post.title} </h1>
                                    <p className='text-gray-500 flex gap-4'>
                                        <span>Written By:</span>
                                        {post.author ?
                                            <a href={`/blog/author?author${post.author.name}`} className='underline underline-offset-1'>
                                                {post.author ? post.author : 'Unnati Chaudhary'}
                                            </a>
                                            : 'Unnati Chaudhary'}
                                    </p>

                                    <p className='text-gray-500 flex gap-4'>
                                        <span>Published On:</span>
                                        {post.dates && post.dates.initiated ?
                                            <span className='underline underline-offset-1'>
                                                {post.dates.initiated}
                                            </span>
                                            : '23 Jan 2024'}
                                    </p>

                                </div>

                                <div className="content w-1/2 min-w-[500px]">
                                    <div dangerouslySetInnerHTML={{ __html: content }} />
                                </div>

                            </div>



                            {/* Single Image */}
                            <div id='images-container' className=' min-w-[30em]  bg-orange-200'>
                                {images && images.length !== 0 &&
                                    <div className="h-full object-cover">
                                        <img src={primaryImage.url} alt="primary" className='w-full  object-cover' />
                                    </div>
                                }
                            </div>




                        </div>
                    </div>

                    {/* Row 2 */} {/* Carousel */}
                    <div className=''>

                    </div>



                    {/* {
                    transformedImageUrls && transformedImageUrls.length !== 0 &&


                    <Carousel className={'bgwhite text-white  py-10 lg:py-20'} >
                        {
                            transformedImageUrls.map((url, index) => {
                                return (
                                    <CarouselItem key={index} index={index}>
                                        <img src={url} alt="" className='h-full w-[70vw]  object-cover mx-auto' />
                                    </CarouselItem>
                                )
                            }
                            )}

                    </Carousel>
                } */}



                </div>
            </div>


            <div className="carousel  ">
                {
                    images && images.length !== 0 &&

                    <>
                        <Carousel className={'bgwhite text-white  py-10 lg:py-20'} >
                            {
                                images.map((image, index) => {
                                    return (
                                        <CarouselItem key={index} index={index}>
                                            <img src={image.url} alt="" className='h-[80vh]  object-contain mx-auto' />
                                        </CarouselItem>
                                    )
                                }
                                )}


                        </Carousel>
                    </>
                }
            </div>







        </div>




    )




}


export default PostDetail;



// {
//     title: '4thbyh',
//     content: '<p>Start a new post.!!!..</p><p></p><p>y5g g</p>',
//     images: [ new ObjectId('65af58472a43139e4739d36b') ],
//     comments: [],
//     slug: '4thbyh-1705990216748',
//     category: new ObjectId('65abdbbc4de8eb405eb31957'),
//     tags: [ new ObjectId('65abeed3cfbf448a9fd4b0ab') ],
//     meta: {
//       shares: { to: [] },
//       likes: [],
//       dislikes: [],
//       views: [],
//       bookmarks: [],
//       reports: []
//     },
//     status: 'draft',
//     dates: { initiated: 2024-01-23T06:10:16.752Z },
//     _id: new ObjectId('65af58482a43139e4739d36d'),
//     createdAt: 2024-01-23T06:10:18.783Z,
//     updatedAt: 2024-01-23T06:10:18.783Z,
//     __v: 0
//   }


// [Log] imageUrls – ["https://res.cloudinary.com/demo/image/upload/jusiqbs38lmo2xeajmob.ppg", "https://res.cloudinary.com/demo/image/upload/h_800/w_800/f_auto/dohfwphei2dbofxnsyoc.ppg", "https://res.cloudinary.com/demo/image/upload/h_800/w_800/f_auto/m8yage9renjpyvnys8fo.ppg"] (3) (bundle.js, line 2724)