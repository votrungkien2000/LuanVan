// import 'asset/style/picture.css';
// import { useState } from 'react';
// import hinh from 'asset/image/2.webp'
// function ListPicture() {
//     const [img, setImg] = useState(0);
//     const handleImg = ()=>{
//         setImg(img+1);
//     }
//     console.log(img)
//     return (
//         <div className="Picture">
//             <div className="image-gallery">
//                 <img src={hinh} />
//                 <i style={{fontSize: "3rem"}} onClick={handleImg} className='pi pi-angle-right image-gallery-right'></i>
//                 <i style={{fontSize: "3rem"}} onClick={handleImg} className='pi pi-angle-left image-gallery-left'></i>
//             </div>
//         </div>
//     )
// }
// export default ListPicture
import React, { useState } from 'react';
import  PhotoService from 'asset/image/PhotoService';
import { Galleria } from 'primereact/galleria';
function ListPicture() {
    
    const galleriaService = PhotoService.data;
    const [images, setImages] = useState(galleriaService);
    console.log(images)

    const responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 5
        },
        {
            breakpoint: '960px',
            numVisible: 4
        },
        {
            breakpoint: '768px',
            numVisible: 3
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ];


    const itemTemplate = (item) => {
        return <img src={item.itemImageSrc} height="auto"  onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={item.alt} style={{ width: '100%', display: 'block' }} />
    }

    const thumbnailTemplate = (item) => {
        return <img src={item.thumbnailImageSrc} height="80px" width="85px" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={item.alt} style={{ display: 'block' }} />
    }

    return (
        <div>
            <div className="card" style={{padding: "10px", margin: "20px"}}>
                <Galleria value={images} responsiveOptions={responsiveOptions} numVisible={7} circular style={{ maxWidth: '100%' }}
                    item={itemTemplate} thumbnail={thumbnailTemplate} />
            </div>
        </div>
    );
}
export default ListPicture