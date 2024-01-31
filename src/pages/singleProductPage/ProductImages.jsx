import { Box, Stack } from '@chakra-ui/react'
import React from 'react'
import ReactImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'
import './imagestyle.css'
const ProductImages = () => {
    const ProductDetails={
        images: [
            {
              original:
                "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600",
              thumbnail:
                "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600",
            },
            {
              original:
                "https://images.pexels.com/photos/1667088/pexels-photo-1667088.jpeg?auto=compress&cs=tinysrgb&w=600",
              thumbnail:
                "https://images.pexels.com/photos/1667088/pexels-photo-1667088.jpeg?auto=compress&cs=tinysrgb&w=600",
            },
            {
                original:
                  "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600",
                thumbnail:
                  "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600",
              },
              {
                original:
                  "https://images.pexels.com/photos/1667088/pexels-photo-1667088.jpeg?auto=compress&cs=tinysrgb&w=600",
                thumbnail:
                  "https://images.pexels.com/photos/1667088/pexels-photo-1667088.jpeg?auto=compress&cs=tinysrgb&w=600",
              },
              {
                original:
                  "https://images.pexels.com/photos/1667088/pexels-photo-1667088.jpeg?auto=compress&cs=tinysrgb&w=600",
                thumbnail:
                  "https://images.pexels.com/photos/1667088/pexels-photo-1667088.jpeg?auto=compress&cs=tinysrgb&w=600",
              }
            ,
          ]
        }
  return (
    <Stack as='section' className='product-images-section ' 
        
    >
            <ReactImageGallery 
                showBullets={false}
                showFullscreenButton={false}
                showPlayButton={false}
                infinite={true}
                items={ProductDetails.images}
                
                
            >

            </ReactImageGallery>
    </Stack>
  )
}

export default ProductImages