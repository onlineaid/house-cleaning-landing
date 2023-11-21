import Image from "next/image";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';


const items = [
  {
    id: 1,
    description: "Fixing CSS load order/style.chunk.css incorrect in Nextjs",
    headline: "New Designed Casual Shoes Bulk Shoes Men Sneakers",
    image:
      "https://s.alicdn.com/@sc04/kf/Ha49943145d404c1e803b6da67c7d61cf9.jpg_480x480.jpg",
  },
  {
    id: 2,

    description: "Fixing CSS load order/style.chunk.css incorrect in Nextjs",
    headline: "w3js.com - web front-end studio",
    image:
      "https://s.alicdn.com/@sc04/kf/H7b1326101ed64c8484110eab46e965301.jpg_480x480.jpg",
  },
  {
    id: 3,

    description: "React Carousel with Server Side Rendering Support – Part 2",
    headline: "w3js.com - web front-end studio",
    image:
      "https://s.alicdn.com/@sc04/kf/He7bc700fa4874b59b9a9bd25985338afx.jpeg_480x480.jpg",
  },
  {
    id: 4,

    description: "React Carousel with Server Side Rendering Support – Part 1",
    headline: "w3js.com - web front-end studio",
    image:
      "https://s.alicdn.com/@sc04/kf/H6f3716bbb2724bbe824a3d163389b3dfG.jpg_480x480.jpg",
  },

  {
    id: 5,

    description: "React Carousel with Server Side Rendering Support – Part 2",
    headline: "w3js.com - web front-end studio",
    image:
      "https://s.alicdn.com/@sc04/kf/UTB8FWWWExHEXKJk43Jeq6yeeXXan.jpg_250x250xz.jpg",
  },
  {
    id: 6,

    description: "React Carousel with Server Side Rendering Support – Part 2",
    headline: "w3js.com - web front-end studio",
    image:
      "https://static-01.daraz.com.bd/p/733b5b814c1780aa022677e206dfe2f9.jpg_400x400q75-product.jpg_.webp",
  },
];

function ReuseableProductCarousel() {
  return (
      <div className="container mx-auto">
    
        <Carousel
          // additionalTransform={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          className="long-slider"
          containerClass="container"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 6,
              partialVisibilityGutter: 40,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 2,
              partialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 2,
              partialVisibilityGutter: 30,
            },
          }}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >

          {items.map((item, index) => (
            <div key={item.id} >
                <div>
                  <Image src={item.image} alt="img" height={300} width={400} />
                  {/* <div>
                    {item.headline.substring(0, 15)}...
                  </div> */}
                </div>
            </div>
          ))}
        </Carousel>
      </div>
  );
}

export default ReuseableProductCarousel;