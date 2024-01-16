


const rows = 100;
const cols = 100;

const numEl = rows * cols;

const Elements = Array.from(Array(numEl)).map((_, i) => {
    return <span className="text-sm text-white"> राम </span>
})



const राम = ({ loading }) => {

    window.onload = () => {
        loading(true)
    }

    return (
        <div className="w-full h-full flex flex-wrap  absolute top-0 bg-black">
            {
                Elements.map((el, i) => {
                    return (
                        <div className=" ">
                            {el}
                        </div>
                    )
                })
            }

        </div>
    )

}

export default राम